import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
const URL = localStorage.getItem('URL');

const TokenPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const access_token = queryParams.get('access_token');
  const provider = queryParams.get('provider');
  const [tokenData, setTokenData] = useState(null);
  useEffect(() => {
    // access_token을 사용하여 서버에 요청
    const fetchData = async () => {
      try {
        if (provider === 'naver') {
          const response = await axios.get(
            `${URL}/naverlogin?accessToken=${access_token}`
          );
          setTokenData(response.data);
          console.log('data : ', response.data);
          console.log('access Token : ', response.data.accessToken);
          localStorage.setItem('Token', response.data.accessToken); //엑세스토큰 저장
          localStorage.setItem('refreshToken',response.data.refreshToken)//리프레시토큰 저장
          localStorage.setItem('arbitaryLoginForHeader',true);
          if(response.data.enrolled){ //등록된 유저면 바로 메인화면으로
            window.location.href = '/';
          } else {
            window.location.href = '/onboarding'; //신규유저면 바로 온보딩부터
          }
        } else if (provider === 'kakao') {
          const response = await axios.get(
            `${URL}/kakaologin?accessToken=${access_token}`
          );
          setTokenData(response.data);
          console.log('data : ', response.data);
          console.log('access Token : ', response.data.accessToken);
          localStorage.setItem('Token', response.data.accessToken);
          localStorage.setItem('refreshToken',response.data.refreshToken)//리프레시토큰 저장
          localStorage.setItem('arbitaryLoginForHeader',true);
          if(response.data.enrolled){ //등록된 유저면 바로 메인화면으로
            window.location.href = '/';
          } else {
            window.location.href = '/onboarding'; //신규유저면 바로 온보딩부터
          }
        } else console.log('소셜 제공자가 없습니다.');

        // 처리 로직 추가
      } catch (error) {
        if (error.response.data.errorCode === 'M-001') {
          alert(error.response.data.message);
        } else if (error.response.data.errorCode === 'M-002') {
          alert(error.response.data.message);
        } else if (error.response.data.errorCode === 'M-003') {
          alert(error.response.data.message);
        } else if (error.response.data.errorCode === 'M-004') {
          alert(error.response.data.message);
        } else {
          console.error('Error fetching data:', error.response.data);
        }
      }
    };
    if (access_token) {
      fetchData();
    }
  }, [access_token]);

  return <div>로그인 중 입니다.</div>;
};

export default TokenPage;