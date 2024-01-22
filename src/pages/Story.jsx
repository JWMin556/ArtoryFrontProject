import React from 'react';
import * as S from '../styled-components/Exhibition.style';
import Slide from '../components/Exhibition/Slide';
import Search from '../components/Story/Search';
import UserSlide from '../components/Story/UserSlide';
import { TestDummy } from '../TestDummy';

export default function Story(props) {
  //주연씨가 작업해주실 EXHIBITION페이지입니다.
  return (
    <S.Container>
      <S.WrapSearch style={{ width: '885px', right: '0' }}>
        <Search />
      </S.WrapSearch>
      <Slide title={'인기 Story'} source={'story'} Dummy={TestDummy} />
      <Slide title={'최근 Story'} source={'story'} Dummy={TestDummy} />
      <Slide title={'추천 Story'} source={'story'} Dummy={TestDummy} />
      <UserSlide
        width={126}
        height={126}
        title={'추천 유저'}
        Dummy={TestDummy}
      />
    </S.Container>
  );
}
/* export const WrapSearch = styled.div`
    position : relative;
    right : 15.5%;
    margin-bottom : 7%;
    margin-top : 7%

`;*/
