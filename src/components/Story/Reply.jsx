import React from 'react';
import styled from 'styled-components';
import { CgCornerDownRight } from 'react-icons/cg';

export default function Reply({ memberProfile, items }) {
  return (
    <Comments>
      {items.map((item, index) => {
        return (
          <CommentStyled key={index}>
            <CommentListItem
              memberProfile={memberProfile}
              item={item}
            ></CommentListItem>
          </CommentStyled>
        );
      })}
    </Comments>
  );
}

function CommentListItem({ memberProfile, item }) {
  return (
    <div>
      <CgCornerDownRight
        style={{ verticalAlign: 'middle' }}
        size={25}
        color="#ababab"
      />
      <img
        src={memberProfile}
        alt={item.memberNickname}
        style={{
          verticalAlign: 'middle',
          width: '35px',
          height: '35px',
          borderRadius: '8px',
          margin: '0 5px',
        }}
      />
      <span style={{ verticalAlign: 'middle' }}>{item.subCommentContext}</span>
    </div>
  );
}
const CommentStyled = styled.div`
  margin: 10px;
  //border: 1px solid red;
`;
const Comments = styled.div`
  //height: 80px;
  overflow: auto;
  border: none;
  //padding: 20px 0;
  text-align: start;
  background-color: white;
  font-family: 'Pretendard';
  font-weight: 400;
  //margin-bottom: 30px;
  font-size: small;
  width: 90%;
  //스크롤 관련
  overflow: auto;
  &::-webkit-scrollbar {
    width: 8px;
    z-index: 1;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #d9d9d9;
    border-radius: 10px;
    background-clip: padding-box;
    border: 2px solid transparent;
  }
`;

/*<ProfileImg src={item.imgUrl} alt={item.title}></ProfileImg>
const ProfileImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 10%;
`;
*/
