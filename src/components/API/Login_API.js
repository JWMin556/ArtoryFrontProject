import axios from "axios";
const KakaoURL = 'http://3.39.39.6:8080/oauth/kakao/callback?code=wRmdCuqXELu2MFoT198O28egJhZHTdLl4ff-YC6GU4QNbjb4VytOjQ5qSYkKPXUbAAABjScxNYMtjdRiIM79qQ';

export const kakaoUser = async() => { 
    try{
        const response = await axios.get(KakaoURL,
        {
            "Accept" : "*/*"
        })
        localStorage.setItem('token',response.accessToken)
        console.log(response);
        //return response;
    }catch(error)
    {
        console.error('Error fetching data:', error);
    }
}