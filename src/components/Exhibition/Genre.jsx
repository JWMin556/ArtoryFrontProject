import React from 'react'
import styled from 'styled-components'

const GenreWrap = styled.div`
    width: 61%;
    height: 100%;
    margin-bottom: 10%;
`

const Title = styled.div`
    position: relative;
    font-family: 'Pretendard';
    font-weight: 900;
    font-size: 1.6em;
    word-spacing: 1px;
`;

const Content = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
`;

const ContentFirstColumn = styled.div`
    display: flex;
`;

const ContentSecondColumn = styled.div`
    
`;

export default function Genre(props) {
  return (
    <GenreWrap>
        <Title>{props.title}</Title>
        <Content>
        </Content>
    </GenreWrap>
  )
}
