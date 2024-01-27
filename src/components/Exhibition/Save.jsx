import React, { useState } from 'react';
import SAVE from '../../Img/Slider/save.svg';
import ON_SAVE from '../../Img/Slider/onsave.svg';
import styled from 'styled-components';
import { saveApi } from '../API/Heart_Save_Api';

export const SaveImg = styled.img`
  width: 20px;
  height: 18px;
`;
export default function Save(props) {
  const [isClickSave, setIsClickSave] = useState();
  const [colorSave, setColorSave] = useState(SAVE);
  function handleClickHeart(exhibitionId) {
    setIsClickSave((prevIsClickSave) => !prevIsClickSave);
    setColorSave((prevColorSave) => (prevColorSave === SAVE ? ON_SAVE : SAVE));
    console.log("전시회 저장  :");
    console.log(exhibitionId);
    saveApi(exhibitionId);
  }
  return (
    <div>
      <SaveImg src={colorSave} onClick={() => handleClickHeart(props)}></SaveImg>
    </div>
  );
}
