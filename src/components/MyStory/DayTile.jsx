import React, { useState } from 'react';
import moment from 'moment';
import styled from 'styled-components';
import ADD from '../../Img/Calendar/add.svg';
import TodoModal from './TodoModal';
const WrapTile = styled.div`
    height: 61px;
    display : flex;
    &:hover {
        background-color: #EFEEEE;
        border-radius: 10px;
    }
    &:visited {
        background-color: #EFEEEE;
        border-radius: 10px;
    }

`;
const Tile = styled.div`
    width : 100%;
    display : flex;
    flex-direction : row;
    justify-content: space-between;
`;
const ClickedTile = styled.div`
    background-color: #EFEEEE;
    border-radius: 10px;
    width : 100%;
    display : flex;
    flex-direction : row;
    justify-content: space-between;
`;
const Day = styled.div`
    font-family: Pretendard;
    margin-left : 10%;
    margin-top : 10%;

`;
const AddImg = styled.img`
    display: ${(props) => props.show ? 'flex' : 'none'};
    width : 14px;
    height : 14px;
    margin-right : 10%;
    margin-top : 10%;
`;

export default function DayTile(props) {
    const [isHovered, setIsHovered] = useState(false);
    const [isClicked1, setIsClicked1] = useState(false);
    const [isClicked2, setIsClicked2] = useState(true);

    function clickTile1()
    {
        setIsClicked1(false);
        setIsClicked2(true);
    }
    function clickTile2()
    {
        setIsClicked1(true);
        setIsClicked2(false);
    }
    const {
        date,
    } = props;

    return (
        <WrapTile 
            className='rbc-tile'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Tile  onClick={clickTile2}>
                    <Day>{moment(date).format('D')}</Day>
                    <AddImg src={ADD} show={isHovered} />
            </Tile>
            {/* {
                isClicked1&&isClicked2 ?
                (<ClickedTile onClick={clickTile1}>
                    <Day>{moment(date).format('D')}</Day>
                    <AddImg src={ADD} show={isHovered} />
                </ClickedTile>)
                :
                <Tile  onClick={clickTile2}>
                    <Day>{moment(date).format('D')}</Day>
                    <AddImg src={ADD} show={isHovered} />
                </Tile>
            } */}
        </WrapTile>
    );
}
