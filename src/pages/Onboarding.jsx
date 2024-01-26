import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import StyledButton from '../styled-components/StyledButton';
import { Link } from 'react-router-dom';
import Profile from '../components/Onboarding/Profile';

export default function Onboarding() {
  //은향씨가 작업해주실 Onboarding 페이지입니다
  const [length, setLength] = useState(0);

  const handleNicknameChange = (e) => {
    const value = e.target.value;
    value.length > 10 ? setLength(10) : setLength(value.length);
  };

  return (
    <Container>
      <div style={{ height: '120px' }}>
        <Title>사용할 이름과 프로필을 설정해주세요</Title>
      </div>
      <ContentBox>
        <Profile></Profile>
        <Nickname
          maxLength="10"
          type="text"
          placeholder="닉네임을 입력해주세요"
          onChange={handleNicknameChange}
        />
        <Count>{length}/10자</Count>
      </ContentBox>

      <Link to="/onboarding2">
        <StyledButton
          style={{
            height: '52px',
            width: '333px',
          }}
        >
          다음
        </StyledButton>
      </Link>
      <img src="/Img/slidebar.svg" alt="bar" style={{ marginTop: '30px' }} />
    </Container>
  );
}

//온보딩 컨테이너
const Count = styled.p`
  color: #ababab;
  text-align: end;
  width: 304px;
  margin: 5px;
`;
const Container = styled.div`
  margin: 100px auto;
  margin-bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 460px;
`;
const Title = styled.p`
  font-weight: 800;
  font-size: 180%;
`;

const Nickname = styled.input`
  margin-top: 40px;
  padding-left: 20px;
  border-radius: 10px;
  border: none;
  box-shadow: 1px 2px 8px #f3f3f3;
  width: 60%;
  height: 50px;
  color: #ababab; //닉네임 입력 후 글자 색
  font-weight: 500;
  font-family: 'Pretendard';
  outline: none; //border가 아니라 outline을 없애야 클릭 시에도 border(or outline이 안보임)
`;
const ContentBox = styled.div`
  margin-bottom: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 295px;
`;
