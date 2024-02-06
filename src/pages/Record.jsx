import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Container } from 'reactstrap';
import styled from 'styled-components';
import WritingStory from '../components/MyStory/WritingStory';
import StoryTitle from '../components/MyStory/StoryTitle';
import TodayExhibition from '../components/MyStory/TodayExhibition';
import { createStory } from '../components/API/Mystoyr_APITEST';
import Banner from '../components/Story/Banner';

const StoryRecord = styled.div`
  border: 1px solid #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & div {
  }
  height: fit-content;
`;
const defaultData = '';
export default function Record(props) {
  const [data, setData] = useState(defaultData);

  const handleSubmit = async () => {
    try {
      await createStory(state.item.exhibitionId, data);
    } catch (error) {
      console.log(error.response.data);
    }
  };
  const { state } = useLocation();
  console.log('스토리기록전시정보', state);
  return (
    <Container>
      <Banner
        image={state.item.exhibitionImage}
        title={state.item.exhibitionTitle}
      />
      <div>스토리 기록</div>

      <StoryRecord>
        <StoryTitle />
        <TodayExhibition />
        <WritingStory data={data} setData={setData} />
        <div style={{ paddingBottom: '100px' }}>
          <button>임시저장</button>

          <button onClick={handleSubmit}>저장</button>
        </div>
      </StoryRecord>
    </Container>
  );
}
