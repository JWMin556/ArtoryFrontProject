import React from 'react'
import * as S from '../styled-components/Exhibition.style'
import Slide from '../components/Exhibition/Slide'
import Search from '../components/Exhibition/Search'
import AdBanner from '../components/Exhibition/AdBanner'

export default function Exhibition(props) { //주연씨가 작업해주실 EXHIBITION페이지입니다. 
  return (
    <S.Container>
      <S.WrapAdBanner>
        <AdBanner/>
      </S.WrapAdBanner>
      <S.WrapSearch>
        <Search/>
      </S.WrapSearch>
        <Slide title = {"최근 인기 전시"}/>
        <Slide title = {"최근 전시"}/>
        <Slide title = {"맞춤 추천 전시"}/>
        <Slide title = {"이번 달 추천 전시"}/>
    </S.Container>
  )
}
