//check
import React, { useState } from 'react';
import SAVE from '../../Img/Slider/save.svg';
import ON_SAVE from '../../Img/Slider/onsave.svg';
import styled from 'styled-components';
import { storyScrpped, storyUnScrpped } from '../API/story_API';
export const SaveImg = styled.img`
  width: 20px;
  height: 18px;
`;
export default function Scrap({ id, isScrapped }) {
  const [colorSave, setColorSave] = useState(isScrapped ? ON_SAVE : SAVE);
  async function handleClickScrap() {
    if (colorSave === SAVE) {
      setColorSave(ON_SAVE);
      await storyScrpped(id);
    } else {
      setColorSave(SAVE);
      await storyUnScrpped(id);
    }
  }
  return <SaveImg src={colorSave} onClick={handleClickScrap}></SaveImg>;
}
