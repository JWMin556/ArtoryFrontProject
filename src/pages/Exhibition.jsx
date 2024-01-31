import React, { useState, useEffect } from 'react';
import * as S from '../styled-components/Exhibition.style';
import Slide from '../components/Exhibition/Slide';
import Search from '../components/Exhibition/Search';
import AdBanner from '../components/Exhibition/AdBanner';
import axios from 'axios';
import { TestDummy } from '../TestDummy';

const url = 'http://3.39.39.6:8080/api/exhibitions/';
const token = localStorage.getItem('Token');
export default function Exhibition(props) {
  //주연씨가 작업해주실 EXHIBITION페이지입니다.
  const [popularityExhibitionData, setPopularityExhibitionData] = useState([]);
  const [recentExhibitionData, setRecentExhibitionData] = useState([]);
  const [recommendExhibitionData, setRecommedExhibitionData] = useState([]);

  useEffect(() => {
    (async () => {
      //인기 전시회 API
      try {
        const response = await axios.get(`${url}popularity?page=1`, {
          headers: {
            Accept: '*/*',
            Authorization: `Bearer ${token}`,
            'content-type': 'application/json',
          },
        });
        setPopularityExhibitionData(response.data);
        console.log(response);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
      //fetchData();
    })();
  }, []);
  useEffect(() => {
    (async () => {
      //최근 전시회 API
      try {
        const response = await axios.get(`${url}recent?page=1`, {
          headers: {
            Accept: '*/*',
            Authorization: `Bearer ${token}`,
            'content-type': 'application/json',
          },
        });
        setRecentExhibitionData(response.data);
        console.log(response);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
      //fetchData();
    })();
  }, []);
  useEffect(() => {
    (async () => {
      // 추천 전시회 API
      try {
        const response = await axios.get(`${url}recommend?page=1`, {
          headers: {
            Accept: '*/*',
            Authorization: `Bearer ${token}`,
            'content-type': 'application/json',
          },
        });
        setRecommedExhibitionData(response.data);
        console.log(response);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
      //fetchData();
    })();
  }, []);

  return (
    <S.Container>
      <S.WrapAdBanner>
        <AdBanner />
      </S.WrapAdBanner>
      <S.WrapSearch>
        <Search />
      </S.WrapSearch>
      <Slide title={'인기 전시'} Dummy={popularityExhibitionData} />
      <Slide title={'최근 전시'} Dummy={recentExhibitionData} />
      {<Slide title={'추천 전시'} Dummy={recommendExhibitionData} />}
      {/* <Slide title = {"이번 달 추천 전시"} Dummy = {TestDummy}/>
            <Slide title = {"근처 추천 전시"} Dummy = {TestDummy}/>
            <Slide title = {"작가 추천 전시"} Dummy = {TestDummy}/>
            <Slide title = {"최근 본 전시와 비슷한 전시"} Dummy = {TestDummy}/> */}
    </S.Container>
  );
}
