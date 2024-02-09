import React, { useEffect, useState } from 'react';
//import './Pagination.css';
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
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top : 4%;
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

export default function Popularity() {
  const url = 'http://3.39.39.6:8080/api/exhibitions/ParticularPopularity?page=1';
  const [popularityExhibitionData, setPopularityExhibitionData] = useState([]);
  const token = localStorage.getItem('Token');
  const [page, setPage] = useState(1);
  const [exhibition , setExhibition] = useState(20);
  const handlePageChange = (page) => {
    setPage(page);
};
  useEffect(() => {
    (async () => {
      //인기 전시회 API
      try {
        const response = await axios.get(url,
          {
            headers: {
              Accept: '*/*',
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setPopularityExhibitionData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching data:', error.response.data);
      }
      //fetchData();
    })();
  }, []);
  return (
    <Container>
      <Search2/>
      <WrapResult>
          {popularityExhibitionData.slice(
            exhibition*(page-1),
            exhibition*(page-1)+exhibition
          ).map((item, index) => (
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
        <CustomPagination
          page={page}
          exhibition={exhibition}
          data={popularityExhibitionData}
          handlePageChange={handlePageChange}
        />
    </Container>
  );
}
