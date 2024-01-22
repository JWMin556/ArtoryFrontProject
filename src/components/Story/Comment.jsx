import React from 'react';
import styled from 'styled-components';

export default function Comment({ items }) {
  return (
    <OpenedComment>
      {items.map((item) => {
        return <CommentListItem item={item}></CommentListItem>;
      })}
    </OpenedComment>
  );
}

function CommentListItem({ item }) {
  return (
    <div>
      <ProfileImg src={item.imgUrl} alt={item.title}></ProfileImg>
      <span>{item.title}</span>
      <p>{item.content}</p>
    </div>
  );
}

const OpenedComment = styled.div`
  //width: 100%;
  height: 250px;
  //border: 1px solid black;
  overflow: auto;
  border: none;
  border-radius: 10px;
  box-shadow: 1px 2px 8px #00000025;
  padding: 20px;
  text-align: start;
  background-color: white;
  font-family: 'Pretendard';
  font-weight: 400;
  margin-bottom: 30px;
  font-size: small;
`;
const ProfileImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 10%;
`;
