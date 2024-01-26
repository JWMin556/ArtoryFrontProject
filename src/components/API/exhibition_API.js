import axios from "axios";

const url = 'http://3.39.39.6:8080/api/exhibitions/'



export const getRecent = async(page) => { //최근 전시회 목록 조회
    try{
        const response = await axios.get(`${url}/recent?page=${page}`,
            {
            headers : {
                'Authorization': "*/*"
            }
        });
        //console.log(response);
        return response;
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
