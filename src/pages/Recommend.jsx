import React,{useEffect,useState} from 'react'
import axios from'axios'
import styled from 'styled-components';
import Poster from '../components/Exhibition/Poster';
import Heart from '../components/Exhibition/Heart';
import Save from '../components/Exhibition/Save';
const Container = styled.div`
    display : flex;
    flex-direction : column;
    // justify-content : center;
    // align-items : center;
    //margin-top : 10%;
    margin- left : 19%;

`;
const WrapResult = styled.div`
    display : flex;
    flex-direction : row;
    flex-wrap : wrap;
    // justify-content : center;
    // align-items : center;
`;
const WrapSearch = styled.div`
    margin-top: 5%;
    margin-bottom : 10%;
    width : 419px;
    height : 39px;
`;
const WrapPoster = styled.div`
    margin-right : 5%;
    margin-bottom : 3%;
`;
export const WrapIcon = styled.div`
    width : 175px;
    position : relative;
    top : 3%;
    left : 3%;
    display : flex;
    justify-content: space-between;
    align-items: flex-end;
`;
export default function Recommend() {
    const url = 'http://3.39.39.6:8080/api/exhibitions/'
    const [recommendExhibitionData, setRecommedExhibitionData] = useState([]);
    useEffect(() => {
        (async() => { // 추천 전시회 API
            try{
                const response = await axios.get(`${url}recommend?page=1`,
                    {
                    headers : {
                        'Accept' : '*/*',
                        'Authorization' : 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBQ0NFU1MiLCJpYXQiOjE3MDYxMDQ2MzMsImV4cCI6MTcwNjE5NDYzMywibWVtYmVySWQiOjMsInJvbGUiOiJVU0VSIn0.C_9o0FBHk1FQiJJxKq10A82f3esm-LrpH7Zgvwnxd1UzE-NlJkmcrT3neu-QeufY0IVWpxJNmHaeMTQt3Qv6Bg',
                        'content-type' : "application/json"
                    }
                });
                setRecommedExhibitionData(response.data);
                console.log(response);
            }catch(error)
            {
                console.error('Error fetching data:', error);
            }
        //fetchData();
    })();
    },[]);
  return (
    <Container>
    <WrapResult>
    {recommendExhibitionData.map((item, index) => (
        <WrapPoster key={index}>
            <div>
            <Poster
                item={item}
            />
            </div>
            <WrapIcon>
                <Heart />
                <Save />
            </WrapIcon>
        </WrapPoster>
    ))}
    </WrapResult>
</Container>  )
}