import React from 'react';
import * as S from '../styled-components/Exhibition.style';
import Search from '../components/Story/Search';
import UserSlide from '../components/Story/UserSlide';
import { TestDummy } from '../TestDummy';
import StorySlide from '../components/Story/StorySlide';

export default function Story(props) {
  return (
    <S.Container>
      <S.WrapSearch style={{ width: '885px', right: '0' }}>
        <Search />
      </S.WrapSearch>
      <StorySlide title={'인기 Story'} source={'story'} Dummy={TestDummy} />
      <StorySlide title={'최근 Story'} source={'story'} Dummy={TestDummy} />
      <StorySlide title={'추천 Story'} source={'story'} Dummy={TestDummy} />
      <UserSlide
        width={126}
        height={126}
        title={'추천 유저'}
        Dummy={TestDummy}
      />
    </S.Container>
  );
}
