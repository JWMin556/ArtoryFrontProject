import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import axios from 'axios';

const url = 'http://3.39.39.6:8080/api/exhibitions/';
const AdImg = styled.img`
  width: 300px;
  height: 450px;
`;
const WrapSlide = styled.div`
  background-color: #f5f5f5;
  text-align: center;
  margin-top: 5%;
  padding: 2%;
  .swiper-pagination-bullet-active {
    background: #000;
  }
  .swiper-pagination {
    position: relative;
    top: 22px;
  }
  .swiper-pagination-bullet {
    width: 10px;
    height: 10px;
  }
`;
// const Swiperstyle = styled(Swiper)`
//   .swiper-slide-shadow-left {
//     background-color: rgba(0, 0, 0, 0.2);
//     left: 2.4%;
//     bottom: 2%;
//   }
//   .swiper-slide-shadow-right {
//     background-color: rgba(0, 0, 0, 0.2);
//     position: absolute;
//   }
//   .swiper-wrapper {
//     transform: translate3d(-110.2px, 0, 0);
//   }
//   .swiper-3d {
//     //width : 100%;
//     //perspective : 100px;
//   }
// `;

export default function AdBanner() {
  const [randomExhibitionData, setRandomExhibitionData] = useState([]);
  const token = localStorage.getItem('Token');
  useEffect(() => {
    (async () => {
      // 추천 전시회 API
      try {
        const response = await axios.post(
          `${url}all?page=1`,
          {
            latitude: '90',
            longitude: '90',
          },
          {
            headers: {
              Accept: '*/*',
              Authorization: `Bearer ${token}`,
              'content-type': 'application/json',
            },
          }
        );
        console.log('exhibition 배너', response?.data.randomExhibitionDtoList);
        setRandomExhibitionData(response?.data.randomExhibitionDtoList);
      } catch (error) {
        console.error('Error fetching data:', error.response.data);
      }
    })();
  }, []);
  return (
    <WrapSlide>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={5}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {randomExhibitionData.slice(0,8).map((item, index) => (
          <SwiperSlide key={index}>
            <AdImg src={item.exhibitionImage} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-pagination"></div>
    </WrapSlide>
  );
}
