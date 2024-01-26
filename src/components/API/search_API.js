import axios from 'axios';
const url = 'http://3.39.39.6:8080/api/exhibitions/search'
export const searchExhibition = async(keyword) =>{
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBQ0NFU1MiLCJpYXQiOjE3MDYxOTcxOTcsImV4cCI6MTcwNjI4NzE5NywibWVtYmVySWQiOjMsInJvbGUiOiJVU0VSIn0.0cgyeqSWTQpKte12MnmndwZfYVlQ4b_OUFXD7VSi_-3nMWUbXDl-P4SPon1gk4CeCGUFhrEhkLU_-uRNeaE2og'
    try{

        const response = await axios.get(`${url}?title=${keyword}&page=1`,
        {
            headers : {
                'Accept' : '*/*',
                'Authorization' : `Bearer ${token}`,
                'content-type' : "application/json"
            }
        });
        return response.data;
    } catch (error)
    {
        console.error('Error fetching data:', error);
    }
}
