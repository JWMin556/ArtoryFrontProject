import React from 'react'
import styled from 'styled-components';
const SelectExhibition = styled.div`
    //border : 1px solid red;
    width : 767px;
    height : 359px;
    box-shadow: 1px 2px 8px rgba(0,0,0,0.1); 
    margin-bottom : 4%;
    border-radius: 10px;
    font-size : 20px;
    font-weight : bold;
    font-family: 'Pretendard';
    padding : 2% 0 0 2%;
`;
export default function TodayExhibition () {
  return (
    <SelectExhibition>
            <div>오늘의 전시</div>
    </SelectExhibition>
  )
}
