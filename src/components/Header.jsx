import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

//Header.jsx는 검은색 상단바를 위한 컴포넌트입니다.

const HeaderContainer = styled.div`
  background-color: black;
  width: 100%;
`; //상단바 전체를 감싸주는 스타일드 컴포넌트입니다.

const HeaderWrap = styled.div`
  height: 52px;
  max-width: 1920px;
  margin: 0 auto;
  display: flex;
  align-items: center;
`; //검은색 상단바의 너비와 높이 및 display를 담당하는 스타일드 컴포넌트

const HeaderLeftWrap = styled.div`
  display: flex;
`;

const UnorderedList = styled.ul`
  display: flex;
  margin-top: 18px;
  margin-bottom: 15px;
  margin-left: 80%;
`; //상단바의 오른쪽 부분인 EXHIBITION, STORY, MY STORY, MY PAGE를 urorderedlist형식의 스타일드 컴포넌트로 만들어주었습니다.

const ListItem = styled.li`
  margin-right: 60px;
  font-size: 14px;
  font-family: Pretendard;
  font-weight: 500;
  line-height: 18.63px;
  letter-spacing: 0.49px;
  word-wrap: break-word;
`; //상단바의 오른쪽 부분인 EXHIBITION, STORY, MY STORY, MY PAGE 각각을 담당하는 스타일드 컴포넌트입니다.

export default function Header() {
  return (
    <HeaderContainer className="headerContainer" style={{ width: '100%' }}>
      <HeaderWrap>
        <HeaderLeftWrap>
          {/*이 부분이 상단바의 로고부분입니다. Link같은 경우는... 스타일드 컴포넌트로 따로 빼는 것이 잘 안되어서 일단 이렇게 만들었습니다. */}
          <Link
            style={{
              display: 'flex',
              alignItems: 'center',
              marginLeft: '25%',
              textDecoration: 'none',
              color: '#F5F5F5',
              fontSize: '14px',
              fontFamily: 'Pretendard',
              fontWeight: '500',
              lineHeight: '18.63px',
              letterSpacing: '0.49px',
              wordWrap: 'break-word',
            }}
            to="/"
          >
            <img
              src="/images/Vector.png"
              alt="로고"
              style={{
                width: '23px',
                height: '25px',
                backgroundColor: 'black',
                marginRight: '6px',
              }}
            />
            ARTORY
          </Link>

          {/*상단바의 오른쪽 부분인 EXHIBITION, STORY, MY STORY, MY PAGE를 urorderedlist형식의 스타일드 컴포넌트*/}
          <UnorderedList>
            {' '}
            {/* ListItem 컴포넌트 안에 Link를 넣어주는 방식으로 각 page이동을 만들었습니다. */}
            <ListItem>
              <Link
                style={{ color: '#F5F5F5', textDecoration: 'none' }}
                to="/exhibition"
              >
                EXHIBITION
              </Link>
            </ListItem>
            <ListItem>
              <Link
                style={{ color: '#F5F5F5', textDecoration: 'none' }}
                to="/story"
              >
                STORY
              </Link>
            </ListItem>
            <ListItem>
              <Link
                style={{ color: '#F5F5F5', textDecoration: 'none' }}
                to="/mystory"
              >
                MY&nbsp;STORY
              </Link>
            </ListItem>
            <ListItem>
              <Link
                style={{ color: '#F5F5F5', textDecoration: 'none' }}
                to="/mypage"
              >
                MY&nbsp;PAGE
              </Link>
            </ListItem>
          </UnorderedList>
        </HeaderLeftWrap>
      </HeaderWrap>
    </HeaderContainer>
  );
}
