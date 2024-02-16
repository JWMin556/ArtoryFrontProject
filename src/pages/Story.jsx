import React from 'react';
import * as S from '../styled-components/Exhibition.style';
import Search from '../components/Story/Search';
import UserSlide from '../components/Story/UserSlide';
import StorySlide from '../components/Story/StorySlide';
import axios from 'axios';
import { useState, useEffect } from 'react';
const URL = localStorage.getItem('URL');

const url = `${URL}/api/stories/`;
const token = localStorage.getItem('Token');

export default function Story(props) {
  const [popularityStoryData, setPopularityStoryData] = useState([]);
  const [recentStoryData, setRecentStoryData] = useState([]);
  const [recommendStoryData, setRecommendStoryData] = useState([]);
  const [recommendMemberData, setRecommendMemberData] = useState([]);

  const loadStories = async () => {
    try {
      const response = await axios.get(`${url}all?page=1`, {
        headers: {
          Accept: '*/*',
          Authorization: `Bearer ${token}`,
          'content-type': 'application/json',
        },
      });
      setPopularityStoryData(response.data.poluarStoryDtoList);
      setRecentStoryData(response.data.recentStoryDtoList);
      setRecommendStoryData(response.data.recommendStoryDtoList);
      setRecommendMemberData(response.data.recommendMemberDtoList);
      console.log(response);
    } catch (error) {
      console.error('Error fetching data:', error.response.data);
    }
  };

    // useEffect(() => {
    //     if(!token){
    //         alert("토큰이 없습니다.");
    //         window.location.href = '/'; // Home 페이지로 이동
    //     } 
    // });

  useEffect(() => {
    window.scrollTo(0, 0);
    loadStories();
  }, []);

  return (
    <S.Container>
      <S.WrapSearch style={{ width: '885px', right: '0' }}>
        <Search />
      </S.WrapSearch>
      <StorySlide title={'인기 Story'} Dummy={popularityStoryData} />
      <StorySlide title={'추천 Story'} Dummy={recommendStoryData} />
      <StorySlide title={'최근 Story'} Dummy={recentStoryData} />
      <UserSlide
        width={126}
        height={126}
        title={'추천 유저'}
        Dummy={recommendMemberData}
      />
    </S.Container>
  );
}
