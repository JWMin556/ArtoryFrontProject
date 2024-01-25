import axios from 'axios';
const url = 'http://3.39.39.6:8080/api/exhibitions/search';
const token =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBQ0NFU1MiLCJpYXQiOjE3MDYxNzI2MzIsImV4cCI6MTcwNjI2MjYzMiwibWVtYmVySWQiOjQsInJvbGUiOiJVU0VSIn0.utWBgIlkM-je684zEEM83zKlPRNNlAaov-1sRj53AiLMB-Aked78AxOYwuoKadiaQZ6RTQY6d-BkXprqzd41oA';
export const searchExhibition = async (keyword) => {
  try {
    const response = await axios.get(`${url}?title=${keyword}&page=1`, {
      headers: {
        Accept: '*/*',
        Authorization: `Bearer ${token}`,
        'content-type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
