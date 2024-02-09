import React, { useEffect } from 'react';
import axios from 'axios';
import KAKAO_BUTTON from '../../Img/Login/kakaobutton.png';
import SocialLoginButton from '../../styled-components/SocialLoginButton.style';
//window.location.href = link;
//const code = new URL(link); //인가코드 추출

export default function KakaoLogin() {
  const REST_API_KEY = '5b7d7ffc9aa7f5e78dd3f29e032aafd4' // 개발용 'afaaa3a1b79e589ad64e93e6e8b08ef7' //릴리즈용이니까 지우면 암됨 'ee35f9bdbb7d489738218a16bc693718';
  const KAKAO_REDIRECT_URI = 'http://3.39.39.6:8080/oauth/kakao/callback'; //'http://Artory-prod-env.eba-axnhdqgn.ap-northeast-2.elasticbeanstalk.com/oauth/kakao/callback';
  const link = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`;
  const HandleClickKakaoLogin = () => {
    window.location.href = link;
  };
  return (
    <SocialLoginButton src={KAKAO_BUTTON} onClick={HandleClickKakaoLogin} />
  );
}
