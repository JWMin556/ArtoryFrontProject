import React, { useState, useEffect } from "react";
import styled, { keyframes, css } from "styled-components";
import moment from "moment";
import { Tile } from "./Tile";
import PREV_BUTTON from '../../Img/MyStory/prev.svg';
import NEXT_BUTTON from '../../Img/MyStory/next.svg';

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
  font-family: Pretendard;
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
  font-family: Pretendard;
  width : 112px;

`;
const OptionStyle = styled.option`
  font-size : 14px;
  text-align:center;
  font-family: Pretendard;
  color : #616161;
  :hover{
    background-color : #121212;
    color : #fff;
  }
`;
const FloatBtn1 = styled.button`
  box-shadow: 0 1px 2px 0 #777;
  position: fixed;
  z-index: 999;
  right: 6%;
  bottom: 18%;
  width: 18%;
  min-width: 80px;
  max-width: 130px;
  height: 30px;
  margin: auto 0px;
  background-color: #fff;
  border: none;
  border-radius: 20px;
  font-weight: 600;
  font-size: 0.7em;
  color: #4d4887;
  cursor: pointer;
  outline: none;
`;
const FloatBtn2 = styled.button`
  box-shadow: 0 1px 2px 0 #777;
  position: fixed;
  z-index: 999;
  right: 6%;
  bottom: 10%;
  width: 18%;
  min-width: 80px;
  max-width: 130px;
  height: 30px;
  margin: auto 0px;
  background-color: #fff;
  border: none;
  border-radius: 20px;
  font-weight: 600;
  color: #4d4887;
  font-size: 0.7em;
  cursor: pointer;
  outline: none;
  & img {
    margin-top: 2px;
    max-height: 70%;
    width: auto;
    color: #bebddb;
  }
`;

const MyCalendar = (props) => {

  const {
    date,
} = props;

  const monList = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
  ];

  let calendarDays = [];
  let new_month = [];

  const makeCalendar = (year, month) => {
    let firstDayOfMonth = new Date(year, month,1).getDay();
    let endDateOfMonth = new Date(year, month+1, 0).getDate();
    //console.log("firstDayOfMonth",firstDayOfMonth);
    //console.log("endDateOfMonth",endDateOfMonth);

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
              <Tile key={index} day={day} />
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
    <div>
      <Container>
        <Header>
          <img src={PREV_BUTTON} onClick={prevMonth}></img>
          <span>
              <MonthSelect name="month" onChange={(e) => handleChangeMonth(Number(e.target.value))}>
                <OptionStyle value='1'><span>{month}월</span></OptionStyle>
                <OptionStyle value='2'>{month-month+2}월</OptionStyle>
                <OptionStyle value='3'>{month-month+3}월</OptionStyle>
                <OptionStyle value='4'>{month-month+4}월</OptionStyle>
                <OptionStyle value='5'>{month-month+5}월</OptionStyle>
                <OptionStyle value='6'>{month-month+6}월</OptionStyle>
                <OptionStyle value='7'>{month-month+7}월</OptionStyle>
                <OptionStyle value='8'>{month-month+8}월</OptionStyle>
                <OptionStyle value='9'>{month-month+9}월</OptionStyle>
                <OptionStyle value='10'>{month-month+10}월</OptionStyle>
                <OptionStyle value='11'>{month-month+11}월</OptionStyle>
                <OptionStyle value='12'>{month-month+12}월</OptionStyle>
              </MonthSelect>
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
    </div>

  );
};
export default MyCalendar;





