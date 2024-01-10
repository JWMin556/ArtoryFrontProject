import styled from 'styled-components'

export const HomeWrap = styled.div ` 
    display : flex;
    justify-content: space-evenly;
    align-item : center;
    margin-top : 10%;
    margin-left : 15%;
    margin-right : 15%;
`;  //메인화면 전체를 감싸주기 위한 스타일드 컴포넌트입니다. 

export const HomeLeftWrap = styled.div `
    display: block;
    margin-top : 2%;

`;  //메인화면의  왼쪽 부분 즉, 전시회 사진을 제외한 나머지 부분을 감싸주기 위한 스타일드 컴포넌트입니다. 

export const FirstParagraph = styled.p `
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

export const SecondParagraph = styled.h2 `
    color: #5D5D5D;
    font-size: 40px;
    font-family: Pretendard;
    font-weight: 500;
    line-height: 53.23px;
    word-wrap: break-word;
    width: 405px;
    height: 41px;
`; //두 번쨰 문장인 '나만의 문화일기'를 위한 스타일드 컴포넌트입니다. 

export const ThirdParagraph = styled.h1 `
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

export const WrapLogin = styled.div`
    display : flex;
    flex-direction: column;
    
`;
//로그인 폼 전체를 감싸는 스타일드 컴포넌트

export const Input = styled.input`
    padding-left : 5%;
    font-family: Pretendard;
    margin-top : 15px;
    width : 325px;
    height : 50px;
    border: none;
    border-radius: 10px;
    box-shadow: 1px 2px 8px #D9D9D9; 
    color : #ababab
`;
//input 태그 스타일

export const WrapLink = styled.div`
    display : flex;
    justify-content: space-evenly;
    margin-top : 5%;
`;
//아이디찾기 & 비밀번호 찾기 & 회원가입 링크를 감싸는 스타일드 컴포넌트

export const LinkStyle = styled.span`
    font-family: Pretendard;
    font-size : 13px;
    width :100px;
`;
//아이디찾기 & 비밀번호 찾기 & 회원가입 링크 스타일

export const WrapSocialLogin = styled.div`
    display : flex;
    justify-content: space-between; 
    margin-top : 20%;
`;
//네이버 로그인 & 카카오톡 로그인 버튼을 감싸는 스타일드 컴포넌트 
