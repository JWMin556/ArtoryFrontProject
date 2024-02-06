import React from 'react';
import styled from 'styled-components';

import TextEditor from './TextEditor';
import EmojiPicker from './EmojiPicker';
const WriteBox = styled.div`
  width: 820px;
  //height: 713px;
  /* height: fit-content; */
  box-shadow: 1px 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 10%;
  /* border: 1px solid yellow; */
  border: none;
  font-family: 'Pretendard';
  position: relative;
  padding-bottom: 1px;
`;
const Bottom = styled.span`
  z-index: 1000;
  height: 20px;
  width: 130px;
  background: white;
  position: absolute;
  /* bottom: 31px; */
  bottom: 10px;
  right: 0;
`;
const Right = styled.div`
  z-index: 100;
  background: none;
  border-left: 1px solid white;
  height: 100%;
  position: absolute;
  top: 37.86px;
  right: 0;
`;
const Left = styled.div`
  z-index: 100;
  background: none;
  border-left: 7px solid white;
  height: 100%;
  position: absolute;
  top: 38.86px;
  left: 0;
`;
const Top = styled.div`
  z-index: 100;
  width: 100%;
  background: none;
  border-bottom: 5px solid white;
  position: absolute;
  top: 237.86px;
`;
const Keyword = styled.div`
  padding: 30px 40px;
  border: none;
  z-index: 101;
  /* width: 100%; */
  max-width: 800px;
  background: none;
  /* border-bottom: 5px solid white; */
  position: absolute;
  top: 37.86px;
  font-size: 1.3rem;
  font-weight: bold;
`;
const KeywordInput = styled.input`
  /* font-weight: 400; */
  font-family: 'Pretendard';
  color: #000;
  font-size: 1rem;
  border: none;
  outline: none;
  width: 90%;
  margin-top: 10px;
  margin-bottom: 50px;
`;
export default function WritingStory({ setData, data }) {
  return (
    <div>
      <WriteBox>
        <TextEditor setData={setData} data={data} />{' '}
        {/* <div style={{ display: 'flex' }}>
          <div className="ck ck-editor__main" style={{ width: '100%' }}>
            <div
              className="ck ck-content ck-editor__editable ck-rounded-corners ck-editor__editable_inline ck-blurred"
              dangerouslySetInnerHTML={{ __html: data }} // 결과 확인
            />
          </div>
        </div> */}
        <Bottom />
        {/* <Top /> */}
        {/* <Right />
        <Left /> */}
        <Keyword>
          <p>오늘의 전시 키워드</p>
          <KeywordInput
            type="text"
            // value={'#키워드1 #키워드2 #키워드3'}
            placeholder="#키워드 를 입력해주세요"
          ></KeywordInput>
          <br />
          <p>오늘의 전시 스토리</p>
        </Keyword>
      </WriteBox>
    </div>
  );
}
