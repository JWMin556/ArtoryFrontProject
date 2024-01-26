import React from 'react';

import styled from 'styled-components';

const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w1280/';
const PosterStyle = styled.img`
  border-radius: 10px;
  box-shadow: 5px 5px 8px #d9d9d9;
`;
export default function ProfileImg(props) {
  //const navigate = useNavigate();
  const onClickDetail = (item) => {
    //navigate(`/story/${item.title}`, { state: { item } });
  };
  //나중에 item.title부분 유저 페이지로 변경

  return (
    <div onClick={() => onClickDetail(props.item)}>
      <PosterStyle
        style={{ height: props.h, width: props.w }}
        src={IMG_BASE_URL + props.item.poster_path}
      />
    </div>
  );
}
