import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Heart from '../components/Story/Heart';
import Scrap from '../components/Story/Scrap';
import CommentInput from '../components/Story/CommentInput';

export default function StoryDetail() {
  const { state } = useLocation();
  console.log(state.item);
  const item = state.item;
  const satisfactionSrc = `/Img/Story/face_g${item.storySatisfactionLevel}.svg`;
  console.log(satisfactionSrc);

  return (
    <WrapStory>
      <Left>
        <div>
          <Profile src={item.memberProfile} alt="프로필 이미지" />

          <h3 style={{ marginTop: '10px' }}>{item.memberNickname}</h3>
        </div>
        <div>
          <Poster src={item.exhibitionImage} alt={item.exhibitionTitle} />
          <h3 style={{ marginTop: '20px' }}>{item.exhibitionTitle} </h3>
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
            <span>{item.storyTitle}</span>
          </BoxStyle>

          <h3 style={{ marginLeft: '30px' }}>스토리 기록</h3>
          <BoxStyle style={{}}>
            <ExhbnInfo id="오늘의 전시">
              <H5>오늘의 전시</H5>
              <Keyword>
                {item.year}.{item.month}.{item.day}
              </Keyword>
              <Table>
                <tbody>
                  <tr>
                    <th>관람소요시간</th>
                    <td>
                      <Keyword>{item.storyViewingTime}</Keyword>
                    </td>
                  </tr>
                  <tr>
                    <th>만족도</th>
                    <td>
                      <img
                        src={satisfactionSrc}
                        alt="response 표정 임티"
                        style={{ height: '25px' }}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>날씨</th>
                    <td>
                      <img src="" alt={item.storyWeather} />
                    </td>
                  </tr>
                  <tr>
                    <th>동행인</th>
                    <td>
                      <Keyword>{item.storyCompanion}</Keyword>
                    </td>
                  </tr>
                  <tr>
                    <th>카테고리</th>
                    <td>
                      <Keyword>{item.storyGenre1}</Keyword>
                      <Keyword>{item.storyGenre1}</Keyword>
                      <Keyword>{item.storyGenre3}</Keyword>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </ExhbnInfo>
            <ExhbnKeyword id="전시 키워드">
              <H5>오늘의 전시 키워드</H5>
              <p style={{ color: '#616161' }}>
                #요시다 유니 #키워드2 #키워드3 {item.storyKeyword}
              </p>
            </ExhbnKeyword>
            <ExhbnContent id="전시 내용">
              <H5>오늘의 전시 내용</H5>
              <div style={{ color: '#616161' }}>
                찐 전시 내용들{item.storyContext}
              </div>
            </ExhbnContent>
          </BoxStyle>
        </div>
        <CommentInput
          storyId={item.storyId}
          commentList={item.commentResponseDtoList}
        />
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
  td {
    vertical-align: middle;
  }
  th {
    text-align: start;
    font-weight: bold;
    vertical-align: middle;
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
  width: 80%;
  display: flex;
  //flex-direction: column;
  //align-items: center;
  justify-content: center;
`;
const Right = styled.div`
  font-size: 1.4rem;
  color: black;
  width: 80%;
  //overflow: auto;
  height: 90vh;
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
  height: fit-content;
  //max-height: 800px;
`;
const WrapStory = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  font-family: 'Pretendard';
  font-weight: bold;
  font-size: 1.4rem;
  padding-top: 10px;
  //margin-right: 20px;
  margin-bottom: 80px;
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
