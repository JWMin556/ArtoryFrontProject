import React from 'react';
import * as S from '../../styled-components/Slide.style';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Heart from '../Exhibition/Heart';
import Save from '../Exhibition/Save';
import Prev from '../Exhibition/Prev';
import Next from '../Exhibition/Next';
import StoryPoster from './StoryPoster';

export default function StorySlide(props) {
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
        {props.Dummy.results.map((item, index) => (
          <div key={index}>
            <S.WrapPoster>
              <StoryPoster source={props.source} item={item} />
              <S.WrapIcon>
                <Heart item={item} />
                <Save item={item}/>
              </S.WrapIcon>
            </S.WrapPoster>
          </div>
        ))}
      </S.StyledSlider>
    </S.WrapSlider>
  );
}
