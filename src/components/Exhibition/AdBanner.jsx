import React,{useState, useEffect} from 'react'
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import axios from "axios";

const url = 'http://3.39.39.6:8080/api/exhibitions/'

const AdImg = styled.img`
    width : 300px;
    height : 450px;
`;
const WrapSlide = styled.div`
    background-color : #F5F5F5;
    text-align : center;
    margin-top : 5%;
    padding : 2%;
    .swiper-pagination-bullet-active{
        background : #000;
    }
    .swiper-pagination{
        position:relative;
        top : 22px;
    }
    .swiper-pagination-bullet{
        width : 10px;
        height : 10px;
    }
`;
const Swiperstyle = styled(Swiper)`
    .swiper-slide-shadow-left{
        background-color: rgba(0,0,0,0.2);
        left : 2.4%;
        bottom : 2%;
    }
    .swiper-slide-shadow-right{
        background-color: rgba(0,0,0,0.2);
        position : absolute;
    }
    .swiper-wrapper{
        transform : translate3d(-110.2px,0,0);
    }

`;

export default function AdBanner() {
    const [randomExhibitionData, setRandomExhibitionData] = useState([]);

    useEffect(() => {
        (async() => { //랜덤 전시회 API
            try{
                const response = await axios.get(`${url}random?memberId=1&page=1`,
                    {
                    headers : {
                        'Accept' : '*/*',
                        'Authorization' : 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBQ0NFU1MiLCJpYXQiOjE3MDYwOTY3MjksImV4cCI6MTcwNjE4NjcyOSwibWVtYmVySWQiOjMsInJvbGUiOiJVU0VSIn0.hnDGFcwa2aln0sAlnWmF_9-HgvR8HXDxlROz7xWIVjFz9_CzKw9N_J1gAF9qi5sDJ7jfnd4S9BXr3ow5tH7rxA',
                        'content-type' : "application/json"
                    }
                });
                setRandomExhibitionData(response.data);
            }catch(error)
            {
                console.error('Error fetching data:', error);
            }
        //fetchData();
    })();
    },[]);
    //console.log(randomExhibitionData);
return (
    <WrapSlide>
    <Swiperstyle
        loop={true} //슬라이드 반복 여부
        effect={'coverflow'}
        centeredSlides={true} //1번 슬라이드가 가운데 보이기
        slideToClickedSlide ={true} 
        slidesPerView={5} //한 슬라이드에 보여줄 갯수
        coverflowEffect={{
        rotate: 0,
        stretch: 410,
        depth: 150,
        modifier: 1.5,
        slideShadows: true,
        }}
        pagination={{ //페이저 버튼 설정
            el : '.swiper-pagination',
            clickable:true, //버튼 클릭 여부
        }}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
        >
        {randomExhibitionData.slice(0,5).map((item, index) => (
                    <SwiperSlide key={index}>
                        <AdImg src={item.exhibitionImage}/>
                    </SwiperSlide>
                ))}
    </Swiperstyle>
        <div className='swiper-pagination'></div>
    </WrapSlide>
    );
}
