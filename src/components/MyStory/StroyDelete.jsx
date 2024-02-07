import React,{useState,useEffect} from 'react'
import axios from 'axios';
import styled from 'styled-components'
import Modal  from 'react-modal';
import { StoryDeleteApi } from '../API/Delete_API';

const StyledModal = {
  overlay: {
      backgroundColor: " rgba(0, 0, 0, 0.8)",
      width: "100%",
      height: "100vh",
      zIndex: "10",
      position: "fixed",
      top: "0",
      left: "0",
  },
  content: {
      width: "746px",
      height: "454px",
      zIndex: "150",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      borderRadius: "10px",
      backgroundColor: "#ffff",
      justifyContent: "center",
      overflow: "auto",
  },
}
const WrapModal = styled.div`
  height: 70%;  
  display : flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  position : relative;
  top : 15%;
`;
const Message = styled.div`
  font-size : 30px;
  font-weight : bold;
  font-family: 'Pretendard';
`;
const ExhibitionList = styled.div`
  font-size : 20px;
  color : #979797;
  text-align : center;
`;
const WrapButton = styled.div`
  text-align : center;
`;
const ModalButton = styled.button`
font-family: 'Pretendard';
font-weight: 600;
font-size: 1.4rem;
border: none;
background-color: black;
color: white;
width: 127px;
height: 36px;
margin: 0 10px;
`;
export default function StoryDelete({storyByDate,isDeleteModal,setIsDeleteModal,saveStory}) {
  const ClickedYesButton = ()=>{
    setIsDeleteModal(false)
    StoryDeleteApi(storyByDate.storyId)
    saveStory()
  }
  console.log("storyByDate",storyByDate)
  return (
    <Modal
      isOpen={isDeleteModal}
      //onRequestClose={()=>setModal(false)}
      style={StyledModal}
      shouldCloseOnOverlayClick={true}
    >
    <WrapModal>
      <Message>캘린더에 동일한 전시 일정이 있습니다. 삭제하시겠습니까?</Message>
      <ExhibitionList>
          <div>
            {storyByDate.year}.{storyByDate.month}.{storyByDate.day}
          </div>
      </ExhibitionList>
      <WrapButton>
        <ModalButton onClick={ClickedYesButton}>예</ModalButton>
      </WrapButton>
    </WrapModal>
    </Modal>
  );
}

