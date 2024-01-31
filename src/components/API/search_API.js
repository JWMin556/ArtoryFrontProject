import axios from 'axios';
const url = 'http://3.39.39.6:8080/api/exhibitions/ParticularSearch?'
export const searchExhibition = async(keyword) =>{
    const token = localStorage.getItem('Token');
    try{
        console.log("searchExhibition 함수로 들어옴",keyword)
        const response = await axios.get(`${url}title=${keyword}&page=1`,
        {
            headers : {
                'Accept' : '*/*',
                'Authorization' : `Bearer ${token}`,
                'content-type' : "application/json"
            }
        });
        console.log("검색api 결과", response.data);
        return response.data;
    } catch (error)
    {
        console.error('Error fetching data:', error.response.data);
    }
}
