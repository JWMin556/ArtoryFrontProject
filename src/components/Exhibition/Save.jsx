//check
import React, { useState } from 'react';
import SAVE from '../../Img/Slider/save.svg';
import ON_SAVE from '../../Img/Slider/onsave.svg';
import styled from 'styled-components';
export const SaveImg = styled.img`
  width: 20px;
  height: 18px;
`;
export default function Save() {
  const [isClickSave, setIsClickSave] = useState(false);
  const [colorSave, setColorSave] = useState(SAVE);
  function handleClickHeart() {
    if (isClickSave) {
      setIsClickSave(false);
      setColorSave(ON_SAVE);
    } else {
      setIsClickSave(true);
      setColorSave(SAVE);
    }
  }
  return (
    <div>
      <SaveImg src={colorSave} onClick={handleClickHeart}></SaveImg>
    </div>
  );
}
