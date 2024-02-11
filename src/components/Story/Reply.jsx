import React, { useState } from 'react';
import styled from 'styled-components';
import { CgCornerDownRight } from 'react-icons/cg';
import { deleteReply, patchReply } from '../API/story_API';
import DeleteModal from './DeleteModal';

export default function Reply({ userId, items, commentId, loadComments }) {
  return (
    <Comments>
      {items.map((item, index) => {
        return (
          <CommentStyled key={index}>
            <CommentListItem
              commentId={commentId}
              userId={userId}
              item={item}
              loadComments={loadComments}
            ></CommentListItem>
          </CommentStyled>
        );
      })}
    </Comments>
  );
}

function CommentListItem({ commentId, userId, item, loadComments }) {
  const [isPatch, setIsPatch] = useState(false);
  const [content, setContent] = useState(item.subCommentContext);
  const [modal, setModal] = useState(false);

  //댓글 삭제
  const handleDelete = async () => {
    try {
      console.log(commentId);
      console.log(item.subCommentId);
      console.log('item', item);
      await deleteReply(commentId, item.subCommentId);
      await loadComments(); // 대댓글 삭제 후 최신 코멘트 리스트를 다시 불러와서 렌더링
    } catch (error) {
      console.error('Error fetcing data:', error.response);
    }
  };
  //대댓글 수정
  const handlePatch = async (e) => {
    e.preventDefault();
    setIsPatch(false);
    try {
      await patchReply(commentId, item.subCommentId, content);
      await loadComments(); // 대댓글 수정 후 최신 코멘트 리스트를 다시 불러와서 렌더링
    } catch (error) {
      console.error('Error fetcing data:', error.response);
    }
  };
  return (
    <div style={{ display: 'flex' }}>
      <CgCornerDownRight
        style={{ verticalAlign: 'middle' }}
        size={25}
        color="#ababab"
      />
      {!isPatch ? (
        <>
          <img
            src={item.memberProfile}
            alt={item.memberNickname}
            style={{
              verticalAlign: 'middle',
              width: '35px',
              height: '35px',
              margin: '0 5px',
            }}
          />
          <div>
            <UserNickName>{item.memberNickname}</UserNickName>

            <span style={{ verticalAlign: 'middle' }}>
              {item.subCommentContext}
            </span>
            {userId === item.memberId && (
              <ChangeWrap>
                <ChangeBtn onClick={() => setIsPatch(true)}>수정</ChangeBtn>|
                <ChangeBtn onClick={() => setModal(true)}>삭제</ChangeBtn>
              </ChangeWrap>
            )}
          </div>
          {modal ? (
            <DeleteModal setModal={setModal} handleDelete={handleDelete} />
          ) : null}
        </>
      ) : (
        <Form onSubmit={handlePatch}>
          <ReplyText
            name="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="답글을 입력하세요"
          ></ReplyText>
          <Submit type="submit">완료</Submit>
        </Form>
      )}
    </div>
  );
}

const Submit = styled.button`
  position: absolute; //상위요소를 relative로
  bottom: 20%;
  right: 10px; /* 여기서 10px로 설정 */
  font-family: 'Pretendard';
  font-weight: 600;
  border: none;
  background-color: black;
  color: white;
  padding: 5px 15px;
  z-index: 4;
`;
const Form = styled.form`
  display: flex;
  justify-content: center;
  position: relative;
  padding: 10px;
  background-color: #f4f5f7;
  height: 20px;
  margin-top: 10px;
  //margin-right: 10px;
  /* box-shadow: 1px 2px 8px #00000025; */
  z-index: 10;
  width: 90%;

  //width: 100%;
`;
const ReplyText = styled.textarea`
  z-index: 3;
  resize: none;
  color: #616161;
  background-color: #f4f5f7;
  font-family: 'Pretendard';
  width: 99%;
  height: 80%;
  border: none;
  outline: none;
`;
const UserNickName = styled.p`
  font-size: small;
  font-weight: bold;
  padding: 2px 0 5px;
`;
const ChangeWrap = styled.span`
  color: #a6a9af;
  margin-left: 10px;
`;
const ChangeBtn = styled.button`
  font-family: 'Pretendard';
  font-weight: 600;
  background-color: white;
  border: none;
  color: #a6a9af;
`;
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
