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
            setPopularityExhibitionData(response.data.popluarExhibitionDtoList);
            console.log(response.data.popluarExhibitionDtoList);
            } catch (error) {
            console.error('Error fetching data:', error.response.data);
        }
          //fetchData();
        })();
      }, []);
  useEffect(() => {
    (async() => { //최근 전시회 API
        try{
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
            });
            setRecentExhibitionData(response.data.recentExhibitionDtoList);
            console.log(response.recentExhibitionDtoList);

        }catch(error)
        {
            console.error('Error fetching data:', error);
        }
    //fetchData();
})();
},[]);
  useEffect(() => {
    (async() => { // 추천 전시회 API
        try{
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
            });
            console.log(response.recommendExhibitionDtoList);
            setRecommedExhibitionData(response.data.recommendExhibitionDtoList);

        }catch(error)
        {
            console.error('Error fetching data:', error);
        }
    //fetchData();
  })();
  },[]);

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
            {/* <Slide title = {"이번 달 추천 전시"} Dummy = {TestDummy}/>
            <Slide title = {"근처 추천 전시"} Dummy = {TestDummy}/>
            <Slide title = {"작가 추천 전시"} Dummy = {TestDummy}/>
            <Slide title = {"최근 본 전시와 비슷한 전시"} Dummy = {TestDummy}/> */}
    </S.Container>
  );
}
