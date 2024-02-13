import React from 'react';
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
  const numItems = props.Dummy.length;
  const slidesToShow = numItems <= 3 ? numItems : 4;
  const slidesToScroll = numItems <= 3 ? numItems : 4;

  const setting = {
    arrows: true,
    infinite: true,
    speed: 1000,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
    nextArrow: <Next />,
    prevArrow: <Prev />,
  };
  return (
    <WrapSlider>
      <StyledSlider {...setting}>
        {props.Dummy.map((item, index) => (
          <div key={index}>
            <WrapPoster>
              <Pictures items={props.Dummy} item={item} index={index} />
            </WrapPoster>
          </div>
        ))}
      </StyledSlider>
    </WrapSlider>
  );
}
