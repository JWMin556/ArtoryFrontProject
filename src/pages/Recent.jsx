import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Poster from '../components/Exhibition/Poster';
import Heart from '../components/Exhibition/Heart';
import Save from '../components/Exhibition/Save';
import Search2 from '../components/Exhibition/Search2';
import CustomPagination from '../components/Exhibition/CustomPagination';
import Search from '../components/Exhibition/Search';
import { useLocation } from 'react-router';

const Container = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  // justify-content : center;
  // align-items : center;
  //margin-top : 10%;
  /* margin-left: 19%; */
`;
const WrapResult = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  /* display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 4%; */
  // justify-content : center;
  // align-items : center;
`;
const WrapSearch = styled.div`
  width: 100%;
  margin-top: 7%;
  margin-bottom: 5%;
`;
const WrapPoster = styled.div`
  margin: 20px;
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
const URL = localStorage.getItem('URL');

const token = localStorage.getItem('Token');
export default function Popularity() {
  const url = `${URL}/api/exhibitions/ParticularRecent?page=1`;
  const [recentExhibitionData, setRecentExhibitionData] = useState([]);
  const token = localStorage.getItem('Token');
  // useEffect(() => {
  //     if(!token){
  //         alert("토큰이 없습니다.");
  //         window.location.href = '/'; // Home 페이지로 이동
  //     }
  // });
  const [page, setPage] = useState(1);
  const [exhibition, setExhibition] = useState(20);
  const handlePageChange = (page) => {
    setPage(page);
  };

  const { state } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [state]);

  useEffect(() => {
    (async () => {
      //최근 전시회 API
      try {
        const response = await axios.get(url, {
          headers: {
            Accept: '*/*',
            Authorization: `Bearer ${token}`,
            'content-type': 'application/json',
          },
        });
        setRecentExhibitionData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
      //fetchData();
    })();
  }, []);
  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <Container>
        <WrapSearch>
          <Search />
        </WrapSearch>
        <WrapResult>
          {recentExhibitionData
            .slice(
              exhibition * (page - 1),
              exhibition * (page - 1) + exhibition
            )
            .map((item, index) => (
              <WrapPoster key={index}>
                <div>
                  <Poster item={item} />
                </div>
              </WrapPoster>
            ))}
        </WrapResult>
        <CustomPagination
          page={page}
          exhibition={exhibition}
          data={recentExhibitionData}
          handlePageChange={handlePageChange}
        />
      </Container>
    </div>
  );
}
