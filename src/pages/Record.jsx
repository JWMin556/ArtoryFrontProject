import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import WritingStory from '../components/MyStory/WritingStory';
import StoryTitle from '../components/MyStory/StoryTitle';
import TodayExhibition from '../components/MyStory/TodayExhibition';
import { createStory1, createStory2 } from '../components/API/Mystoyr_APITEST';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import {
  progressSaveApi1,
  progressSaveApi2,
} from '../components/API/StorySave';
import Banner from '../components/Story/Banner';
import Modal from '../components/MyStory/StroyDelete';
import { modifySaveApi } from '../components/API/StorySave';

const token = localStorage.getItem('Token');
const URL = localStorage.getItem('URL');
const url = `${URL}/api/`;
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
  //color : red;
  font-size: 30px;
  font-weight: 800;
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
    font-family: inherit;
  }
`;
//레코드.jsx로 넘어올 때 {state : item} 종류
// 1. 스토리 작성하기 버튼 : item -> exhibitionTitle,exhibitionId,exhibitionImage
// 2. 캘린더에서 작성 전 스토리 클릭 : item -> exhibitionTitle,exhibitionId,exhibitionImage,storyId,year,month,dat,storyState
export default function Record(props) {
  const navigate = useNavigate();
  const today = new Date();
  const getYear = moment(today).format('YYYY');
  const getMonth = moment(today).format('MM');
  const getDate = moment(today).format('DD');
  const defaultData = ``;

  const { state } = useLocation();

  const [userStoryData, setUserStoryData] = useState([]);
  const [data, setData] = useState(defaultData); //스토리 내용
  const [title, setTitle] = useState(''); //제목
  const [viewingTime, setViewingTime] = useState(''); //시간
  const [satisfactionLevel, setSatisfactionLevel] = useState(''); //만족도
  const [weather, setWeather] = useState(''); //날씨
  const [companion, setCompanion] = useState(''); //동반인
  const [genre1, setGenre1] = useState(''); //장르1
  const [genre2, setGenre2] = useState(''); //장르2
  const [genre3, setGenre3] = useState(''); //장르3
  const [genre11, setGenre11] = useState(''); //장르1
  const [genre22, setGenre22] = useState(''); //장르2
  const [genre33, setGenre33] = useState(''); //장르3
  const [isOpen, setIsOpen] = useState(true); //공개여부
  const [year, setYear] = useState(getYear); //년
  const [month, setMonth] = useState(getMonth); //월
  const [date, setDate] = useState(getDate); //일
  const [isDeleteModal, setIsDeleteModal] = useState(false); //동일한 전시 삭제 모달
  const [isNotifyModal, setIsNotifyModal] = useState(false); //저장 모달
  const [isProgressModal, setIsProgressModal] = useState(false); //임시저장 모달
  const [isModifyModal, setIsModifyModal] = useState(false); //수정 모달
  const [storyByDate, setStoryByDate] = useState([]);
  const [storyContent, setStoryContent] = useState([]);
  const [dateBoxColor, setDateBoxColor] = useState();
  const [keyword, setKeyword] = useState(''); //키워드
  const [picturesUrl, setPicturesUrl] = useState([state.item.exhibitionImage]); //선택한 사진 배열
  //console.log('state.item.exhibitionImage',state.item.exhibitionImage.toString())
  const id = state.item.exhibitionId; //전시회 아이디
  const exhibitionTitle = state.item.exhibitionTitle; //전시회 제목
  const storyId = state.item.storyId; //스토리 아이디
  const storyState = state.item.storyState;
  useEffect(() => {
    if (state.year && state.month && state.day) {
      setYear(state.year);
      setMonth(state.month);
      setDate(state.day);
      setTitle('제목을 직접 작성해주세요');
    }
  }, [year, month, date]);
  useEffect(() => {
    (async () => {
      //유저 정보 불러오기(스토리 목록을 불러오기 위해)
      try {
        const response = await axios.get(`${url}mystory/all?page=1`, {
          headers: {
            Accept: '*/*',
            Authorization: `Bearer ${token}`,
            'content-type': 'application/json',
          },
        });
        //console.log("UserStoryData",response.data.stories)
        setUserStoryData(response.data.stories);
        //console.log("유저 스토리 정보",response.data.stories);
      } catch (error) {
        console.error('Error fetching data:', error.response);
      }
    })();
  }, []);
  useEffect(() => {
    (async () => {
      //특정 스토리 조회 , 최초로 작성한 스토리의 내용을 불러오기 위해
      //console.log("storyId",state.item.storyId)
      if (storyId && storyState !== 'NOT_STARTED') {
        try {
          const response = await axios.get(
            `${url}stories/${state.item.storyId}`,
            {
              headers: {
                Accept: '*/*',
                Authorization: `Bearer ${token}`,
                'content-type': 'application/json',
              },
            }
          );
          setGenre11(response.data?.storyGenre1); //장르1
          setGenre22(response.data?.storyGenre2); //장르2
          setGenre33(response.data?.storyGenre3); //장르3
          setGenre1(response.data?.storyGenre1); //장르1
          setGenre2(response.data?.storyGenre2); //장르2
          setGenre3(response.data?.storyGenre3); //장르3
          setStoryContent(response.data);
          setData(response.data.storyContext); //스토리 내용 저장
          setTitle(response.data.storyTitle); //스토리 제목 저장
          setYear(response.data.year); //년도 저장
          setMonth(response.data.month); //월 저장
          setDate(response.data.day); //일 저장
          setViewingTime(response.data.storyViewingTime); //시간 저장
          setSatisfactionLevel(response.data.storySatisfactionLevel); //만족도 저장
          setWeather(response.data.storyWeather); //날씨 저장
          setCompanion(response.data.storyCompanion); //동반인
          setKeyword(response.data.storyKeyword); //키워드
          setPicturesUrl([response.data.exhibitionImage]); //사진 리스트
          console.log('스토리정보', response.data);
          //console.log("이미지유알엘",response.data.picturesUrl); //사진 리스트

          //console.log('스토리 내용 ', response.data);
        } catch (error) {
          console.error('Error fetching data:', error.response);
        }
      }
    })();
  }, [storyId]);

  useEffect(() => {
    //api통신할 때 보내기 위한 값들이 잘 받아와지나 확인하기 위한 콘솔
    // console.log("제목: ",title)
    // console.log("시간: ",viewingTime)
    // console.log("동반인: ",companion)
    console.log('장르1: ', genre1);
    console.log('장르2: ', genre2);
    console.log('장르3: ', genre3);
    // console.log("만족도",satisfactionLevel)
    // console.log("날씨",weather)
    // console.log("내용",data)
    // console.log("공개여부",isOpen)
    // console.log("년",year)
    // console.log("월",month)
    // console.log("일",date)
    //console.log("picturesUrl",picturesUrl)
  }, [
    title,
    viewingTime,
    companion,
    genre1,
    genre2,
    genre3,
    satisfactionLevel,
    weather,
    data,
    isOpen,
    year,
    month,
    date,
    picturesUrl,
  ]);

  //저장 버튼 클릭 -> 동일한 전시 삭제를 물어보는 모달창 뜸
  //-> 동일한 전시 삭제 -> 새롭게 작성한 스토리 저장
  const handleSubmit = async () => {
    //스토리 아이디가 존재하고 스토리의 상태가 Done 상태(저장까지 완료한 상태)이면
    if (storyState === 'DONE') {
      modifySaveApi(
        //스토리 수정
        storyId,
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
      setIsModifyModal(true);
    } else {
      setStoryByDate((prevStoryByDate) => {
        for (let i = 0; i < userStoryData.length; i++) {
          for (let j = 0; j < userStoryData.length; j++) {
            if (
              userStoryData[i].exhibitionTitle === exhibitionTitle &&
              userStoryData[i].year !== year &&
              userStoryData[i].month !== month &&
              userStoryData[i].day !== date
            ) {
              // 동일한 전시가 다른 날짜에 존재할 경우
              setIsDeleteModal(true); //모달 띄우고
              return (storyByDate[j] = userStoryData[i]); //겹치는 전시들만 모으는 배열에 넣어줌
            }
          }
        }
        saveStory();
      });
    }
  };
  //임시저장 버튼 클릭
  const handleProgressSubmit = async () => {
    if (storyId) {
      //storyId가 존재하는 경우 , 캘린더 -> 작성전(storyId존재) 스토리 저장 (성공)
      try {
        await progressSaveApi1(
          storyId,
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
      } catch (error) {
        console.log(error.response.data);
      }
    } //storyId가 존재하지 않는 경우, 작성하기 버튼 -> 새로운 스토리(storyId존재x) 저장 (실패)
    else {
      //alert("작성하기 버튼으로 들어옴")
      try {
        await progressSaveApi2(
          id, //전시회 아이디(exhibitionId)
          title,
          data,
          viewingTime,
          companion,
          genre1,
          genre2,
          genre3,
          satisfactionLevel,
          weather,
          year,
          month,
          date,
          isOpen,
          keyword,
          picturesUrl
        );
      } catch (error) {
        console.log(error.response);
      }
    }
    setIsProgressModal(true);
    //navigate('/mystory')
  };

  //미니달력모달열기
  const ClickedOpen = () => {
    setIsOpen(true);
  };

  //미니달력모달닫기
  const ClickClosed = () => {
    setIsOpen(false);
  };

  //스토리 저장하는 api
  const saveStory = async () => {
    if (storyId) {
      try {
        //스토리 아이디 존재
        await createStory1(
          storyId,
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
        //navigate(`/mystory`)
        setIsNotifyModal(true);
      } catch (error) {
        console.log(error.response);
      }
    } else {
      try {
        //스토리 아이디 존재x
        await createStory2(
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
        setIsNotifyModal(true);
        //navigate(`/mystory`)
      } catch (error) {
        console.log(error.response.data);
      }
    }
  };
  useEffect(() => {
    if (storyId && isOpen !== undefined) {
      setDateBoxColor({ backgroundColor: '#000', color: '#fff' });
    }
  }, []);
  return (
    <div>
      {/* 동일한 전시 삭제 모달 */}
      {isDeleteModal && (
        <Modal
          year={storyByDate.year + '.'}
          month={storyByDate.month + '.'}
          day={storyByDate.day}
          messgage={'캘린더에 동일한 전시 일정이 있습니다. 삭제하시겠습니까?'}
          part={'delete'}
          storyByDate={storyByDate}
          isModal={isDeleteModal}
          setIsDeleteModal={setIsDeleteModal}
          setIsNotifyModal={setIsNotifyModal}
          saveStory={saveStory}
        />
      )}
      {/* 저장했음 알림 모달 */}
      {isNotifyModal && (
        <Modal
          year={''}
          month={''}
          day={''}
          messgage={'저장되었습니다.'}
          part={'notify'}
          isModal={isNotifyModal}
          setIsNotifyModal={setIsNotifyModal}
        />
      )}
      {/* 임시저장했음 알림 모달 */}
      {isProgressModal && (
        <Modal
          year={''}
          month={''}
          day={''}
          messgage={'임시저장 되었습니다.'}
          part={'progress'}
          isModal={isProgressModal}
          setIsProgressModal={setIsProgressModal}
        />
      )}
      {/* 수정했음 알림 모달 */}
      {isModifyModal && (
        <Modal
          year={''}
          month={''}
          day={''}
          messgage={'스토리가 수정 되었습니다.'}
          part={'modify'}
          isModal={isModifyModal}
          setIsModifyModal={setIsModifyModal}
        />
      )}
      <Banner
        image={state.item.exhibitionImage}
        title={state.item.exhibitionTitle}
      />
      <Container>
        <StoryRecord>
          <Story>스토리 기록</Story>
          <Story2>나만의 스토리를 작성해보세요</Story2>
          <StoryTitle stroyId={storyId} Title={title} SetTitle={setTitle} />
          <OpenSelectButton>
            <button onClick={ClickedOpen} style={dateBoxColor}>
              공개
            </button>
            <button onClick={ClickClosed}>비공개</button>
          </OpenSelectButton>
          <TodayExhibition
            storyId={storyId}
            viewingTime={viewingTime}
            setViewingTime={setViewingTime}
            satisfactionLevel={satisfactionLevel}
            setSatisfactionLevel={setSatisfactionLevel}
            weather={weather}
            setWeatherLevel={setWeather}
            companion={companion}
            setCompanion={setCompanion}
            genre11={genre11}
            genre22={genre22}
            genre33={genre33}
            setGenre1={setGenre1}
            setGenre2={setGenre2}
            setGenre3={setGenre3}
            year={year}
            month={month}
            date={date}
            setYear={setYear}
            setMonth={setMonth}
            setDate={setDate}
            isOpen={isOpen}
          />
          <WritingStory
            keyword={keyword}
            setKeyword={setKeyword}
            data={data}
            setData={setData}
            picturesUrl={picturesUrl}
            setPicturesUrl={setPicturesUrl}
          />{' '}
        </StoryRecord>
        <WrapSaveButton>
          <button onClick={handleProgressSubmit}>임시 저장</button>
          <button onClick={handleSubmit}>저장</button>
        </WrapSaveButton>
      </Container>
    </div>
  );
}
