import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import Slide from '../components/Exhibition/Slide';
import { useEffect } from 'react';
import axios from 'axios';
import SlidePictures from '../components/MyPage/SlidePictures';
import { TestDummy } from '../TestDummy';
import Pictures from '../components/MyPage/Pictures';
import SlideMyStory from '../components/MyPage/SlideMyStory';
import SlideScrappedStory from '../components/MyPage/SlideScrappedStory';
import SlideScrappedMember from '../components/MyPage/SlideScrappedMember';

const PageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%; /* 페이지가 화면 전체를 채우도록 설정 */
  display: flex;
  justify-content: center; /* 수평 가운데 정렬 */
  /* align-items: center;  */
  padding-bottom: 20px; /* 원하는 여백 값 */
  margin-top: 100px;
`;

const Page = styled.div`
  /* z-index: 900; */
  position: relative;
  width: 100%;
  max-width: 800px;
  padding: 0 20px;
  /* background: rgba(0, 0, 0, 0.1); */
  /* top: 90%; */
  /* left: 50%; */
  position: absolute;
  /* transform: translate3d(-50%, -50%, 0); */
  /* overflow: hidden; */
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
  border-radius: 10px;
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
    color: #616161;
    font-size: 24px;
    font-family: 'Pretendard';
    font-weight: 700;
    line-height: 31.94px;
    word-wrap: break-word;
    margin-right: 120px;
`;

const TitleRightWrapParagraphContent = styled.div`
    display: flex;
    background: #EFEEEE;
    border-radius: 10px;
    /* border: 1px rgba(170.71, 170.71, 170.71, 0.02) solid; */
    align-items : center;
    box-shadow: 1px 2px 8px #f3f3f3;
    color: #262626;
    font-size: 12px;
    font-family: 'Pretendard';
    font-weight: 600;
    line-height: 21.29px;
    letter-spacing: 0.56px;
    word-wrap: break-word;
`;

const ContentWrap = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20%;
    /* background-color: red; */
`;

const ContentBtns = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const Btns1 = styled.button`
    height: 35px;
    width: 20%;
    display: flex;
    align-items : center;
    justify-content: center;
    border-radius: 10px;
    border: 1px rgba(170.71, 170.71, 170.71, 0.02) solid;
    align-items : center;
    box-shadow: 1px 2px 8px #f3f3f3;
    color: #616161;
    font-size: 14px;
    font-family: 'Pretendard';
    font-weight: 600;
    line-height: 18.63px;
    letter-spacing: 0.49px;
    word-wrap: break-word;
    border: none;
    background-color: #EFEEEE;
    &:hover {
        background-color: black;
        color: white;
    }
`;

const Btns2 = styled.button`
    height: 35px;
    width: 20%;
    display: flex;
    align-items : center;
    justify-content: center;
    border-radius: 10px;
    border: 1px rgba(170.71, 170.71, 170.71, 0.02) solid;
    align-items : center;
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

const url = 'http://3.39.39.6:8080/api/mypage/all?page=1';
const token = localStorage.getItem('Token');
export default function MyPage() {
    //여기서부터 나의 스토리 버튼 ~ 저장 스토리 버튼을 위한 부분입니다. 
    const [isMyStoryBtnClicked, setIsMyStoryBtnClicked] = useState(true);
    const [isMyGalaryBtnClicked, setIsGalaryBtnClicked] = useState(false);
    const [isSavedUserBtnClicked, setIsSavedUserBtnClicked] = useState(false);
    const [isSaveStoryBtnClicked, setIsSaveStoryBtnClicked] = useState(false);

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
                const response = await axios.get(url,
                    {
                        headers: {
                            'Accept': '*/*',
                            'Authorization': `Bearer ${token}`,
                            'content-type': 'application/json',
                    }
                    }
                );
                console.log("유저정보",response.data);
                setUserData(response.data);

                //이제 하나하나씩 슬라이드 부분을 저장해서 받아오자
                setMyStoryData(response?.data.stories);
                //console.log("스토리정보", myStoryData);
                setMyPicturesData(response?.data.storyPictures);
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
                        {userData.nickname}님<br />  
                        마이페이지
                    </TitleLeftWrapParagraph>
                    <ImgStyled src={userData.image} alt="사진첨부" />
                </TitleLeftWrap>

                <TitleRightWrap>
                    <Link to= {{
                        pathname: "/mypagemodify",
                        search: `?nickname=${userData.nickname}&image=${userData.image}` 
                    }} style={{display: 'inline-block', marginBottom:'10px' }}>
                        <img style={{float:"right"}} src="/img/setting.png" alt="환경설정버튼" width="8%"/>
                    </Link>

                    <TitleRightWrapParagraphArea>
                        <TitleRightWrapParagraphTitle>닉네임</TitleRightWrapParagraphTitle>
                        <TitleRightWrapParagraphContent>{userData.nickname}</TitleRightWrapParagraphContent>
                    </TitleRightWrapParagraphArea>

                    <TitleRightWrapParagraphArea>
                        <TitleRightWrapParagraphTitle>한 줄 소개</TitleRightWrapParagraphTitle>
                        <TitleRightWrapParagraphContent>{userData.introduction}</TitleRightWrapParagraphContent>
                    </TitleRightWrapParagraphArea>
                    <TitleRightWrapParagraphArea>
                        <TitleRightWrapParagraphTitle>나의 키워드</TitleRightWrapParagraphTitle>
                        <TitleRightWrapParagraphContent>{userData.myKeyword}</TitleRightWrapParagraphContent>
                    </TitleRightWrapParagraphArea>
                </TitleRightWrap>
            </TitleWrap>

            <ContentWrap>
                <ContentBtns>
                    {isMyStoryBtnClicked ? (
                    <Btns2>나의 스토리</Btns2>
                    ) : (
                    <Btns1 onClick={handleMyStoryBtnClick}>나의 스토리</Btns1>
                    )}
                    {isMyGalaryBtnClicked ? (
                    <Btns2>나의 사진첩</Btns2>
                    ) : (
                    <Btns1 onClick={handleMyGalaryBtnClick}>나의 사진첩</Btns1>
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
                    {isSavedUserBtnClicked && <SlideScrappedMember Dummy={myScrappedMembersData} />}
                    {isSaveStoryBtnClicked && <SlideScrappedStory Dummy={myScrappedStoriesData} />}
                </ContentPosters>
            </ContentWrap>
        </Page>
    </PageContainer>
  )
}
