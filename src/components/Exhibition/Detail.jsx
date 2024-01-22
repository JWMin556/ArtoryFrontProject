import React from 'react';
import styled from 'styled-components';
const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w1280/';
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 25%;
`;
export const WrapDetail = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-evenly;
  margin-top: 5%;
`;
export const IMG = styled.img`
  width: 300px;
  height: 450px;
`;
export const WrapInfo = styled.div`
  margin-left: 0;
`;

export const Title = styled.p`
  font-size: 24px;
  font-weight: 900;
  width: 200%;
`;

export default function Detail(props) {
  return (
    <Container>
      <WrapDetail>
        <IMG src={`${IMG_BASE_URL}${props.img}`}></IMG>
        <WrapInfo>
          <Title>{props.title}</Title>
          <p>장소</p>
          <p>주소</p>
          <p>휴관</p>
          <p>기간</p>
          <p>시간</p>
          <p>관람연령</p>
          <p>가격</p>
        </WrapInfo>
      </WrapDetail>
    </Container>
  );
}
