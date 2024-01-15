import styled from 'styled-components'

export const HomeWrap = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-top: 10%;
    margin-left: 15%;
    margin-right: 15%;

    @media screen and (max-width: 500px) { /* 'max-width' 값에 'px' 단위 추가 */
        height : 100%;
        flex-direction: column;
        align-items: center;
        align-content : space-evenly;
}
`;
 //메인화면 전체를 감싸주기 위한 스타일드 컴포넌트입니다. 

export const HomeLeftWrap = styled.div `
    display: block;
    margin-top : 2%;
    @media screen and (max-width: 500px){
        margin-left : 10%;
    }

`;  //메인화면의  왼쪽 부분 

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
    @media screen and (max-width: 500px){
        width: 76.37px;
        height: 8px;
        font-size: 8px;

    }
`;  // Story community

export const SecondParagraph = styled.h2 `
    color: #5D5D5D;
    font-size: 40px;
    font-family: Pretendard;
    font-weight: 500;
    line-height: 53.23px;
    word-wrap: break-word;
    width: 405px;
    height: 41px;
    @media screen and (max-width: 500px){
        width: 155.66px;
        height: 23.00px;
        font-size: 20px;

    }
`; //'나만의 문화일기'

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
    @media screen and (max-width: 500px){
        width: 221.11x;
        height: 38.71px;
        font-size: 50px;
    }
`;  //ARTORY

export const WrapLogin = styled.div`
    display : flex;
    flex-direction: column;
    @media screen and (max-width: 500px){ 

}
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
    @media screen and (max-width: 500px){
        width: 308px;
        height: 47.24px;
    }
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
export const OpenLockStyle = styled.img`
    position: absolute;
    right : 23.3%;
    top : 34%;
`;
export const LockStyle = styled.img`
    position: absolute;
    right : 23.3%;
    top : 44%;
`;