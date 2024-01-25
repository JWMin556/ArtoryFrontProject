import React from 'react';
import close from '../../Img/Vector.png';
import open from '../../Img/Vector (1).png';
import styled from 'styled-components';
import { useState } from 'react';
import { createReview, getReviews } from '../../api';
import Comment from './Comment';
import Emoticon from './Emoticon';
const INITIAL_VALUES = {
  title: '조아',
  content: '',
  imgUrl: '',
};

export default function CommentInput() {
  const [isSubmitting, setIsSubmitting] = useState(false); //로딩처리
  const [submittingError, setSubmittingError] = useState(null); //에러처리
  const [commentIsOpen, setCommentIsOpen] = useState(true);
  const [items, setItems] = useState([]);
  const [values, setValues] = useState(INITIAL_VALUES); //form태그 submit value값들 useState하나로 관리
  const [prevIdx, setPrevIdx] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('content', values.content);
    formData.append('title', values.title);
    formData.append('imgUrl', values.imgUrl);
    let result;
    try {
      setSubmittingError(null);
      setIsSubmitting(true);
      console.log(values);
      result = await createReview(formData);
    } catch (error) {
      setSubmittingError(error);
      return;
    } finally {
      setIsSubmitting(false);
    }
    const { review } = result; //response로 post 데이터를 보내주기 때문에 가능한 것.
    onSubmitSuccess(review);
    setValues(INITIAL_VALUES);
  };

  //request 이후 비동기로 실행(반드시 callback형태로 실행)
  const onSubmitSuccess = (review) => {
    setItems((prevItems) => [review, ...prevItems]);
  };

  function openComment() {
    setCommentIsOpen(!commentIsOpen);
  }

  const handleLoadClick = async () => {
    setCommentIsOpen(!commentIsOpen);
    const { reviews } = await getReviews();
    setItems(reviews);
  };

  //나중에 form태그는 따로 컴포넌트로 빼는 걸로
  return (
    <CommentWrap>
      <div className="댓글작성">
        {commentIsOpen ? (
          <OpenBtn onClick={handleLoadClick}>
            댓글 작성{'  '}
            <img style={{ width: '12px' }} src={close} alt="화살표" />
          </OpenBtn>
        ) : (
          <>
            <OpenedComment>
              <div style={{ paddingLeft: '10px' }}>
                <div style={{ cursor: 'pointer' }} onClick={openComment}>
                  <span> 댓글 작성{'  '}</span>
                  <img style={{ width: '12px' }} src={open} alt="아래화살표" />
                </div>
                <p
                  style={{
                    color: '#ababab',
                    fontSize: 'smaller',
                    margin: '5px 0 10px',
                  }}
                >
                  전시에 대한 공감 표시를 선택해주세요
                </p>
                <Emoticon prevIdx={prevIdx} setPrevIdx={setPrevIdx} />
              </div>

              <Form onSubmit={handleSubmit}>
                <CommentText
                  name="content"
                  value={values.content}
                  className="CommentForm"
                  onChange={handleChange}
                ></CommentText>
                <Submit type="submit" disabled={isSubmitting}>
                  저장
                </Submit>
                {submittingError?.message && (
                  <div>{submittingError.message}</div>
                )}
              </Form>
            </OpenedComment>
            <Comment items={items} />
          </>
        )}
      </div>
      <div className="댓글 보기"></div>
    </CommentWrap>
  );
}

const Form = styled.form`
  display: flex;
  justify-content: center;
  position: relative;
  padding: 10px;
  background-color: #f0f0f0;
  border-radius: 20px;
  height: 150px;
  margin-top: 10px;
`;
const CommentText = styled.textarea`
  resize: none;
  color: #616161;
  background-color: #f0f0f0;
  //padding-inline-start: 2%;
  font-family: 'Pretendard';
  width: 99%;
  height: 80%;
  border: none;
  outline: none;

  //스크롤 관련
  overflow: auto;
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #d9d9d9;
    border-radius: 10px;
    background-clip: padding-box;
    border: 2px solid transparent;
  }
`;
const Submit = styled.button`
  position: absolute; //상위요소를 relative로
  bottom: 10%;
  right: 10px; /* 여기서 10px로 설정 */
  font-family: 'Pretendard';
  font-weight: 600;
  border: none;
  background-color: black;
  color: white;
  border-radius: 7px;
  padding: 5px 30px;
`;

const CommentWrap = styled.div`
  margin-left: 10%;
`;
const OpenBtn = styled.button`
  width: 100%;
  //height: 60px;
  //border: 1px solid black;
  border: none;
  border-radius: 20px 0 0 20px;
  box-shadow: 1px 2px 8px #00000025;

  text-align: start;
  background-color: white;
  font-family: 'Pretendard';
  font-weight: bold;
  font-size: 15px;
  margin-bottom: 30px;
  padding: 20px 30px;
`;
const OpenedComment = styled.div`
  border: none;
  border-radius: 20px;
  box-shadow: 1px 2px 8px #00000025;
  padding: 20px;
  text-align: start;
  background-color: white;
  font-family: 'Pretendard';
  font-weight: bold;
  margin-bottom: 30px;
  margin-right: 10px;
  font-size: 15px;
  //height: 230px;
`;
