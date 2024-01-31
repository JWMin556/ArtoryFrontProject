import axios from 'axios';
const url = 'http://3.39.39.6:8080/api/exhibitions/search';
const token = localStorage.getItem('Token');
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
