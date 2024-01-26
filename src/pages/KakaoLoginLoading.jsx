import React from 'react'
import axios from "axios";
const KakaoURL = 'https://kauth.kakao.com/oauth/token'; //카카오 API URL
const KAKAO_REDIRECT_URI = "http://localhost:3000/oauth/kakao/callback"
const REST_API_KEY = "cdb5506b76f544ec0b924439496b5a82"

function KakaoLoginLoading() {
  const params = new URL(window.location.href).searchParams; 
  const code = params.get("code"); //code의 값 가져옴 (인가코드 추출)
  console.log(code); 
  const kakaoUser = async() => { // 엑세스 토큰 받기 위해 Api 요청
      try{
          const response = await axios.post(`${KakaoURL}${code}`,
              {
              body : 
              {
                  grant_type : 'authorization_code' ,
                  client_id : REST_API_KEY,
                  redirect_uri : KAKAO_REDIRECT_URI,
                  code : code ,
              },
              headers : 
              {
                'Content-type': 'application/x-www-form-urlencoded;charset=utf-8'
              }             
          });
          console.log(response); 
      }catch(error)
      {
          console.error('Error fetching data:', error);
      }
    }
  return (
    <div>
      <div>잠시만 기다려 주세요! 로그인 중입니다. </div>
      <button onClick={kakaoUser}>Api 통신 테스트</button>
    </div>
  )
}

export default KakaoLoginLoading;
