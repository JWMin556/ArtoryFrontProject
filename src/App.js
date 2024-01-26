import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Home from './pages/Home';
import Exhibition from './pages/Exhibition';
import Story from './pages/Story';
import MyPage from './pages/MyPage';
import Header from './components/Header';
import LogIn from './pages/LogIn';
import MyStory from './pages/MyStory';
import SignUp from './pages/SignUp';
import Onboarding from './pages/Onboarding';
import SplashScreen from './components/SplashScreen';
import ExhibitionDetail from './pages/ExhibitionDetail';
import Onboarding2 from './pages/Onboarding2';
import Onboarding3 from './pages/Onboarding3';
import MyPageModify from './pages/MyPageModify';
import ExhibitionSearch from './pages/ExhibitionSearch';
import Popularity from './pages/Popularity';
import Recent from './pages/Recent';
import Recommend from './pages/Recommend';
import KakaoLoginLoading from './pages/KakaoLoginLoading';
import TokenPage from "./pages/TokenPage";
import StoryDetail from './pages/StoryDetail';

const Root = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
`; //전체화면의 root를 담당해주는 스타일드 컴포넌트입니다.

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 일정 시간(예: 1.5초) 후에 로딩 상태 변경
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Root>
      {loading ? (
        <SplashScreen />
      ) : (
        <BrowserRouter>
          <Header />{' '}
          {/*Header컴포넌트입니다. 즉, 맨 위의 검은색 상단 바입니다.*/}
          <Routes>
            <Route path="/" element={<Home />} /> {/*메인페이지입니다.*/}
            <Route path="/exhibition" element={<Exhibition />} />
            <Route path="/exhibitiondetail/:title" element={<ExhibitionDetail/>}/>
            <Route path="/exhibitionsearch/:keyword" element={<ExhibitionSearch/>}/>
            <Route path="/exhibition/popularity" element={<Popularity/>}/>
            <Route path="/exhibition/recent" element={<Recent/>}/>
            <Route path="/exhibition/recommend" element={<Recommend/>}/>
            <Route path="/story" element={<Story />} />
            <Route path="/mystory" element={<MyStory />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/mypagemodify" element={<MyPageModify />} />
            <Route path="/exhibition" element={<Exhibition />} />{' '}
            {/*주연씨 담당 페이지*/}
            <Route
              path="/exhibitiondetail/:title"
              element={<ExhibitionDetail />}
            />{' '}
            {/*주연씨 담당 페이지*/}
            <Route path="/story" element={<Story />} />
            <Route path="/story/:id" element={<StoryDetail />} />
            <Route path="/mystory" element={<MyStory />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/login" element={<LogIn />} /> {/*주연씨 담당 페이지*/}
            <Route path='/oauth/kakao/callback'element={<KakaoLoginLoading/>} />
            <Route path="/signup" element={<SignUp />} /> {/*중원 담당 페이지*/}
            <Route path="/onboarding" element={<Onboarding />} />{' '}
            {/*은향씨 담당 페이지*/}
            <Route path="/onboarding2" element={<Onboarding2 />} />{' '}
            {/*은향씨 담당 페이지*/}
            <Route path="/onboarding3" element={<Onboarding3 />} />{' '}
            {/*은향씨 담당 페이지*/}
            {/* <Route path="/splashscreen" element={<SplashScreen />} /> */}
            <Route path="/signup/token" element={<TokenPage />} /> {/*승우 담당 페이지*/}
            <Route path="/splashscreen" element={<SplashScreen />} />
          </Routes>
        </BrowserRouter>
      )}
    </Root>
  );
}

export default App;
