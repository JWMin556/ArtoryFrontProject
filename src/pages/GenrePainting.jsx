import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Heart from '../components/Exhibition/Heart';
import Save from '../components/Exhibition/Save';
import Poster from '../components/Exhibition/Poster';

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
const WrapPoster = styled.div`
  margin-right: 5%;
  margin-bottom: 3%;
`;
const WrapIcon = styled.div`
  width: 175px;
  position: relative;
  top: 3%;
  left: 3%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;
const URL = localStorage.getItem('URL');

export default function GenrePainting() {
  const url = `${URL}/api/cagegory/painting?page=1`;
  const [paintingData, setPaintingData] = useState([]);
  const token = localStorage.getItem('Token');

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(url, {
          headers: {
            Accept: '*/*',
            Authorization: `Bearer ${token}`,
            'content-type': 'application/json',
          },
        });
        setPaintingData(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    })();
  }, []);

  return (
    <Container>
      <WrapResult>
        {paintingData.map((item, index) => (
          <WrapPoster key={index}>
            <div>
              <Poster item={item} />
            </div>
            <WrapIcon>
              <Heart item={item} />
              <Save item={item} />
            </WrapIcon>
          </WrapPoster>
        ))}
      </WrapResult>
    </Container>
  );
}
