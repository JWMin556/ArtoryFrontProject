import React from 'react'
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Prev from '../Exhibition/Prev';
import Next from '../Exhibition/Next';
import Pictures from './Pictures';

const WrapSlider = styled.div`
  width: auto;
  margin-bottom: 10%;
`;
const WrapPoster = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 350px;
  justify-content: space-around;
`;
const StyledSlider = styled(Slider)``;

export default function SlidePictures(props) {
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
                <Pictures item={item}/>
                </WrapPoster>
            </div>
            ))}
        </StyledSlider>
    </WrapSlider>
  )
}
