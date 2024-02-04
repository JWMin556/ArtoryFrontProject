// import weather_b1 from '../../Img/MyStory/weather.b1.svg'
// import weather_b2 from '../../Img/MyStory/weather.b2.svg'
// import weather_b3 from '../../Img/MyStory/weather.b3.svg'
// import weather_b4 from '../../Img/MyStory/weather.b4.svg'
// import weather_b5 from '../../Img/MyStory/weather.b5.svg'


import styled from 'styled-components';
import React from 'react';
import { useState } from 'react';
// const blackEmoticons = [
//     weather_b1,
//     weather_b2,
//     weather_b3,
//     weather_b4,
//     weather_b5
// ];

export default function Emoticon({
  onSelect,
  greyEmoticons,
  emoticons, //그레이 이모티콘 배열
  setEmoticons,
  selectweather //블랙 이모티콘 배열 
}) {
    
  const [prevIdx, setPrevIdx] = useState(); //누른 이모티콘 인덱스
  //const [prevIdx, setPrevIdx] = useState(0);
  const toggleEmoticon = (index) => {
    setEmoticons((prevEmoticons) => {
      const newEmoticons = [...prevEmoticons];
      if (prevIdx !== index) {
        newEmoticons[prevIdx] = greyEmoticons[prevIdx]; //기존에 눌러져 있는 이모티콘을 누르기 전 상태로 변경 (블랙->그레이)
      }
      setPrevIdx(index); //누른 이모티콘의 인덱스 변경
      newEmoticons[index] = //누를 이모티콘의 색깔 변경 (그레이 -> 블랙)
        newEmoticons[index] === greyEmoticons[index]
          ? selectweather[index]
          : greyEmoticons[index]; // Toggle between grey and black

      // 이 부분에서 선택된 인덱스를 상위 컴포넌트로 전달합니다.
      onSelect(newEmoticons[index] === selectweather[index] ? index : -1);
      return newEmoticons;
    });
  };

  return (
    <Emoticons>
      {emoticons.map((src, index) => (
        <EmoticonImg
          key={index}
          src={src}
          alt={`face ${index + 1}`}
          onClick={() => toggleEmoticon(index)}
        />
      ))}
    </Emoticons>
  );
}

const EmoticonImg = styled.img`
  margin-right: 15px;
  height: 25px;
  cursor: pointer;
`;

const Emoticons = styled.div`
  //margin-top: 20px;
  display: flex;
`;
