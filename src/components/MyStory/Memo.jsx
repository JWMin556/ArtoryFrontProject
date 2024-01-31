import React, { useState,useEffect } from 'react';
import styled from 'styled-components';
import StyledButton from '../../styled-components/StyledButton'
import { memoSaveApi } from '../API/Memo_API';
const Wrap = styled.div`
    width : 269px;
    height : 400px;
`;
const MemoStyle = styled.textarea`
    width: 100%;
    height: 100%;
    color: #ababab;
    font-family: 'Pretendard';
    background-color: #F5F5F5;
    border: none;
    border-radius: 10px;
    padding-left : 5%;
    padding-top : 3%;
    resize: none;
    margin-left : 30%;
    margin-top : 23%;
    &::placeholder {
        color: #ababab;
        font-family: 'Pretendard';
    }
    &:focus {
        outline: none;
    }
`;
const SaveButton = styled.button`
    background-color : #121212;
    color : #ffff;
    border : none;
    border-radius : 7px;
    width : 70px;
    height : 28px;
    position : relative;
    bottom : 10%;
    left : 105%;
    font-family: 'Pretendard';
    font-size : 12px;
`;

export default function Memo(props) {
    const [isInputClick, setIsInputClick] = useState(false);
    const [content,setContent] = useState();
    const [isContent,setIsContent] = useState();
    useEffect(() => {
        if (props.content === undefined) {
            setIsContent('메모하고 싶은 내용을 적어주세요');
        } else {
          setContent(props.content);
        }
      }, [props.content]);

    
    function handleInputFocus() {
        setIsInputClick(true);
    }

    function handleInputBlur() {
        setIsInputClick(false);
    }
    function handleChangeContent(e){
        setContent(e.target.value)
    }
    function clickSaveButton()
    {
        console.log("메모내용",content)
        memoSaveApi(content);
    }
    return (
        <Wrap>
            <MemoStyle
                value={content}
                defaultValue={props.content}
                onChange={handleChangeContent}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                placeholder={isInputClick ? "" : isContent}
            />
            <SaveButton onClick={clickSaveButton}>저장</SaveButton> 
        </Wrap>
    );
}
