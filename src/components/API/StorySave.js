import axios from 'axios';
const url = 'http://3.39.39.6:8080/api/';
const token = localStorage.getItem('Token');


//스토리 내용 저장
export const saveContentApi =async (ID,content)=>{
    console.log("saveContentApi 함수로 들어옴 ",ID);
    console.log("saveContentApi 함수로 들어옴 ",content);
    try {
        const response = await axios.post(url,
            {
                "exhibitionId": ID,
                "storyTitle": "전시회 다녀온 후기",
                "storySatisfactionLevel": "string",
                "storyWeather": "string",
                "storyCompanion": "string",
                "storyKeyword": "string",
                "storyViewingTime": "string",
                "year": 0,
                "month": 0,
                "day": 0,
                "storyContext": content,
                "genre1": "MEDIA",
                "genre2": "MEDIA",
                "genre3": "MEDIA",
                "isOpen": true,
                "picturesUrl": [
                "string"
                ]
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
    //스토리 수정 api (임시저장)
    export const progressSaveApi =async (exhibitionId,data,title,viewingTime,companion,genre1,genre2,genre3,satisfactionLevel,weather,isOpen,year,month,date)=>{
            console.log(exhibitionId)
            console.log(data)
            console.log(title)
            console.log(companion)
            console.log(genre1)
            console.log(genre2)
            console.log(genre3)
            console.log(satisfactionLevel)
            console.log(weather)
            console.log(year)
            console.log(month)
            console.log(date)
        try {
            const response = await axios.patch(`${url}stories/upadte/{story-id}?storyId=${exhibitionId}`,
                {
                    exhibitionId: exhibitionId,
                    storyTitle: title,
                    storySatisfactionLevel: satisfactionLevel,
                    storyWeather: weather,
                    storyCompanion: companion,
                    storyKeyword: 'string',
                    storyViewingTime: viewingTime,
                    year: year,
                    month: month,
                    day: date,
                    storyContext: data,
                    genre1: genre1,
                    genre2: genre2,
                    genre3: genre3,
                    isOpen: isOpen,
                    picturesUrl: ['string'],
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
    
//작성전 전시회 스토리 저장
export const BeforeWritionSaveApi =async (id,year,month,day)=>{
    console.log("BeforeWritionSaveApi 함수로 들어옴 ",id);
    console.log("BeforeWritionSaveApi 함수로 들어옴 ",year);
    console.log("BeforeWritionSaveApi 함수로 들어옴 ",month);
    console.log("BeforeWritionSaveApi 함수로 들어옴 ",day);
    try {
        const response = await axios.post(`${url}mystory/not-started-save`,
            {
                "exhibitionId": id,
                "year": year,
                "month": month,
                "day": day

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