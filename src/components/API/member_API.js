import axios from 'axios';

const BASE_URL = 'http://3.39.39.6:8080/api/member';
const token =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBQ0NFU1MiLCJpYXQiOjE3MDYxNzI2MzIsImV4cCI6MTcwNjI2MjYzMiwibWVtYmVySWQiOjQsInJvbGUiOiJVU0VSIn0.utWBgIlkM-je684zEEM83zKlPRNNlAaov-1sRj53AiLMB-Aked78AxOYwuoKadiaQZ6RTQY6d-BkXprqzd41oA';

export const getMemberInfo = async () => {
  //사용자 전체 정보
  //const token = localStorage.getItem('token');

  try {
    const response = await axios.get(`${BASE_URL}/info`, {
      headers: {
        Accept: '*/*',
        Authorization: `Bearer ${token}`,
      },
    });
    const body = response.data.json();

    console.log(response);

    return body;
    //const data = response.json();

    //alert(data);
    //return response;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

//장르 저장
export const saveGenre = async (genre1, genre2, genre3) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/save/genre`,
      {
        genre1: genre1,
        genre2: genre2,
        genre3: genre3,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response);
    //return response;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
//body로 보내거나 query로 보내거나
