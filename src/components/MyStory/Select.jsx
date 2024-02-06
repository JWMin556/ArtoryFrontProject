import styled from 'styled-components';
import React from 'react';
import { useState } from 'react';

export default function Select({
  onSelect,
  greyBox,
  box,
  setBox,
  blackBox,
}) {
  const [prevIdx, setPrevIdx] = useState();
  //const [prevIdx, setPrevIdx] = useState(0);
  const toggleBox = (index) => {
    setBox((prevBox) => {
      const newBox = [...prevBox];
      if (prevIdx !== index) {
        newBox[prevIdx] = greyBox[prevIdx]; //기존에 선택된 박스 색 원래대로 (블랙->그레이)
      }
      setPrevIdx(index); //누른 박스의 인덱스로 변경
      newBox[index] = //누른 박스의 색깔 변경 (그레이 -> 블랙) , 같은 걸 선택해도 이 과정을 거치지만 달라지는 건 없음 (블랙->블랙)
      newBox[index] === greyBox[index] 
          ? blackBox[index]
          : greyBox[index]; // Toggle between grey and black
      // 이 부분에서 선택된 인덱스를 상위 컴포넌트로 전달합니다.
      onSelect(newBox[index].props.children === blackBox[index].props.children ? index : -1);
      //console.log(newBox);
      return newBox;
    });
  };

  return (
    <WrapBox>
      {box.map((src, index) => (
        <Box
        key={index}
        onClick={() => toggleBox(index)}
        >
        {box[index]}
        </Box>
      ))}
    </WrapBox>
  );
}

const Box = styled.span`
    margin-right : 1%;
`;

const WrapBox = styled.div`
    display: flex;
    flex-wrap: wrap;
`;
