import React,{useState} from 'react'
import styled from 'styled-components';
import moment from 'moment';
import Emoticon from '../Story/Emoticon';
import face_g1 from '../../Img/Story/face_g1.svg';
import face_g2 from '../../Img/Story/face_g2.svg';
import face_g3 from '../../Img/Story/face_g3.svg';
import face_g4 from '../../Img/Story/face_g4.svg';
import face_g5 from '../../Img/Story/face_g5.svg';
import face_g6 from '../../Img/Story/face_g6.svg';
import face_g7 from '../../Img/Story/face_g7.svg';
import face_g8 from '../../Img/Story/face_g8.svg';
import face_g9 from '../../Img/Story/face_g9.svg';
import weather_g1 from '../../Img/MyStory/weather_g1.svg'
import weather_g2 from '../../Img/MyStory/weather_g2.svg'
import weather_g3 from '../../Img/MyStory/weather_g3.svg'
import weather_g4 from '../../Img/MyStory/weather_g4.svg'
import weather_g5 from '../../Img/MyStory/weather_g5.svg'
import weather_b1 from '../../Img/MyStory/weather.b1.svg'
import weather_b2 from '../../Img/MyStory/weather.b2.svg'
import weather_b3 from '../../Img/MyStory/weather.b3.svg'
import weather_b4 from '../../Img/MyStory/weather.b4.svg'
import weather_b5 from '../../Img/MyStory/weather.b5.svg'
import WeatherEmoticons from './WeatherEmoticons'
import Select from './Select';
import CategorySelect from'./CategorySelect'
import MiniCalendar from './MiniCalendar'
const SelectExhibition = styled.div`
    //border : 1px solid red;
    width : 100%;
    height : 359px;
    box-shadow: 1px 2px 8px rgba(0,0,0,0.1); 
    margin-bottom : 4%;
    border-radius: 10px;
    font-size : 20px;
    font-weight : bold;
    font-family: 'Pretendard';
    padding : 2% 0 0 2%;
    & div {
      //margin-bottom : 4%;
    }
`;
const WrapSelect = styled.div`
  height : 100%;
    display : flex;
    justify-content : space-between;
`;
const WrapKey = styled.div`
  font-size : 14px;
  height : 60%;
  width : 20%;
  color : #616161;
  font-weight : 600;
  font-family: 'Pretendard';
  display : flex;
  flex-direction : column;
  justify-content: space-between;
`;
const WrapValue = styled.div`
  width : 80%;
  height : 65%;
  display : flex;
  flex-direction : column;
  justify-content: space-between;
    & div {
      color : #ababab;
      font-family: 'Pretendard';
      font-size : 12px;
    }
`;
const WrapTime = styled.div`
    width : 78%;
`;
const Time = styled.button`
  background-color : #f5f5f5;
  width : 72px;
  height : 19px;
  font-size : 11px;
  //font-weight : 530;
  padding-bottom : 5%;
  border : none;
  color : #ABABAB
`;
const BlackTime = styled.button`
  background-color : #000;
  width : 72px;
  height : 19px;
  text-align : center;
  padding-bottom : 5%;
  color : #fff;
  border : none;
  font-size : 11px;
`;
const WrapWho = styled.div`
  width : 40%;

`;
const Who = styled.button`
  background-color : #f5f5f5;
  width : 41px;
  height : 19px;
  font-size : 11px;  
  padding-bottom : 5%;
  border : none;
  color : #ABABAB
`;
const BlackWho = styled.button`
  background-color : #000;
  width : 41px;
  height : 19px;
  font-size : 11px;
  padding-bottom : 5%;
  color : #fff;
  border : none;
`;
const WrapCategory = styled.div`
  width : 75%;
`;
const Category = styled.button`
  margin-top : 1.2%;
  background-color : #f5f5f5;
  width : 85px;
  height : 19px;
  text-align : center;
  font-size : 11px;
  padding-bottom : 5%;
  color : #ababab;
  border : none;
`;
const BlakcCategory = styled.button`
  margin-top : 1.2%;
  background-color : #000;
  width : 85px;
  height : 19px;
  text-align : center;
  font-size : 11px;
  padding-bottom : 5%;
  color : #fff;
  border : none;`;
const DateDiv = styled.div`
  background-color : #f5f5f5;
  width : 101px;
  height : 19px;
  text-align : center;
  font-size : 11px;
  padding-top : 1%;
  color : #ababab;
  border : none;
  margin-bottom : 3%;
`;
const time = [
  <Time value='30분'>30분</Time>,
  <Time>1시간</Time>,
  <Time>1시간30분</Time>,
  <Time>2시간</Time>,
  <Time>2시간30분</Time>,
  <Time>3시간~</Time>
];
const blackTime = [
  <BlackTime>30분</BlackTime>,
  <BlackTime>1시간</BlackTime>,
  <BlackTime>1시간30분</BlackTime>,
  <BlackTime>2시간</BlackTime>,
  <BlackTime>2시간30분</BlackTime>,
  <BlackTime>3시간~</BlackTime>
];
const greyEmoticons = [
  face_g1,
  face_g2,
  face_g3,
  face_g4,
  face_g5,
  face_g6,
  face_g7,
  face_g8,
  face_g9,
];
const greyWeather =[
  weather_g1,
  weather_g2,
  weather_g3,
  weather_g4,
  weather_g5
]
const blackWeather = [
  weather_b1,
  weather_b2,
  weather_b3,
  weather_b4,
  weather_b5
];
const who = [
  <Who>혼자</Who>,
  <Who>가족</Who>,
  <Who>친구</Who>,
  <Who>연인</Who>,
  <Who>단체</Who>
]
const blackWho = [
  <BlackWho>혼자</BlackWho>,
  <BlackWho>가족</BlackWho>,
  <BlackWho>친구</BlackWho>,
  <BlackWho>연인</BlackWho>,
  <BlackWho>단체</BlackWho>
]
const category=[
  <Category>미디어</Category>,
  <Category>공예</Category>,
  <Category>디자인</Category>,
  <Category>사진</Category>,
  <Category>특별전시</Category>,
  <Category>조각</Category>,
  <Category>기획전</Category>,
  <Category>설치미술</Category>,
  <Category>회화</Category>,
  <Category>작가전시</Category>
]
const blackCategory=[
  <BlakcCategory>미디어</BlakcCategory>,
  <BlakcCategory>공예</BlakcCategory>,
  <BlakcCategory>디자인</BlakcCategory>,
  <BlakcCategory>사진</BlakcCategory>,
  <BlakcCategory>특별전시</BlakcCategory>,
  <BlakcCategory>조각</BlakcCategory>,
  <BlakcCategory>기획전</BlakcCategory>,
  <BlakcCategory>설치미술</BlakcCategory>,
  <BlakcCategory>회화</BlakcCategory>,
  <BlakcCategory>작가전시</BlakcCategory>
]
export default function TodayExhibition ({
  setViewingTime,
  setSatisfactionLevel,
  setWeatherLevel,
  setCompanion,
  setGenre1,
  setGenre2,
  setGenre3,
  year,
  month,
  date,
  setYear,
  setMonth,
  setDate
  }) 
  {
  //console.log(year,month,date)
  //표정 이모티콘
  const [selectedEmotionIndex, setSelectedEmotionIndex] = useState(null);
  const [Emotion, setEmotion] = useState(greyEmoticons);
  //날씨 이모티콘
  const [selectedWeatherIndex, setSelectedWeatherIndex] = useState(null);
  const [Weather, setWeather] = useState(greyWeather);
  const [selectweather, setSelectWeather] = useState(blackWeather)
  //시간 선택 박스
  const [selecteTimeIndex, setSelectedTimeIndex] = useState(null);
  const [Time, setTime] = useState(time);
  const [selectTime, setSelectTime] = useState(blackTime)
  //동행인 선택 박스
  const [selectedWhoIndex, setSelectedWhoIndex] = useState(null);
  const [Who, setWho] = useState(who);
  const [selectWho, setSelectWho] = useState(blackWho)
  //카테고리 선택 박스
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(null);
  const [Category, setCategory] = useState(category);
  const [selectCategory, setSelectCategory] = useState(blackCategory)
    // 이 함수를 Emoticon 컴포넌트에 전달하여 선택된 인덱스를 받아옵니다.
    const handleEemotionSelection = (selectedIdx) => { //선택된 만족도 이모티콘의 인덱스값 셋팅
      setSelectedEmotionIndex(selectedIdx);
      setSatisfactionLevel(selectedIdx+1); //선택된 만족도를 Record.jsx로 보내줌
    };
    const handleWeatherSelection = (selectedIdx) => { //선택된 날씨 이모티콘의 인덱스값 셋팅
      setSelectedWeatherIndex(selectedIdx);
      setWeatherLevel(selectedIdx+1); //선택된 만족도를 Record.jsx로 보내줌
    };
    const handleTimeSelection = (selectedIdx) => { //선택된 시간 인덱스 값 셋팅
      setSelectedTimeIndex(selectedIdx);
      setViewingTime(time[selectedIdx].props.children) //선택된 시간을 Record.jsx로 보내줌
      //console.log("시간 : ",time[selectedIdx])
    };
    const handleWhoSelection = (selectedIdx) => { //선택된 동반인 인덱스 값 셋팅
      setSelectedWhoIndex(selectedIdx);
      setCompanion(who[selectedIdx].props.children) //선택된 동반인을 Record.jsx로 보내줌
      //console.log("동반인 : ",who[selectedIdx].props.children)
    };
    const handleCategorySelection = (selectedIdx) => { //선택된 카테고리 인덱스값 셋팅
      setSelectedCategoryIndex(selectedIdx);
      setGenre1(category[selectedIdx].props.children) //선택된 카테고리를 Record.jsx로 보내줌
     // console.log("카테고리",category[selectedIdx].props.children)
    };
    const [isModalOpen,setIsModalOpen] = useState(false);
    const [dateBoxColor,setDateBoxColor] = useState();
    const ClickedModalOpen = () =>{
      isModalOpen ? setIsModalOpen(false) : setIsModalOpen(true)
    }
  return (
    <SelectExhibition>
            <div style={{marginBottom:'4%'}}>오늘의 전시</div>
                <DateDiv onClick={ClickedModalOpen} style={dateBoxColor}>{year}.{month}.{date}</DateDiv>
                {isModalOpen && <MiniCalendar
                  setYear={setYear}
                  setMonth={setMonth}
                  setDate={setDate}
                  Date1={date}
                  isModalOpen={isModalOpen}
                  setIsModalOpen={setIsModalOpen}
                  setDateBoxColor={setDateBoxColor}
                />}
            <WrapSelect>
              <WrapKey>
                <div>관람소요시간</div>
                <div>만족도</div>
                <div>날씨</div>
                <div>동행인</div>
                <div>카테고리</div>
              </WrapKey>
              <WrapValue>
                <WrapTime>
                  <Select
                      onSelect={handleTimeSelection}
                      greyBox = {time}
                      box={Time}
                      setBox={setTime}
                      blackBox={blackTime}
                    />
                </WrapTime>
                  <Emoticon
                  onSelect={handleEemotionSelection} 
                  greyEmoticons={greyEmoticons}
                  emoticons={Emotion} //이모지가 담긴 배열
                  setEmoticons={setEmotion}  
                  />
                <WeatherEmoticons
                onSelect={handleWeatherSelection}
                greyEmoticons={greyWeather}
                emoticons={Weather}
                setEmoticons={setWeather}
                selectweather={selectweather}
              />
                <WrapWho>
                <Select
                      onSelect={handleWhoSelection}
                      greyBox = {who}
                      box={Who}
                      setBox={setWho}
                      blackBox={blackWho}
                    />
                </WrapWho>
                <WrapCategory>
                <CategorySelect
                      onSelect={handleCategorySelection}
                      greyBox = {category}
                      box={Category}
                      setBox={setCategory}
                      blackBox={blackCategory}
                      setGenre1={setGenre1}
                      setGenre2={setGenre2}
                      setGenre3={setGenre3}
                    />
                </WrapCategory>
              </WrapValue>
            </WrapSelect>

    </SelectExhibition>
  )
}
