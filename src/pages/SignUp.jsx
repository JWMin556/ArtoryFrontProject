import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import './signup.css';
import StyledButton from '../styled-components/StyledButton';

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
  margin-top: 150%; /* 여기부분이 살짝 애매해서 토의가 필요 여기가 회원가입 마진top조절하는 부분*/
  color: black;
  font-size: 30px;
  font-family: 'Pretendard';
  font-weight: 700;
  word-wrap: break-word;
`;

const ContentWrap = styled.div`
  margin-top: 26px;
  margin-bottom: 30%;
  /* background: rgba(0, 0, 0, 0.1); */
`;

const InputTitle = styled.div`
  color: black;
  font-size: 16px;
  font-weight: 500;
  word-wrap: break-word;
  font-family: 'Pretendard';
  margin-top: 13px;
`;

const InputWrap = styled.div`
  display: flex;
  background: white;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  /* border: 1px rgba(170.71, 170.71, 170.71, 0.02) solid; */
  box-shadow: 1px 2px 8px #f3f3f3;
  padding: 16px;
  margin-top: 8px;
  margin-bottom: 13px;
`;

const InputStyle = styled.input`
  width: 100%;
  outline: none;
  border: none;
  color: #4d4d4d;
  font-size: 13px;
  font-family: 'Pretendard';
  font-weight: 500;
  word-wrap: break-word;
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
  const [email, setEmail] = useState('');
  const [password, setPassword] = React.useState('');
  const [passwordConfirm, setPasswordConfirm] = React.useState('');
  const [name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [birth, setBirth] = React.useState('');

  // 유효성 검사
  const [emailValid, setEmailValid] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);
  const [isname, setIsName] = useState(false);
  const [isPhone, setIsPhone] = useState(false);
  const [isBirth, setIsBirth] = useState(false);
  const [notAllow, setNotAllow] = useState(true);

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
    const regex =
      /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;
    if (regex.test(e.target.value)) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
    const regex =
      /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
    if (regex.test(e.target.value)) {
      setIsPassword(true);
    } else {
      setIsPassword(false);
    }
  };

  const onChangePasswordConfirm = (e) => {
    setPasswordConfirm(e.target.value);
    if (password !== e.target.value) {
      // setPasswordConfirmMessage("떼잉~ 비밀번호가 똑같지 않아요!");
      setIsPasswordConfirm(false);
    } else {
      // setPasswordConfirmMessage("똑같은 비밀번호를 입력했습니다.");
      setIsPasswordConfirm(true);
    }
  };

  const onChangeName = (e) => {
    setName(e.target.value);
    //만약 이름에 조건이 있으면, 여기다가 조건문을 추가할 계획
    setIsName(true);
  };

  const onChangePhone = (getNumber) => {
    setPhone(getNumber);
    const phoneRegExp = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
    if (!phoneRegExp.test(getNumber)) {
      setIsPhone(false); //사용 불가능한 경우
    } else {
      setIsPhone(true); //사용가능한 경우
    }
  };

  const addHyphen = (e) => {
    const currentNumber = e.target.value;
    setPhone(currentNumber);
    if (currentNumber.length === 3 || currentNumber.length === 8) {
      setPhone(currentNumber + '-');
      onChangePhone(currentNumber + '-');
    } else {
      onChangePhone(currentNumber);
    }
  };

  const onChangeBirth = (e) => {
    setBirth(e.target.value);
    setIsBirth(true);
  };

  useEffect(() => {
    //우선, 인증번호 말고 휴대폰 번호 부분만 useEffect를 주었음(그렇기에 현재는 휴대폰 번호만 입력해도 인증확인 부분이 활성화됨)
    if (isPhone) {
      setNotAllow(false);
      return;
    }
    setNotAllow(true);
  }, [isPhone]);

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

  return (
    <Page>
      <TitleWrap>회원가입</TitleWrap>
      <ContentWrap>
        <InputTitle style={{ marginTop: '30px' }}>아이디(이메일)</InputTitle>
        <InputWrap>
          <InputStyle
            placeholder="아이디를 입력해주세요"
            value={email}
            onChange={onChangeEmail}
          />
          <ErrorMessageWrap>
            {!emailValid && email.length > 0 && (
              <div>올바르지 않은 이메일입니다.</div>
            )}
          </ErrorMessageWrap>
        </InputWrap>

        <InputTitle>비밀번호</InputTitle>
        <InputWrap>
          <InputStyle
            placeholder="비밀번호를 입력해주세요"
            type="password"
            value={password}
            onChange={onChangePassword}
          />
        </InputWrap>

        <InputTitle>비밀번호 확인</InputTitle>
        <InputWrap>
          <InputStyle
            placeholder="비밀번호를 입력해주세요"
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

        <InputTitle style={{ marginTop: '94px' }}>이름</InputTitle>
        <InputWrap>
          <InputStyle
            placeholder="이름을 입력해주세요"
            value={name}
            onChange={onChangeName}
          />
        </InputWrap>

        <InputTitle>휴대폰 번호</InputTitle>
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
        </InputWrap>

        <InputTitle>인증번호</InputTitle>
        <InputWrap>
          <InputStyle placeholder="인증번호를 입력해주세요" />{' '}
          {/*value와 onchange 추가해야 함*/}
          <StyledButton
            disabled={notAllow}
            height="25px"
            width="30%"
            fontSize="13px"
          >
            인증확인
          </StyledButton>
        </InputWrap>

        <InputTitle>생년월일</InputTitle>
        <InputWrap>
          <InputStyle type="date" value={birth} onChange={onChangeBirth} />
        </InputWrap>

        <InputCheckBoxTitle>
          <ul>
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
                <span>모두 동의합니다.</span>
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
                <span>
                  이용약관 동의&nbsp;
                  <img
                    src="/img/check.png"
                    alt="checkimg"
                    style={{ width: '12px', height: '6px' }}
                  />
                </span>
              </label>
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
                <span>
                  개인정보 취급방침 동의 &nbsp;
                  <img
                    src="/img/check.png"
                    alt="checkimg"
                    style={{ width: '12px', height: '6px' }}
                  />
                </span>
              </label>
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
              <label
                htmlFor="agree_check_marketing_receive"
                style={{ fontSize: '13px' }}
              >
                <span>
                  마케팅 정보 수신 동의 &nbsp;
                  <img
                    src="/img/check.png"
                    alt="checkimg"
                    style={{ width: '12px', height: '6px' }}
                  />
                </span>
              </label>
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
            >
              ARTORY 시작하기
            </StyledButton>
          </Link>
        </div>
      </ContentWrap>
    </Page>
  );
}
