import React from 'react';
import * as S from '../../styled-components/Slide.style';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import StoryHeart from './StoryHeart';
import styled from 'styled-components';
import StoryScrap from './StoryScrap';
import Prev from '../Exhibition/Prev';
import Next from '../Exhibition/Next';

import ProfileImg from './ProfileImg';
export const WrapSlider = styled.div`
  width: 885px;
  height: fit-content;
  margin-bottom: 10%;
  .hkkcyC {
    top: 50%;
  }
`;
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
    <WrapSlider>
      <S.Category>{props.title}</S.Category>
      <S.StyledSlider {...setting}>
        {props.Dummy.map((item) => (
          <div key={item.storyId}>
            <S.WrapPoster style={{ height: '200px' }}>
              <ProfileImg item={item} w={props.width} h={props.height} />
              {/* <S.WrapIcon style={{ width: '126px', marginTop: '-10px' }}> */}
              {/* <StoryHeart /> */}
              {/* <StoryScrap /> */}
              {/* </S.WrapIcon> */}
            </S.WrapPoster>
          </div>
        ))}
      </S.StyledSlider>
    </WrapSlider>
  );
}
