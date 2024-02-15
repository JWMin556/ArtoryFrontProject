import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

import CommentInput from '../components/Story/CommentInput';
import Banner from '../components/Story/Banner';
const genres = [
  'MEDIA',
  'CRAFT',
  'DESIGN',
  'PICTURE',
  'SPECIAL_EXHIBITION',
  'SCULPTURE',
  'PLAN_EXHIBITION',
  'INSTALLATION_ART',
  'PAINTING',
  'ARTIST_EXHIBITION',
];
const genres__kor = [
  '미디어',
  '공예',
  '디자인',
  '사진',
  '특별전시',
  '조각',
  '기획전',
  '설치미술',
  '회화',
  '작가전',
];
export default function StoryDetail() {
  const { state } = useLocation();
  console.log(state.item);
  const item = state.item;
  const selectedIndex = [];

  for (var i = 0; i < genres.length; i++) {
    if (
      genres[i] === item.storyGenre1 ||
      genres[i] === item.storyGenre2 ||
      genres[i] === item.storyGenre3
    ) {
      selectedIndex.push(i);
    }
  }

  const satisfactionSrc = `/img/Story/face_b${item.storySatisfactionLevel}.svg`;
  const weatherSrc = `/img/MyStory/weather.b${item.storyWeather}.svg`;

  return (
    <WrapStory className="wrapstory">
      <Banner
        id="banner"
        image={item.exhibitionImage}
        title={item.exhibitionTitle}
      ></Banner>

      <Right id="storyContent">
        <div
          id="profile"
          style={{
            display: 'flex',
            alignItems: 'end',
            // marginLeft: '10px',
            marginBottom: '40px',
          }}
        >
          <Profile src={item.memberProfile} alt="프로필 이미지" />
          <div>
            <span
              style={{ fontSize: 'small', fontWeight: '300', color: '#9BA0AE' }}
            >
              작성자
            </span>
            <p style={{ color: '#717276', marginTop: '3px' }}>
              {item.memberNickname}
            </p>
          </div>
        </div>
        <div className="story_content">
          <BoxStyle
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '10px 20px',
              height: '40px',
              fontSize: '1.3rem',
            }}
          >
            <span>{item.storyTitle}</span>
          </BoxStyle>
          <BoxStyle>
            <ExhbnInfo id="오늘의 전시">
              <H5>오늘의 전시</H5>
              <Table>
                <tbody>
                  <tr>
                    <th>방문일</th>
                    <th>관람소요시간</th>
                    <th>만족도</th>
                    <th style={{ paddingLeft: '6px' }}>날씨</th>
                    <th>동행인</th>
                    <th>카테고리</th>
                  </tr>
                  <tr>
                    <td>
                      {' '}
                      <Keyword>
                        {item.year}.{item.month}.{item.day}
                      </Keyword>
                    </td>
                    <td>
                      <Keyword style={{ padding: '2px 10px' }}>
                        {item.storyViewingTime}
                      </Keyword>
                    </td>
                    <td>
                      {' '}
                      <img
                        src={satisfactionSrc}
                        alt="표정"
                        style={{ height: '35px' }}
                      />
                    </td>
                    <td>
                      <img
                        src={weatherSrc}
                        alt="날씨"
                        style={{ height: '37px' }}
                      />
                    </td>
                    <td>
                      <Keyword style={{ padding: '2px 10px' }}>
                        {item.storyCompanion}
                      </Keyword>
                    </td>
                    <td>
                      {genres__kor[selectedIndex[0]] && (
                        <Keyword>{genres__kor[selectedIndex[0]]}</Keyword>
                      )}
                      {genres__kor[selectedIndex[1]] && (
                        <Keyword>{genres__kor[selectedIndex[1]]}</Keyword>
                      )}
                      {genres__kor[selectedIndex[2]] && (
                        <Keyword>{genres__kor[selectedIndex[2]]}</Keyword>
                      )}
                    </td>
                  </tr>
                </tbody>
              </Table>
            </ExhbnInfo>
          </BoxStyle>
          <BoxStyle style={{}}>
            <ExhbnKeyword id="전시 키워드">
              <H5>오늘의 전시 키워드</H5>
              <p>{item.storyKeyword}</p>
            </ExhbnKeyword>
            <div id="전시 내용">
              <H5 style={{ marginBottom: '6px' }}>오늘의 전시 스토리</H5>

              <ExhbnContent
                className="ck ck-content ck-editor__editable ck-rounded-corners ck-editor__editable_inline ck-blurred"
                dangerouslySetInnerHTML={{ __html: item.storyContext }} // 결과 확인
              />
            </div>
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
  /* width: 100%; */
  /* width: 70%; */
  max-width: 100%;
  margin-top: 20px;

  td {
    width: fit-content;
    padding-top: 5px;
    vertical-align: middle;
    padding-right: 10px;
  }
  th {
    padding-right: 10px;

    width: fit-content;

    text-align: start;
    //font-weight: bold;
    vertical-align: middle;
    color: #9ba0ae;
    font-weight: 500;
    min-width: 30px;
    padding-bottom: 8px;
  }
`;
const ExhbnInfo = styled.div``;
const ExhbnKeyword = styled.div`
  margin: 10px 0 50px;
  color: #737373;
  /* font-size: 0.8rem; */
  font-size: 0.95rem;
  font-weight: 500;
`;
const ExhbnContent = styled.div`
  color: #505154;
  font-size: 0.95rem;
  line-height: 1.3rem;
  font-weight: 500;
`;
const H5 = styled.h5`
  font-size: 1.4rem;
  font-weight: 800;
  margin-bottom: 20px;
  margin-top: 0;
  color: black;
`;
const Keyword = styled.span`
  background-color: #28292a;
  color: white;
  padding: 2px 25px;
  margin-right: 5px;
  font-weight: 400;
`;

const Right = styled.div`
  font-size: 1.4rem;
  color: black;
  width: 820px;
  height: 100%;
  padding: 0 10px;
`;
const BoxStyle = styled.div`
  //background-color: white;
  //box-shadow: 1px 2px 8px #f3f3f3;
  /* box-shadow: 1px 2px 8px #00000025; */
  box-shadow: 1px 2px 8px #f3f3f3;
  border: none;
  // border-radius: 10px;
  font-size: small;
  font-weight: 600;
  margin: 10px 0 20px;
  padding: 30px 10px 40px 40px;
  height: fit-content;
  //max-height: 800px;
`;
const WrapStory = styled.div`
  width: 100%;
  min-height: 100%;
  height: max-content;
  display: flex;
  align-items: center;
  flex-direction: column;
  font-family: 'Pretendard';
  font-weight: bold;
  font-size: 1.4rem;
  //margin-right: 20px;
  margin-bottom: 80px;
`;
const Profile = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 10px;
  object-fit: cover; //이렇게 할 건지 안 할 건지
`;
