import React, { useEffect, useState } from 'react'
import * as S from '../styled-components/Login.style'
import StyledButton from '../styled-components/StyledButton'
import { Link } from 'react-router-dom'
import NaverLogin from '../components/SocialLogin/NaverLogin';
import KakaoLogin from '../components/SocialLogin/KakaoLogin';

export default function LogIn() {  //주연씨가 작업해주실 LogIn페이지입니다. 


  const [isIDInputClick,setIsIDInputClick] = useState(false); //ID input 박스 클릭 여부에 따라 placeholder의 상태를 관리하기 위한 변수
  const [isPWInputClick,setIsPWInputClick] = useState(false); //Password input 박스 클릭 여부에 따라 placeholder의 상태를 관리하기 위한 변수
  const [isOutLine,setOutLine] = useState(); //input 박스 클릭 시 outline의 상태를 관리하기 위한 변수
  function handleIDInputFocus() 
  { //ID input박스에 들어오면 true(placeholder 텍스트 안보임), outline이 안보이도록 바꿔줌
    setIsIDInputClick(true); 
    setOutLine({outline:'none'}); 
  } 
  function handleIDInputBlur()
  { //ID input박스에 나가면 false (placeholder 텍스트 보임)
    setIsIDInputClick(false);
  } 
  function handlePWInputFocus() 
  { //Password input박스에 들어오면 true (placeholder 텍스트 보임),  outline이 안보이도록 바꿔줌
    setIsPWInputClick(true); 
    setOutLine({outline:'none'}); 
  } 
  function handlePWInputBlur() 
  { //Password input박스에 들어오면 false (placeholder 텍스트 안보임)
    setIsPWInputClick(false); 
  } 
  


  return (
    <S.HomeWrap>
      <S.HomeLeftWrap>
        <S.FirstParagraph>Story community</S.FirstParagraph>
        <S.SecondParagraph>나만의 문화일기</S.SecondParagraph>
        <S.ThirdParagraph>ARTORY</S.ThirdParagraph>
      </S.HomeLeftWrap>
      <S.WrapLogin>
        <S.Input 
          type='email' 
          onFocus={handleIDInputFocus} 
          onBlur={handleIDInputBlur} 
          placeholder={isIDInputClick ? "" : "아이디를 입력해주세요"} 
          style={isOutLine}
        />
        <S.Input 
          type='password' 
          onFocus={handlePWInputFocus} 
          onBlur={handlePWInputBlur} 
          placeholder={isPWInputClick ? "" : "비밀번호를 입력해주세요"} 
          style={isOutLine}
        />
        <StyledButton height="52px" width="345px" style={{marginTop:'20px'}}>로그인</StyledButton>
        <S.WrapLink>
          <S.LinkStyle style={{color : '#9C9C9C'}}>아이디 찾기</S.LinkStyle>
          <S.LinkStyle style={{color : '#9C9C9C'}}>비밀번호 찾기</S.LinkStyle>
          <Link to='/signup' style={{color : '#9C9C9C',textDecoration: 'none'}}><S.LinkStyle>회원가입</S.LinkStyle></Link>
        </S.WrapLink>
        <S.WrapSocialLogin>
          <NaverLogin/>
          <KakaoLogin/>
        </S.WrapSocialLogin>
      </S.WrapLogin>
    </S.HomeWrap>
  )
}
