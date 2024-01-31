//check
import React, { useState } from 'react';
import HEART from '../../Img/Slider/heart.svg';
import ON_HEART from '../../Img/Slider/onheart.svg';
import styled from 'styled-components';
import { heartApi, heartCancelApi } from '../API/Heart_Save_Api';
export const HeartImg = styled.img`
  width: 20px;
  height: 18px;
`;
export default function Heart(props) {
  //props.item.~~ 으로 불러오기
  // const [isClickHeart, setIsClickHeart] = useState(props.item.isiked); // 좋아요 누름 = true / 좋아요 안누름 = false
  // function handleClickHeart(exhibitionId) {
  //   //Save 이미지를 누르면
  //   setIsClickHeart((prevIsClickHeart) => !prevIsClickHeart); //isClickSave false <-> true
  //   console.log('전시회 좋아요 : ', exhibitionId);
  //   //api 호출
  //   if (isClickHeart) {
  //     heartCancelApi(exhibitionId);
  //   } //좋아요 취소
  //   else {
  //     heartApi(exhibitionId);
  //   } //좋아요
  // }
  // return (
  //   <div>
  //     <HeartImg
  //       src={isClickHeart ? ON_HEART : HEART}
  //       onClick={() => handleClickHeart(props.item.exhibitionId)}
  //     />
  //   </div>
  // );
}
