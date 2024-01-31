import React, { useState, useEffect } from "react";
import styled from "styled-components";
import moment from "moment";
import ADD from '../../Img/Calendar/add.svg';
import SearchModa2 from "./SearchModal2";  // 주석 해제

const TileWrapper = styled.div`
  position : relative;
  //border : 1px solid red;
  border-radius : 10px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content : space-between;
  font-size : 12px;
  font-family: Pretendard;
  &:hover{
    background-color : #EFEEEE;
  }
`;

const DateStyle = styled.span`
  margin : 8px 0 0 9px;
`;

const AddImg = styled.img`
  width : 17px;
  height : 17px;
  position :relative;
  top : 9%;
  right : 10%;
`;

export const Tile = ({ key,day}) => {
  const [isButtonOpen, setIsButtonOpen] = useState(false);
  const [isClickAddButton,setIsClickAddButton] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOnMouseOverTile = () =>{
    setIsButtonOpen(true);
  }
  const handleOnMouseOutTile = () =>{
    setIsButtonOpen(false);
  }
  const handleClickAddButton = (day) => {
    setIsModalOpen(true);

  }
  const handleCloseModal = () => {
    setIsButtonOpen(false); // 모달이 닫힐 때 AddImg도 사라지도록 설정
    setIsModalOpen(false);
  }

  const dateKey = moment().format("YYYY-MM-DD");

  return (
    <TileWrapper
      onMouseOver={() => { handleOnMouseOverTile(dateKey); setIsButtonOpen(true); }}
      onMouseOut={() => { handleOnMouseOutTile(dateKey); setIsButtonOpen(false); }}
    >
      <DateStyle style={{ color: "#262626" }}>
        {day}
      </DateStyle>
      {isButtonOpen && <AddImg src={ADD} onClick={() => handleClickAddButton(day)} />}
      {isModalOpen  && <SearchModa2 isModalOpen={isModalOpen} handleCloseModal={handleCloseModal} source={'record'}/>}
    </TileWrapper>
  );
};
