import axios from 'axios';
const URL = localStorage.getItem('URL');

const BASE_URL = `${URL}/api/`;
const token = localStorage.getItem('Token');

export const getUserPage = async (id) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/mypage/member`,
      { memberId: id, role: 'USER' },
      {
        headers: {
          Accept: '*/*',
          Authorization: `Bearer ${token}`,
          'content-type': 'application/json',
        },
      }
    );

    console.log(response);

    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error.response.data);
  }
};
