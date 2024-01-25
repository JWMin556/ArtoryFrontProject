import React, { useState } from 'react';
import styled from 'styled-components';
import StyledButton from '../../styled-components/StyledButton'
const Wrap = styled.div`
    width : 269px;
    height : 400px;
`;
const MemoStyle = styled.textarea`
    width: 100%;
    height: 100%;
    color: #ababab;
    font-family: Pretendard;
    background-color: #F5F5F5;
    border: none;
    border-radius: 10px;
    padding-left : 5%;
    padding-top : 3%;
    resize: none;
    &::placeholder {
        color: #ababab;
        font-family: Pretendard;
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
    left : 70%;
    font-family: Pretendard;
    font-size : 12px;
`;

export default function Memo() {
    const [isInputClick, setIsInputClick] = useState(false);

    function handleInputFocus() {
        setIsInputClick(true);
    }

    function handleInputBlur() {
        setIsInputClick(false);
    }

    return (
        <Wrap>
            <MemoStyle
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                placeholder={isInputClick ? '' : '메모하고 싶은 내용을 적어주세요'}
            />
            <SaveButton>저장</SaveButton>  
        </Wrap>


    );
}
