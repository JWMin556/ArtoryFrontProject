import React, { useState } from 'react'
import PERV from '../../Img/Calendar/prev.svg'
import NEXT from '../../Img/Calendar/next.svg'
import styled from 'styled-components';
import SelectMonthAndYear from './SelectMonthAndYear';

const Container = styled.div`

`;
const WrapButton = styled.div`
    width : 100%;
    display : flex;
    align-items : center;
    justify-content: space-between;
`;
const PrevButtonStyle = styled.span`
`;
const Prev = styled.img`
    width :12px;
    height : 19px;
`;
const NextButtonStyle = styled.span``;
const Next = styled.img`
    width :12px;
    height : 19px;
`;
const MonthStyle = styled.select`
    color :#262626;
    font-size : 24px;
    font-weight : bold;
    font-family: Pretendard;
    border : none;
    &:focus{
        outline : none;
    }
`;

export default function Toolbar(props) {
    const {
        date,
    } = props;
    
    const navigate = (action) => {
        props.onNavigate(action);
    };
      //연도 관련 객체 생성
    const startMonth = 1;
    const endMonth = 12;
    const monthArray = Array.from(
        { length: endMonth - startMonth + 1 },
        (_, index) => ({
        value: (startMonth + index).toString()+"월",
        label: (startMonth + index).toString()+"월",
        })
    );
    const defaultNum = 1; 
    const [number, setNumber] = useState(defaultNum);
    const handleNextClick = () => {
        setNumber(defaultNum+1);
    }
return (
    <Container className='rbc-toolbar'>
        <WrapButton className="rbc-btn-group">
        <PrevButtonStyle type="button" onClick={navigate.bind(null, 'PREV')}>
            <Prev src={PERV}/>
        </PrevButtonStyle>
        <MonthStyle className="rbc-toolbar-label">
            <option value='one' onClick={navigate.bind(null, 'NEXT')}>{`${date.getMonth() + 1}월`}</option>
            <option value='two' onClick={navigate.bind(null, 'NEXT')}>{`${date.getMonth() + 2}월`}</option>
            <option value='three' onClick={navigate.bind(null, 'NEXT')}>{`${date.getMonth() + 3}월`}</option>
            <option value='four' onClick={navigate.bind(null, 'NEXT')}>{`${date.getMonth() + 4}월`}</option>
            <option value='five' onClick={navigate.bind(null, 'NEXT')}>{`${date.getMonth() + 5}월`}</option>
            <option value='six'>{`${date.getMonth() + 6}월`}</option>
            <option value='seven'>{`${date.getMonth() + 7}월`}</option>
            <option value='eight'>{`${date.getMonth() + 8}월`}</option>
            <option value='nine'>{`${date.getMonth() + 9}월`}</option>
            <option value='ten'>{`${date.getMonth() + 10}월`}</option>
            <option value='eleven'>{`${date.getMonth() + 11}월`}</option>
            <option value='twoelve'>{`${date.getMonth() + 12}월`}</option>
        </MonthStyle>
        {/* <SelectMonthAndYear options={monthArray} month={date.getMonth()+number} /> */}
        {/* <MonthStyle className="rbc-toolbar-label">{`${date.getMonth() + 1}월`}</MonthStyle>  */}
        <NextButtonStyle type="button" onClick={navigate.bind(null, 'NEXT')}>
            <Next src={NEXT} onClick={handleNextClick}/>
        </NextButtonStyle>
        </WrapButton>
    </Container>
)
}


        {/* <MonthStyle className="rbc-toolbar-label" onClick={navigate.bind(null, 'NEXT')}>
            <option value='one'>{`${date.getMonth() + 1}월`}</option>
            <option value='two'>{`${date.getMonth() + 2}월`}</option>
            <option value='three'>{`${date.getMonth() + 3}월`}</option>
            <option value='four'>{`${date.getMonth() + 4}월`}</option>
            <option value='five'>{`${date.getMonth() + 5}월`}</option>
            <option value='six'>{`${date.getMonth() + 6}월`}</option>
            <option value='seven'>{`${date.getMonth() + 7}월`}</option>
            <option value='eight'>{`${date.getMonth() + 8}월`}</option>
            <option value='nine'>{`${date.getMonth() + 9}월`}</option>
            <option value='ten'>{`${date.getMonth() + 10}월`}</option>
            <option value='eleven'>{`${date.getMonth() + 11}월`}</option>
            <option value='twoelve'>{`${date.getMonth() + 12}월`}</option>
        </MonthStyle> */}
