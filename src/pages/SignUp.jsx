<<<<<<< Updated upstream
import React from 'react'
import { Link } from 'react-router-dom'
=======
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import '../css/signup.css';
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
>>>>>>> Stashed changes

export default function SignUp() {
  return (
    <div>
      회원가입
          <Link to="/onboarding">ARTORY 시작하기</Link>
    </div>
  )
}
