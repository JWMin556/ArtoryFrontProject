import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import StyledButton from '../styled-components/StyledButton';
import { Link } from 'react-router-dom';
import CustomSelect from '../components/Onboarding/CustomSelect';
//import { postGenderAge } from '../components/API/memberInfo_API';

export default function Onboarding2() {
  //은향씨가 작업해주실 Onboarding 페이지입니다
  const [isButton1Clicked, setIsButton1Clicked] = useState(false);
  const [isButton2Clicked, setIsButton2Clicked] = useState(false);
  //const [gender, setGender] = useState('');
  //const [age, setAge] = useState(25);
  // 버튼1 클릭 이벤트 핸들러
  const handleButton1Click = () => {
    setIsButton1Clicked(true);
    setIsButton2Clicked(false);
    // setGender('FEMALE');
  };
  // 버튼2 클릭 이벤트 핸들러
  const handleButton2Click = () => {
    setIsButton2Clicked(true);
    setIsButton1Clicked(false);
    //setGender('MALE');
  };

  //연도 관련 객체 생성
  const startYear = 1940;
  const endYear = 2024;

  const yearArray = Array.from(
    { length: endYear - startYear + 1 },
    (_, index) => ({
      value: (startYear + index).toString(),
      label: (startYear + index).toString(),
    })
  );

  return (
    <Container>
      <div style={{ height: '120px', textAlign: 'center' }}>
        <Title>성별과 연령대를 선택해주세요</Title>
        <div style={{ color: '#D2D2D2', height: '20px', marginTop: '10px' }}>
          당신에게 맞는 전시를 추천해드려요
        </div>
      </div>
      <ContentBox>
        {/*성별 선택*/}
        <div
          className="gender"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '334px',
          }}
        >
          {isButton1Clicked ? (
            <Gender2>여성</Gender2>
          ) : (
            <Gender onClick={handleButton1Click}>여성</Gender>
          )}
          {isButton2Clicked ? (
            <Gender2>남성</Gender2>
          ) : (
            <Gender onClick={handleButton2Click}>남성</Gender>
          )}
        </div>
        {/*태어난 년도 선택*/}
        <CustomSelect options={yearArray} />
      </ContentBox>

      {/*다음 버튼*/}
      <Link to="/onboarding3">
        <StyledButton style={{ height: '52px', width: '333px' }}>
          다음
        </StyledButton>
      </Link>

      {/*하단 바*/}
      <img src="/Img/slidebar2.svg" alt="bar" style={{ marginTop: '30px' }} />
    </Container>
  );
}

//온보딩 컨테이너

const Gender = styled.button`
  font-family: 'Pretendard';
  font-size: 130%;
  font-weight: 400;
  width: 45%;
  height: 55px;
  border-radius: 10px;
  border: none;
  background-color: white;
  box-shadow: 1px 2px 8px #f3f3f3;
  color: #a8a7a7;

  &:hover {
    background-color: black;
    color: white;
  }
`;
const Gender2 = styled.button`
  font-family: 'Pretendard';
  font-size: 130%;
  font-weight: 400;
  width: 45%;
  height: 55px;
  border-radius: 10px;
  border: none;
  background-color: black;
  box-shadow: 1px 2px 8px #f3f3f3;
  color: white;
`;

const Container = styled.div`
  margin: 100px auto; /*정확하게 가운데로 정렬시킵니다. */
  margin-bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 460px;
  //height: 670px;
`;
const Title = styled.div`
  font-weight: 800;
  font-size: 180%;
`;

const ContentBox = styled.div`
  //margin-top: 70px;
  margin-bottom: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 295px;
`;
