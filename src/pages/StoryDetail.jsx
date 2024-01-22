import React, { StrictMode } from 'react';
import { useLocation } from 'react-router-dom';
import Detail from '../components/Exhibition/Detail';
import profile_img from '../Img/input_pic.png';
import styled from 'styled-components';
import * as S from '../styled-components/Slide.style';
import Heart from '../components/Exhibition/Heart';
import Save from '../components/Exhibition/Save';
import poster from '../Img/imagearbitary.png';
import CommentBox from '../components/Story/CommentBox';

export default function StoryDetail() {
  const { state } = useLocation();
  console.log(state.item);
  return (
    <WrapStory>
      <div
        className="left_side"
        style={{ fontSize: '1.4rem', color: '#595959' }}
      >
        <div>
          <Profile src={profile_img} alt="프로필 이미지" />
          <WrapIcon>
            <Heart />
            <Save />
          </WrapIcon>
          <h3>유저명</h3>
        </div>
        <div style={{ marginTop: '80px' }}>
          <Poster src={poster} alt="전시회 포스터" />
          <h3>전시 제목</h3>
        </div>
      </div>

      <div className="right_side" style={{ width: '75%' }}>
        <div className="story_content" style={{ paddingLeft: '10%' }}>
          <h3>제목</h3>
          <BoxStyle>선택 유저 전시 제목</BoxStyle>

          <h3>스토리 기록</h3>
          <BoxStyle style={{ height: '800px' }}>선택 유저 스토리 기록</BoxStyle>
        </div>
        <CommentBox />
      </div>
    </WrapStory>
  );
}
const BoxStyle = styled.div`
  background-color: #f0f0f0;
  border: none;
  border-radius: 10px;
  height: 20px;
  font-size: small;
  font-weight: 600;
  margin: 10px 0 30px;
  padding: 10px;
`;
const WrapStory = styled.div`
  display: flex;
  justify-content: center;
  font-family: 'Pretendard';
  font-weight: bold;
  font-size: 1.4rem;
  padding-top: 40px;
`;
const Profile = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 10px;
`;
const WrapIcon = styled.div`
  width: 100px;
  margin-top: 5px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;
const Poster = styled.img`
  width: 130px;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
`;
