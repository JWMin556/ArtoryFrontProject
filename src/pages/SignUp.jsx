import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import '../css/signup.css';
import StyledButton from '../styled-components/StyledButton';
import emailjs from 'emailjs-com';
import axios from 'axios';
import Modal from '../components/SignUp/Modal ';
import Modal2 from '../components/SignUp/Modal2';
import Modal3 from '../components/SignUp/Modal3';

const Page = styled.div`
  z-index: 900;
  position: relative;
  width: 100%;
  max-width: 500px;
  padding: 0 20px;
  /* background: rgba(0, 0, 0, 0.1); */
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const TitleWrap = styled.div`
  margin-top: 120%; /* 여기부분이 살짝 애매해서 토의가 필요 여기가 회원가입 마진top조절하는 부분*/
  color: black;
  font-size: 30px;
  font-family: 'Pretendard';
  font-weight: 700;
  word-wrap: break-word;
`;

const ContentWrap = styled.div`
  margin-bottom: 50%;
  /* background: rgba(0, 0, 0, 0.1); */
`;

const SuperTitle = styled.div`
  margin-bottom: 4%;
`;

const InputTitle = styled.div`
  color: black;
  font-size: 15px;
  font-weight: 400;
  word-wrap: break-word;
  font-family: 'Pretendard';
`;

const InputWrap = styled.div`
  display: flex;
  background: white;
  box-shadow: 1px 2px 8px #f3f3f3;
  padding: 16px;
  margin-top: 8px;
  margin-bottom: 13px;
`;

const InputStyle = styled.input`
  width: 100%;
  outline: none;
  border: none;
  color: #505154;
  font-size: 12px;
  font-family: 'Pretendard';
  font-weight: 400;
  word-wrap: break-word;

  &::placeholder {
    color: #ABABAB; 
  }
`;

const ErrorMessageWrap = styled.div`
  white-space: nowrap;
  margin: auto;
  color: red;
  font-size: 9px;
`;

const InputCheckBoxTitle = styled.div`
  margin-top: 52px;
  margin-bottom: 65px;
`;

export default function SignUp() {
  // 초기값 세팅
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  // 유효성 검사
  const [emailValid, setEmailValid] = useState(false); //아마 얘로 이메일 유효성 검사를 해야할 듯
  const [isPassword, setIsPassword] = useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);
  
  const [notAllow, setNotAllow] = useState(true);

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
    // const regex =
    //   /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;
    // if (regex.test(e.target.value)) {
    //   setEmailValid(true);
    // } else {
    //   setEmailValid(false);
    // }
  };

  //Emailjs시험용
  const [isEmailSent, setIsEmailSent] = useState(false);
    const sendVerificationEmail = () => {
      const templateParams = {
        to_email: 'gtj556@naver.com',// 수신 이메일 ex) test@test.gmail.com,
        from_name : 'test',
        message: '인증되었습니다.'
    };

    emailjs
      .send(
        'test-service', // 서비스 ID
        'test-templete', // 템플릿 ID
        templateParams,
        'qsos29YmuOaN1CNcl', // public-key
      )
      .then((response) => {
        console.log('이메일이 성공적으로 보내졌습니다:', response);
        setIsEmailSent(true);
      })
      .catch((error) => {
        console.error('이메일 보내기 실패:', error);
        // 이메일 전송 실패 처리 로직 추가
      });
  };

  const handleVerification = () => {
    sendVerificationEmail();
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
    const regex =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[#*?!]).{8,}$/;
    if (regex.test(e.target.value)) {
      setIsPassword(true);
    } else {
      setIsPassword(false);
    }
  };

  const onChangePasswordConfirm = (e) => {
    setPasswordConfirm(e.target.value);
    if (password !== e.target.value) {
      setIsPasswordConfirm(false);
    } else {
      setIsPasswordConfirm(true);
    }
  };

  // useEffect(() => {
  //   //우선, 인증번호 말고 휴대폰 번호 부분만 useEffect를 주었음(그렇기에 현재는 휴대폰 번호만 입력해도 인증확인 부분이 활성화됨)
  //   if (isPhone) {
  //     setNotAllow(false);
  //     return;
  //   }
  //   setNotAllow(true);
  // }, [isPhone]);

  //체크박스 전용
  const [allAgreed, setAllAgreed] = useState(false);
  const [agreements, setAgreements] = useState({
    termsAgreed: false,
    personalInfoAgreed: false,
    marketingAlarmAgreed: false,
  });

  const onChangeAgreement = (e) => {
    const { name, checked } = e.target;
    setAgreements((preAgreements) => ({ ...preAgreements, [name]: checked }));
    const allChecked = Object.values({ ...agreements, [name]: checked }).every(
      (value) => value === true
    );
    setAllAgreed(allChecked);
  };

  const onChangeAllAgreement = (e) => {
    const { checked } = e.target;
    setAgreements((preAgreements) =>
      Object.keys(preAgreements).reduce(
        (newAgreements, agreementKey) => ({
          ...newAgreements,
          [agreementKey]: checked,
        }),
        {}
      )
    );
    setAllAgreed(checked);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModal2Open, setIsModal2Open] = useState(false);
  const [isModal3Open, setIsModal3Open] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const toggleModal2 = () => {
    setIsModal2Open(!isModal2Open);
  };

  const toggleModal3 = () => {
    setIsModal3Open(!isModal3Open);
  };

  /*
  //회원가입 폼 제출 함수
  const url = 'http://3.39.39.6:8080/api/member/'
  // const token = localStorage.getItem('Token');
  const handleSubmit = async() => {
    try {
      const response = await axios.post(`${url}info`, 
      {
        email: email,
        //필요한 다른 변수들은 추가해야 함
      });
      console.log(response.data);
    }catch(error) {
      console.error('Error fetching data:', error.response.data);
    }
  };
  */
 
  return (
    <Page>
      <TitleWrap>회원가입인데 아직 사용하지 말아줘요!!!</TitleWrap>
      <ContentWrap>
        <SuperTitle>
          <InputTitle style={{ marginTop: '94px' }}>이름</InputTitle>
          <InputWrap>
            <InputStyle
              placeholder="이름을 입력해주세요"
              value={name}
              onChange={onChangeName}
            />
          </InputWrap>
        </SuperTitle>

        <SuperTitle>
          <InputTitle style={{ marginTop: '30px' }}>아이디(이메일)</InputTitle>
          <InputWrap>
            <InputStyle
              placeholder="아이디(이메일)을 입력해주세요"
              value={email}
              onChange={onChangeEmail}
            />
            {/* {isEmailSent ? (
                <div>
                    인증 이메일이 성공적으로 발송되었습니다. 이메일을
                    확인해주세요!
                </div>
            ) : (
                <button onClick={handleVerification}>인증</button>
            )} */}
            <StyledButton disabled={notAllow} color="#9BA0AE" height="25px" width="20%" fontSize="13px">인증하기</StyledButton>
          </InputWrap>
        </SuperTitle>

        <SuperTitle>
          <InputTitle>인증번호</InputTitle>
          <InputWrap>
            <InputStyle placeholder="인증번호를 입력해주세요" />{' '}
            {/*value와 onchange 추가해야 함*/}
            <StyledButton disabled={notAllow} color="#9BA0AE" height="25px" width="20%" fontSize="13px">인증완료</StyledButton>
          </InputWrap>
        </SuperTitle>

        {/* <InputTitle>휴대폰 번호</InputTitle>
        <InputWrap>
          <InputStyle
            type="tel"
            placeholder="휴대폰 번호를 입력해주세요"
            value={phone}
            onChange={addHyphen}
          />
          <StyledButton
            disabled={notAllow}
            height="25px"
            width="30%"
            fontSize="13px"
          >
            인증번호 받기
          </StyledButton>
        </InputWrap> */}

        <SuperTitle>
          <InputTitle>비밀번호</InputTitle>
          <InputWrap>
            <InputStyle
              placeholder="비밀번호를 입력해주세요"
              type="password"
              value={password}
              onChange={onChangePassword}
            />
            <ErrorMessageWrap>
              {!isPassword && password.length > 0 && (
                <div>최소 8자리 이상 / 대문자, 소문자, 숫자, 특수문자(# * ? !)를 각 하나 이상 포함</div>
              )}
            </ErrorMessageWrap>
          </InputWrap>
        </SuperTitle>

        <SuperTitle>
          <InputTitle>비밀번호 확인</InputTitle>
          <InputWrap>
            <InputStyle
              placeholder="위 비밀번호를 한번 더 입력해주세요"
              type="password"
              value={passwordConfirm}
              onChange={onChangePasswordConfirm}
            />
            <ErrorMessageWrap>
              {!isPasswordConfirm && passwordConfirm.length > 0 && (
                <div>비밀번호가 일치하지 않습니다. </div>
              )}
            </ErrorMessageWrap>
          </InputWrap>
        </SuperTitle>

        <InputCheckBoxTitle>
          <ul style={{listStyleType:"none"}}>
            <li>
              <input
                type="checkbox"
                id="agree_check_all"
                name="agree_check_all"
                checked={allAgreed}
                onChange={onChangeAllAgreement}
              />
              <label
                htmlFor="agree_check_all"
                style={{ color: 'black', fontSize: '16px' }}
              >
                <span onClick={(e) => e.preventDefault()}>모두 동의합니다.</span>
              </label>
            </li>

            <li style={{ marginTop: '15px' }}>
              <input
                type="checkbox"
                id="agree_check_used"
                name="termsAgreed"
                required
                checked={agreements.termsAgreed}
                onChange={onChangeAgreement}
              />
              <label htmlFor="agree_check_used" style={{ fontSize: '13px' }}>
                <span onClick={(e) => e.preventDefault()}>이용약관 동의 &nbsp;</span>
              </label>
              <img
                src="/img/check.png"
                alt="checkimg"
                style={{ width: '12px', height: '6px' }}
                onClick={toggleModal}
              />
              {/* 모달이 열려있을 때만 모달을 렌더링합니다. */}
              {isModalOpen && <Modal onClose={toggleModal} />}
            </li>

            <li style={{ marginTop: '9px' }}>
              <input
                type="checkbox"
                id="agree_check_info"
                name="personalInfoAgreed"
                required
                checked={agreements.personalInfoAgreed}
                onChange={onChangeAgreement}
              />
              <label htmlFor="agree_check_info" style={{ fontSize: '13px' }}>
                <span onClick={(e) => e.preventDefault()}>개인정보 취급방침 동의 &nbsp;</span>
              </label>
              <img
                src="/img/check.png"
                alt="checkimg"
                style={{ width: '12px', height: '6px' }}
                onClick={toggleModal2}
              />
              {/* 모달이 열려있을 때만 모달을 렌더링합니다. */}
              {isModal2Open && <Modal2 onClose={toggleModal2} />}
            </li>

            <li style={{ marginTop: '9px' }}>
              <input
                type="checkbox"
                id="agree_check_marketing_receive"
                name="marketingAlarmAgreed"
                required
                checked={agreements.marketingAlarmAgreed}
                onChange={onChangeAgreement}
              />
              <label htmlFor="agree_check_marketing_receive" style={{ fontSize: '13px' }}>
                <span onClick={(e) => e.preventDefault()}>마케팅 정보 수신 동의 &nbsp;</span>
              </label>
              <img
                src="/img/check.png"
                alt="checkimg"
                style={{ width: '12px', height: '6px' }}
                onClick={toggleModal3}
              />
              {/* 모달이 열려있을 때만 모달을 렌더링합니다. */}
              {isModal3Open && <Modal3 onClose={toggleModal3} />}
            </li>
          </ul>
        </InputCheckBoxTitle>

        <div style={{ textAlign: 'center' }}>
          <Link to="/onboarding">
            <StyledButton
              style={{ display: 'inline-block' }}
              height="52px"
              width="80%"
              fontSize="20px"
              // onClick={handleSubmit} 후에 회원가입 페이지가 완료되면 얘를 보내면 됨
            >
              ARTORY 시작하기
            </StyledButton>
          </Link>
        </div>
      </ContentWrap>
    </Page>
  );
}