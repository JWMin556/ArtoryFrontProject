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
const WrapModal = styled.div`
    
`;

export default function DayTile(props) {
    const [isHovered, setIsHovered] = useState(false);
    const [isClicked1, setIsClicked1] = useState(false);
    const [isClicked2, setIsClicked2] = useState(true);
    const [isAddClicked, setIsAddClicked] = useState(false);
    const {
        date,
    } = props;
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
    const addButtonClick = () =>{
        setIsAddClicked(true);
    }
    return (
        <div>
        {isAddClicked && <WrapModal><TodoModal/></WrapModal>}
        <div>
        <WrapTile className='rbc-month-row'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Tile className='rbc-row-bg' style={{position : 'relative'}}>
                    <Day className='rbc-day-bg'>
                        {moment(date).format('D')}
                    </Day>
                    <AddImg src={ADD} show={isHovered} onClick={addButtonClick} />
            </Tile>
        </WrapTile>
        </div>
        </div>
    );
}

                        {/* <WrapTile 
                            className='rbc-dar-bg'
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                        <Tile className='rbc-date-cell'  onClick={clickTile2}>
                                <Day>{moment(date).format('D')}</Day>
                        </Tile>
                        {isAddClicked && <TodoModal/>}
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
                    {/* </WrapTile> */}