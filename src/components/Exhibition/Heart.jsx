//check
import React, { useState } from 'react';
import HEART from '../../Img/Slider/heart.svg';
import ON_HEART from '../../Img/Slider/onheart.svg';
import styled from 'styled-components';
import { heartApi } from '../API/Heart_Save_Api';
export const HeartImg = styled.img`
  width: 20px;
  height: 18px;
`;
export default function Heart(props) {
  const [isClickHeart, setIsClickHeart] = useState(false);
  const [colorHeart, setColorHeart] = useState(HEART);
  function handleClickHeart(exhibitionId) {
    setIsClickHeart((prevIsClickHeart) => !prevIsClickHeart);
    setColorHeart((prevColorHeart) => (prevColorHeart === HEART ? ON_HEART : HEART));
    console.log("전시회 좋아요 : " );
    console.log(exhibitionId);

    heartApi(exhibitionId)
  }
  return (
    <div>
      <HeartImg src={colorHeart} onClick={() => handleClickHeart(props)} />
    </div>
  );
}
