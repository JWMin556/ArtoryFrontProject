import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useEffect } from 'react';
import axios from 'axios';
import SlidePictures from '../components/MyPage/SlidePictures';
import SlideMyStory from '../components/MyPage/SlideMyStory';
import SlideScrappedStory from '../components/MyPage/SlideScrappedStory';
import SlideScrappedMember from '../components/MyPage/SlideScrappedMember';
import UserSlide from '../components/Story/UserSlide';

//PageContainer & Page 스타일 수정한 거 변경하시면 안됩니다!footer랑 겹치는 문제가 있어서..ㅜ
const PageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%; /* 페이지가 화면 전체를 채우도록 설정 */
  display: flex;
  justify-content: center; /* 수평 가운데 정렬 */
  /* align-items: center;  */
  padding-bottom: 20%; /* 원하는 여백 값 */
  margin-top: 100px;
`;

const Page = styled.div`
  /* position: relative; */
  width: 76%;
  /* max-width: 800px; */
  padding: 0 20px;
  position: absolute;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px; /* 원하는 여백 값 */
`;

const TitleWrap = styled.div`
  color: black;
  font-size: 30px;
  font-family: 'Pretendard';
  font-weight: 700;
  word-wrap: break-word;
  line-height: 39.92px;
  letter-spacing: 1.05px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const TitleLeftWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 22%;
`;

const TitleLeftWrapParagraph = styled.div`
  display: flex;
  flex-direction: row;
`;

const ImgStyled = styled.img`
  display: flex;
  flex-direction: column;
  margin-top: 20%;
  width: 130px;
`;

const TitleRightWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const TitleRightWrapParagraphArea = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 5%;
`;

const TitleRightWrapParagraphTitle = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
`;

const BoldSentence = styled.p`
  color: #262626;
  font-size: 20px;
  font-family: 'Pretendard';
  font-weight: 700;
  line-height: 26.61px;
  word-wrap: break-word;
  /* margin-right: 120px; */
`;

const InputWrap = styled.div`
  display: flex;
  background: #efeeee;
  box-shadow: 1px 2px 8px #f3f3f3;
  padding: 5px;
  margin-left: auto;
  margin-top: 8px;
  margin-bottom: 13px;
  width: 300px;
`;

const InputStyle = styled.div`
  color: #262626;
  font-size: 16px;
  font-family: 'Pretendard';
  font-weight: 600;
  line-height: 21.29px;
  letter-spacing: 0.56px;
  word-wrap: break-word;
  border: none;
  outline: none;
  background: #efeeee;
`;

const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20%;
  margin-left: 3%;
  margin-right: 3%;
  /* background-color: red; */
`;

const ContentBtns = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const Btns1 = styled.button`
  height: 35px;
  width: 19%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px rgba(170.71, 170.71, 170.71, 0.02) solid;
  align-items: center;
  box-shadow: 1px 2px 8px #f3f3f3;
  color: #616161;
  font-size: 14px;
  font-family: 'Pretendard';
  font-weight: 600;
  line-height: 18.63px;
  letter-spacing: 0.49px;
  word-wrap: break-word;
  border: none;
  background-color: #efeeee;
  &:hover {
    background-color: black;
    color: white;
  }
`;

const Btns2 = styled.button`
  height: 35px;
  width: 19%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px rgba(170.71, 170.71, 170.71, 0.02) solid;
  align-items: center;
  box-shadow: 1px 2px 8px #f3f3f3;
  color: #f3f3f3;
  font-size: 14px;
  font-family: 'Pretendard';
  font-weight: 600;
  line-height: 18.63px;
  letter-spacing: 0.49px;
  word-wrap: break-word;
  border: none;
  background-color: black;
`;

const ContentPosters = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContentUserWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20%;
  margin-left: 3%;
  margin-right: 3%;
  background-color: red;
`;

const URL = localStorage.getItem('URL');

const url = `${URL}/api/mypage/all?page=1`;  //문제점...page가 어디까지 되는지 몰라서 접근이 어렵
const token = localStorage.getItem('Token');
export default function MyPage() {
  //여기서부터 나의 스토리 버튼 ~ 저장 스토리 버튼을 위한 부분입니다.
  const [isMyStoryBtnClicked, setIsMyStoryBtnClicked] = useState(true);
  const [isMyGalaryBtnClicked, setIsGalaryBtnClicked] = useState(false);
  const [isSavedUserBtnClicked, setIsSavedUserBtnClicked] = useState(false);
  const [isSaveStoryBtnClicked, setIsSaveStoryBtnClicked] = useState(false);
  //const [isSavedUserClicked, setIsSavedUserClicked] = useState(false);

  const handleMyStoryBtnClick = () => {
    setIsMyStoryBtnClicked(true);
    setIsGalaryBtnClicked(false);
    setIsSavedUserBtnClicked(false);
    setIsSaveStoryBtnClicked(false);
  };

  const handleMyGalaryBtnClick = () => {
    setIsMyStoryBtnClicked(false);
    setIsGalaryBtnClicked(true);
    setIsSavedUserBtnClicked(false);
    setIsSaveStoryBtnClicked(false);
  };

  const handleSavedUserBtnClick = () => {
    setIsMyStoryBtnClicked(false);
    setIsGalaryBtnClicked(false);
    setIsSavedUserBtnClicked(true);
    setIsSaveStoryBtnClicked(false);
  };

  const handleSaveStoryBtnClick = () => {
    setIsMyStoryBtnClicked(false);
    setIsGalaryBtnClicked(false);
    setIsSavedUserBtnClicked(false);
    setIsSaveStoryBtnClicked(true);
  };
  //여기까지가 나의 스토리 버튼 ~ 저장 스토리 버튼을 위한 부분입니다.

  //여기서부터는 슬라이드 부분입니다.
  const [myStoryData, setMyStoryData] = useState([]);
  const [myPicturesData, setMyPicturesData] = useState([]);
  const [myScrappedMembersData, setMyScrappedMembersData] = useState([]);
  const [myScrappedStoriesData, setMyScrappedStoriesData] = useState([]);

  //서버연결을 위한 부분입니다.
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    (async () => {
      //유저 정보 불러오기
      try {
        const response = await axios.get(url, {
          headers: {
            Accept: '*/*',
            Authorization: `Bearer ${token}`,
            'content-type': 'application/json',
          },
        });
        console.log('유저정보', response.data);
        setUserData(response.data);

        //이제 하나하나씩 슬라이드 부분을 저장해서 받아오자
        setMyStoryData(response?.data.stories);
        //console.log("스토리정보", myStoryData);
        setMyPicturesData(response?.data.storyPictures);
        // console.log(response.data.storyPictures);
        setMyScrappedMembersData(response?.data.scrappedMembers);
        setMyScrappedStoriesData(response?.data.scrappedStories);
      } catch (error) {
        console.log(error.response.data);
      }
    })();
  }, []);
  return (
    <PageContainer>
      <Page>
        <TitleWrap>
          <TitleLeftWrap>
            <TitleLeftWrapParagraph>
              {userData.nickname}님의<br />
              마이페이지
            </TitleLeftWrapParagraph>
            <ImgStyled src={userData.image} alt="사진첨부" />
          </TitleLeftWrap>

          <TitleRightWrap>
            <Link
              to={{
                pathname: '/mypagemodify',
                search: `?nickname=${userData.nickname}&image=${userData.image}`,
              }}
              style={{ display: 'inline-block', marginBottom: '10px' }}
            >
              <img
                style={{ float: 'right' }}
                src="/img/setting.png"
                alt="환경설정버튼"
                width="8%"
              />
            </Link>
            <TitleRightWrapParagraphArea>
              <TitleRightWrapParagraphTitle>
                <BoldSentence>닉네임</BoldSentence>
              </TitleRightWrapParagraphTitle>
              <InputWrap>
                <InputStyle>{userData.nickname}</InputStyle>
              </InputWrap>
            </TitleRightWrapParagraphArea>

            <TitleRightWrapParagraphArea>
              <TitleRightWrapParagraphTitle>
                <BoldSentence>한 줄 소개</BoldSentence>
              </TitleRightWrapParagraphTitle>
              <InputWrap>
                <InputStyle>{userData.introduction}</InputStyle>
              </InputWrap>
            </TitleRightWrapParagraphArea>

            <TitleRightWrapParagraphArea>
              <TitleRightWrapParagraphTitle>
                <BoldSentence>나의 키워드</BoldSentence>
              </TitleRightWrapParagraphTitle>
              <InputWrap>
                <InputStyle>{userData.myKeyword}</InputStyle>
              </InputWrap>
            </TitleRightWrapParagraphArea>
          </TitleRightWrap>
        </TitleWrap>

        {/* {isSavedUserClicked ? (
          <ContentUserWrap>
            토리토리님이 <br /> 작성하신 STORY
          </ContentUserWrap>
        ) : (
          <ContentWrap>
            <ContentBtns>
              {isMyStoryBtnClicked ? (
                <Btns2>나의 스토리</Btns2>
              ) : (
                <Btns1 onClick={handleMyStoryBtnClick}>나의 스토리</Btns1>
              )}
              {isMyGalaryBtnClicked ? (
                <Btns2>나의 앨범</Btns2>
              ) : (
                <Btns1 onClick={handleMyGalaryBtnClick}>나의 앨범</Btns1>
              )}
              {isSavedUserBtnClicked ? (
                <Btns2>저장 유저</Btns2>
              ) : (
                <Btns1 onClick={handleSavedUserBtnClick}>저장 유저</Btns1>
              )}
              {isSaveStoryBtnClicked ? (
                <Btns2>저장 스토리</Btns2>
              ) : (
                <Btns1 onClick={handleSaveStoryBtnClick}>저장 스토리</Btns1>
              )}
            </ContentBtns>

            <ContentPosters>
              {isMyStoryBtnClicked && <SlideMyStory Dummy={myStoryData} />}
              {isMyGalaryBtnClicked && <SlidePictures Dummy={myPicturesData} />}
              {isSavedUserBtnClicked && <UserSlide width={126} height={126} Dummy={myScrappedMembersData}/>}
              {isSaveStoryBtnClicked && <SlideScrappedStory Dummy={myScrappedStoriesData} />}
            </ContentPosters>
        </ContentWrap>
        )} */}
        <ContentWrap>
          <ContentBtns>
            {isMyStoryBtnClicked ? (
              <Btns2>나의 스토리</Btns2>
            ) : (
              <Btns1 onClick={handleMyStoryBtnClick}>나의 스토리</Btns1>
            )}
            {isMyGalaryBtnClicked ? (
              <Btns2>나의 앨범</Btns2>
            ) : (
              <Btns1 onClick={handleMyGalaryBtnClick}>나의 앨범</Btns1>
            )}
            {isSavedUserBtnClicked ? (
              <Btns2>저장 유저</Btns2>
            ) : (
              <Btns1 onClick={handleSavedUserBtnClick}>저장 유저</Btns1>
            )}
            {isSaveStoryBtnClicked ? (
              <Btns2>저장 스토리</Btns2>
            ) : (
              <Btns1 onClick={handleSaveStoryBtnClick}>저장 스토리</Btns1>
            )}
          </ContentBtns>

          <ContentPosters>
            {isMyStoryBtnClicked && <SlideMyStory Dummy={myStoryData} />}
            {isMyGalaryBtnClicked && <SlidePictures Dummy={myPicturesData} />}
            {isSavedUserBtnClicked && <UserSlide width={126} height={126} Dummy={myScrappedMembersData}/>}
            {/* <SlideScrappedMember width={126} height={126} Dummy={myScrappedMembersData} /> */}
            {isSaveStoryBtnClicked && <SlideScrappedStory Dummy={myScrappedStoriesData} />}
          </ContentPosters>
        </ContentWrap>
      </Page>
    </PageContainer>
  );
}
