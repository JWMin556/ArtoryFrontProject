import React, { useState, useEffect } from 'react';
import * as S from '../styled-components/Exhibition.style';
import Slide from '../components/Exhibition/Slide';
import Search from '../components/Exhibition/Search';
import AdBanner from '../components/Exhibition/AdBanner';
import axios from 'axios';
import { TestDummy } from '../TestDummy';
import { Link } from 'react-router-dom';
//import Genre from '../components/Exhibition/Genre'; //여기 이 Genre.jsx는 잠시 사용하지 말아주세요

const url = 'http://3.39.39.6:8080/api/exhibitions/'

export default function Exhibition() { //주연씨가 작업해주실 EXHIBITION페이지입니다.
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
                console.log(error.response.data);
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
            console.log(error.response.data);
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
            console.log(error.response.data);
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
        {/* <Genre title = {"전시 카테고리"} Dummy={TestDummy} /> */}

        <div style={{width:"885px", height:"100%", marginBottom:"10%"}}>
            <div style={{position:"relative", fontFamily:"Pretendard", fontWeight:"900", fontSize:"1.6em", wordSpacing:"1px"}}>전시 카테고리</div>
            <div style={{position:"relative", display:"flex", flexDirection:"row"}}>
                <div style={{position:"relative", display:"flex", flexDirection:"column", marginBottom:"20px", marginRight:"47px"}}>
                    <Link to='/exhibition/genremedia'><img src="/Img/genre-media-arbitary.png" alt="미디어" style={{marginTop:"50px", width:"186px", height:"268px", borderRadius:"10px", boxShadow:"5px 5px 8px #D9D9D9"}}/></Link>
                    <Link to='/exhibition/genrecraft'><img src="/Img/genre-craft-arbitary.png" alt="공예" style={{marginTop:"20px", width:"186px", height:"268px", borderRadius:"10px", boxShadow:"5px 5px 8px #D9D9D9"}}/></Link>
                    <Link to='/exhibition/genredesign'><img src="/Img/genre-design-arbitary.png" alt="디자인" style={{marginTop:"20px", width:"186px", height:"268px", borderRadius:"10px", boxShadow:"5px 5px 8px #D9D9D9"}}/></Link>
                </div>

                <div style={{position:"relative", display:"flex", flexDirection:"column", marginBottom:"20px", marginRight:"47px"}}>
                    <Link to='/exhibition/genresculpture'><img src="/Img/genre-sculpture-arbitary.png" alt="조각" style={{marginTop:"100px", width:"186px", height:"268px", borderRadius:"10px", boxShadow:"5px 5px 8px #D9D9D9"}}/></Link>
                    <Link to='/exhibition/genreplanexhibition'><img src="/Img/genre-planexhibition-arbitary.png" alt="기획전" style={{marginTop:"20px", width:"186px", height:"268px", borderRadius:"10px", boxShadow:"5px 5px 8px #D9D9D9"}}/></Link>
                </div>

                <div style={{position:"relative", display:"flex", flexDirection:"column", marginBottom:"20px", marginRight:"47px"}}>
                    <Link to='/exhibition/genreinstallationart'><img src="/Img/genre-installationart-arbitary.png" alt="설치미술" style={{marginTop:"50px", width:"186px", height:"268px", borderRadius:"10px", boxShadow:"5px 5px 8px #D9D9D9"}}/></Link>
                    <Link to='/exhibition/genrepainting'><img src="/Img/genre-painting-arbitary.png" alt="회화" style={{marginTop:"20px", width:"186px", height:"268px", borderRadius:"10px", boxShadow:"5px 5px 8px #D9D9D9"}}/></Link>
                    <Link to='/exhibition/genreartistexhibition'><img src="/Img/genre-artistexhibition-arbitary.png" alt="작가전" style={{marginTop:"20px", width:"186px", height:"268px", borderRadius:"10px", boxShadow:"5px 5px 8px #D9D9D9"}}/></Link>
                </div>

                <div style={{position:"relative", display:"flex", flexDirection:"column", marginBottom:"20px", marginRight:"47px"}}>
                    <Link to='/exhibition/genrepicture'><img src="/Img/genre-picture-arbitary.png" alt="조각" style={{marginTop:"100px", marginTop:"100px", width:"186px", height:"268px", borderRadius:"10px", boxShadow:"5px 5px 8px #D9D9D9"}}/></Link>
                    <Link to='/exhibition/genrespecialexhibition'><img src="/Img/genre-specalexhibition-arbitary.png" alt="특별전시" style={{marginTop:"20px", width:"186px", height:"268px", borderRadius:"10px", boxShadow:"5px 5px 8px #D9D9D9"}}/></Link>
                </div>
                
            </div>
        </div>
    </S.Container>
  );
}