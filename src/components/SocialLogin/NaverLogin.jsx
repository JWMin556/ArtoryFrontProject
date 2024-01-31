import React from 'react';
import NAVER_BUTTON from '../../Img/Login/naverbutton.png';
import SocialLoginButton from '../../styled-components/SocialLoginButton.style';

export default function NaverLogin() {
  const NAVER_CLIENT_ID = '27AEJS87AXoGop3MoHhW';
  const STATE = 'YOUR_RANDOM_STATE';
  const NAVER_REDIRECT_URI = 'http://3.39.39.6:8080/login/oauth2/code/naver';
  const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&state=${STATE}&redirect_uri=${NAVER_REDIRECT_URI}`;
  //const NAVER_AUTH_URL = `/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&state=${STATE}&redirect_uri=${encodeURIComponent(NAVER_REDIRECT_URI)}`;
  const HandleClickNaverLogin = () => {
    window.location.href = NAVER_AUTH_URL;
  };
  // const HandleClickNaverLogin = async () => {
  //     return await axios.get(NAVER_AUTH_URL);
  // };
  return (
    <SocialLoginButton src={NAVER_BUTTON} onClick={HandleClickNaverLogin} />
  );
}
