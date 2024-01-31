import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import axios from 'axios';

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
            `http://3.39.39.6:8080/naverlogin?accessToken=${access_token}`
          );
          setTokenData(response.data);
          console.log('data : ', response.data);
          console.log('access Token : ', response.data.accessToken);
          localStorage.setItem('Token', response.data.accessToken);
          window.location.href = '/exhibition';
        } else if (provider === 'kakao') {
          const response = await axios.get(
            `http://3.39.39.6:8080/kakaologin?accessToken=${access_token}`
          );
          setTokenData(response.data);
          console.log('data : ', response.data);
          console.log('access Token : ', response.data.accessToken);
          localStorage.setItem('Token', response.data.accessToken);
          window.location.href = '/exhibition';
        } else console.log('소셜 제공자가 없습니다.');

        // 처리 로직 추가
      } catch (error) {
        console.error('Error fetching data:', error.response.data);
      }
    };

    if (access_token) {
      fetchData();
    }
  }, [access_token]);

  return <div>로그인 중 입니다.</div>;
};

export default TokenPage;
