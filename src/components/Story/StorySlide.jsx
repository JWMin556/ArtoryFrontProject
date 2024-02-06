import React, { useEffect } from 'react';
import * as S from '../../styled-components/Slide.style';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import StoryHeart from './StoryHeart';
import Prev from '../Exhibition/Prev';
import Next from '../Exhibition/Next';
import StoryPoster from './StoryPoster';
import StoryScrap from './StoryScrap';

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
        {props.Dummy.map((item) => (
          <div key={item.storyId}>
            <S.WrapPoster>
              <StoryPoster item={item} />
              <S.WrapIcon>
                <StoryHeart id={item.storyId} isLiked={item.isLiked} />
                <StoryScrap id={item.storyId} isScrapped={item.isScrapped} />
              </S.WrapIcon>
            </S.WrapPoster>
          </div>
        ))}
      </S.StyledSlider>
    </S.WrapSlider>
  );
}
