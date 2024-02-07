import React, { useState, useEffect } from "react";
import styled, { keyframes, css } from "styled-components";
import moment from "moment";
import { Tile } from "./Tile";
import PREV_BUTTON from '../../Img/MyStory/prev.svg';
import NEXT_BUTTON from '../../Img/MyStory/next.svg';
import one1 from '../../Img/Calendar/one1.svg' //작성 전 원
import one2 from '../../Img/Calendar/one2.svg' //작성 완료 원
import one3 from '../../Img/Calendar/one3.svg' //임시저장 원
import SelectMonth from "./SelectMonth";
import SelectYear from './SelectYear'
const Container = styled.div`
    //border : 1px solid blue;
    box-shadow: 1px 1px 70px  #f3f3f3;
    border-radius : 10px;
    width: 684px;
    height: 400px;
    align-items: center;
    flex-direction: column;
    display: flex;
    font-size: 20px;
    padding : 0 5% 0 5%;
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 5px 20px;
  box-sizing: border-box;
  width: 100%;
  height: 14%;
  & img {
      width : 12px;
      height : 19px;
  }
`;
const Days = styled.div`
  background-color: #fff;
  width: 93%;
  height: 81%;
  padding: 8px 10px;
  box-sizing: border-box;
  color : #ABABAB;
  margin: 0;
  border-radius: 5px;
  font-size: 16px;
  font-family: 'Pretendard';
  &span{
    margin : 10px;
  }

`;
const Day = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  position : relative;
  right : 4.3%;
  margin-bottom : 2%;

  & div {
    min-width: 13%;
    max-height: 5%;
    text-align: center;
    font-weight: 600;
    box-sizing: border-box;
  }
`;

const Row = styled.div`
  //border :1px solid blue;
  position : relative;
  top : 2%;
  width: 100%;
  height: 18%;
  display: flex;
  justify-content: space-between;
`;
const MonthSelect = styled.select`
  border : none;
  font-size: 25px;
  font-weight: bold;
  font-family: 'Pretendard';
  width : 112px;

`;
const OptionStyle = styled.option`
  font-size : 14px;
  text-align:center;
  font-family: 'Pretendard';
  color : #616161;
  :hover{
    background-color : #121212;
    color : #fff;
  }
`;
const WrapYearSelect = styled.div`
  //border : 1px solid red;
  width : 110%;
  display : flex;
  justify-content : end;
`;
const YearSelect = styled.select`
  width : 2.5em;
  height : 1.5em;
  text-align : end;
  border : none;
  font-size: 30px;
  font-weight: bold;
  font-family: 'Pretendard';
  margin-bottom : 3%;
  margin-right : 5%;
`;
const WrapMark = styled.div`
  width : 100%;
  height : 20px;
  display : flex;
  justify-content : end;
  color : #ABABAB;
  font-family: 'Pretendard';
  font-size : 14px;
  margin-top : 2%;
  & .before {
    width : 9%;
    margin-right : 5%;
    display : flex;
    align-items : center;
    justify-content : space-between;
  }
  & .progress {
    width : 10.5%;
    margin-right : 5%;
    display : flex;
    align-items : center;
    justify-content : space-between;

  }  
  & .after {
    width : 10.5%;
    display : flex;
    align-items : center;
    justify-content : space-between;
  }
`;
const MyCalendar = ({userStoryData,...props}) => {

  const {
    date,
} = props;

  const monList = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
  ];

  let calendarDays = [];
  let new_month = [];

  const makeCalendar = (year, month) => {
    let firstDayOfMonth = new Date(year, month,1).getDay();
    let endDateOfMonth = new Date(year, month+1, 0).getDate();

    calendarDays = [];  
    new_month = [];

    let cnt = 1;
    for (let i = 0; i < 5; i++) {
      var _days = [];
      for (let j = 0; j < 7; j++) {
        if (cnt > endDateOfMonth) {
          _days.push("");
        } else if (firstDayOfMonth > j && i === 0) {
          _days.push("");
        } else {
          _days.push(cnt);
          cnt++;
        }
      }
      calendarDays.push(_days);
    }
    new_month = calendarDays.map((week) => {
      return (
        <Row key={week}>
          {week.map((day, index) => {
            let dateKey =
              year +
              "-" +
              (month < 9 ? "0" + (month + 1) : month + 1) +
              "-" +
              (day < 10 ? "0" + day : day);
            return (
              <Tile 
                key={index}
                year={year}
                month = {month+1}
                day={day} 
                userStoryData={userStoryData} />
            );
          })}
        </Row>
      );
    });
    return new_month;
  };

  window.addEventListener(
    "DOMContentLoaded",
    () => {
      if (calendarDays.length === 0) {
        //makeCalendar(thisyear, thismonth);
      }
      //console.log("첫 로딩 시 현재 월 출력", thisyear, thismonth);
    },
    { once: true }
  );

  const [month, changeMonth] = useState(Number(moment(date).format("M")));
  //console.log("month",month);
  const [year, changeYear] = useState(Number(moment(date).format("YYYY")));
  const [isButtonOpen, setIsButtonOpen] = useState(false);
    console.log("년도",year);
    console.log("월",month);

  //연도 관련 객체 생성
    const startYear = 2020;
    const endYear = 2030; 
    const yearArray = Array.from(
      { length: endYear - startYear + 1 },
      (_, index) => ({
        value: startYear + index,
        label: startYear + index,
      })
    );
    //월 관련 객체 생성
      const startMonth = 1;
      const endMonth = 12; 
      const MonthArray = Array.from(
        { length: endMonth - startMonth + 1 },
        (_, index) => ({
          value: startMonth + index,
          label: startMonth + index,
        })
      )
      // const MonthArray = [
      //   "1월",
      //   "2월",
      //   "3월",
      //   "4월",
      //   "5월",
      //   "6월",
      //   "7월",
      //   "8월",
      //   "9월",
      //   "10월",
      //   "11월",
      //   "12월",
      // ];


  const nextMonth = () => {
    if (month != 11) {
      changeMonth((month) => month + 1);
    } else {
      changeMonth((month) => month - 11);
      changeYear((year) => year + 1);
    }
    makeCalendar(year, month);
    console.log("next!", year, month, new_month);
  };
  const prevMonth = () => {
    if (month != 0) {
      changeMonth((month) => month - 1);
    } else {
      changeMonth((month) => month + 11);
      changeYear((year) => year - 1);
    }
    makeCalendar(year, month);
  };
  const handleChangeMonth=(month)=>{
    changeMonth(month)
  }
  return (
    <div style={{width : "735px", height : "522px"}}>
      <WrapYearSelect>
          <SelectYear options={yearArray} defaultValue={year} onSelect={changeYear}/>
        </WrapYearSelect>
      <Container>
        <Header>
          <img src={PREV_BUTTON} onClick={prevMonth}></img>
          <span>
              <SelectMonth options={MonthArray} defaultValue={month} onSelect={changeMonth}/>
          </span>
          <img src={NEXT_BUTTON} onClick={nextMonth}></img>
        </Header>
        <Days>
          <Day>
            <div style={{color:'#f85835'}}>일</div>
            <div>월</div>
            <div>화</div>
            <div>수</div>
            <div>목</div>
            <div>금</div>
            <div>토</div>
          </Day>
          {makeCalendar(year, month-1)}
        </Days>
      </Container>
      <WrapMark>
        <span className="before"><img src={one1}/><span>작성 전</span></span>
        <span className="progress"><img src={one3}/><span>임시저장</span></span>
        <span className="after"><img src={one2}/><span>작성 완료</span></span>
      </WrapMark>
    </div>

  );
};
export default MyCalendar;





