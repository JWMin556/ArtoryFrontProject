import React, { useEffect } from 'react';
import * as S from '../../styled-components/Slide.style';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Heart from './Heart';
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
  useEffect(() => {
    //console.log('props받아옴ㄴ', props);
  }, []);
  return (
    <S.WrapSlider>
      <S.Category>{props.title}</S.Category>
      <S.StyledSlider {...setting}>
        {props.Dummy.map((item) => (
          <div key={item.storyId}>
            <S.WrapPoster>
              <StoryPoster item={item} />
              <S.WrapIcon>
                <Heart id={item.storyId} isLiked={item.isLiked} />
                <Scrap id={item.storyId} isScrapped={item.isScrapped} />
              </S.WrapIcon>
            </S.WrapPoster>
          </div>
        ))}
      </S.StyledSlider>
    </S.WrapSlider>
  );
}
