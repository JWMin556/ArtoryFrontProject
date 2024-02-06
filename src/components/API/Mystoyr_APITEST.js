import axios from 'axios';

const BASE_URL = 'http://3.39.39.6:8080/api/';
const token = localStorage.getItem('Token');

export const createStory = async (exhibitionId, data) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/stories/save`,
      {
        exhibitionId: exhibitionId,
        storyTitle: 'string',
        storySatisfactionLevel: 'string',
        storyWeather: 'string',
        storyCompanion: 'string',
        storyKeyword: 'string',
        storyViewingTime: 'string',
        year: 0,
        month: 0,
        day: 0,
        storyContext: data,
        genre1: 'MEDIA',
        genre2: 'MEDIA',
        genre3: 'MEDIA',
        isOpen: true,
        picturesUrl: ['string'],
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
    console.error('Error fetching data:', error.response.data);
  }
};

export const uploadFile = async (formData) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/server/upload/file`,
      {
        file: formData.file,
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
    console.error('Error fetching data:', error.response.data);
  }
};
export const getFile = async (formData) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/server/upload/file`,
      {
        file: formData.file,
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
    console.error('Error fetching data:', error.response.data);
  }
};
