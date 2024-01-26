import React from 'react';
import styled from 'styled-components';
import ReplyInput from './ReplyInput';
export default function Comment({ items }) {
  return (
    <Wrap>
      <Comments>
        {items.map((item) => {
          return (
            <CommentStyled>
              <CommentListItem item={item}></CommentListItem>
            </CommentStyled>
          );
        })}
      </Comments>
    </Wrap>
  );
}

function CommentListItem({ item }) {
  return (
    <div key={item.id} style={{ display: 'flex' }}>
      <ProfileImg src={item.imgUrl} alt={item.id}></ProfileImg>
      <RightComment>
        <UserNickName>{item.title}</UserNickName>

        <img style={{ width: '30px' }} src="" alt="표정임티" />
        <CommentContent>{item.content}</CommentContent>

        <ReplyInput />
      </RightComment>
    </div>
  );
}

const Wrap = styled.div`
  //width: 100%;

  border: none;
  border-radius: 20px;
  box-shadow: 1px 2px 8px #00000025;
  padding: 20px 0 20px 30px;
  text-align: start;
  background-color: white;
  font-family: 'Pretendard';
  font-weight: 400;
  margin-bottom: 80px;
  margin-right: 10px;
  font-size: small;
`;
const RightComment = styled.div`
  flex: 1;
  margin-left: 20px;
  color: black;
  font-weight: 500;
`;
const CommentContent = styled.span`
  margin-left: 5px;
`;
const UserNickName = styled.p`
  font-size: medium;
  font-weight: bold;
  padding: 5px 0 10px;
`;
const CommentStyled = styled.div`
  margin: 20px 0;
  z-index: 8;
  position: relative;
  //left: 8px;
  //padding-right: -8px;
  // border: 1px solid red;
`;
const Comments = styled.div`
  //width: 100%;
  height: 350px;
  //border: 1px solid black;
  //스크롤 관련

  overflow: auto;
  &::-webkit-scrollbar {
    z-index: -2;
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    z-index: -2;
    background-color: #d9d9d9;
    border-radius: 10px;
    background-clip: padding-box;
    border: 3px solid transparent;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
  border: none;
  padding: 10px;
  text-align: start;
  background-color: white;
  font-family: 'Pretendard';
  font-weight: 400;
  //margin-bottom: 80px;
  margin-right: 10px;
  font-size: small;
`;
const ProfileImg = styled.img`
  width: 55px;
  height: 55px;
  border-radius: 8px;
`;
