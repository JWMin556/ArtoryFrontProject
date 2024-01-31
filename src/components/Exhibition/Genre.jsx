import React from 'react'
import styled from 'styled-components'
import Poster from './Poster';

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
    width: auto;
    height: auto;
`;

const ContentSecondColumn = styled.div`
    width: auto;
    height: auto;
`;

const ContentArea = styled.div`
    
`;

const WrapPorterAndIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 350px;
`;

export default function Genre(props) {
  return (
    <GenreWrap>
        <Title>{props.title}</Title>
        <Content>
            <ContentFirstColumn>
                <ContentArea>
                    {props.Dummy.results.slice(0, 4).map((item, index) => (
                        <div key={index}>
                            <WrapPorterAndIcon>
                                <Poster source={props.source} item={item} />
                            </WrapPorterAndIcon>
                        </div>
                    ))}
                </ContentArea>
            </ContentFirstColumn>
            <ContentSecondColumn>
            <ContentArea>
                    {props.Dummy.results.slice(0, 2).map((item, index) => (
                        <div key={index}>
                            <WrapPorterAndIcon>
                                <Poster source={props.source} item={item} />
                            </WrapPorterAndIcon>
                        </div>
                    ))}
                </ContentArea>
            </ContentSecondColumn>
            <ContentFirstColumn>
            <ContentArea>
                    {props.Dummy.results.slice(0, 4).map((item, index) => (
                        <div key={index}>
                            <WrapPorterAndIcon>
                                <Poster source={props.source} item={item} />
                            </WrapPorterAndIcon>
                        </div>
                    ))}
                </ContentArea>
            </ContentFirstColumn>
            <ContentSecondColumn>
                {props.Dummy.results.slice(0, 2).map((item, index) => (
                    <div key={index}>
                        <WrapPorterAndIcon>
                            <Poster source={props.source} item={item} />
                        </WrapPorterAndIcon>
                    </div>
                ))}</ContentSecondColumn>
        </Content>
    </GenreWrap>
  )
}
