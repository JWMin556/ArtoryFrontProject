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
          localStorage.setItem('Token', response.data.accessToken);
          // window.location.href = '/exhibition'; //기존의 코드
          window.location.href = '/onboarding';
        } else if (provider === 'kakao') {
          const response = await axios.get(
            `${URL}/kakaologin?accessToken=${access_token}`
          );
          setTokenData(response.data);
          console.log('data : ', response.data);
          console.log('access Token : ', response.data.accessToken);
          localStorage.setItem('Token', response.data.accessToken);
          // window.location.href = '/exhibition'; //기존의 코드
          window.location.href = '/onboarding';
        } else console.log('소셜 제공자가 없습니다.');

        // 처리 로직 추가
      } catch (error) {
        console.error('Error fetching data:', error.response.data);
        if (error.response.data.errorCode === 'A-001') {
          alert(error.response.data.message);
        } else if (error.response.data.errorCode === 'A-002') {
          alert(error.response.data.message);
        } else if (error.response.data.errorCode === 'A-003') {
          alert(error.response.data.message);
        } else if (error.response.data.errorCode === 'A-004') {
          alert(error.response.data.message);
        } else if (error.response.data.errorCode === 'A-005') {
          alert(error.response.data.message);
        } else if (error.response.data.errorCode === 'A-006') {
          alert(error.response.data.message);
        } else if (error.response.data.errorCode === 'A-007') {
          alert(error.response.data.message);
        } else if (error.response.data.errorCode === 'A-008') {
          alert(error.response.data.message);
        } else if (error.response.data.errorCode === 'M-001') {
          alert(error.response.data.message);
        } else if (error.response.data.errorCode === 'M-002') {
          alert(error.response.data.message);
        } else if (error.response.data.errorCode === 'M-003') {
          alert(error.response.data.message);
        } else if (error.response.data.errorCode === 'M-004') {
          alert(error.response.data.message);
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