import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import Poster from '../components/Exhibition/Poster';
import CustomPagination from '../components/Exhibition/CustomPagination';
import { getUserPage } from '../components/API/Mypage_API';
import StoryPoster from '../components/Story/StoryPoster';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  // justify-content : center;
  // align-items : center;
  //margin-top : 10%;
  /* margin-left: 19%; */
  width: 100%;
  padding-top: 100px;
`;
const WrapResult = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

const WrapPoster = styled.div`
  margin: 20px;
`;
export const WrapIcon = styled.div`
  width: 175px;
  position: relative;
  top: 3%;
  left: 3%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export default function MyPageUserInfo() {
  const [userStories, setUserStories] = useState([]);
  const [userData, setUserData] = useState([]);
  const [page, setPage] = useState(1);
  const [exhibition, setExhibition] = useState(12);

  const { state } = useLocation();
  const id = state.id;

  const handlePageChange = (page) => {
    setPage(page);
  };

  const loadUserPage = async () => {
    try {
      const response = await getUserPage(id);
      setUserStories(response.stories);
      setUserData(response);
      // setMyScrappedMembersData(response?.data.scrappedMembers);
    } catch (error) {
      console.log(error.response.data);
    }
  };
  useEffect(() => {
    loadUserPage();
  }, []);

  return (
    <Container>
      <TitleWrap>
        <TitleLeftWrap>
          <TitleLeftWrapParagraph>
            {userData.nickname}님의
            <br />
            마이페이지
          </TitleLeftWrapParagraph>
          <ImgStyled src={userData.image} alt="사진첨부" />
        </TitleLeftWrap>

        <TitleRightWrap>
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

      {/* 스토리 */}
      <Stories>
        <TitleWrap style={{ width: '100%' }}>
          <span style={{ padding: '20px' }}> {userData.nickname}' STORY</span>
        </TitleWrap>
        <WrapResult>
          {userStories
            .slice(
              exhibition * (page - 1),
              exhibition * (page - 1) + exhibition
            )
            .map((item, index) => (
              <WrapPoster key={index}>
                <div>
                  <StoryPoster item={item} />
                </div>
              </WrapPoster>
            ))}
        </WrapResult>
        <CustomPagination
          page={page}
          exhibition={exhibition}
          data={userStories}
          handlePageChange={handlePageChange}
        />
      </Stories>
    </Container>
  );
}
const Stories = styled.div`
  margin: 100px 50px;
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;

  .cTClqU {
    width: 100%;
  }
`;
const TitleWrap = styled.div`
  width: 70%;
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
  /* margin-right: 50px; */
  min-width: 250px;
`;

const TitleLeftWrapParagraph = styled.div`
  display: flex;
  flex-direction: row;
`;

const ImgStyled = styled.img`
  display: flex;
  flex-direction: column;
  margin-top: 20%;
  width: 175px;
  height: 175px;
  object-fit: cover;
`;

const TitleRightWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  width: 50%;
  min-width: fit-content;
`;

const TitleRightWrapParagraphArea = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1%;
  height: 60px;
`;

const TitleRightWrapParagraphTitle = styled.div`
  display: flex;
  flex-direction: column;
  /* margin-right: 20px; */
  width: 140px;
`;

const BoldSentence = styled.p`
  margin-left: 0;
  color: #5a5c62;
  font-size: 1.6rem;
  font-family: 'Pretendard';
  font-weight: 700;
  line-height: 26.61px;
  word-wrap: break-word;
  /* margin-right: 120px; */
`;

const InputWrap = styled.div`
  display: flex;
  background: #f4f5f7;
  /* box-shadow: 1px 2px 8px #f3f3f3; */
  /* padding: 5px; */
  /* margin-left: auto; */
  margin-left: 20px;
  margin-top: 8px;
  margin-bottom: 13px;
  min-width: 300px;
  width: 65%;
  height: 40px;
`;

const InputStyle = styled.div`
  padding: 8px;
  color: #28292a;
  font-size: 16px;
  font-family: 'Pretendard';
  font-weight: 600;
  line-height: 21.29px;
  letter-spacing: 0.56px;
  word-wrap: break-word;
  border: none;
  outline: none;
  background: #f4f5f7;
`;

const ContentUserWrap = styled.div`
  width: 100%;
  height: 100%;
  /* background-color: red; */
  border: 1px solid red;
`;
