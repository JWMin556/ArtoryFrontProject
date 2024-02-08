import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';

const StyledModal = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    zIndex: "1000", // 기존보다 더 높은 z-index로 설정
  },
  content: {
    position: "relative", // 절대 위치에서 상대 위치로 변경
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "10px",
    border: "none",
    maxWidth: "40%", // 모달이 너무 커지지 않도록 최대 너비 설정
  },
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px; // 내부 여백 추가
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export default function BigImg({ imgsrc, isClick }) {
  const [isOpenModal, setIsOpenModal] = useState(isClick);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // 모달이 열릴 때 body 요소에 overflow: hidden 스타일 적용하여 스크롤 막기
    if (isOpenModal) {
      document.body.style.overflow = 'hidden';
    } else {
      // 모달이 닫힐 때 body 요소의 overflow 스타일 초기화하여 스크롤 복원
      document.body.style.overflow = 'auto';
    }

    // 컴포넌트가 언마운트될 때 스타일 초기화하여 메모리 누수 방지
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpenModal]);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imgsrc.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + imgsrc.length) % imgsrc.length);
  };

  return (
    <Modal isOpen={isOpenModal} onRequestClose={() => setIsOpenModal(false)} style={StyledModal} shouldCloseOnOverlayClick={true}>
      <Container>
          <Image src={imgsrc} alt='DetailImage' />
          <ButtonContainer>
            <Button onClick={handlePrevImage}>이전</Button>
            <Button onClick={handleNextImage}>다음</Button>
        </ButtonContainer>
      </Container>
    </Modal>
  );
}

// import React, { useState } from 'react';
// import styled from 'styled-components';
// import Modal from 'react-modal';

// const StyledModal = {
//   overlay: {
//     backgroundColor: "rgba(0, 0, 0, 0.8)",
//     zIndex: "1000",
//   },
//   content: {
//     position: "relative",
//     top: "50%",
//     left: "50%",
//     transform: "translate(-50%, -50%)",
//     borderRadius: "10px",
//     border: "none",
//     maxWidth: "80%",
//     maxHeight: "80%",
//   },
// };

// const Container = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
//   padding: 20px;
// `;

// const Image = styled.img`
//   max-width: 100%;
//   max-height: 100%;
//   object-fit: contain;
// `;

// const ButtonContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   width: 100%;
//   margin-top: 20px;
// `;

// const Button = styled.button`
//   padding: 10px 20px;
//   background-color: #007bff;
//   color: #ffffff;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
// `;

// export default function BigImg({ images, selectedImageIndex, closeModal }) {
//   const [currentIndex, setCurrentIndex] = useState(selectedImageIndex);

//   const handleNextImage = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const handlePrevImage = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
//   };

//   return (
//     <Modal isOpen={true} onRequestClose={closeModal} style={StyledModal} shouldCloseOnOverlayClick={true}>
//       <Container>
//         <Image src={images[currentIndex]} alt={`Image ${currentIndex}`} />
//         <ButtonContainer>
//           <Button onClick={handlePrevImage}>이전</Button>
//           <Button onClick={handleNextImage}>다음</Button>
//         </ButtonContainer>
//       </Container>
//     </Modal>
//   );
// }
