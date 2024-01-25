import axios from 'axios';

const url = 'http://3.39.39.6:8080/api/member';

export const getMemberInfo = async () => {
  //사용자 전체 정보
  //const token = localStorage.getItem('token');
  const token =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBQ0NFU1MiLCJpYXQiOjE3MDYxMDg2MzksImV4cCI6MTcwNjE5ODYzOSwibWVtYmVySWQiOjIsInJvbGUiOiJVU0VSIn0.cXkDWynhwYHGTNjs_fVRLHc0KRx9sgz8uNiY7-ApukE4Ob5508edOE4qvKldWSWvzVziGqVqSsf6bwI_eK6R7g';
  try {
    const response = await axios.get(`${url}/info`, {
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

export const postGenderAge = async (gender, age) => {
  //사용자 전체 정보
  //const token = localStorage.getItem('token');
  const token =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBQ0NFU1MiLCJpYXQiOjE3MDU5MzU0NTEsImV4cCI6MTcwNjAyNTQ1MSwibWVtYmVySWQiOjksInJvbGUiOiJVU0VSIn0.DMgfy31T0ohFmS1WmforB8Dpy02QiSOCDi_9-LVjoevbo9oSvm-a7EbpAYWWskm1_HF2Q_zV-ls1C-YKTOHl1g';
  try {
    const response = await axios.post(
      `${url}/save/age-gender?gender=${gender}&age=${age}`,
      {
        headers: {
          Accept: '*/*',
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

const BASE_URL = 'http://3.39.39.6:8080/api/member/save';

export const saveGenre = async (genre1, genre2, genre3) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/genre?genre1=${genre1}&genre2=${genre2}&genre3=${genre3}`,
      {
        body: { genre1: genre1, genre2: genre2, genre3: genre3 },

        Headers: {
          Accept: '*/*',
          Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBQ0NFU1MiLCJpYXQiOjE3MDYxMTQzNTUsImV4cCI6MTcwNjIwNDM1NSwibWVtYmVySWQiOjIsInJvbGUiOiJVU0VSIn0.ES510_lD4F91GkrZYLF9hzZtS3JMBKKj3ePrEephXrX8mIjDpQuV3MsqTc3EaQcPSMGCWrGfS9deFcXypkGNpw`,
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
