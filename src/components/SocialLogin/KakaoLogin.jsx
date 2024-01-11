import React from 'react'
import KAKAO_BUTTON from '../../Img/Login/kakaobutton.png'
import SocialLoginButton from '../../styled-components/SocialLoginButton.style'

export default function KakaoLogin() {
    const REST_API_KEY = "백엔드1"
    const KAKAO_REDIRECT_URI = "백엔드2"
    const link = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`;
    const HandleClickKakaoLogin = () => {
        window.location.href = link;
    };
return (
    <SocialLoginButton src={KAKAO_BUTTON} onClick={HandleClickKakaoLogin}/>
)
}
