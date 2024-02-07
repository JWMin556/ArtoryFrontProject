import axios from 'axios';
import { useEffect } from 'react';
const token = localStorage.getItem('Token');
const MemoSaveUrl = 'http://artory-prod-env.eba-axnhdqgn.ap-northeast-2.elasticbeanstalk.com/api/mystory/saveMemo?';
//메모 저장
export const memoSaveApi =async (content)=>{
    console.log("memo save api 함수로 들어옴",content);
        try {
            const response = await axios.post(`${MemoSaveUrl}memo=${content}`,
            {
                //memo: content
            },
            {
                headers: {
                    'Accept': '*/*',
                    'Authorization': `Bearer ${token}`,
            }}
        );
        console.log(response.data);
    } 
    catch (error) 
    {
        console.error('Error fetching data:', error.response.data);
    }
        //fetchData();
    };