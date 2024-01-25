import axios from "axios";
const KakaoURL = 'http://3.39.39.6:8080/oauth/kakao/callback?code=wRmdCuqXELu2MFoT198O28egJhZHTdLl4ff-YC6GU4QNbjb4VytOjQ5qSYkKPXUbAAABjScxNYMtjdRiIM79qQ';
const UserInfoURL = 'http://3.39.39.6:8080/api/member/info'
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
export const getUserInfo = async() => { //유저 정보 조회
    try{
        const response = await axios.get(UserInfoURL,
            {
            headers : {
                'Accept' : '*/*',
                'Authorization' : 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBQ0NFU1MiLCJpYXQiOjE3MDU5OTQ4OTUsImV4cCI6MTcwNjA4NDg5NSwibWVtYmVySWQiOjMsInJvbGUiOiJVU0VSIn0.FpVQD9tnMrguCxVzIvFSqbXjqbeH1ASzNPrmRkW1jqLqkH_T3Ucz1NtSZEB0-6ExzOqUPWDNK0IqEA88LJ40Tg'
            }
        });
        console.log(response);
        //return response;
    }catch(error)
    {
        console.error('Error fetching data:', error);
    }
}