import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useEffect } from 'react';
import axios from 'axios';

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

const ContentUserWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20%;
  margin-left: 3%;
  margin-right: 3%;
  background-color: red;
`;

const URL = localStorage.getItem('URL');
const url = `${URL}/api/mypage/all?page=1`;
const token = localStorage.getItem('Token');

export default function MyPageUserInfo() {

  const [myScrappedMembersData, setMyScrappedMembersData] = useState([]);

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
        setMyScrappedMembersData(response?.data.scrappedMembers);
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

            <ContentUserWrap>
                토리토리님이 <br /> 작성하신 STORY
            </ContentUserWrap>
        </Page>
    </PageContainer>
  )
}
