import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Line from '../../Img/Calendar/line.svg';
import { useNavigate } from 'react-router-dom';
const URL = localStorage.getItem('URL');

const url = `${URL}/api/mystory/bySavedDate?`;
const token = localStorage.getItem('Token');

const WrapList = styled.div`
  position: absolute;
  left: 90%;
  background-color: #ffff;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
  width: 200px;
  height: ${(props) => `${props.dynamicHeight}px`};
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  padding-left: 15%;
  padding-right: 15%;
  & img {
    margin-left: 10%;
    margin-top: 5%;
  }
`;

const List = styled.div`
  color: #4d4d4d;
  font-size: 13px;
  font-family: 'Pretendard';
  font-weight: bold;
`;

export default function StoryList({ year, month, day }) {
  const navigate = useNavigate();
  const [storyByDate, setStoryByDate] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${url}year=${year}&month=${month}&day=${day}`,
          {
            headers: {
              Accept: '*/*',
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(
          `${year}년 ${month}월 ${day}일에 저장된 스토리`,
          response.data
        );
        setStoryByDate(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [year, month, day]);

  // 동적으로 계산된 height 값
  const dynamicHeight = storyByDate.length * 50; // 각 아이템이 50px로 가정
  const clickedList = (item) => {
    if (item.storyState === 'NOT_STARTED') {
      navigate(`/mystory/${item.exhibitionTitle}`, { state: { item } });
    }
  };
  return (
    <WrapList dynamicHeight={dynamicHeight}>
      {storyByDate.length > 0 ? (
        storyByDate.map((item, index) => (
          <div key={index}>
            <List onClick={() => clickedList(item)}>
              • {item.exhibitionTitle}
            </List>
            {index != storyByDate.length - 1 ? (
              <img src={Line} alt="Line" />
            ) : (
              <span></span>
            )}
          </div>
        ))
      ) : (
        <List></List>
      )}
    </WrapList>
  );
}
