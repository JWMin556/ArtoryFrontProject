import React, {useState}from 'react'
import styled from 'styled-components'
import SEARCH from '../../Img/Search/search.svg'
const SearchStyle = styled.input`
    background-color : #f5f5f5;
    border : none;
    border-radius : 5px;
    width : 300px;
    height : 39px;
    padding : 0;
    padding-left :14%;
    font-family: Pretendard;
    color : #ababab;

`;
const SearchImg = styled.img`
    position: absolute;
    top : 24%;
    left : 3%;

`;
export default function Search() {
    const [isOutLine,setOutLine] = useState(); //input 박스 클릭 시 outline의 상태를 관리하기 위한 변수
    const [isInputClick,setIsInputClick] = useState(false); //ID input 박스 클릭 여부에 따라 placeholder의 상태를 관리하기 위한 변수
    function handleInputFocus() 
    { //ID input박스에 들어오면 true(placeholder 텍스트 안보임), outline이 안보이도록 바꿔줌
        setIsInputClick(true); 
        setOutLine({outline:'none'}); 
    } 
    function handleInputBlur()
    { //ID input박스에 나가면 false (placeholder 텍스트 보임)
        setIsInputClick(false);
    } 
return (
    <span>
    <SearchImg src={SEARCH}/>
    <SearchStyle 
        type="text" 
        onFocus={handleInputFocus} 
        onBlur={handleInputBlur} 
        placeholder={isInputClick ?  "" : "원하는 전시를 검색해보세요" }
        style={isOutLine}/>
    </span>
   
)
}