import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

//Home.jsx는 메인화면을 위한 컴포넌트입니다. 즉, 메인페이지라고 생각하시면 될 것 같습니다. 

const HomeWrap = styled.div ` 
  margin: 100px auto; /*정확하게 가운데로 정렬시킵니다. */
  display: flex;
  justify-content: space-evenly; 
`;  //메인화면 전체를 감싸주기 위한 스타일드 컴포넌트입니다. 

const HomeLeftWrap = styled.div `
  display: block;
`;  //메인화면의  왼쪽 부분 즉, 전시회 사진을 제외한 나머지 부분을 감싸주기 위한 스타일드 컴포넌트입니다. 

const FirstParagraph = styled.p `
  color: #595959;
  font-size: 14px;
  font-family: Pretendard;
  font-weight: 500;
  line-height: 18.63px; 
  letter-spacing: 0.49px;
  word-wrap: break-word;
  width: 116px;
  height: 19px;
`;  //첫 문장인 Story community를 위한 스타일드 컴포넌트입니다. 

const SecondParagraph = styled.h2 `
  color: #5D5D5D;
  font-size: 40px;
  font-family: Pretendard;
  font-weight: 500;
  line-height: 53.23px;
  word-wrap: break-word;
  width: 405px;
  height: 41px;
`; //두 번쨰 문장인 '나만의 문화일기'를 위한 스타일드 컴포넌트입니다. 

const ThirdParagraph = styled.h1 `
  color: black;
  font-size: 80px;
  font-family: Pretendard;
  font-weight: 700;
  line-height: 106.46px;
  letter-spacing: 2.80px;
  word-wrap: break-word;
  width: 393px;
  height: 77px;
`;  //세 번째 문장인 ARTORY를 위한 스타일드 컴포넌트입니다. 

const LogInBtn = styled.img `
  margin-top: 100px;
  width: 195px;
  height:48px;
`;  //My Story라는 버튼을 위한 스타일드 컴포넌트입니다. 

const ExhibitImg = styled.img `
  width: 438px;
  height: 288px;
  border-radius: 10px;
`;  //메인화면의  오른쪽 부분 즉, 전시회 사진이 나오는 부분을 감싸주기 위한 스타일드 컴포넌트입니다. 

export default function Home() {
  return (
    <HomeWrap>
      <HomeLeftWrap>
        <FirstParagraph>Story community</FirstParagraph>
        <SecondParagraph>나만의 문화일기</SecondParagraph>
        <ThirdParagraph>ARTORY</ThirdParagraph>
        <Link to="/login"><LogInBtn src='/img/button.png'></LogInBtn></Link> {/*현재는 이 버튼을 누르면 로그인 페이지로 넘어가도록 만들었습니다. 주연씨는 LogIn.jsx에서 바로 로그인 화면을 작업해주시면 될 것 같습니다. */}
      </HomeLeftWrap>
      <ExhibitImg src='/img/imagearbitary.png'></ExhibitImg>
    </HomeWrap>
  )
}
