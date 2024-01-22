import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import StyledButton from '../styled-components/StyledButton';
import { Link } from 'react-router-dom';
import { InterestDummy } from '../Interestdummy';
import Topic from '../components/Onboarding/Topic';

export default function Onboarding3() {
  //은향씨가 작업해주실 Onboarding 페이지입니다
  const [selectedTopics, setSelectedTopics] = useState([]);

  const handleTopicClick = (topic) => {
    const updatedTopics = [...selectedTopics];

    if (updatedTopics.includes(topic)) {
      // 주제가 이미 선택되어 있으면 제거합니다.
      const index = updatedTopics.indexOf(topic);
      updatedTopics.splice(index, 1);
    } else {
      // 주제가 선택되어 있지 않으면 추가합니다.
      updatedTopics.push(topic);
    }
    console.log(updatedTopics.length);
    // 현재 최종 선택된 주제를 업데이트합니다.
    console.log(updatedTopics.length < 3);
    setSelectedTopics(updatedTopics);
  };

  return (
    <Container>
      <div style={{ height: '120px' }}>
        <Title>관심있는 주제를 모두 선택해주세요</Title>
        <div style={divStyle}>
          관심있는 주제를{' '}
          <span style={{ color: '#616161', fontWeight: 'bold' }}>3가지</span>{' '}
          이상 선택해주세요 <br />
          당신에게 맞는 전시를 추천해 드릴게요
        </div>
      </div>
      <ContentBox>
        {InterestDummy.interests.map((item) => {
          return (
            <Topic
              key={item.topic}
              topic={item.topic}
              onClick={() => handleTopicClick(item.topic)}
            />
          );
        })}
      </ContentBox>

      <Link to="/" disabled={'true'}>
        <StyledButton
          style={{
            height: '52px',
            width: '482px',
          }}
          disabled={selectedTopics.length < 3} // 3개 미만의 주제가 선택되었을 때 버튼을 비활성화합니다.
        >
          ARTORY 시작하기
        </StyledButton>
      </Link>
      <img src="/Img/slidebar3.svg" alt="bar" style={{ marginTop: '30px' }} />
    </Container>
  );
}

//온보딩 컨테이너
//인라인 스타일
const divStyle = {
  color: '#D2D2D2',
  width: '100%',
  lineHeight: 'normal',
  marginTop: '10px',
  textAlign: 'center',
};
//스타일 컴포넌트
const Container = styled.div`
  margin-bottom: 0;
  margin: 100px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 800px;
  //height: 670px;
`;
const Title = styled.div`
  font-weight: 800;
  font-size: 180%;
`;
const ContentBox = styled.div`
  margin-bottom: 60px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  height: 295px;
`;
