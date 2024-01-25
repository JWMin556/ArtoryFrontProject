import React,{useState} from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Navigation from './NavigationBar/Navigation';
//Header.jsx는 검은색 상단바를 위한 컴포넌트입니다.

const HeaderContainer = styled.div`
  width: 100%;
  height: 60px; //전체를 감싸주는 div태그를 60xp로 바꿈
`; //상단바 전체를 감싸주는 스타일드 컴포넌트입니다.

const HeaderWrap = styled.div`
  background-color: black;
  position: sticky;
  top: 0;
  z-index: 1000; //넣어준 이유... 다른 컴포넌트의 이미지와 충돌시 클릭이 안되는 것을 방지하려고..특히 signup.jsx랑...
  height: 50%; //상단바 div태그를 부모의 높이 30%로 바꿈 => height : 30px입니다. 
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`; //검은색 상단바의 너비와 높이 및 display를 담당하는 스타일드 컴포넌트

const HeaderLeftWrap = styled.div`
  display: flex;
  margin-left: 7%;
`;

const HeaderRightWrap = styled.div`
  display: flex;
  align-items: center;
  margin-right: 7%;
`;

const UnorderedList = styled.ul`
  display: flex;
  align-items: center;
  margin-top: 18px;
  margin-bottom: 15px;
`; //상단바의 오른쪽 부분인 EXHIBITION, STORY, MY STORY, MY PAGE를 urorderedlist형식의 스타일드 컴포넌트로 만들어주었습니다.

const ListItem = styled.li`
  margin-right: 60px;
  font-size: 10px;
  font-family: 'Pretendard';
  font-weight: 500;
  line-height: 18.63px;
  letter-spacing: 0.49px;
  word-wrap: break-word;
`; //상단바의 오른쪽 부분인 EXHIBITION, STORY, MY STORY, MY PAGE 각각을 담당하는 스타일드 컴포넌트입니다.

const NavLink = styled(Link)`
  color: ${props => (props.selected ? '#F5F5F5' : '#ABABAB')};
  text-decoration: none;
`;

export default function Header2() {
    const [isMouseOverExhibition,setMouseOverExhibition] = useState(false); //마우스가 Exhibition위에 올라는지 아닌지 상태를 관리하는 변수 
    const handleMouseOverExhibition = () =>{ //마우스가 Exhibition에 올라갔을 때 호출되는 함수 -> setMouseOverExhibition를 이용하여 isMouseOverExhibition가 false->true로 바뀜
      setMouseOverExhibition(true);
    }
    const handleMouseOutExhibition = () =>{ //마우스가 Exhibition에서 나갔을 때 호출되는 함수 -> setMouseOverExhibition를 이용하여 isMouseOverExhibition가 true->false로 바뀜
      setMouseOverExhibition(false);
    }
    const location = useLocation();
    return (
      <HeaderContainer>
        <HeaderWrap>
          <HeaderLeftWrap>
            {/* 이 부분이 상단바의 로고부분입니다. Link같은 경우는... 스타일드 컴포넌트로 따로 빼는 것이 잘 안되어서 일단 이렇게 만들었습니다. */}
            <Link
              style={{
                display: 'flex',
                alignItems: 'center',
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
                src="/img/Vector.png"
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
          </HeaderLeftWrap>
  
          <HeaderRightWrap>
                {/* 상단바의 오른쪽 부분인 EXHIBITION, STORY, MY STORY, MY PAGE를 urorderedlist형식의 스타일드 컴포넌트 */}
                <UnorderedList>
                    {' '}
                    {/*ListItem 컴포넌트 안에 Link를 넣어주는 방식으로 각 page이동을 만들었습니다.*/}
                    <ListItem>
                    <NavLink to="/exhibition" onMouseOver={handleMouseOverExhibition} selected={location.pathname === '/exhibition'}>
                        EXHIBITION
                    </NavLink>
                    </ListItem>

                    <ListItem>
                    <NavLink to="/story" selected={location.pathname === '/story'}>
                        STORY
                    </NavLink>
                    </ListItem>

                    <ListItem>
                    <NavLink to="/mystory" selected={location.pathname === '/mystory'}>
                        MY STORY
                    </NavLink>
                    </ListItem>
                    
                    <ListItem>
                    <NavLink to="/mypage" selected={location.pathname === '/mypage'}>
                        MY PAGE
                    </NavLink>
                    </ListItem>

                </UnorderedList>
            </HeaderRightWrap>

        </HeaderWrap>
          {isMouseOverExhibition && <Navigation/>} {/*isMouseOverExhibition가 true이면 <Navigation/>이 뜸 */}
      </HeaderContainer>
    );  
}
