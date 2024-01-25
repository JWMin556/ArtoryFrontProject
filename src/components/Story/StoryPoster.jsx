import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w1280/';
const PosterStyle = styled.img`
  width: 186px;
  height: 268px;
  border-radius: 10px;
  box-shadow: 5px 5px 8px #d9d9d9;
`;
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
export default function StoryPoster(props) {
  const navigate = useNavigate();
  const [isShowTitle, setIsShowTitle] = useState(false);
  const onClickDetail = (item) => {
    props.source === 'story'
      ? navigate(`/story/${item.id}`, { state: { item } })
      : navigate(`/exhibitiondetail/${item.title}`, { state: { item } });
  };
  const handleMouseOverImg = () => {
    setIsShowTitle(true);
  };
  const handleMouseOutImg = () => {
    setIsShowTitle(false);
  };
  return (
    <div
      onMouseOver={handleMouseOverImg}
      onMouseOut={handleMouseOutImg}
      onClick={() => onClickDetail(props.item)}
    >
      <PosterStyle
        style={{ height: props.h, width: props.w }}
        src={IMG_BASE_URL + props.item.poster_path}
      />
      {isShowTitle && <WrapTitle>{props.item.title}</WrapTitle>}
    </div>
  );
}
