//check
import React, { useState } from 'react';
import HEART from '../../Img/Slider/heart.svg';
import ON_HEART from '../../Img/Slider/onheart.svg';
import styled from 'styled-components';
export const HeartImg = styled.img`
  width: 20px;
  height: 18px;
`;
export default function Heart() {
  const [isClickHeart, setIsClickHeart] = useState(false);
  const [colorHeart, setColorHeart] = useState(HEART);
  function handleClickHeart() {
    if (isClickHeart) {
      setIsClickHeart(false);
      setColorHeart(ON_HEART);
    } else {
      setIsClickHeart(true);
      setColorHeart(HEART);
    }
  }
  return (
    <div>
      <HeartImg src={colorHeart} onClick={handleClickHeart} />
    </div>
  );
}
