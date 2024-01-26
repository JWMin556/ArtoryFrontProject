import React from 'react';
import { useLocation } from 'react-router-dom';
import profile_img from '../Img/input_pic.png';
import styled from 'styled-components';
import Heart from '../components/Exhibition/Heart';
import Save from '../components/Exhibition/Save';
import poster from '../Img/imagearbitary.png';
import CommentInput from '../components/Story/CommentInput';

export default function StoryDetail() {
  //const { state } = useLocation();
  //console.log(state.item);

  return (
    <WrapStory>
      <Left>
        <div>
          <div>
            <Profile src={profile_img} alt="프로필 이미지" />
            <WrapIcon>
              <Heart />
              <Save />
            </WrapIcon>
            <h3 style={{ marginTop: '10px' }}>유저명</h3>
          </div>
          <div style={{ marginTop: '80px' }}>
            <Poster src={poster} alt="전시회 포스터" />
            <h3 style={{ marginTop: '20px' }}>전시 제목</h3>
          </div>
        </div>
      </Left>

      <Right>
        <div className="story_content" style={{ paddingLeft: '10%' }}>
          <h3 style={{ marginLeft: '30px' }}>제목</h3>
          <BoxStyle
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '10px 20px',
            }}
          >
            <span>선택 스토리 제목</span>
          </BoxStyle>

          <h3 style={{ marginLeft: '30px' }}>스토리 기록</h3>
          <BoxStyle style={{ height: '800px' }}>
            <ExhbnInfo id="오늘의 전시">
              <H5>오늘의 전시</H5>
              <Keyword>2024.01.19</Keyword>
              <Table>
                <tbody>
                  <tr>
                    <th>관람소요시간</th>
                    <td>
                      <Keyword>30분</Keyword>
                    </td>
                  </tr>
                  <tr>
                    <th>만족도</th>
                    <td>
                      <img src="" alt="response 표정 임티" />
                    </td>
                  </tr>
                  <tr>
                    <th>날씨</th>
                    <td>
                      <img src="" alt="response 날씨 임티" />
                    </td>
                  </tr>
                  <tr>
                    <th>동행인</th>
                    <td>
                      <Keyword>친구</Keyword>
                    </td>
                  </tr>
                  <tr>
                    <th>카테고리</th>
                    <td>
                      <Keyword>사진</Keyword>
                      <Keyword>디자인</Keyword>
                      <Keyword>작가전</Keyword>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </ExhbnInfo>
            <ExhbnKeyword id="전시 키워드">
              <H5>오늘의 전시 키워드</H5>
              <p style={{ color: '#616161' }}>
                #요시다 유니 #키워드2 #키워드3{' '}
              </p>
            </ExhbnKeyword>
            <ExhbnContent id="전시 내용">
              <H5>오늘의 전시 내용</H5>
              <div style={{ color: '#616161' }}>찐 전시 내용들</div>
            </ExhbnContent>
          </BoxStyle>
        </div>
        <CommentInput />
      </Right>
    </WrapStory>
  );
}

const Table = styled.table`
  width: 100%;
  margin-top: 15px;
  color: #616161;
  tr {
    height: 30px;
  }
  th {
    text-align: start;
    font-weight: bold;
  }
`;
const ExhbnInfo = styled.div``;
const ExhbnKeyword = styled.div`
  margin: 20px 0 50px;
`;
const ExhbnContent = styled.div``;
const H5 = styled.h5`
  font-size: medium;
  font-weight: bold;
  margin-bottom: 15px;
`;
const Keyword = styled.span`
  background-color: #d9d9d9;
  color: #616161;
  padding: 2px 25px;
  margin-right: 5px;
  border-radius: 6px;
  font-size: 90%;
`;
const Left = styled.div`
  font-size: 1.4rem;
  color: #595959;
  width: 30%;
  display: flex;
  justify-content: end;
`;
const Right = styled.div`
  font-size: 1.4rem;
  color: black;
  width: 70%;
  overflow: auto;
  height: 90vh;
  //스크롤 관련
  overflow: auto;
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #d9d9d9;
    border-radius: 10px;
    background-clip: padding-box;
    border: 2px solid transparent;
  }
`;
const BoxStyle = styled.div`
  background-color: #f0f0f0;
  border: none;
  border-radius: 10px;
  height: 20px;
  font-size: small;
  font-weight: 600;
  margin: 10px 10px 30px;
  padding: 20px;
`;
const WrapStory = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  font-family: 'Pretendard';
  font-weight: bold;
  font-size: 1.4rem;
  padding-top: 40px;
`;
const Profile = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 10px;
`;
const WrapIcon = styled.div`
  width: 100px;
  margin-top: 5px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;
const Poster = styled.img`
  width: 130px;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
`;
