import React from 'react';
import styled from 'styled-components';

const WrapTitle = styled.div`
  width: 186px;
  height: 268px;
  background-color: rgba(0, 0, 0, 0.6);
  color: #ffff;
  z-index: 1;
  position: absolute;
  top: 12%;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: small;
  font-family: Pretendard;
`;

//hover하면 뜨는 제목
export default function Title(props) {
  return <WrapTitle>{props.title}</WrapTitle>;
}
