import React, { useState } from 'react';
import { createFood, getFoods } from '../../api';
import Reply from './Reply';
import styled from 'styled-components';
import rightVector from '../../Img/Story/rightVector_grey.png';
import downVector from '../../Img/Story/downVector_grey.png';
const INITIAL_VALUES = {
  //imgUrl: null,
  title: '',
  calorie: 0,
  content: '',
};
export default function ReplyInput() {
  const [isReplyOpen, setIsReplyOpen] = useState(false);
  const [items, setItems] = useState([]);
  const [values, setValues] = useState(INITIAL_VALUES);
  const [isSubmitting, setIsSubmitting] = useState(false); //로딩처리
  const [submittingError, setSubmittingError] = useState(null); //에러처리
  const [src, setSrc] = useState(rightVector);

  function sanitize(type, value) {
    switch (type) {
      case 'number':
        return Number(value) || 0;

      default:
        return value;
    }
  }
  const handleChange = (name, value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    //formData.append('imgUrl', values.imgUrl);
    formData.append('title', values.title);
    formData.append('calorie', values.calorie);
    formData.append('content', values.content);
    let result;
    try {
      setSubmittingError(null);
      setIsSubmitting(true);
      console.log(values);
      result = await createFood(formData);
      /*API 호출 시간 문제:
API 호출이 완료되기 전에 result.food를 읽으려고 시도하는 경우에도 이 에러가 발생할 수 있습니다.
createFood 함수의 동작을 확인하고, 비동기 처리에 대한 이해가 필요
밑 문장들을 try문 안으로 넣어야 함.*/
      const { food } = result; //꼭 food여야만 함.다른 이름 안됨.
      setValues(INITIAL_VALUES); //input창 비우기
      onSubmitSuccess(food); //반환값 return
    } catch (error) {
      setSubmittingError(error);
      console.log(error);
      return;
    } finally {
      setIsSubmitting(false);
    }
  };
  const onSubmitSuccess = (newItem) => {
    //화면에 바로 띄우기 위해서(새로고침 없이) items배열 맨 앞에 넣어줌
    setItems((prevItems) => [newItem, ...prevItems]);
  };

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    handleChange(name, sanitize(type, value));
  };

  const handleClick = async () => {
    setIsReplyOpen(!isReplyOpen);
    isReplyOpen ? setSrc(rightVector) : setSrc(downVector);
    const { foods } = await getFoods();
    setItems(foods);
    console.log(foods);
  };

  return (
    <>
      <ReplyButton onClick={handleClick}>
        <img src={src} alt={src} />
        <span>대댓글 달기</span>
      </ReplyButton>
      {isReplyOpen && (
        <>
          <Reply items={items} />
          <Form onSubmit={handleSubmit}>
            <ReplyText
              name="content"
              value={values.content}
              onChange={handleInputChange}
              placeholder="대댓글을 입력하세요"
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
  border-radius: 7px;
  padding: 5px 15px;
  z-index: 4;
`;
const Form = styled.form`
  display: flex;
  justify-content: center;
  position: relative;
  padding: 10px;
  background-color: #f0f0f0;
  border-radius: 7px 0 0 7px;
  height: 20px;
  margin-top: 10px;
  box-shadow: 1px 2px 8px #00000025;
  z-index: 10;

  //width: 100%;
`;
const ReplyText = styled.textarea`
  z-index: 3;
  resize: none;
  color: #616161;
  background-color: #f0f0f0;
  //padding-inline-start: 2%;
  font-family: 'Pretendard';
  width: 99%;
  height: 80%;
  border: none;
  outline: none;
`;

const ReplyButton = styled.button`
  background-color: white;
  //border: 1px solid black;
  border: none;
  color: #ababab;
  //width: 73px;
  font-family: 'Pretendard';
  font-size: bigger;
  font-weight: 600;

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
