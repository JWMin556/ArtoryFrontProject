import React from 'react';

import styled from 'styled-components';

const PosterStyle = styled.img`
  border-radius: 10px;
  box-shadow: 5px 5px 8px #d9d9d9;
`;
export default function ProfileImg(props) {
  //const navigate = useNavigate();
  const onClickDetail = (item) => {
    //navigate(`/user/${item.title}`, { state: { item } });
  };
  //나중에 item.title부분 유저 페이지로 변경

  return (
    <div onClick={() => onClickDetail(props.item)}>
      <PosterStyle
        style={{ height: props.h, width: props.w }}
        src={props.item.memberProfile}
        alt={props.item.storyId}
      />
    </div>
  );
}
