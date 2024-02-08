import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import WritingStory from '../components/MyStory/WritingStory';
import StoryTitle from '../components/MyStory/StoryTitle';
import TodayExhibition from '../components/MyStory/TodayExhibition';
import { createStory } from '../components/API/Mystoyr_APITEST';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import { progressSaveApi } from '../components/API/StorySave';
import Banner from '../components/Story/Banner';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StoryRecord = styled.div`
  //border : 1px solid #000;
  width: 800px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;
const Story = styled.div`
  //border : 1px solid red;
  width: 100%;
  font-size: 30px;
  font-weight: bold;
  font-family: 'Pretendard';
  margin-top: 10%;
`;
const Story2 = styled.div`
  width: 100%;
  margin-top: 0.5%;
  font-family: 'Pretendard';
  font-size: 14px;
  color: #979797;
`;
const OpenSelectButton = styled.div`
  //border : 1px solid red;
  width: 100%;
  //text-align : end;
  margin-bottom: 5%;
  margin-top: 1%;
  display: flex;
  justify-content: end;
  & button {
    background-color: #f3f3f3;
    color: #979797;
    font-family: 'Pretendard';
    font-size: 14px;
    margin-left: 1%;
    width: 83px;
    height: 30px;
    border: none;
    &:focus {
      background-color: #000;
      color: #fff;
    }
  }
`;
const WrapSaveButton = styled.div`
  display: flex;
  justify-content: space-between;
  width: 19%;
  margin-bottom: 10%;
  & button {
    width: 123px;
    height: 40px;
    background-color: #242526;
    color: #fff;
    border: none;
  }
`;
export default function Record(props) {
  const navigate = useNavigate();
  const today = new Date();
  const getYear = moment(today).format('YYYY');
  const getMonth = moment(today).format('MM');
  const getDate = moment(today).format('DD');
  const defaultData = ``;

  const { state } = useLocation();
  console.log('레코드 페이지 ', state.userStoryData);
  const userStoryData = state.userStoryData;
  //console.log("userStoryData",userStoryData)
  const [data, setData] = useState(defaultData); //스토리 내용
  const [title, setTitle] = useState(''); //제목
  const [viewingTime, setViewingTime] = useState(''); //시간
  const [satisfactionLevel, setSatisfactionLevel] = useState(''); //만족도
  const [weather, setWeather] = useState(''); //날씨
  const [companion, setCompanion] = useState(''); //동반인
  const [genre1, setGenre1] = useState(''); //장르1
  const [genre2, setGenre2] = useState(''); //장르2
  const [genre3, setGenre3] = useState(''); //장르3
  const [isOpen, setIsOpen] = useState(true); //공개여부
  const [year, setYear] = useState(getYear); //년
  const [month, setMonth] = useState(getMonth); //월
  const [date, setDate] = useState(getDate); //일
  const [keyword, setKeyword] = useState(''); //키워드
  const [picturesUrl, setPicturesUrl] = useState([state.item.exhibitionImage]); //선택한 사진 배열

  const id = state.item.exhibitionId;
  const exhibitionTitle = state.item.exhibitionTitle;

  const markEvent = [state.item.exhibitionTitle, year, month, date];
  //저장 버튼 클릭
  const handleSubmit = async () => {
    // console.log('data.exhibitionTitle', userStoryData[0].exhibitionTitle);
    console.log('exhibitionTitle', exhibitionTitle);
    if (userStoryData) {
      for (let i = 0; i < userStoryData.length; i++) {
        if (userStoryData[i].exhibitionTitle === exhibitionTitle) {
          alert('동일한 전시가 있습니다.');
          break;
        }
      }
    }
    //await createStory(id,data,title,viewingTime,companion,genre1,genre2,genre3,satisfactionLevel,weather,isOpen,year,month,date);
    // alert('스토리가 저장되었습니다');
    //navigate(`/mystory`, { state: { markEvent }
    try {
      await createStory(
        id,
        data,
        title,
        viewingTime,
        companion,
        genre1,
        genre2,
        genre3,
        satisfactionLevel,
        weather,
        isOpen,
        year,
        month,
        date,
        keyword,
        picturesUrl
      );
      alert('스토리가 저장되었습니다');
      navigate(`/mystory`, { state: { markEvent } });
    } catch (error) {
      console.log(error.response.data);
    }
  };

  //임시저장 버튼 클릭
  const handleProgressSubmit = async () => {
    try {
      await progressSaveApi(
        id,
        data,
        title,
        viewingTime,
        companion,
        genre1,
        genre2,
        genre3,
        satisfactionLevel,
        weather,
        isOpen,
        year,
        month,
        date,
        keyword,
        picturesUrl
      );
      alert('스토리가 임시저장 되었습니다');
      //navigate(`/mystory`, { state: { markEvent } })
    } catch (error) {
      console.log(error.response.data);
    }
  };
  //   const ClickSaveButton =()=>{
  //     //alert("스토리가 저장되었습니다")
  //     navigate(`/mystory`, { state: { markEvent } })
  //   }
  const ClickedOpen = () => {
    setIsOpen(true);
  };
  const ClickClosed = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <Banner
        image={state.item.exhibitionImage}
        title={state.item.exhibitionTitle}
      />
      <Container>
        <StoryRecord>
          <Story>스토리 기록</Story>
          <Story2>나만의 스토리를 작성해보세요</Story2>
          <StoryTitle SetTitle={setTitle} />
          <OpenSelectButton>
            <button onClick={ClickedOpen}>공개</button>
            <button onClick={ClickClosed}>비공개</button>
          </OpenSelectButton>
          <TodayExhibition
            setViewingTime={setViewingTime}
            setSatisfactionLevel={setSatisfactionLevel}
            setWeatherLevel={setWeather}
            setCompanion={setCompanion}
            setGenre1={setGenre1}
            setGenre2={setGenre2}
            setGenre3={setGenre3}
            year={year}
            month={month}
            date={date}
            setYear={setYear}
            setMonth={setMonth}
            setDate={setDate}
          />
          <WritingStory
            keyword={keyword}
            setKeyword={setKeyword}
            data={data}
            setData={setData}
            picturesUrl={picturesUrl}
            setPicturesUrl={setPicturesUrl}
          />
        </StoryRecord>
        <WrapSaveButton>
          <button onClick={handleProgressSubmit}>임시저장</button>
          <button onClick={handleSubmit}>저장</button>
        </WrapSaveButton>
      </Container>
    </div>
  );
}
