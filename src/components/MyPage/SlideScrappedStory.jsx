import React from 'react'
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Heart from '../Exhibition/Heart';
import Save from '../Exhibition/Save';
import Prev from '../Exhibition/Prev';
import Next from '../Exhibition/Next';
import PosterMyPage from './PosterMyPage';

const WrapSlider = styled.div`
  width: auto;
  margin-bottom: 10%;
`;

const WrapPorterAndIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 350px;
`;

const StyledSlider = styled(Slider)``;

const WrapIcon = styled.div`
  width: 175px;
  position: absolute;
  top: 320px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export default function SlideScrappedStory(props) {
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
                <WrapPorterAndIcon>
                <PosterMyPage item={item}/>
                <WrapIcon>
                    <Heart item={item}/>
                    <Save item={item}/>
                </WrapIcon>
                </WrapPorterAndIcon>
            </div>
            ))}
        </StyledSlider>
    </WrapSlider>
  )
}
