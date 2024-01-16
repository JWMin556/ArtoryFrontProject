import React from 'react';
import { useRef, useState } from 'react';
import styled from 'styled-components';
import StyledButton from '../styled-components/StyledButton';
import { Link } from 'react-router-dom';

export default function Onboarding() {
  //은향씨가 작업해주실 Onboarding 페이지입니다
  const fileInputRef = useRef(null);
  const [imageSrc, setImageSrc] = useState('/Img/input_pic.png');
  const [length, setLength] = useState(0);

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // 파일 선택 후의 로직을 추가할 수 있습니다.
      console.log('Selected file:', file.name);

      // FileReader를 사용하여 파일의 내용을 읽어옵니다.
      const reader = new FileReader();
      reader.onload = (event) => {
        // 이미지의 src를 선택한 파일의 내용으로 대체합니다.
        setImageSrc(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleNicknameChange = (e) => {
    const value = e.target.value;
    value.length > 10 ? setLength(10) : setLength(value.length);
  };

  return (
    <Container>
      <Title>사용할 이름과 프로필을 설정해주세요</Title>
      <ContentBox>
        <ImgStyled src={imageSrc} alt="사진첨부" onClick={handleImageClick} />
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />
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
      <img src="/Img/slidebar.svg" alt="bar" style={{ marginTop: '50px' }} />
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
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 460px;
  height: 670px;
`;
const Title = styled.p`
  font-weight: 800;
  font-size: 180%;
`;
const ImgStyled = styled.img`
  width: 150px;
  cursor: 'pointer';
`;
const Nickname = styled.input`
  margin-top: 70px;
  padding-left: 20px;
  border-radius: 10px;
  border: none;
  box-shadow: 1px 2px 8px #f3f3f3;
  width: 304px;
  height: 50px;
  color: #ababab; //닉네임 입력 후 글자 색
  font-weight: 500;
  font-family: 'Pretendard';
`;
const ContentBox = styled.div`
  margin-top: 100px;
  margin-bottom: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 295px;
`;
