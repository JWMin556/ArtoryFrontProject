import React, { useState } from 'react'
import styled from 'styled-components';

const PictureStyle = styled.img`
    width : 186px;
    height: 268px;
    //border-radius : 10px; 
    box-shadow: 5px 5px 8px #D9D9D9; 
    cursor: pointer;
`;

const ModalBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7); /* 어두운 배경의 색상과 투명도 조절 */
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
`;

const ModalImage = styled.img`
  max-width: 90%;
  max-height: 90%;
`;

const PictureUrl = styled.p`
  margin-top: 10px;
  color: red;
`;

export default function Pictures(props) {
    const [showModal, setShowModal] = useState(false);

    const openModal = (item) => {
        console.log(item?.pictureUrl);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
      };

    // const onClickBigImg = (item) => {
    //     console.log(item.pictureUrl);
    //     //toggleModal();
    // }
  return (
    // <div style={{height:'268px' }} onClick={() => onClickBigImg(props.item)}>
    //     <PictureStyle src={props.item.storyPictures}/>
    // </div>
    <>
      {showModal && (
        <ModalBackground onClick={closeModal}>
          <ModalContent>
            <ModalImage src={props.item.storyPictures} />
            {/* <PictureUrl>{props.item.pictureUrl}</PictureUrl> */}
          </ModalContent>
        </ModalBackground>
      )}
      <div style={{ height: '268px' }} onClick={() => openModal(props.item)}>
        <PictureStyle src={props.item.storyPictures} />
      </div>
    </>
  )
}
