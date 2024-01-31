import React from 'react';
import * as S from '../../styled-components/Slide.style';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Heart from '../Exhibition/Heart';
import Save from '../Exhibition/Save';
import Prev from '../Exhibition/Prev';
import Next from '../Exhibition/Next';

import ProfileImg from './ProfileImg';

export default function UserSlide(props) {
  const setting = {
    arrows: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 6,
    nextArrow: <Next />,
    prevArrow: <Prev />,
  };
  return (
    <S.WrapSlider>
      <S.Category>{props.title}</S.Category>
      <S.StyledSlider {...setting}>
        {props.Dummy.map((item) => (
          <div key={item.storyId}>
            <S.WrapPoster style={{ height: '200px' }}>
              <ProfileImg item={item} w={props.width} h={props.height} />
              <S.WrapIcon style={{ width: '126px', marginTop: '-10px' }}>
                <Heart />
                <Save />
              </S.WrapIcon>
            </S.WrapPoster>
          </div>
        ))}
      </S.StyledSlider>
    </S.WrapSlider>
  );
}
