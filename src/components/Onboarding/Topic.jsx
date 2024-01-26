import { useState } from 'react';
import styled from 'styled-components';

export default function Topic(props) {
  // 클릭 상태를 추적하는 상태 변수
  const [isClicked, setIsClicked] = useState(false);
  // 클릭 이벤트 핸들러
  const handleClick = () => {
    props.onClick(props.genre, props.index); //props로 받아온 onClick함수 실행
    setIsClicked(!isClicked);
  };
  return (
    <Button className={isClicked ? 'clicked' : ''} onClick={handleClick}>
      {props.genre}
    </Button>
  );
}

const Button = styled.button`
  cursor: pointer;
  font-size: 130%;
  font-weight: 400;
  font-family: 'Pretendard';
  margin: 10px 5px;
  width: 18%;
  height: 35%;
  border-radius: 10px;
  border: none;
  background-color: white;
  box-shadow: 1px 2px 8px #f3f3f3;
  color: #a8a7a7;
  &.clicked {
    background-color: black;
    color: white;
  }
`;
