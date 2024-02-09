import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ADD from '../../Img/Calendar/add.svg';
import SearchModa2 from './SearchModal2';
import StoryList from './StoryList';

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
export const Tile = ({
  key,
  year,
  month,
  day,
  userStoryData,
  loadUserStories,
}) => {
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
  const checkStoryData = async () => {
    // if (userStoryData.length > 0) {//이해를 돕기 위함.조건문은 따로 없어도 stories 배열(item)이 0이면 try문 안에의 forEach문이 돌아가지 않을 것이기에.
    try {
      userStoryData.forEach((item, index) => {
        if (item.year === year && item.month === month && item.day === day) {
          //유저가 저장한 스토리 배열에 있는 날짜와 같으면
          if (item.storyState === 'DONE') {
            setMark({
              color: '#fff',
              backgroundColor: '#000',
              borderRadius: '50px',
            }); //블랙 동그라미 스타일 작성 완
            setStory(item.exhibitionTitle);
            setIsStyleStyle({ color: '#000' });

            //console.log(`스토리목록${index}`,item.exhibitionTitle);
          } else if (item.storyState === 'NOT_STARTED') {
            setMark({
              color: '#fff',
              backgroundColor: '#D9D9D9',
              borderRadius: '50px',
            }); //블랙 동그라미 스타일 작성 전
            setStory(item.exhibitionTitle);
            setIsStyleStyle({ color: '#D9D9D9' });
          } else if (item.storyState === 'IN_PROGRESS') {
            setMark({
              backgroundColor: 'none',
              border: '3px solid #000',
              borderRadius: '50px',
              width: '13px',
              height: '13px',
            }); //블랙 동그라미 스타일
            setStory(item.exhibitionTitle);
          }
          throw new Error('Stop!');
        }
      });
    } catch (e) {
      console.log('stop!' + e);
    } finally {
      // }
    }
  };
  useEffect(() => {
    //checkStoryData함수 실행 전 stories의 length가 0인것을 대비해 초기화 해둠.  setMark & setStory(스토리 해당 전시제목) 포함.
    setMark({
      color: 'black',
      backgroundColor: 'transparent',
      borderRadius: '50px',
    });
    setStory([]);
    checkStoryData();
  }, [day, userStoryData]); //필수

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
      <Mark style={isMarkStyle}>{result2}</Mark> {/* 전시제목... */}
      {isClickTile && (
        <StoryList
          userStoryData={userStoryData}
          year={year}
          month={month}
          day={day}
          loadUserStories={loadUserStories}
        />
      )}
    </TileWrapper>
  );
};
