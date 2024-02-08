import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import ADD from '../../Img/Calendar/add.svg';
import SearchModa2 from './SearchModal2'; // 주석 해제
import axios from 'axios';
import StoryTitle from './StoryTitle';
import StoryList from './StoryList';
const url =
  'http://artory-prod-env.eba-axnhdqgn.ap-northeast-2.elasticbeanstalk.com/api/mystory/bySavedDate?';
const token = localStorage.getItem('Token');

const TileWrapper = styled.div`
  position: relative;
  //border : 1px solid red;
  border-radius: 10px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  font-size: 12px;
  font-family: Pretendard;
  // &:hover{
  //   background-color : #EFEEEE;
  // }
`;

const DateStyle = styled.span`
  margin: 8px 0 0 9px;
  color: #262626;
  //border : 1px solid red;
  width: 18px;
  height: 18px;
  padding-top: 7%;
  padding-left: 7%;
`;

const AddImg = styled.img`
  width: 17px;
  height: 17px;
  position: relative;
  top: 15%;
  right: 10%;
`;
const Mark = styled.div`
  width: 100%;
  font-size: 11px;
  font-weight: bold;
  color: #000;
  position: relative;
  // top : 60%;
  left: 20%;
`;
export const Tile = ({ key, year, month, day, userStoryData }) => {
  const [isButtonOpen, setIsButtonOpen] = useState(false);
  const [mouseOverStyle, setMouseOverStyle] = useState();
  const [mark, setMark] = useState(null);
  const [story, setStory] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMarkStyle, setIsStyleStyle] = useState();
  const [isClickTile, setIsClickTile] = useState(false);
  //const result=
  useEffect(() => {
    //console.log(`${day}일`);
  });
  useEffect(() => {
    const checkStoryData = async () => {
      try {
        userStoryData.forEach((item, index) => {
          if (item.year === year && item.month === month && item.day === day) {
            //유저가 저장한 스토리 배열에 있는 날짜와 같으면
            if (item.storyState === 'DONE') {
              setMark({
                color: '#fff',
                backgroundColor: '#000',
                borderRadius: '50px',
              }); //블랙 동그라미 스타일
              setStory(item.exhibitionTitle);
              setIsStyleStyle({ color: '#000' });
              //console.log(`스토리목록${index}`,item.exhibitionTitle);
            } else if (item.storyState === 'NOT_STARTED') {
              setMark({
                color: '#fff',
                backgroundColor: '#D9D9D9',
                borderRadius: '50px',
              }); //블랙 동그라미 스타일
              setStory(item.exhibitionTitle);
              setIsStyleStyle({ color: '#D9D9D9' });
            } else if (item.storyState === ' IN_PROGRESS') {
              setMark({
                backgroundColor: 'none',
                border: '2px solid #000',
                borderRadius: '50px',
              }); //블랙 동그라미 스타일
              setStory(item.exhibitionTitle);
            }
            throw new Error('Stop!');
          }
        });
      } catch (e) {
        console.log('stop!' + e);
      }
    };
    checkStoryData();
  }, [day, userStoryData]);

  if (story.length > 5) {
    var result1 = story.substr(0, 6);
    var result2 = result1 + '...';
  }

  const handleOnMouseOverTile = () => {
    if (day > 0) {
      setIsButtonOpen(true);
      setMouseOverStyle({ backgroundColor: '#EFEEEE' });
    } else {
      setIsButtonOpen(false);
      setMouseOverStyle({ backgroundColor: '#ffffff' });
    }
  };

  const handleOnMouseOutTile = () => {
    setIsButtonOpen(false);
    setMouseOverStyle({ backgroundColor: '#ffffff' });
  };
  const handleClickAddButton = (day) => {
    setIsModalOpen(true);
  };

  const onClickTile = () => {
    isClickTile ? setIsClickTile(false) : setIsClickTile(true);
  };

  return (
    <TileWrapper
      onMouseOver={() => {
        handleOnMouseOverTile(day);
      }}
      onMouseOut={() => {
        handleOnMouseOutTile(day);
      }}
      onClick={onClickTile}
      style={mouseOverStyle}
    >
      <DateStyle style={mark}>{day}</DateStyle>
      {isButtonOpen && (
        <AddImg src={ADD} onClick={() => handleClickAddButton(day)} />
      )}
      {isModalOpen && (
        <SearchModa2
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          year={year}
          month={month}
          day={day}
        />
      )}
      <Mark style={isMarkStyle}>{result2}</Mark>
      {isClickTile && (
        <StoryList
          userStoryData={userStoryData}
          year={year}
          month={month}
          day={day}
        />
      )}
    </TileWrapper>
  );
};
