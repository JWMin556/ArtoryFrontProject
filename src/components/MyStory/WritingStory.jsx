import React from 'react';
import styled from 'styled-components';

import TextEditor from './TextEditor';
const WriteBox = styled.div`
  width: 767px;
  //height: 713px;
  width: 767px;
  height: 359px;
  box-shadow: 1px 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 10%;
  /* border: 1px solid yellow; */
  border: none;
  font-family: 'Pretendard';
`;

export default function WritingStory({ setData, data }) {
  return (
    <div>
      <WriteBox>
        <TextEditor setData={setData} />

        <div style={{ display: 'flex' }}>
          <div className="ck ck-editor__main" style={{ width: '100%' }}>
            <div
              className="ck ck-content ck-editor__editable ck-rounded-corners ck-editor__editable_inline ck-blurred"
              dangerouslySetInnerHTML={{ __html: data }} // 결과 확인
            />
          </div>
        </div>
      </WriteBox>
    </div>
  );
}