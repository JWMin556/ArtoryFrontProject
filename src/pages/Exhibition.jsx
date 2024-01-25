import React from 'react';
import * as S from '../styled-components/Exhibition.style';
import Slide from '../components/Exhibition/Slide';
import Search from '../components/Exhibition/Search';
import AdBanner from '../components/Exhibition/AdBanner';
import { TestDummy } from '../TestDummy';
export default function Exhibition(props) {
  //주연씨가 작업해주실 EXHIBITION페이지입니다.
  return (
    <S.Container>
      <S.WrapAdBanner>
        <AdBanner />
      </S.WrapAdBanner>
      <S.WrapSearch>
        <Search />
      </S.WrapSearch>
      <Slide title={'인기 전시'} Dummy={TestDummy} />
      <Slide title={'최근 전시'} Dummy={TestDummy} />
      <Slide title={'추천 전시'} Dummy={TestDummy} />
      <Slide title={'이번 달 추천 전시'} Dummy={TestDummy} />
      <Slide title={'근처 추천 전시'} Dummy={TestDummy} />
      <Slide title={'작가 추천 전시'} Dummy={TestDummy} />
      <Slide title={'최근 본 전시와 비슷한 전시'} Dummy={TestDummy} />
    </S.Container>
  );
}
