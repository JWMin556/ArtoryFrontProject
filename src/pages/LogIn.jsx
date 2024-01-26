import React, { useEffect, useState } from 'react'
import * as S from '../styled-components/Login.style'
import StyledButton from '../styled-components/StyledButton'
import { Link } from 'react-router-dom'
import NaverLogin from '../components/SocialLogin/NaverLogin';
import KakaoLogin from '../components/SocialLogin/KakaoLogin';
import OPENLOCK from '../Img/Login/openlock.svg';
import LOCK from '../Img/Login/lock.svg';
import { getUserInfo, kakaoUser } from '../components/API/Login_API';
import axios from "axios";

const UserInfoURL = 'http://3.39.39.6:8080/api/member/info'
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
  function handleClick()
  {
    getUserInfo();
  }
  useEffect(() => {
    (async() => { //사용자 전체 정보 
        try{
            const response = await axios.get(UserInfoURL,
                {
                headers : {
                    'Accept' : '*/*',
                    'Authorization' : 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBQ0NFU1MiLCJpYXQiOjE3MDU5OTUzNDMsImV4cCI6MTcwNjA4NTM0MywibWVtYmVySWQiOjMsInJvbGUiOiJVU0VSIn0.EcKTNMWLHNdKVRXDJzNzHZWv6y6MBBc3DX2zvf_LepaLt05rVTFTgo9b7lwU9PAzrmwiSr6v-l9LH2Ky4k4pKQ',
                    'content-type' : "application/json"
                }
            });
            //setPopularityExhibitionData(response.data);
            console.log(response);
        }catch(error)
        {
            console.error('Error fetching data:', error);
        }
    //fetchData();
})();
},[]);
  return (
    <S.HomeWrap>
      <S.HomeLeftWrap>
        <S.FirstParagraph>Story community</S.FirstParagraph>
        <S.SecondParagraph>나만의 문화일기</S.SecondParagraph>
        <S.ThirdParagraph>ARTORY</S.ThirdParagraph>
      </S.HomeLeftWrap>
      <S.WrapLogin>
        <div>
          <S.Input 
            type='email' 
            //value={ID}
            onFocus={handleIDInputFocus} //input박스에 들어올 때 
            onBlur={handleIDInputBlur} //input박스에서 나갔을 때
            placeholder={isIDInputClick ? "" : "아이디를 입력해주세요"} 
            style={isOutLine}
          />
          <span><S.LockStyle src={OPENLOCK}/></span>
        </div>
        <div>
        <S.Input 
          type='password' 
          //value={Password}
          onFocus={handlePWInputFocus} //input박스에 들어올 때 
          onBlur={handlePWInputBlur} //input박스에서 나갔을 때
          placeholder={isPWInputClick ? "" : "비밀번호를 입력해주세요"} 
          style={isOutLine}
        />
        <span><S.LockStyle src={LOCK}/></span>
        </div>
        <StyledButton height="52px" width="345px" style={{marginTop:'20px'}}>로그인</StyledButton>
        <S.WrapLink>
          <S.LinkStyle style={{ color: '#9C9C9C' }} onClick={handleClick}>아이디 찾기</S.LinkStyle>
          <S.LinkStyle style={{ color: '#9C9C9C' }}>비밀번호 찾기</S.LinkStyle>
          <Link
            to="/signup"
            style={{ color: '#9C9C9C', textDecoration: 'none' }}
          >
            <S.LinkStyle>회원가입</S.LinkStyle>
          </Link>
        </S.WrapLink>
        <S.WrapSocialLogin>
          <NaverLogin/>
          <KakaoLogin/>
        </S.WrapSocialLogin>
      </S.WrapLogin>
    </S.HomeWrap>
  )
}
