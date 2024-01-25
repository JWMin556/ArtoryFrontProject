import React from 'react';
import * as S from '../styled-components/Exhibition.style';
import Slide from '../components/Exhibition/Slide';
import Search from '../components/Story/Search';
import UserSlide from '../components/Story/UserSlide';
import { TestDummy } from '../TestDummy';

export default function Story(props) {
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
