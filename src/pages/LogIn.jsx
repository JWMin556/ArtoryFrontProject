import React, { useEffect, useState } from 'react';
import * as S from '../styled-components/Login.style';
import StyledButton from '../styled-components/StyledButton';
import { Link } from 'react-router-dom';
import NaverLogin from '../components/SocialLogin/NaverLogin';
import KakaoLogin from '../components/SocialLogin/KakaoLogin';
import OPENLOCK from '../Img/Login/openlock.svg';
import LOCK from '../Img/Login/lock.svg';
import { getUserInfo } from '../components/API/Logout_API';
import axios from 'axios';

const UserInfoURL = 'http://3.39.39.6:8080/ api/member/info';
export default function LogIn() {
  //주연씨가 작업해주실 LogIn페이지입니다.
  const [ID, setID] = useState('');
  const [Password, setPassword] = useState('');
  const [isIDInputClick, setIsIDInputClick] = useState(false); //ID input 박스 클릭 여부에 따라 placeholder의 상태를 관리하기 위한 변수
  const [isPWInputClick, setIsPWInputClick] = useState(false); //Password input 박스 클릭 여부에 따라 placeholder의 상태를 관리하기 위한 변수
  const [isOutLine, setOutLine] = useState(); //input 박스 클릭 시 outline의 상태를 관리하기 위한 변수
  function handleIDInputFocus() {
    //ID input박스에 들어오면 true(placeholder 텍스트 안보임), outline이 안보이도록 바꿔줌
    setIsIDInputClick(true);
    setOutLine({ outline: 'none' });
  }
  function handleIDInputBlur() {
    //ID input박스에 나가면 false (placeholder 텍스트 보임)
    setIsIDInputClick(false);
  }
  function handlePWInputFocus() {
    //Password input박스에 들어오면 true (placeholder 텍스트 보임),  outline이 안보이도록 바꿔줌
    setIsPWInputClick(true);
    setOutLine({ outline: 'none' });
  }
  function handlePWInputBlur() {
    //Password input박스에 들어오면 false (placeholder 텍스트 안보임)
    setIsPWInputClick(false);
  }

  function handleLoginArbitary() {
    localStorage.setItem('Token','eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBQ0NFU1MiLCJpYXQiOjE3MDczNzMzNzksImV4cCI6MTcwNzQ2MzM3OSwibWVtYmVySWQiOjMsInJvbGUiOiJVU0VSIn0.TL4gJHsj-KfaVEtfFsILKW1VKO0-23cSaEWsI2M5SyTEM24CwpqsOYWFuR57f83uy4_aFqmVKlnoFAcOssnZFA')
    localStorage.setItem('arbitaryLoginForHeader2', true);
    //localStorage.setItem('Token','eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBQ0NFU1MiLCJpYXQiOjE3MDczOTczMjQsImV4cCI6MTcwNzQ4NzMyNCwibWVtYmVySWQiOjEzLCJyb2xlIjoiVVNFUiJ9.AVpOV_T7F2L6saBDgQpg2t_K9e122P0bxjobI5P0rqYqTa1lzFXsNnJbvTeODZqROF2tXNOVUOZJdyn13JmUYw')
    window.location.href = '/'; // Home 페이지로 이동
  }

  function handleClick() {
    //getUserInfo();
  }

  return (
    <S.HomeWrap>
      <S.HomeLeftWrap>
        <S.FirstParagraph>Story community</S.FirstParagraph>
        <S.SecondParagraph>나만의 문화이야기</S.SecondParagraph>
        <S.ThirdParagraph>ARTORY</S.ThirdParagraph>
      </S.HomeLeftWrap>
      <S.WrapLogin>
        <div>
          <S.Input
            type="email"
            //value={ID}
            onFocus={handleIDInputFocus} //input박스에 들어올 때
            onBlur={handleIDInputBlur} //input박스에서 나갔을 때
            placeholder={isIDInputClick ? '' : '아이디를 입력해주세요'}
            style={isOutLine}
          />
          <span>
            <S.LockStyle src={OPENLOCK} />
          </span>
        </div>
        <div>
          <S.Input
            type="password"
            //value={Password}
            onFocus={handlePWInputFocus} //input박스에 들어올 때
            onBlur={handlePWInputBlur} //input박스에서 나갔을 때
            placeholder={isPWInputClick ? '' : '비밀번호를 입력해주세요'}
            style={isOutLine}
          />
          <span>
            <S.LockStyle src={LOCK} />
          </span>
        </div>
        <Link to="/">
          <StyledButton
            height="52px"
            width="345px"
            style={{ marginTop: '20px' }}
            onClick={handleLoginArbitary}
          >
            로그인
          </StyledButton>
        </Link>
        <S.WrapLink>
          <S.LinkStyle style={{ color: '#9C9C9C' }}>아이디 찾기</S.LinkStyle>
          <S.LinkStyle style={{ color: '#9C9C9C' }}>비밀번호 찾기</S.LinkStyle>
          <Link
            to="/signup"
            style={{ color: '#9C9C9C', textDecoration: 'none' }}
          >
            <S.LinkStyle>회원가입</S.LinkStyle>
          </Link>
        </S.WrapLink>
        <S.WrapSocialLogin>
          <NaverLogin />
          <KakaoLogin />
        </S.WrapSocialLogin>
      </S.WrapLogin>
    </S.HomeWrap>
  );
}
