import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Toolbar from './Toolbar';
import styled from 'styled-components';
import DayTile from './DayTile'
import ONE1 from '../../Img/Calendar/one1.svg'
import ONE2 from '../../Img/Calendar/one2.svg'
import Memo from './Memo';
import Event from './Event';
import Week from './Week';
//import TodoMadal from '../MyStory/TodoModal'
const CalendarStyle = styled(Calendar)`

    &.rbc-calendar {
        margin-left :3%;
        box-shadow: 1px 1px 70px  #f3f3f3;
    }
    .rbc-month-view{
            position : relative;
            left : 10%;
            width : 80%;
            border : none;
            border-radius : px;
            font-family: Pretendard;
    }
    .rbc-toolbar {
        margin-bottom : 0;
        padding : 2%;
    }
    .rbc-month-header{
        width : 100%;
        text-align : start;
        margin-bottom : 5%;
        font-size : 16px;
        color : #ABABAB;
    }
    .rbc-header {
        text-align : start;
        border : none;
    }
    .rbc-month-row{
        border : none;
    }
    .rbc-day-bg{
        border : none;
    }
    .rbc-date-cell{
        text-align : start;
        font-size : 13px;
        font-family: Pretendard;
        color : #262626;
    }
    .rbc-off-range-bg{
        background-color : #ffff;
    }
    .rbc-off-range{
        color : #d9d9d9;
    }
    .rbc-now{
        background-color : #FFFFFF;
    }
    .rbc-event{
        background : none;
    }
    .rbc-today{
        background : none;
    }
`;

const WrapMemoAndCalendar = styled.div`
    display : flex;
    //justify-content: space-evenly;
`;
const WrapMark = styled.div`
    width : 15em;
    display : flex;
    justify-content : space-around;
    position : relative;
    left : 32%;
    top : 3%;
`;
const WrapMark1 = styled.span`
    display : flex;
    flex-direction : row;
    align-item : center;
    width : 7em;
`;
const Mark1 = styled.span`
    font-family: Pretendard;
    color : #ababab;
    margin-left : 5%;
    margin-top : 2%;
    font-size : 12px;

`;
const WrapMark2 = styled.span`
    display : flex;
    flex-direction : row;
    align-item : center;
    width : 6em;
`;
const Mark2 = styled.span`
    font-family: Pretendard;
    color : #121212;
    margin-left : 5%;
    margin-top : 2%;
    font-size : 12px;
`;
const localizer = momentLocalizer(moment);

export default function MyCalendar(props) {
    const weekend =['일','월','화','수','목','금','토']
    const events = [
    {
        start: new Date("2024-1-22"),
        end: new Date("2024-1-22"),
        title: "황성욱 개인전",
        eventDay : 22,
    }
];

    return (
        <div>
            <WrapMemoAndCalendar>
                <Memo/>
                <CalendarStyle
                    localizer={localizer}
                    defaultDate={new Date()}
                    defaultView="month"
                    events={events} 
                    /* events 배열은 달력에 표시될 이벤트 목록이다. 
                    배열의 각 객체는 start, end, 그리고 title 속성을 가져야 한다. */
                    style={{ width : '684px' ,height: "400px" }}
                    components={{
                        toolbar: Toolbar,
                        header : Week,
                        month:{
                            dateHeader : DayTile,
                            event: (events) => <Event event={events}/>,   
                        }                
                        }}
                />
            </WrapMemoAndCalendar>
                <WrapMark>
                    <WrapMark1><img src={ONE1} style={{width:'17px',height:'17px'}}/><Mark1>작성한 전시</Mark1></WrapMark1>
                    <WrapMark2><img src={ONE2} style={{width:'17px',height:'17px'}}/><Mark2>예정 전시</Mark2></WrapMark2>
                </WrapMark>
                {/* <TodoMadal/> */}

        </div>

);
};

