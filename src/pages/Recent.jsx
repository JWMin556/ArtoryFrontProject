import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Poster from '../components/Exhibition/Poster';
import Heart from '../components/Exhibition/Heart';
import Save from '../components/Exhibition/Save';
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
const token =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBQ0NFU1MiLCJpYXQiOjE3MDYxNzI2MzIsImV4cCI6MTcwNjI2MjYzMiwibWVtYmVySWQiOjQsInJvbGUiOiJVU0VSIn0.utWBgIlkM-je684zEEM83zKlPRNNlAaov-1sRj53AiLMB-Aked78AxOYwuoKadiaQZ6RTQY6d-BkXprqzd41oA';
export default function Popularity() {
  const url = 'http://3.39.39.6:8080/api/exhibitions/';
  const [recentExhibitionData, setRecentExhibitionData] = useState([]);

  useEffect(() => {
    (async () => {
      //최근 전시회 API
      try {
        const response = await axios.get(`${url}recent?memberId=1&page=1`, {
          headers: {
            Accept: '*/*',
            Authorization: `Bearer ${token}`,
            'content-type': 'application/json',
          },
        });
        setRecentExhibitionData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
      //fetchData();
    })();
  }, []);
  return (
    <Container>
      <WrapResult>
        {recentExhibitionData.map((item, index) => (
          <WrapPoster key={index}>
            <div>
              <Poster item={item} />
            </div>
            <WrapIcon>
              <Heart />
              <Save />
            </WrapIcon>
          </WrapPoster>
        ))}
      </WrapResult>
    </Container>
  );
}
