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

    useEffect(() => {
        (async() => { //인기 전시회 API
            try{
                    const response = await axios.get(`${url}popularity?page=1`,
                    {
                        headers : {
                            'Accept' : '*/*',
                            'Authorization' : 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBQ0NFU1MiLCJpYXQiOjE3MDYwOTY3MjksImV4cCI6MTcwNjE4NjcyOSwibWVtYmVySWQiOjMsInJvbGUiOiJVU0VSIn0.hnDGFcwa2aln0sAlnWmF_9-HgvR8HXDxlROz7xWIVjFz9_CzKw9N_J1gAF9qi5sDJ7jfnd4S9BXr3ow5tH7rxA',
                            'content-type' : "application/json"
                        }
                    });
                    setPopularityExhibitionData(response.data);
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