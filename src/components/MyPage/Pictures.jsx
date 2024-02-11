import React, { useState } from 'react'
import styled from 'styled-components';
import BigImg from './BigImg';

const PictureStyle = styled.img`
    width : 172px;
    height: 268px;
    box-shadow: 5px 5px 8px #D9D9D9; 
    cursor: pointer;
`;

export default function Pictures(props) {
    const [showModal, setShowModal] = useState(false);
    const onClickImg = () => {
      if(showModal) {
        setShowModal(false);
        console.log("안녕", props.index);
      } else {
        setShowModal(true);
      console.log("안녕", props.index);
      }
    }
  return (
    <div style={{height:'268px' }}>
      <PictureStyle src={props.item.pictureUrl} alt={props.item.storyPictureId} onClick={onClickImg}/>
      {showModal && <BigImg isClick={showModal} imgsrc={props.item.pictureUrl} />}
    </div>
  )
}