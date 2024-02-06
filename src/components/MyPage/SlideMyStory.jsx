import React from 'react'
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Prev from '../Exhibition/Prev';
import Next from '../Exhibition/Next';
import PosterMyPage from './PosterMyPage';

const WrapSlider = styled.div`
  width: auto;
  margin-bottom: 10%;
`;
const WrapPoster = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 350px;
`;
const StyledSlider = styled(Slider)``;

export default function SlideMyStory(props) {
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
    <WrapSlider>
        <StyledSlider {...setting}>
            {props.Dummy.map((item, index) => (
            <div key={index}>
                <WrapPoster>
                <PosterMyPage item={item}/>
                </WrapPoster>
            </div>
            ))}
        </StyledSlider>
    </WrapSlider>
  )
}
