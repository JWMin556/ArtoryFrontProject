// import React, { useState } from 'react'
// import Calendar from 'react-calendar'
// import styled from 'styled-components';
// import moment from 'moment';
// import 'react-calendar/dist/Calendar.css';
// import ADD from '../../Img/Calendar/add.svg'
// const CalendarStyle = styled(Calendar)`
//     margin-top : 10%;
//     &.react-calendar {
//         width : 684px;
//         border : none;
//         border-radius : px;
//         box-shadow: 1px 1px 10px 10px #f3f3f3; 
//         font-family: Pretendard;
//     }
//     .react-calendar__navigation__label{
//         color :#262626;
//         font-size : 24px;
//         font-weight : bold;
//         font-family: Pretendard;
//     }
//     .react-calendar__navigation__next-button{
//         color :#ABABAB;
//     }
//     .react-calendar__navigation button:hover,
//     .react-calendar__navigation button:focus {
//         background-color : #ffff;
//     }
//     .react-calendar__navigation__prev-button{
//         color :#ABABAB;
//     }
//     .react-calendar__navigation__next2-button{
//         display : none;
//     }
//     .react-calendar__navigation__prev2-button{
//         display : none;
//     }
//     .react-calendar__month-view__days__day{
//         font-family: Pretendard;
//         color : #262626;
//     }
//     .react-calendar__viewContainer{
//         padding-left : 10%;
//         padding-right : 10%;
//     }
//     .react-calendar__month-view__days__day--neighboringMonth{
//         color : #D9D9D9;
//     }
//     .react-calendar__tile{
//         height : 60px;
//         font-size : 13px;
//         display : flex;
//         padding-top : 5px;

//     }
//     .react-calendar__month-view__weekdays{
//         text-align : start;
//         margin-bottom : 2%;
//         font-size : 16px;
//         color : #ABABAB;
//     }
//     .react-calendar__month-view__weekdays abbr{
//         text-decoration : none;
//     }
//     .react-calendar__month-view__weekdays__weekday--weekend abbr[title="일요일"]{
//         color :#F85835;
//     }
//     .react-calendar__tile:enabled:hover{
//         background: #EFEEEE;
//         border-radius : 10px;
//     }
//     .react-calendar__tile:enabled:focus,
//     .react-calendar__tile--active
//     {
//         background-color: #EFEEEE;
//         border-radius : 10px;
//         background-image:url("data:image/svg+xml,%3Csvg width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7.7 3.5H6.3V6.3H3.5V7.7H6.3V10.5H7.7V7.7H10.5V6.3H7.7V3.5ZM7 0C3.136 0 0 3.136 0 7C0 10.864 3.136 14 7 14C10.864 14 14 10.864 14 7C14 3.136 10.864 0 7 0ZM7 12.6C3.913 12.6 1.4 10.087 1.4 7C1.4 3.913 3.913 1.4 7 1.4C10.087 1.4 12.6 3.913 12.6 7C12.6 10.087 10.087 12.6 7 12.6Z' fill='%23999999'/%3E%3C/svg%3E%0A");
//         background-repeat : no-repeat;
//         background-position : 85% 13%;
//     }
//     .react-calendar__tile--now {
//         background : none;
//     }
// `;
// const AddImg = styled.img``;

// export default function MyCalendar() {
//     const [value, onChange] =  useState(new Date());
//     const [mark, setMark] = useState([]); //날짜를 저장하고 관리하기 위한 변수
//     const tile = document.getElementsByClassName("react-calendar__tile")
//     function handleDateClick(value)
//     {
//         tile.innerHTML="<span>하이</span>";
//         console.log(value);
//     }
// return (
//     <div>
//         <CalendarStyle
//             onChange={onChange}
//             value={value}
//             onClick={handleDateClick(value)}
//             showNeighboringMonth={true} 
//             formatDay={(locale, date) => moment(date).format("D")}
//             formatYear={(locale, date) => moment(date).format("YYYY")}
//             formatMonthYear={(locale, date) => moment(date).format("M월")}
//             calendarType='gregory'
//         />
//         <AddImg src={ADD}/>
//     </div>
// )
// }


import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Toolbar from './Toolbar';
import styled from 'styled-components';
import Week from './Week'
const CalendarStyle = styled(Calendar)`
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
`;
const localizer = momentLocalizer(moment);

const MyCalendar = (props) => {
    const weekend =['일','월','화','수','목','금','토']
// 한국어로 요일 변경
const formats = {
    dayFormat: (date, culture, localizer) =>
    localizer.format(date, 'dddd', culture),
    };
    const events = [
    {
        start: new Date(),
        end: new Date(moment().add(1, "days")),
        title: "Sample Event",
    }
];

    return (
    <div>
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
            dayColumnWrapper: Week,
        }}
    />
    </div>
);
};

export default MyCalendar;