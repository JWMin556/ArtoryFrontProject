import React from 'react'
import * as S from '../styled-components/Exhibition.style'
import Slide from '../components/Exhibition/Slide'

export default function Exhibition(props) { //주연씨가 작업해주실 EXHIBITION페이지입니다. 
  return (
    <S.Container>
      <S.WrapAdBanner>
        광고배너
      </S.WrapAdBanner>
      <S.WrapSearch>

      </S.WrapSearch>
      <S.WrapExhibition>
        <Slide/>
      </S.WrapExhibition>
    </S.Container>
  )
}
