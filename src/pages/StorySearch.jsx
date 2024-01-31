import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Poster from '../components/Story/StoryPoster';
import styled from 'styled-components';
import Heart from '../components/Story/Heart';
import Scrap from '../components/Story/Scrap';
import Search from '../components/Story/Search';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  // justify-content : center;
  // align-items : center;
  //margin-top : 10%;
  margin-left: 19%;
`;
const WrapResult = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  // justify-content : center;
  // align-items : center;
`;
const WrapSearch = styled.div`
  margin-top: 5%;
  margin-bottom: 10%;
  width: 419px;
  height: 39px;
`;
const WrapPoster = styled.div`
  margin-right: 5%;
  margin-bottom: 3%;
`;
export const WrapIcon = styled.div`
  width: 175px;
  position: relative;
  top: 3%;
  left: 3%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;
export default function StorySearch(props) {
  const { state } = useLocation();
  console.log(state);
  return (
    <Container>
      <WrapSearch>
        <Search />
      </WrapSearch>
      <WrapResult>
        {state.result.map((item) => (
          <WrapPoster key={item.storyId}>
            <div>
              <Poster item={item} />
            </div>
            <WrapIcon>
              <Heart id={item.storyId} isLiked={item.isLiked} />
              <Scrap id={item.storyId} isScrapped={item.isScrapped} />
            </WrapIcon>
          </WrapPoster>
        ))}
      </WrapResult>
    </Container>
  );
}
