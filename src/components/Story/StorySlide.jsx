import React from 'react';
import * as S from '../../styled-components/Slide.style';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Heart from '../Story/Heart';
import Prev from '../Exhibition/Prev';
import Next from '../Exhibition/Next';
import StoryPoster from './StoryPoster';
import Scrap from './Scrap';
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
                <Heart
                  loadStories={props.loadStories}
                  id={item.storyId}
                  isLiked={item.isLiked}
                />
                <Scrap
                  loadStories={props.loadStories}
                  id={item.storyId}
                  isScrapped={item.isScrapped}
                />
              </S.WrapIcon>
            </S.WrapPoster>
          </div>
        ))}
      </S.StyledSlider>
    </S.WrapSlider>
  );
}
