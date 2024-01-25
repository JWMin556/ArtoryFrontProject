import React from 'react'
import PERV from '../../Img/Calendar/prev.svg'
import NEXT from '../../Img/Calendar/next.svg'
import styled from 'styled-components';
//import CustomSelect from '../CustomSelect';

const Container = styled.div`

`;
const WrapButton = styled.div`
    width : 100%;
    display : flex;
    justify-content: space-evenly;
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
const MonthStyle = styled.span`
    color :#262626;
    font-size : 24px;
    font-weight : bold;
    font-family: Pretendard;

`;
export default function Toolbar(props) {
    const {
        date,
    } = props;
    
    const navigate = (action) => {
        props.onNavigate(action);
    };
    //   //연도 관련 객체 생성
    // const startYear = 1940;
    // const endYear = 2024;

    // const yearArray = Array.from(
    //     { length: endYear - startYear + 1 },
    //     (_, index) => ({
    //     value: (startYear + index).toString(),
    //     label: (startYear + index).toString(),
    //     })
    // );
return (
    <Container className='rbc-toolbar'>
        <WrapButton className="rbc-btn-group">
        <PrevButtonStyle type="button" onClick={navigate.bind(null, 'PREV')}>
            <Prev src={PERV}/>
        </PrevButtonStyle>
        {/* <CustomSelect options={yearArray} /> */}
        <MonthStyle className="rbc-toolbar-label">{`${date.getMonth() + 1}월`}</MonthStyle>
        <NextButtonStyle type="button" onClick={navigate.bind(null, 'NEXT')}>
            <Next src={NEXT}/>
        </NextButtonStyle>
        </WrapButton>
    </Container>
)
}
