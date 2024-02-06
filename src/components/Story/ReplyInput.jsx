import React, { useEffect, useState } from 'react';
import { createFood, getFoods } from '../../api';
import Reply from './Reply';
import styled from 'styled-components';
import rightVector from '../../Img/Story/rightVector_grey.png';
import downVector from '../../Img/Story/downVector_grey.png';
import { createReply } from '../API/story_API';
const INITIAL_VALUES = {
  content: '',
};
export default function ReplyInput(props) {
  const [isReplyOpen, setIsReplyOpen] = useState(false);
  const [values, setValues] = useState(INITIAL_VALUES);
  const [isSubmitting, setIsSubmitting] = useState(false); //로딩처리
  const [submittingError, setSubmittingError] = useState(null); //에러처리
  const [src, setSrc] = useState(downVector);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setSubmittingError(null);
      setIsSubmitting(true);
      await createReply(props.item.commentId, values.content);

      // 대댓글 작성 후 최신 코멘트 리스트를 다시 불러와서 렌더링
      await props.loadComments();
    } catch (error) {
      setSubmittingError(error);
      return;
    } finally {
      setIsSubmitting(false);
    }

    setValues(INITIAL_VALUES);
  };

  const handleClick = async () => {
    setIsReplyOpen(!isReplyOpen);
    isReplyOpen ? setSrc(downVector) : setSrc(downVector);
  };

  return (
    <>
      <Reply
        userId={props.userId}
        memberProfile={props.item.memberProfile}
        items={props.item.subCommentResponseDtoList}
        commentId={props.item.commentId}
        loadComments={props.loadComments}
      />
      <ReplyButton onClick={handleClick}>
        <img src={src} alt={src} />
        <span>댓글 달기</span>
      </ReplyButton>
      {isReplyOpen && (
        <>
          <Form onSubmit={handleSubmit}>
            <ReplyText
              name="content"
              value={values.content}
              onChange={handleChange}
              placeholder="댓글을 입력하세요"
            ></ReplyText>
            <Submit type="submit" disabled={isSubmitting}>
              완료
            </Submit>
            {submittingError?.message && <div>{submittingError.message}</div>}
          </Form>
        </>
      )}
    </>
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

const ReplyButton = styled.button`
  display: block;
  background-color: white;
  //border: 1px solid black;
  border: none;
  color: #ababab;
  //width: 73px;
  font-family: 'Pretendard';
  font-size: bigger;
  font-weight: 600;
  margin-top: 15px;
  span {
    vertical-align: middle; /* span의 기준선을 중앙에 맞춤 */
  }

  img {
    margin-right: 3px;
    max-height: 14px;
    max-width: 14px;
    vertical-align: middle; /* img의 기준선을 중앙에 맞춤 */
  }
`;
