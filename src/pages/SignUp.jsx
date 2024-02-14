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
  const [certificateNumber, setCertificateNumber] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  // 유효성 검사
  const [nameValid, setNameValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false); //아마 얘로 이메일 유효성 검사를 해야할 듯
  const [certificateNumberValid, setCertificateNumberValid] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);
  const [checkBoxValid, setCheckBoxValid] = useState(false);
  
  //이메일버튼과 인증번호 버튼 활성화여부
  const [notAllowEmail, setNotAllowEmail] = useState(true);
  const [notAllowCertificateNumber, setNotAllowCertificateNumber] = useState(true);

  //랜덤6자리 인증번호 생성을 위한 함수
  const[random,setRandom] = useState("000000");
  function generateRandomString(length){
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }
  function generateRandomCode() {
    setRandom(generateRandomString(6));
  }

  const onChangeName = (e) => {
    setName(e.target.value);
    if(name){
      setNameValid(true);
    } else {
      setNameValid(false);
    }
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
    const regex =
      /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (regex.test(e.target.value)) {
      setNotAllowEmail(false);
      generateRandomCode();
    } else {
      setNotAllowEmail(true);
    }
  };

  //Emailjs를 통해 인증번호 메일보내기
  const sendVerificationEmail = () => {
    const templateParams = {
      to_email: email,
      from_name: 'Artory인증',
      message: `당신의 인증번호는 ${random}입니다.`
    };
    emailjs
      .send(
        'service_2ey3saf', //서비스 ID
        'template_tkd98j8', //템플릿 ID
        templateParams,
        'qsos29YmuOaN1CNcl' //public key
      )
      .then((response) => {
        console.log('이메일이 성공적으로 보내졌습니다:', response);
        setEmailValid(true);
      })
      .catch((error) => {
        console.error('이메일 보내기 실패:', error);
        alert("인증번호가 보내지지 않았습니다. 다시 시작해주세요");
      });
  };

  const handleVerification = () => {
    sendVerificationEmail();
    alert("인증번호를 발송했습니다. 만약, 입력이 잘못될 경우 다시 시작해주세요");
  };

  const onChangeCertificateNumber = (e) => {  //인증번호가 일치할 경우 이 함수를 통해 certifacateNumber와 인증확인 버튼을 활성화한다. 
    setCertificateNumber(e.target.value);
    if(e.target.value === random){
      setNotAllowCertificateNumber(false);
    } else {
      setNotAllowCertificateNumber(true);
    }
  };

  // useEffect(() => {
  //   //우선, 인증번호부분만 useEffect를 주었음(그렇기에 현재는 휴대폰 번호만 입력해도 인증확인 부분이 활성화됨)
  //   if (certificateNumberValid) {
  //     setNotAllowCertificateNumber(false);
  //     return;
  //   }
  //   setNotAllowCertificateNumber(true);
  // }, [certificateNumberValid]);

  const checkCertificateNumber = () => { //n에는 certificateNumber가 들어가야
    setCertificateNumberValid(true);
    alert("인증이 완료되었습니다");
  }

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
    if(allChecked) {
      setCheckBoxValid(true);
    } else {
      setCheckBoxValid(false);
    }
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
    setCheckBoxValid(true);   //여기다가 하면 되는지 잘 확신은 안가지만....
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

  
  //회원가입 폼 제출 함수
  const URL = localStorage.getItem('URL');
  const handleSubmit = async() => {
    try {
      const baseUrl = `${URL}/api/form/signUp`;
      const response = await axios.post(
        baseUrl, 
        {
          "email": email,
          "password": password,
          "memberName" : name,
          "memberType": "FORM",
          "role": "USER",
          "profile": "string",
        },
        {
          headers: {
            'Accept': '*/*',
            'Content-Type': 'application/json',
          }
        },
      );
      console.log('사용자 정보가 성공적으로 보내졌습니다.',response.data);
      localStorage.setItem('Token', response.data.accessToken);
    }catch(error) {
      console.log(error.response.data);
      if(error.response.data.errorCode === 'M-002'){
        alert("이미 가입된 회원입니다!");
        window.location.href = '/';
      }
    }
  };
  
 
  return (
    <Page>
      <TitleWrap>회원가입.. 잠시만 사용하지 말아주세요..</TitleWrap>
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
            <StyledButton disabled={notAllowEmail} onClick={handleVerification} color="#9BA0AE" height="25px" width="20%" fontSize="13px">인증하기</StyledButton>
          </InputWrap>
        </SuperTitle>

        <SuperTitle>
          <InputTitle>인증번호</InputTitle>
          <InputWrap>
            <InputStyle 
              placeholder="인증번호를 입력해주세요"
              value={certificateNumber}
              onChange={onChangeCertificateNumber}
              />
            {/*value와 onchange 추가해야 함*/}
            <StyledButton disabled={notAllowCertificateNumber} onClick={checkCertificateNumber} color="#9BA0AE" height="25px" width="20%" fontSize="13px">인증완료</StyledButton>
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
            {/* {nameValid && emailValid && certificateNumberValid && isPassword && isPasswordConfirm && checkBoxValid &&
              <StyledButton  //{isModal3Open && <Modal3 onClose={toggleModal3} />} 이런 방식으로 모두가 활성화되어야 가능하도록 하자...전부 유효성변수들로 즉, checkCertificateNumber에는 email의 유효성을 setture로
                style={{ display: 'inline-block' }}
                height="52px"
                width="80%"
                fontSize="20px"
                onClick={handleSubmit} //후에 회원가입 페이지가 완료되면 얘를 보내면 됨
                >
                ARTORY 시작하기
              </StyledButton>
            } */}
            <StyledButton  //{isModal3Open && <Modal3 onClose={toggleModal3} />} 이런 방식으로 모두가 활성화되어야 가능하도록 하자...전부 유효성변수들로 즉, checkCertificateNumber에는 email의 유효성을 setture로
                style={{ display: 'inline-block' }}
                height="52px"
                width="80%"
                fontSize="20px"
                disabled={!nameValid || !emailValid || !certificateNumberValid || !isPassword || !isPasswordConfirm || !checkBoxValid}
                onClick={handleSubmit} //후에 회원가입 페이지가 완료되면 얘를 보내면 됨
                >
                ARTORY 시작하기
              </StyledButton>
          </Link>
        </div>
      </ContentWrap>
    </Page>
  );
}