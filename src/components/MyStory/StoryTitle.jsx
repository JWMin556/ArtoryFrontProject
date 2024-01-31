import React from 'react'
import styled from 'styled-components'
const InputTitle = styled.input`
    //border : 1px solid blue;
    //padding-left : 5%;
    font-family: 'Pretendard';
    width : 767px;
    height : 55px;
    border: none;
    border-radius: 10px;
    box-shadow: 1px 2px 8px #f3f3f3; 
    color : #ababab;
    margin-bottom : 8%;
`;
export default function StoryTitle() {
  return (
    <div>
        <InputTitle placeholder='제목을 직접 작성해주세요'/>
    </div>
  )
}
