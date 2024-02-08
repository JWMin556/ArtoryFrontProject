import axios from 'axios';
const URL = localStorage.getItem('URL');
const url = `${URL}/api/member/logout`;
const token = localStorage.getItem('Token');

export const LogoutApi = async () => {
  //로그아웃
  console.log('로그아웃함수에 들어옴');
  try {
    const response = await axios.get(url, {
      headers: {
        Accept: '*/*',
        Authorization: `Bearer ${token}`,
      },
    });
    console.log('로그아웃', response);
  } catch (error) {
    console.error('Error fetching data:', error.response.data);
  }
};
