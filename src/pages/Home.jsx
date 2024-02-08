import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import * as P from '../styled-components/IntroduceParagraph'; //메인화면의 세 문장을 스타일드 컴포넌트로 따로 분리시켜서 사용하고자 이렇게 import를 했습니다.
import axios from 'axios';

//Home.jsx는 메인화면을 위한 컴포넌트입니다. 즉, 메인페이지라고 생각하시면 될 것 같습니다.

const HomeWrap = styled.div`
  margin: 100px auto; /*정확하게 가운데로 정렬시킵니다. */
  display: flex;
  justify-content: space-evenly;
`; //메인화면 전체를 감싸주기 위한 스타일드 컴포넌트입니다.

const HomeLeftWrap = styled.div`
  display: block;
`; //메인화면의  왼쪽 부분 즉, 전시회 사진을 제외한 나머지 부분을 감싸주기 위한 스타일드 컴포넌트입니다.

const LogInBtn = styled.img`
  margin-top: 100px;
  width: 195px;
  height: 48px;
`; //My Story라는 버튼을 위한 스타일드 컴포넌트입니다.

const HomeRightWrap = styled.div`
  display: block;
`;

const ExhibitImg = styled.img`
  width: 438px;
  height: 288px;
  border-radius: 10px;
`; //메인화면의  오른쪽 부분 즉, 전시회 사진이 나오는 부분을 감싸주기 위한 스타일드 컴포넌트입니다.

const URL = localStorage.getItem('URL');

const url = `${URL}/api/exhibitions/main`;

export default function Home() {
  const [selectedImage, setSelectedImage] = useState(null);
  const token = localStorage.getItem('Token');

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(url, {
          headers: {
            Accept: '*/*',
            Authorization: `Bearer ${token}`,
            'content-type': 'application/json',
          },
        });
        console.log(response.data);
        setSelectedImage(response.data.exhibitionImage);
      } catch (error) {
        console.log(error.response.data);
      }
    })();
  }, []);

  return (
    <HomeWrap>
      <HomeLeftWrap>
        <P.FirstParagraph>Story community</P.FirstParagraph>
        <P.SecondParagraph>나만의 문화일기</P.SecondParagraph>
        <P.ThirdParagraph>ARTORY</P.ThirdParagraph>
        <Link to="/login">
          <LogInBtn src="/Img/button.png"></LogInBtn>
        </Link>{' '}
        {/*현재는 이 버튼을 누르면 로그인 페이지로 넘어가도록 만들었습니다. 주연씨는 LogIn.jsx에서 바로 로그인 화면을 작업해주시면 될 것 같습니다. */}
      </HomeLeftWrap>
      <HomeRightWrap>
        {selectedImage && <ExhibitImg src={selectedImage}></ExhibitImg>}
      </HomeRightWrap>
    </HomeWrap>
  );
}
