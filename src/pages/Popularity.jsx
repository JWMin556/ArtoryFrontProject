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
export default function Popularity() {
    const url = 'http://3.39.39.6:8080/api/exhibitions/'
    const [popularityExhibitionData, setPopularityExhibitionData] = useState([]);
    const token = localStorage.getItem('Token');

    useEffect(() => {
        (async () => {
          //인기 전시회 API
            try {
            const response = await axios.post(`${url}all?page=1`,
            {
                    "latitude": "90",
                    "longitude": "90"
            },
                {
                    headers: {
                        'Accept': '*/*',
                        'Authorization': `Bearer ${token}`,
                        'content-type': 'application/json',
                }
                }
            );
            setPopularityExhibitionData(response.data.popluarExhibitionDtoList);
            console.log(response.data.popluarExhibitionDtoList);
            } catch (error) {
            console.error('Error fetching data:', error.response.data);
        }
          //fetchData();
        })();
    }, []);
    return (
        <Container>
        <WrapResult>
        {popularityExhibitionData.map((item, index) => (
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
    </Container>
    )
}
