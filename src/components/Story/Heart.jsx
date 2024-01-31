//check
import React, { useState } from 'react';
import HEART from '../../Img/Slider/heart.svg';
import ON_HEART from '../../Img/Slider/onheart.svg';
import styled from 'styled-components';
import { storyLiked, storyUnLiked } from '../API/story_API';
export const HeartImg = styled.img`
  width: 20px;
  height: 18px;
`;
export default function Heart(props) {
  const [colorHeart, setColorHeart] = useState(
    props.isLiked ? ON_HEART : HEART
  );
  async function handleClickHeart() {
    if (colorHeart === HEART) {
      setColorHeart(ON_HEART);
      await storyLiked(props.id);
    } else {
      setColorHeart(HEART);
      await storyUnLiked(props.id);
    }
  }
  return <HeartImg src={colorHeart} onClick={handleClickHeart} />;
}
