import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from 'styled-components'
import Home from "./pages/Home";
import Exhibition from "./pages/Exhibition";
import Story from "./pages/Story";
import MyPage from "./pages/MyPage";
import Header from "./components/Header";
import LogIn from "./pages/LogIn";
import MyStory from "./pages/MyStory";
import SignUp from "./pages/SignUp";
import Onboarding from "./pages/Onboarding";
import ExhibitionDetail from "./pages/ExhibitionDetail";
const Root = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
`;  //전체화면의 root를 담당해주는 스타일드 컴포넌트입니다. 

function App() {
  return (
    <Root>
        <BrowserRouter>
          <Header /> {/*Header컴포넌트입니다. 즉, 맨 위의 검은색 상단 바입니다.*/}
          <Routes>
            <Route path="/" element={<Home />} />  {/*메인페이지입니다.*/}
            <Route path="/exhibition" element={<Exhibition />} /> {/*주연씨 담당 페이지*/}
            <Route path="/exhibitiondetail/:title" element={<ExhibitionDetail />} /> {/*주연씨 담당 페이지*/}
            <Route path="/story" element={<Story />} />
            <Route path="/mystory" element={<MyStory />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/login" element={<LogIn />}/>  {/*주연씨 담당 페이지*/}
            <Route path="/signup" element={<SignUp />} />  {/*중원 담당 페이지*/}
            <Route path="/onboarding" element={<Onboarding />} />  {/*은향씨 담당 페이지*/}
          </Routes>
        </BrowserRouter>
      </Root>
  );
}

export default App;
