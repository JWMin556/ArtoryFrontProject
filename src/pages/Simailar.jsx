import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Poster from '../components/Exhibition/Poster';
import Heart from '../components/Exhibition/Heart';
import Save from '../components/Exhibition/Save';
import Search2 from '../components/Exhibition/Search2'
import CustomPagination from '../components/Exhibition/CustomPagination'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  // justify-content : center;
  // align-items : center;
  //margin-top : 10%;
  margin-left: 19%;
`;
const WrapResult = styled.div`
  margin-top : 4%;
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
  //background-color : red;
`;
export default function Simailar() {
  const url = 'http://artory-prod-env.eba-axnhdqgn.ap-northeast-2.elasticbeanstalk.com/api/exhibitions/ParticularSimilar?page=1';
  const [simailarExhibitionData, setSimailarExhibitionData] = useState([]);
  const token = localStorage.getItem('Token');
  const [page, setPage] = useState(1);
  const [exhibition , setExhibition] = useState(20);
  const handlePageChange = (page) => {
    setPage(page);
};
  useEffect(() => {
    (async () => {
      // 유사 전시회 API
      try {
        const response = await axios.get(url,
          {
            headers: {
              Accept: '*/*',
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response.data);
        setSimailarExhibitionData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
      //fetchData();
    })();
  }, []);
  return (
    <Container>
      <Search2/>
      <WrapResult>
        {simailarExhibitionData.slice(
            exhibition*(page-1),
            exhibition*(page-1)+exhibition
          ).map((item, index) => (
          <WrapPoster key={index}>
            <div>
              <Poster item={item} />
            </div>
            <WrapIcon className='ggg'>
              <Heart item={item} />
              <Save item={item} />
            </WrapIcon>
          </WrapPoster>
        ))}
      </WrapResult>
      <CustomPagination
          page={page}
          exhibition={exhibition}
          data={simailarExhibitionData}
          handlePageChange={handlePageChange}
        />
    </Container>
  );
}
