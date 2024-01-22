import React, { useState } from 'react';
import styled from 'styled-components';
import SEARCH from '../../Img/Search/search.svg';

export default function Search() {
  const [isOutLine, setOutLine] = useState(); //input 박스 클릭 시 outline의 상태를 관리하기 위한 변수
  const [isInputClick, setIsInputClick] = useState(false); //ID input 박스 클릭 여부에 따라 placeholder의 상태를 관리하기 위한 변수
  function handleInputFocus() {
    //ID input박스에 들어오면 true(placeholder 텍스트 안보임), outline이 안보이도록 바꿔줌
    setIsInputClick(true);
    setOutLine({ outline: 'none' });
  }
  function handleInputBlur() {
    //ID input박스에 나가면 false (placeholder 텍스트 보임)
    setIsInputClick(false);
  }

  return (
    <SearchContainer>
      <label
        htmlFor="search"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <SearchImg src={SEARCH} />
      </label>
      <SearchStyle
        type="text"
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        placeholder={isInputClick ? '' : '원하는 문화를 검색해보세요'}
        style={isOutLine}
        id="search"
      />
    </SearchContainer>
  );
}

const SearchContainer = styled.div`
  width: 419px;
  display: grid;
  grid-template-columns: 1fr 9fr;
  background-color: #f5f5f5;
  border: none;
  border-radius: 5px;
  margin-left: 15px;
`;
const SearchStyle = styled.input`
  background-color: #f5f5f5;
  border: none;
  border-radius: 5px;
  height: 39px;
  font-family: Pretendard;
  color: #ababab;
`;
const SearchImg = styled.img`
  vertical-align: middle;
`;
