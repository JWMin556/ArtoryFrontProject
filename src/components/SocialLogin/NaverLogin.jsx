import React from 'react'
import NAVER_BUTTON from '../../Img/Login/naverbutton.png'
import SocialLoginButton from '../../styled-components/SocialLoginButton.style'

export default function NaverLogin() {
    const NAVER_CLIENT_ID = "백엔드1"
    const NAVER_REDIRECT_URI = "백엔드2"
    const STATE = "백엔드3";
    const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?client_id=${NAVER_CLIENT_ID}&response_type=code&redirect_uri=${NAVER_REDIRECT_URI}&state=${STATE}`;
    const HandleClickNaverLogin = () => {
        window.location.href = NAVER_AUTH_URL;
    };
return (
    <SocialLoginButton src={NAVER_BUTTON} onClick={HandleClickNaverLogin}/>
)
}
