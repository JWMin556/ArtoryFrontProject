import face_b1 from '../../Img/Story/face_b1.svg';
import face_b2 from '../../Img/Story/face_b2.svg';
import face_b3 from '../../Img/Story/face_b3.svg';
import face_b4 from '../../Img/Story/face_b4.svg';
import face_b5 from '../../Img/Story/face_b5.svg';
import face_b6 from '../../Img/Story/face_b6.svg';
import face_b7 from '../../Img/Story/face_b7.svg';
import face_b8 from '../../Img/Story/face_b8.svg';
import face_b9 from '../../Img/Story/face_b9.svg';
import face_g1 from '../../Img/Story/face_g1.svg';
import face_g2 from '../../Img/Story/face_g2.svg';
import face_g3 from '../../Img/Story/face_g3.svg';
import face_g4 from '../../Img/Story/face_g4.svg';
import face_g5 from '../../Img/Story/face_g5.svg';
import face_g6 from '../../Img/Story/face_g6.svg';
import face_g7 from '../../Img/Story/face_g7.svg';
import face_g8 from '../../Img/Story/face_g8.svg';
import face_g9 from '../../Img/Story/face_g9.svg';

import styled from 'styled-components';
import React from 'react';
import { useState } from 'react';
const greyEmoticons = [
  face_g1,
  face_g2,
  face_g3,
  face_g4,
  face_g5,
  face_g6,
  face_g7,
  face_g8,
  face_g9,
];
const blackEmoticons = [
  face_b1,
  face_b2,
  face_b3,
  face_b4,
  face_b5,
  face_b6,
  face_b7,
  face_b8,
  face_b9,
];
export default function Emoticon({ prevIdx, setPrevIdx }) {
  const [emoticons, setEmoticons] = useState(greyEmoticons);
  //const [prevIdx, setPrevIdx] = useState(0);
  const toggleEmoticon = (index) => {
    setEmoticons((prevEmoticons) => {
      const newEmoticons = [...prevEmoticons];
      if (prevIdx !== index) {
        newEmoticons[prevIdx] = greyEmoticons[prevIdx];
      }
      setPrevIdx(index);
      newEmoticons[index] =
        newEmoticons[index] === greyEmoticons[index]
          ? blackEmoticons[index]
          : greyEmoticons[index]; // Toggle between grey and black
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
  margin-top: 20px;
  display: flex;
`;
