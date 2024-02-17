import axios from 'axios';
import { useEffect } from 'react';
const token = localStorage.getItem('Token');
const URL = localStorage.getItem('URL');
const SaveUrl = `${URL}/api/scrap-exhibition/`;
const HeartUrl = `${URL}/api/like-exhibition/`;

//전시회 스크랩
export const saveApi = async (exhibitionId) => {
  try {
    const response = await axios.post(
      `${SaveUrl}exhibition-scrapped?exhibitionId=${exhibitionId}`,
      {
        //  exhibitionId: exhibitionId.item
      },
      {
        headers: {
          Accept: '*/*',
          Authorization: `Bearer ${token}`,
          'content-type': 'application/json',
        },
      }
    );
    console.log(response.data);
  } catch (error) {
    console.error('Error fetching data:', error.response);
  }
  //fetchData();
};

//전시회 스크랩 취소
export const saveCancelApi = async (exhibitionId) => {
  try {
    const response = await axios.post(
      `${SaveUrl}exhibition-disScrapped?exhibitionId=${exhibitionId}`,
      {
        //  exhibitionId: exhibitionId.item
      },
      {
        headers: {
          Accept: '*/*',
          Authorization: `Bearer ${token}`,
          'content-type': 'application/json',
        },
      }
    );
    console.log(response.data);
  } catch (error) {
    console.error('Error fetching data:', error.response);
  }
  //fetchData();
};

//전시회 좋아요
export const heartApi = async (exhibitionId) => {
  console.log('heartApi 함수로 들어옴 ', exhibitionId);
  try {
    const response = await axios.post(
      `${HeartUrl}exhibition-liked?exhibitionId=${exhibitionId}`,
      {
        //exhibitionId: exhibitionId
      },
      {
        headers: {
          Accept: '*/*',
          Authorization: `Bearer ${token}`,
          'content-type': 'application/json',
        },
      }
    );
    console.log(response.data);
  } catch (error) {
    console.error('Error fetching data:', error.response.data);
  }
  //fetchData();
};

//전시회 좋아요 취소
export const heartCancelApi = async (exhibitionId) => {
  console.log('heartCancelApi 함수로 들어옴 ', exhibitionId);
  try {
    const response = await axios.post(
      `${HeartUrl}exhibition-disliked?exhibitionId=${exhibitionId}`,
      {
        //exhibitionId: exhibitionId
      },
      {
        headers: {
          Accept: '*/*',
          Authorization: `Bearer ${token}`,
          'content-type': 'application/json',
        },
      }
    );
    console.log(response.data);
  } catch (error) {
    console.error('Error fetching data:', error.response.data);
  }
  //fetchData();
};
