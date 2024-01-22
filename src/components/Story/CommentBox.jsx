import React, { Suspense } from 'react';
import close from '../../Img/Vector.png';
import open from '../../Img/Vector (1).png';
import styled from 'styled-components';
import { useState } from 'react';
import emoticon from '../../Img/Frame 218.png';
import { getReviews } from '../../api';
import Comment from './Comment';

export default function CommentBox() {
  const [commentIsOpen, setCommentIsOpen] = useState(true);
  const [items, setItems] = useState([]);
  const [content, setContent] = useState('');
  function openComment() {
    setCommentIsOpen(!commentIsOpen);
  }

  const handleLoadClick = async () => {
    setCommentIsOpen(!commentIsOpen);
    const { reviews } = await getReviews();
    setItems(reviews);
  };
  const handleContentChange = (e) => {
    setContent(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      content,
    });
  };
  return (
    <CommentClose>
      <div className="댓글작성">
        {commentIsOpen ? (
          <OpenBtn onClick={handleLoadClick}>
            댓글 작성
            <img src={close} alt="화살표" />
          </OpenBtn>
        ) : (
          <>
            <OpenedComment>
              <div onClick={openComment}>
                <span> 댓글 작성</span>
                <img src={open} alt="화살표" />
              </div>
              <div style={{ color: '#ababab', fontSize: 'smaller' }}>
                전시에 대한 공감 표시를 선택해주세요{' '}
              </div>
              <div>
                <img src={emoticon} alt="이모티콘" />
              </div>
              <form onSubmit={handleSubmit}>
                <CommentText
                  className="CommentForm"
                  onChange={handleContentChange}
                ></CommentText>
                <Submit type="submit">저장</Submit>
              </form>
            </OpenedComment>
            <Comment items={items} />
          </>
        )}
      </div>
      <div className="댓글 보기"></div>
    </CommentClose>
  );
}

const Submit = styled.button`
  position: relative;
  bottom: 40px;
  left: 50%;
  font-family: 'Pretendard';
  border: none;
  background-color: black;
  color: white;
  border-radius: 5px;
  padding: 5px 10px;
`;
const CommentText = styled.textarea`
  resize: none;
  color: #616161;

  padding-inline-start: 2%;
  padding-top: 10px;
  font-family: 'Pretendard';
  width: 100%;
  border: none;
  outline: none;
  border-radius: 10px;
  background-color: #f0f0f0;
  height: 150px;
  margin-top: 20px;
`;
const CommentClose = styled.div`
  margin-left: 10%;
`;
const OpenBtn = styled.button`
  width: 100%;
  height: 50px;
  //border: 1px solid black;
  border: none;
  border-radius: 10px;
  box-shadow: 1px 2px 8px #00000025;

  text-align: start;
  background-color: white;
  font-family: 'Pretendard';
  font-weight: bold;
  margin-bottom: 30px;
  padding-left: 5%;
  font-size: small;
`;
const OpenedComment = styled.div`
  //width: 100%;
  //height: 100px;
  //border: 1px solid black;
  border: none;
  border-radius: 10px;
  box-shadow: 1px 2px 8px #00000025;
  padding: 20px;
  text-align: start;
  background-color: white;
  font-family: 'Pretendard';
  font-weight: bold;
  margin-bottom: 30px;
  font-size: small;
  height: 230px;
`;
