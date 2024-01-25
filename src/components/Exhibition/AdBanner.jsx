import React from 'react';
import styled from 'styled-components';
import { TestDummy } from '../../TestDummy';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';

const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w1280/';
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
    bottom: 9%;
  }
  .swiper-pagination-bullet {
    width: 10px;
    height: 10px;
  }
`;
const Swiperstyle = styled(Swiper)`
  .swiper-slide-shadow-left {
    background-color: rgba(0, 0, 0, 0.2);
    left: 3%;
  }
  .swiper-slide-shadow-right {
    background-color: rgba(0, 0, 0, 0.2);
  }
  .swiper-wrapper {
    transform: translate3d(-110.2px, 0, 0);
  }
`;

export default function AdBanner() {
  return (
    <WrapSlide>
      <Swiperstyle
        loop={true} //슬라이드 반복 여부
        effect={'coverflow'}
        centeredSlides={true} //1번 슬라이드가 가운데 보이기
        slideToClickedSlide={true}
        slidesPerView={5} //한 슬라이드에 보여줄 갯수
        coverflowEffect={{
          rotate: 0,
          stretch: 350,
          depth: 150,
          modifier: 1.5,
          slideShadows: true,
        }}
        pagination={{
          //페이저 버튼 설정
          el: '.swiper-pagination',
          clickable: true, //버튼 클릭 여부
        }}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {TestDummy.results.slice(0, 5).map((item, index) => (
          <SwiperSlide key={index}>
            <AdImg src={IMG_BASE_URL + item.poster_path} />
          </SwiperSlide>
        ))}
      </Swiperstyle>
      <div className="swiper-pagination"></div>
    </WrapSlide>
  );
}
