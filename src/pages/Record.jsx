import React from 'react'
import { useLocation } from 'react-router-dom';
import { Container } from 'reactstrap';
import styled from 'styled-components';
import WritingStory from '../components/MyStory/WritingStory';
import StoryTitle from '../components/MyStory/StoryTitle';
import TodayExhibition from '../components/MyStory/TodayExhibition';
const WrapBanner = styled.div`
    width : 100%;
    height : 64%;
`;
const Banner = styled.div`
    background-color : rgba(0,0,0,0.85);
    display : flex;
    justify-content : center;
    width : 100%;
    height : 50%;
    & img {
        width : 299px;
        height : 100%;
    }
`;
const Title = styled.div`
    position : relative;
    bottom :250px;
    left : 34%;
    color : #fff;
    width : 12em;
    text-align : center;
    font-size : 40px;
    font-weight : bold;
`;
const StoryRecord = styled.div`
    border : 1px solid #000;
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
        & div{

    }
`;
export default function Record(props) {
    const { state } = useLocation();
    console.log(state);
  return (
    <Container>
    <WrapBanner>
        <Banner>
            <img src={state.item.exhibitionImage}></img>
        </Banner>
        <Title>{state.item.exhibitionTitle}</Title> 
    </WrapBanner>
    <div>스토리 기록</div>

    <StoryRecord>
        <StoryTitle/>
        <TodayExhibition/>
        <WritingStory/>
    </StoryRecord>
    </Container>
    )
}
