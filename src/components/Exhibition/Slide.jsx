import React, { useEffect, useState } from 'react';
import * as S from '../../styled-components/Slide.style';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Heart from './Heart';
import Save from './Save';
import Prev from './Prev';
import Next from './Next';
import Poster from './Poster';
import Title from './Title';
import styled from 'styled-components';
export default function Slide(props) {
  const setting = {
    arrows: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <Next />,
    prevArrow: <Prev />,
  };
  //console.log(props.Dummy);
  //console.log(props.title);
  // 상태 초기값을 true로 설정
  // const [isShowTitle, setIsShowTitle] = useState(false);

  // // 마우스가 Poster 위에 올라가면 Title을 보여주도록 변경
  // const handleMouseEnter = () => {
  //     setIsShowTitle(true);
  // };

  // // 마우스가 Poster에서 벗어나면 Title을 숨기도록 변경
  // const handleMouseLeave = () => {
  //     setIsShowTitle(false);
  // };
  return (
    <S.WrapSlider>
      <S.Category>{props.title}</S.Category>
      <S.StyledSlider {...setting}>
        {props.Dummy.map((item, index) => (
          <div key={index}>
            <S.WrapPorterAndIcon>
              {/* <S.WrapPoster onMouseEnter={handleMouseEnter}  onMouseLeave={handleMouseLeave}>  */}
              <Poster item={item} />
              {/* </S.WrapPoster> */}
              {/* <WrapTitle>
                                {isShowTitle && <Title title = {item.exhibitionTitle}/>}
                            </WrapTitle> */}
              <S.WrapIcon>
                <Heart />
                <Save />
              </S.WrapIcon>
            </S.WrapPorterAndIcon>
          </div>
        ))}
      </S.StyledSlider>
    </S.WrapSlider>
  );
}