import axios from 'axios';
import { useEffect } from 'react';
const token = localStorage.getItem('Token');
const SaveUrl = 'http://3.39.39.6:8080/api/scrap-exhibition/exhibition-scrapped';
const HeartUrl = 'http://3.39.39.6:8080/api/like-exhibition/exhibition-liked';
//전시회 스크랩
export const saveApi =async (exhibitionId)=>{
        try {
            const response = await axios.post(`${SaveUrl}`,
            {
                exhibitionId: exhibitionId
            },
            {
                headers: {
                    'Accept': '*/*',
                    'Authorization': `Bearer ${token}`,
                    'content-type': 'application/json',
            }}
        );
        console.log(response.data);
    } 
    catch (error) 
    {
        console.error('Error fetching data:', error.response);
    }
        //fetchData();
    };
//전시회 좋아요
export const heartApi =async (exhibitionId)=>{
    try {
        const response = await axios.post(`${HeartUrl}`,
        {
            exhibitionId: exhibitionId
        },
        {
            headers: {
                'Accept': '*/*',
                'Authorization': `Bearer ${token}`,
                'content-type': 'application/json',
        }}
    );
    console.log(response.data);
} 
catch (error) 
{
    console.error('Error fetching data:', error.response);
}
    //fetchData();
};