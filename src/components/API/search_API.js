import axios from 'axios';
const url = 'http://3.39.39.6:8080/api/exhibitions/search'
export const searchExhibition = async(keyword) =>{
    try{

        const response = await axios.get(`${url}?title=${keyword}&page=1`,
        {
            headers : {
                'Accept' : '*/*',
                'Authorization' : 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBQ0NFU1MiLCJpYXQiOjE3MDYwOTY3MjksImV4cCI6MTcwNjE4NjcyOSwibWVtYmVySWQiOjMsInJvbGUiOiJVU0VSIn0.hnDGFcwa2aln0sAlnWmF_9-HgvR8HXDxlROz7xWIVjFz9_CzKw9N_J1gAF9qi5sDJ7jfnd4S9BXr3ow5tH7rxA',
                'content-type' : "application/json"
            }
        });
        return response.data;
    } catch (error)
    {
        console.error('Error fetching data:', error);
    }
}