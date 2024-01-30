import React, { useState } from 'react';
import SAVE from '../../Img/Slider/save.svg';
import ON_SAVE from '../../Img/Slider/onsave.svg';
import styled from 'styled-components';
import { saveApi, saveCancelApi } from '../API/Heart_Save_Api';

export const SaveImg = styled.img`
  width: 20px;
  height: 18px;
`;
export default function Save(props) {
  const [isClickSave, setIsClickSave] = useState(props.item.scrapped);

  function handleClickSave(exhibitionId) { //Save 이미지를 누르면
    setIsClickSave((prevIsClickSave) => !prevIsClickSave); //isClickSave false <-> true
    console.log("전시회 저장",exhibitionId); //api 호출
    if(isClickSave){saveCancelApi(exhibitionId) }
    else {saveApi(exhibitionId)}
  }
  return (
    <div>
      <SaveImg
        src={isClickSave?ON_SAVE:SAVE}
        onClick={() => handleClickSave(props.item.exhibitionId)}
        alt="저장 아이콘"
      />
    </div>
  );
}
