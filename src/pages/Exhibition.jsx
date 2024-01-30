import React, { useState, useEffect } from 'react';
import * as S from '../styled-components/Exhibition.style';
import Slide from '../components/Exhibition/Slide';
import Search from '../components/Exhibition/Search';
import AdBanner from '../components/Exhibition/AdBanner';
import axios from 'axios';
import { TestDummy } from '../TestDummy';

const url = 'http://3.39.39.6:8080/api/exhibitions/'

export default function Exhibition(props) { //주연씨가 작업해주실 EXHIBITION페이지입니다.
    const [popularityExhibitionData, setPopularityExhibitionData] = useState([]);
    const [recentExhibitionData, setRecentExhibitionData] = useState([]);
    const [recommendExhibitionData, setRecommedExhibitionData] = useState([]);
    const [distanceRecommendExhibitionData, setDistanceRecommedExhibitionData] = useState([]);
    const [simailarExhibitionData, setSimlarExhibitionData] = useState([]);

    const token = localStorage.getItem('Token');

    useEffect(() => {
        (async () => {
          //인기 전시회 API
            try {
            const response = await axios.post(`${url}all?page=1`,
            {
                    "latitude": "90",
                    "longitude": "90"
            },
                {
                    headers: {
                        'Accept': '*/*',
                        'Authorization': `Bearer ${token}`,
                        'content-type': 'application/json',
                }
                }
            );
            console.log("인기전시",response?.data.popluarExhibitionDtoList);
            setPopularityExhibitionData(response?.data.popluarExhibitionDtoList);
            console.log("최근전시",response?.data.recentExhibitionDtoList);
            setRecentExhibitionData(response?.data.recentExhibitionDtoList);
            console.log("추천전시",response.data.recommendExhibitionDtoList);
            setRecommedExhibitionData(response?.data.recommendExhibitionDtoList);
            console.log("거리 추천 전시",response.data.distanceRecommendExhibitionDtoList);
            setDistanceRecommedExhibitionData(response?.data.distanceRecommendExhibitionDtoList);
            console.log("최근 본 전시와 유사한 전시",response.data.similarExhibitionDtoList);
            setSimlarExhibitionData(response?.data.similarExhibitionDtoList);
            
            } catch (error) {
            console.error('Error fetching data:', error.response.data);
        }
        })();
      }, []);
  return (
        <S.Container>
        <S.WrapAdBanner>
            <AdBanner/>
        </S.WrapAdBanner>
        <S.WrapSearch>
            <Search/>
        </S.WrapSearch>
            <Slide title = {"인기 전시"} Dummy = {popularityExhibitionData} />
            <Slide title = {"최근 전시"} Dummy = {recentExhibitionData}/>
            <Slide title = {"추천 전시"} Dummy = {recommendExhibitionData}/>
            <Slide title = {"근처 추천 전시"} Dummy = {distanceRecommendExhibitionData}/>
            <Slide title = {"최근 본 전시와 비슷한 전시"} Dummy = {simailarExhibitionData}/>
    </S.Container>
  );
}
