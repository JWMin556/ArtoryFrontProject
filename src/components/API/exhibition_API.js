import axios from "axios";

const url = 'http://3.39.39.6:8080/api/exhibitions/'

export const getPopularity = async(page) => { //인기 전시회 목록 조회
    try{
        const response = await axios.get(`${url}/popularity?page=${page}`,
            {
            headers : {
                'Accept' : '*/*',
                'Authorization' : 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBQ0NFU1MiLCJpYXQiOjE3MDU5MDUxOTAsImV4cCI6MTcwNTk5NTE5MCwibWVtYmVySWQiOjQsInJvbGUiOiJVU0VSIn0.PrpnP91Du2jt4_YPr0N5PbsRSLxhHtNDVYwhdXmLI8jsMRQ2-Dv5iLJLHnP7wchTyrn96mqZBbkWeMjA-YbfnQ'
            }
        });
        console.log(response);
        //return response;
    }catch(error)
    {
        console.error('Error fetching data:', error);
    }
}

export const getRecent = async(page) => { //최근 전시회 목록 조회
    try{
        const response = await axios.get(`${url}/recent?page=${page}`,
            {
            headers : {
                'Authorization': "*/*"
            }
        });
        console.log(response);
        //return response;
    }catch(error)
    {
        console.error('Error fetching data:', error);
    }
}

export const getRecommend = async(page) => { //추천 전시회 목록 조회
    try{
        const response = await axios.get(`${url}/recommend?page=${page}`,
            {
            headers : {
                'Authorization': "*/*"
            }
        });
        console.log(response);
        //return response;
    }catch(error)
    {
        console.error('Error fetching data:', error);
    }
}

export const getRandom = async(page) => { //랜덤 전시회 목록 조회
    try{
        const response = await axios.get(`${url}/random?page=${page}`,
            {
            headers : {
                'Authorization': "*/*"
            }
        });
        console.log(response);
        //return response;
    }catch(error)
    {
        console.error('Error fetching data:', error);
    }
}

export const getSimilar = async(page) => { //유사한 전시회 목록 조회
    try{
        const response = await axios.get(`${url}/similar?page=${page}`,
            {
            headers : {
                'Authorization': "*/*"
            }
        });
        console.log(response);
        //return response;
    }catch(error)
    {
        console.error('Error fetching data:', error);
    }
}