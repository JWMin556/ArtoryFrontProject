import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Heart from '../components/Exhibition/Heart';
import Save from '../components/Exhibition/Save';
import Poster from '../components/Exhibition/Poster';
import Pagination from 'react-js-pagination';
import PREV from '../Img/Pagination/prev.svg'
import NEXT from '../Img/Pagination/next.svg'

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

const Wrap = styled.div`
    //border: 1px solid red;
    width : 75%;
    display : flex;
    justify-content : center;
`;
const PaginationBox = styled.div`
    .pagination { 
        display: flex; 
        justify-content: space-between; 
        margin-top: 15px; 
        width : 100px;
        height : 18px;
    }
    ul { 
        list-style: none; 
        padding: 0;
    }
    ul.pagination li {
        display: inline-block;
        width: 10px;
        height: 10px;
        background-color : #d9d9d9;
        //border: 1px solid #000;
        border-radius : 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1rem; 
    }
    ul.pagination li:first-child{
        display : none;
    }
    ul.pagination li:last-child{ 
        display : none;
    }
    ul.pagination li:second-child{ 
        display : none;
    }
    ul.pagination li a { 
        text-decoration: none; 
        color: #d9d9d9; 
        font-size: 1px; 
        //display : none;
    }
    ul.pagination li.active a { display : none; }
    ul.pagination li.active { background-color: #000; }
    
    ul.pagination li a.active { color: #d9d9d9; display : none; }
    ul.pagination li.disabled {
        //display : none;
    }
`;

export default function GenreMedia() {
  const url = `${URL}/api/cagegory/media`;
  const [mediaData, setMediaData] = useState([]);
  const token = localStorage.getItem('Token');
  const [currentPage, setCurrentPage] = useState(1);
  const fetchData = async (page) => {
    try {
      const response = await axios.get(`${url}?page=${page}`,
        {
          headers : {
            'Accept': '*/*',
            'Authorization': `Bearer ${token}`,
          }
        }
      );
      setMediaData(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);


  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <Container>
      <WrapResult>
        {mediaData.map((item, index) => (
          <WrapPoster key={index}>
            <div>
              <Poster item={item} />
            </div>
            {/* <WrapIcon>
              <Heart item={item} />
              <Save item={item} />
            </WrapIcon> */}
          </WrapPoster>
        ))}
      </WrapResult>

      <Wrap>
        <PaginationBox> 
          <Pagination 
            activePage={currentPage} 
            itemsCountPerPage={10} 
            totalItemsCount={70} 
            pageRangeDisplayed={7}
            prevPageText={<img src={PREV} style={{width : "10px", height : "10px", backgroundColor:"#fff"}}/>}
            nextPageText={<img src={NEXT} style={{width : "10px", height : "10px", backgroundColor:"#fff"}}/>} 
            onChange={handlePageChange}
            />
        </PaginationBox>
      </Wrap>
    </Container>
  );
}

// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
// import styled from 'styled-components';
// import Heart from '../components/Exhibition/Heart';
// import Save from '../components/Exhibition/Save';
// import Poster from '../components/Exhibition/Poster';
// import Search2 from '../components/Exhibition/Search2'
// import CustomPagination from '../components/Exhibition/CustomPagination'

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   // justify-content : center;
//   // align-items : center;
//   //margin-top : 10%;
//   margin-left: 19%;
// `;
// const WrapResult = styled.div`
//   display: flex;
//   flex-direction: row;
//   flex-wrap: wrap;
//   margin-top : 4%;
//   // justify-content : center;
//   // align-items : center;
// `;
// const WrapPoster = styled.div`
//   margin-right: 5%;
//   margin-bottom: 3%;
// `;
// const WrapIcon = styled.div`
//   width: 175px;
//   position: relative;
//   top: 3%;
//   left: 3%;
//   display: flex;
//   justify-content: space-between;
//   align-items: flex-end;
// `;

// export default function GenreMedia() {
//   const url = 'http://3.39.39.6:8080/api/cagegory/media?page=1'
//   const [mediaData, setMediaData] = useState([]);
//   const token = localStorage.getItem('Token');
//   const [page, setPage] = useState(1);
//   const [exhibition , setExhibition] = useState(10);
//   const handlePageChange = (page) => {
//     setPage(page);
//   };
//   useEffect(() => {
//     (async () => {
//       try{
//         const response = await axios.get(url,
//           {
//             headers : {
//               Accept: '*/*',
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );
//         setMediaData(response.data);
//         console.log(response.data);
//       } catch(error) {
//         console.error('Error fetching data:', error.response.data);
//       }
//     })();
//   }, []);

//   return (
//     <Container>
//       {/* <Search2/> 미디어가 아닌 다른 exhibition을 찾고 */}
//       <WrapResult>
//         {mediaData.slice(
//            exhibition*(page-1),
//            exhibition*(page-1)+exhibition
//         ).map((item, index) => (
//           <WrapPoster key={index}>
//             <div>
//               <Poster item={item} />
//             </div>
//             <WrapIcon>
//               <Heart item={item} />
//               <Save item={item}/>
//             </WrapIcon>
//           </WrapPoster>
//         ))}
//       </WrapResult>
//       <CustomPagination
//           page={page}
//           exhibition={exhibition}
//           data={mediaData}
//           handlePageChange={handlePageChange}
//       />
//     </Container>
//   );
// }
