import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

//Header.jsx는 검은색 상단바를 위한 컴포넌트입니다. 

const HeaderContainer = styled.div `  
    background-color: black; 
`; //상단바 전체를 감싸주는 스타일드 컴포넌트입니다. 

const HeaderWrap = styled.div `
    position: sticky;
    top: 0;
    z-index: 1000; //넣어준 이유... 다른 컴포넌트의 이미지와 충돌시 클릭이 안되는 것을 방지하려고..특히 signup.jsx랑...
    height: 30px;
    width: 100%; 
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`; //검은색 상단바의 너비와 높이 및 display를 담당하는 스타일드 컴포넌트

const HeaderLeftWrap = styled.div `
    display: flex;
    /* margin-right: 5%; */
`;

const HeaderRightWrap = styled.div `
    display: flex;
    /* margin-left: 5%; */
`;

const UnorderedList = styled.ul `
    display: flex;
    margin-top: 18px;
    margin-bottom: 15px;
`;  //상단바의 오른쪽 부분인 EXHIBITION, STORY, MY STORY, MY PAGE를 urorderedlist형식의 스타일드 컴포넌트로 만들어주었습니다. 

const ListItem = styled.li `
    margin-right:60px;
    font-size: 10px;
    font-family: Pretendard;
    font-weight: 500;
    line-height: 18.63px;
    letter-spacing: 0.49px;
    word-wrap: break-word;
`;  //상단바의 오른쪽 부분인 EXHIBITION, STORY, MY STORY, MY PAGE 각각을 담당하는 스타일드 컴포넌트입니다. 

export default function Header() {
return (
    <HeaderContainer>
        <HeaderWrap>

            <HeaderLeftWrap>
            {/* 이 부분이 상단바의 로고부분입니다. Link같은 경우는... 스타일드 컴포넌트로 따로 빼는 것이 잘 안되어서 일단 이렇게 만들었습니다. */}
                <Link style={{display:'flex', alignItems:'center', textDecoration:'none', color:"#F5F5F5", fontSize:"14px", fontFamily:"Pretendard", fontWeight:"500", lineHeight:"18.63px", letterSpacing:"0.49px", wordWrap:"break-word"}} to="/">
                    <img src="/img/Vector.png" alt="로고" style={{width: "23px", height:"25px", backgroundColor:'black', marginRight:'6px'}} />
                    ARTORY 
                </Link> 
            </HeaderLeftWrap>

            <HeaderRightWrap>
            {/* 상단바의 오른쪽 부분인 EXHIBITION, STORY, MY STORY, MY PAGE를 urorderedlist형식의 스타일드 컴포넌트 */}
                <UnorderedList>  {/*ListItem 컴포넌트 안에 Link를 넣어주는 방식으로 각 page이동을 만들었습니다.*/}
                    <ListItem><Link style={{color:"#F5F5F5", textDecoration:"none"}} to="/exhibition">EXHIBITION</Link></ListItem>
                    <ListItem><Link style={{color:"#F5F5F5", textDecoration:"none"}} to="/story">STORY</Link></ListItem>
                    <ListItem><Link style={{color:"#F5F5F5", textDecoration:"none"}} to="/mystory">MY&nbsp;STORY</Link></ListItem>
                    <ListItem><Link style={{color:"#F5F5F5", textDecoration:"none"}} to="/mypage">MY&nbsp;PAGE</Link></ListItem>
                </UnorderedList> 
            </HeaderRightWrap>
        </HeaderWrap>
    </HeaderContainer>
)
}