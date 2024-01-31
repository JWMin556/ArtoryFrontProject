import React from 'react';
import KAKAO_BUTTON from '../../Img/Login/kakaobutton.png';
import SocialLoginButton from '../../styled-components/SocialLoginButton.style';

export default function KakaoLogin() {
  const REST_API_KEY = 'ee35f9bdbb7d489738218a16bc693718';
  const KAKAO_REDIRECT_URI = 'http://3.39.39.6:8080/oauth/kakao/callback';
  const link = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`;
  //const link = `https://3.39.39.6:8080/api/kakao`;
  const HandleClickKakaoLogin = () => {
    window.location.href = link;
  };
  return (
    <SocialLoginButton src={KAKAO_BUTTON} onClick={HandleClickKakaoLogin} />
  );
}
