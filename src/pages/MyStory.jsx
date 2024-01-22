import React from 'react'
import MyCalendar from '../components/MyStory/MyCalendar'
import * as S from '../styled-components/MyStory.style'
import { TestDummy } from '../TestDummy'
import Recrod from '../components/MyStory/Recrod';
export default function MyStory() {
  return (
    <S.Container>
      <S.WrapCalendar>
        <MyCalendar/>
      </S.WrapCalendar>
      <div style={{margin:'5%'}}>
      <S.RecordName>
        니모님의 기록
      </S.RecordName>
      <S.WrapRecord>
        {TestDummy.results.map((item) => (
                <Recrod
                  title = {item.title}
                  poster = {item.poster_path}
                />
                ))}
        </S.WrapRecord>
      </div>
    </S.Container>
    
  )
}
