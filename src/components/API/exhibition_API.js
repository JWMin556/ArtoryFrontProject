import axios from 'axios';

const url = 'http://3.39.39.6:8080/api/exhibitions/';

export const getPopularity = async (page) => {
  //인기 전시회 목록 조회
  //const token = localStorage.getItem('token');
  const token =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBQ0NFU1MiLCJpYXQiOjE3MDYxMDg2MzksImV4cCI6MTcwNjE5ODYzOSwibWVtYmVySWQiOjIsInJvbGUiOiJVU0VSIn0.cXkDWynhwYHGTNjs_fVRLHc0KRx9sgz8uNiY7-ApukE4Ob5508edOE4qvKldWSWvzVziGqVqSsf6bwI_eK6R7g';
  try {
    const response = await axios.get(`${url}/popularity?page=${page}`, {
      headers: {
        Accept: '*/*',
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response);
    //return response;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
