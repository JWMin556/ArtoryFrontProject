import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import MyCalendar from '../components/MyStory/MyCalendar';
import * as S from '../styled-components/MyStory.style';
import SaveExhibition from '../components/MyStory/SaveExhibition';
import StyledButton from '../styled-components/StyledButton';
import SearchModal from '../components/MyStory/SearchModal1';
import Memo from '../components/MyStory/Memo';
import { getMystoryInfo, mystoryInfo } from '../components/API/Mystoyr_APITEST';
const url = 'http://3.39.39.6:8080/api/mystory/all?page=1';
const token = localStorage.getItem('Token');

export default function MyStory() {
  const [userData, setUserData] = useState([]);
  const [userStoryData, setUserStoryData] = useState([]);
  const [isButtonClick, setIsButtonClick] = useState(false);

  const profileIMG = userData.image;
  const { state } = useLocation();
  console.log(state);
  const handleClickStoryBotton = () => {
    if (isButtonClick) {
      setIsButtonClick(false);
    } else {
      setIsButtonClick(true);
    }
  };
  const userInfo = async () => {
    //유저 정보 불러오기
    try {
      const response = await getMystoryInfo();
      console.log('유저정보', response.data);

      setUserData(response.data);
      console.log('유저 스토리 정보', response.data.stories);
      setUserStoryData(response.data.stories);
    } catch (error) {
      console.error('Error fetching data:', error.response.data);
    }
  };
  //유저스토리정보
  const loadUserStories = async () => {
    try {
      const response = await getMystoryInfo();

      console.log('유저 스토리 정보', response.data.stories);
      setUserStoryData(response.data.stories);
    } catch (error) {
      console.error('Error fetching data:', error.response.data);
    }
  };
  useEffect(() => {
    userInfo();
  }, []);
  return (
    <S.Container>
      {isButtonClick && (
        <SearchModal
          isButtonClick={isButtonClick}
          source={'record'}
          userStoryData={userStoryData}
        />
      )}
      <S.WrapProfileAndButton>
        <S.WrapProfile>
          <S.ProfileIMG
            src={profileIMG}
            style={{ width: '100px', height: '100px' }}
          ></S.ProfileIMG>
          <S.RecordName> {userData.nickname + ' '} 님의 기록</S.RecordName>
        </S.WrapProfile>
        <S.WrapButton>
          <StyledButton
            height="35px"
            width="169px"
            style={{ fontSize: '13px' }}
            onClick={handleClickStoryBotton}
          >
            스토리 작성하기
          </StyledButton>
        </S.WrapButton>
      </S.WrapProfileAndButton>
      <S.WrapCalendar>
        <S.WrapMemo>
          <Memo content={userData.memo} />
        </S.WrapMemo>
        <S.WrapCalendar2>
          <MyCalendar
            loadUserStories={loadUserStories}
            userStoryData={userStoryData}
          />
        </S.WrapCalendar2>
      </S.WrapCalendar>
      <div style={{ margin: '5%' }}>
        <div
          style={{
            fontSize: '30px',
            fontWeight: 'bold',
            fontFamily: 'Pretendard',
            width: '50%',
            textAlign: 'center',
            marginTop: '7%',
          }}
        >
          저장한 전시
        </div>
        <S.WrapSaveExhibition>
          {userData.exhibitions === undefined ? (
            <p>Loading...</p>
          ) : (
            //<p>있음</p>
            userData.exhibitions.map((item, index) => (
              <S.WrapPoster className="hi" key={index}>
                <SaveExhibition item={item} />
              </S.WrapPoster>
            ))
          )}
        </S.WrapSaveExhibition>
      </div>
    </S.Container>
  );
}
