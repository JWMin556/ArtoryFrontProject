import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import Slide from '../components/Exhibition/Slide';
import { TestDummy } from '../TestDummy';

const Page = styled.div`
  z-index: 900;
  position: relative;
  width: 100%;
  max-width: 700px;
  padding: 0 20px;
  /* background: rgba(0, 0, 0, 0.1); */
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  overflow: hidden;
  display: flex;
  flex-direction: column;
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


export default function MyPage() {
    //여기서부터 나의 스토리 버튼 ~ 저장 스토리 버튼을 위한 부분입니다. 
    const [isMyStoryBtnClicked, setIsMyStoryBtnClicked] = useState(false);
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
  return (
    <Page>
        <TitleWrap>
            <TitleLeftWrap>
                <TitleLeftWrapParagraph>
                    니모님, <br />  {/*임시로 넣은 것이며, 실제로는 서버에서 이름을 받아와야 합니다. */}
                    마이페이지
                </TitleLeftWrapParagraph>
                <ImgStyled src='/Img/input_pic.png' alt="사진첨부" />
            </TitleLeftWrap>

            <TitleRightWrap>
                <Link to="/mypagemodify">
                    <img style={{marginTop: "14%", marginBottom: "10%", float:"right" }} src="/img/setting.png" alt="환경설정버튼" width="8%"/>
                </Link>

                <TitleRightWrapParagraphArea>
                    <TitleRightWrapParagraphTitle>닉네임</TitleRightWrapParagraphTitle>
                    <TitleRightWrapParagraphContent>ㅁㄴㄹㄴㅁㅇㄹㄴㅁㅇㅇㄹ</TitleRightWrapParagraphContent>
                </TitleRightWrapParagraphArea>

                <TitleRightWrapParagraphArea>
                    <TitleRightWrapParagraphTitle>한 줄 소개</TitleRightWrapParagraphTitle>
                    <TitleRightWrapParagraphContent>ㅁㄴㄹㄴㅁㅇㄹㄴㅁ</TitleRightWrapParagraphContent>
                </TitleRightWrapParagraphArea>
                <TitleRightWrapParagraphArea>
                    <TitleRightWrapParagraphTitle>나의 키워드</TitleRightWrapParagraphTitle>
                    <TitleRightWrapParagraphContent>ㅁㄴㄹㄴㅁㅇㄹㄴ</TitleRightWrapParagraphContent>
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
                {/* <Slide Dummy = {TestDummy}/> */}
            </ContentPosters>
        </ContentWrap>
    </Page>
  )
}
