import styled from 'styled-components';

export default function DeleteModal({ setModal, handleDelete }) {
  return (
    <ModalWrap>
      {' '}
      <Modal className="모달">
        {' '}
        <Text>댓글을 삭제하시겠습니까?</Text>
        <div>
          <ModalBtn onClick={handleDelete}>예</ModalBtn>
          <ModalBtn onClick={() => setModal(false)}>아니요</ModalBtn>
        </div>
      </Modal>
    </ModalWrap>
  );
}

const Text = styled.div`
  font-size: 2.2rem;
  font-weight: 600;
`;
const ModalWrap = styled.div`
  z-index: 50;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgb(0, 0, 0, 0.83);
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Modal = styled.div`
  background-color: white;
  width: 75%;
  max-width: 770px;
  min-width: 450px;
  height: 270px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;
const ModalBtn = styled.button`
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
