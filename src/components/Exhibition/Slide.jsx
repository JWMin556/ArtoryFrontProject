import React, { useEffect, useState } from 'react';
import * as S from '../../styled-components/Slide.style';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Heart from './Heart';
import Save from './Save';
import Prev from './Prev';
import Next from './Next';
import Poster from './Poster';
import Title from './Title';
import styled from 'styled-components';
export default function Slide(props) {
  console.log("슬라이드 페이지", props.Dummy)
  const setting = {
    arrows: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <Next />,
    prevArrow: <Prev />,
  };
  return (
    <S.WrapSlider>
      <S.Category>{props.title}</S.Category>
      <S.StyledSlider {...setting}>
        {props.Dummy.map((item, index) => (
          <div key={index}>
            <S.WrapPorterAndIcon>
              <Poster item={item} />
              <S.WrapIcon>
                <Heart item={item}/>
                <Save item={item}/>
              </S.WrapIcon>
            </S.WrapPorterAndIcon>
          </div>
        ))}
      </S.StyledSlider>
    </S.WrapSlider>
  );
}