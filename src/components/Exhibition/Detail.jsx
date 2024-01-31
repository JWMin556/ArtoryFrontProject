import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import KakaoMap from './KakaoMap'
const url = 'http://3.39.39.6:8080/api/exhibitions/';

export const WrapDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: space-between; // 각 줄 사이의 간격 조절
  // margin-bottom: 10%;
`;

export const IMG = styled.img`
  //border : 1px solid blue;
  width: 300px;
  height: 450px;
  position : relative;
  left : 25%;
`;

export const WrapInfo = styled.div`
font-family: 'Pretendard';
//border : 1px solid green;
  width : 398px;
  height : 100%;
  display : flex;
  flex-direction : column;
  align-items: flex-start; /* 아이템을 왼쪽으로 정렬 */
  justify-content: space-between;
  position : relative;
  right : 4%;
`;
export const WrapImg = styled.div``

export const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
  width: 100%;
  text-align : center;

`;
export const DetailInfo = styled.div`
  width : 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center; /* 아이템을 세로 중앙으로 정렬 */
`;
export const Key = styled.span`
  width : 20%;
  margin-left : 4%;
  font-size : 15px;
  font-weight : bold;
  color : #4D4D4D;
`;
export const Value = styled.span`
width : 80%;
text-align : start;
margin-left : 30%;
font-size : 12px;
color : #616161;
`;
export const ImgAndInfo = styled.div`
  margin-top : 5%;
  //border : 1px solid red;
  width: 100%;
  height : 450px;
  display: flex;
  justify-content : space-evenly;
`;


export default function Detail(props) {
  const [info, setInfo] = useState(null);
  const token = localStorage.getItem('Token');

  console.log("전시회 ID: ", props.id);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${url}${props.id}`, {
          headers: {
            'Accept': '*/*',
            'Authorization': `Bearer ${token}`,
            'content-type': 'application/json',
          }
        });
        setInfo(response.data);
      } catch (error) {
        console.error('Error fetching data:', error.response.data);
      }
    };

    fetchData();
  }, [props.id, token]);

  console.log(info);

  return (
    //<Container>
      <WrapDetail>
        <ImgAndInfo>
          <WrapImg>
            <IMG src={props.img} alt="Exhibition Image" />
          </WrapImg>
          <WrapInfo>
            <Title>{props.title}</Title>
            <DetailInfo><Key>장소</Key><Value>{info?.exhibitionPlace}</Value></DetailInfo>
            <DetailInfo><Key>주소</Key><Value>{info?.exhibitionAddress}</Value></DetailInfo>
            <DetailInfo><Key>휴관</Key><Value></Value></DetailInfo>
            <DetailInfo><Key>기간</Key><Value>{info?.exhibitionDuration}</Value></DetailInfo>
            <DetailInfo><Key>시간</Key><Value>{info?.exhibitionViewingTime}</Value></DetailInfo>
            <DetailInfo><Key>관람연령</Key><Value>{info?.exhibitionViewingAge}</Value></DetailInfo>
            <DetailInfo><Key>가격</Key><Value>{info?.exhibitionPrice}</Value></DetailInfo>
          </WrapInfo>
        </ImgAndInfo>
          <KakaoMap 
                Longitude={info?.exhibitionLongitude}
                Latitude={info?.exhibitionLatitude}
                />
        
        </WrapDetail>
    //</Container>
  );
}
