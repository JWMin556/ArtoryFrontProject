import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import WritingStory from '../components/MyStory/WritingStory';
import StoryTitle from '../components/MyStory/StoryTitle';
import TodayExhibition from '../components/MyStory/TodayExhibition';
import { createStory } from '../components/API/Mystoyr_APITEST';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import { progressSaveApi } from '../components/API/StorySave';
import Banner from '../components/Story/Banner';
import StoryDelete from '../components/MyStory/StroyDelete';


const Container = styled.div`
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
`;
const StoryRecord = styled.div`
    //border : 1px solid #000;
    width : 800px;
    display : flex;
    flex-direction : column;
    justify-content : start;
    align-items : center;
`;
const Story = styled.div`
    //border : 1px solid red;
    width : 100%;
    font-size : 30px;
    font-weight : bold;
    font-family: 'Pretendard';
    margin-top : 10%;
`;
const Story2 = styled.div`
    width :100%;
    margin-top : 0.5%;
    font-family: 'Pretendard';
    font-size : 14px;
    color : #979797;
`;
const OpenSelectButton = styled.div`
    //border : 1px solid red;
    width : 100%;
    //text-align : end;
    margin-bottom : 5%;
    margin-top : 1%;
    display : flex;
    justify-content : end;
    & button {
        background-color : #f3f3f3;
        color : #979797;
        font-family: 'Pretendard';
        font-size : 14px;
        margin-left : 1%;
        width : 83px;
        height : 30px;
        border : none;
        &:focus{
            background-color : #000;
            color : #fff;
        }
    }
`;
const WrapSaveButton = styled.div`
    display : flex;
    justify-content : space-between;
    width : 19%;
    margin-bottom : 10%;
    & button {
        width : 123px;
        height : 40px;
        background-color : #242526;
        color : #fff;
        border : none;
    }
`;
//레코드.jsx로 넘어올 때 {state : item} 종류
// 1. 스토리 작성하기 버튼 : item -> exhibitionTitle,exhibitionId,exhibitionImage
// 2. 캘린더에서 작성 전 스토리 클릭 : item -> exhibitionTitle,exhibitionId,exhibitionImage,storyId,year,month,dat,storyState
export default function Record(props) {
    const navigate = useNavigate();
    const today = new Date();
    const getYear = moment(today).format('YYYY');
    const getMonth = moment(today).format('MM')
    const getDate = moment(today).format('DD')

    const { state } = useLocation();
    const userStoryData = state.userStoryData
    const [data, setData] = useState(''); //스토리 내용
    const [title,setTitle] = useState(''); //제목
    const [viewingTime, setViewingTime] = useState(''); //시간
    const [satisfactionLevel,setSatisfactionLevel] = useState(''); //만족도
    const [weather,setWeather] = useState(''); //날씨
    const [companion,setCompanion] = useState(''); //동반인
    const [genre1,setGenre1] = useState(''); //장르1
    const [genre2,setGenre2] = useState(''); //장르2
    const [genre3,setGenre3] = useState(''); //장르3
    const [isOpen,setIsOpen] = useState(true); //공개여부
    const [year,setYear] = useState(getYear); //년
    const [month,setMonth] = useState(getMonth); //월
    const [date,setDate] = useState(getDate); //일
    const [isDeleteModal, setIsDeleteModal] = useState(false);
    const [storyByDate, setStoryByDate] = useState([]);
    const id = state.item.exhibitionId //전시회 아이디
    const exhibitionTitle = state.item.exhibitionTitle //전시회 제목
    const stroyId = state.item.storyId //스토리 아이디
    //api통신할 때 보내기 위한 값들이 잘 받아와지나 확인하기 위한 콘솔 
    // console.log("제목: ",title)
    // console.log("시간: ",viewingTime)
    // console.log("동반인: ",companion)
    // console.log("장르1: ",genre1)
    // console.log("장르2: ",genre2)
    // console.log("장르3: ",genre3)
    // console.log("만족도",satisfactionLevel)
    // console.log("날씨",weather)
    // console.log("내용",data)
    // console.log("공개여부",isOpen)
    // console.log("년",year)
    // console.log("월",month)
    // console.log("일",date)

    //저장 버튼 클릭 -> 동일한 전시 삭제를 물어보는 모달창 뜸 
    //-> 동일한 전시 삭제 -> 새롭게 작성한 스토리 저장 
    const handleSubmit = async () => {
        console.log("userStoryData", userStoryData);
        setStoryByDate((prevStoryByDate) => {
        for (let i = 0; i < userStoryData.length; i++) {
            for(let j=0 ; j < userStoryData.length; j++ )
            {
                if (userStoryData[i].exhibitionTitle === exhibitionTitle) {
                    // 기존 배열에 userStoryData[i]를 추가하여 새로운 배열 생성
                    setIsDeleteModal(true)
                    return storyByDate[j]=userStoryData[i]
                }
            }
        }
        alert("새로운 스토리가 저장되었습니다.")
        saveStory();
    });
    }
      //임시저장 버튼 클릭 
    const handleProgressSubmit = async() =>{
        if(stroyId)
        {
            alert(`${stroyId}번 스토리가 저장되었습니다.`) //캘린더 -> 작성전(storyId존재) 스토리 저장 (성공)
            try{
                await progressSaveApi(stroyId,id,data,title,viewingTime,companion,genre1,genre2,genre3,satisfactionLevel,weather,isOpen,year,month,date);
                alert("스토리가 임시저장 되었습니다")
                //navigate(`/mystory`, { state: { markEvent } }) 
            }catch (error) {
            console.log(error.response.data);
            }   
        }
        else 
        {
            alert("작성하기 버튼으로 들어옴") //작성하기 버튼 -> 새로운 스토리(storyId존재x) 저장 (실패)
            try{
                await progressSaveApi(id,title,viewingTime,companion,genre1,genre2,genre3,satisfactionLevel,weather,isOpen,year,month,date);
                alert("스토리가 저장 되었습니다")
                navigate(`/mystory`) 
            }catch (error) {
            console.log(error.response.data);
            }  
        }
    }
    //달력모달열기
    const ClickedOpen =()=>
    {
        setIsOpen(true)
    }
    //달력모달닫기
    const ClickClosed =()=>
    {
        setIsOpen(false)
    }
    //스토리 저장하는 api 
    const saveStory = () =>{
        try{
            createStory(id,data,title,viewingTime,companion,genre1,genre2,genre3,satisfactionLevel,weather,isOpen,year,month,date);
            //navigate(`/mystory`, { state: { markEvent } }) 
        }catch (error) {
        console.log(error.response.data);
        } 
    }

return (
    <div>
        {isDeleteModal && <StoryDelete storyByDate={storyByDate} isDeleteModal={isDeleteModal} setIsDeleteModal={setIsDeleteModal} saveStory={saveStory}/>}
        <Banner
        image={state.item.exhibitionImage}
        title={state.item.exhibitionTitle}/>
        <Container>
        <StoryRecord>
            <Story>스토리 기록</Story>
            <Story2>나만의 스토리를 작성해보세요</Story2>
            <StoryTitle SetTitle={setTitle}/>
            <OpenSelectButton>
                <button onClick={ClickedOpen}>공개</button>
                <button onClick={ClickClosed}>비공개</button>
            </OpenSelectButton>
            <TodayExhibition 
                setViewingTime={setViewingTime}
                setSatisfactionLevel={setSatisfactionLevel}
                setWeatherLevel={setWeather}
                setCompanion={setCompanion}
                setGenre1={setGenre1}
                setGenre2={setGenre2}
                setGenre3={setGenre3}
                year={year}
                month={month}
                date={date}
                setYear = {setYear}
                setMonth = {setMonth}
                setDate = {setDate}
                />
            <WritingStory data={data} setData={setData}/>
        </StoryRecord>
        <WrapSaveButton>
            <button onClick={handleProgressSubmit}>임시저장</button>
            <button onClick={handleSubmit}>저장</button>
        </WrapSaveButton>
        </Container>
    </div>

)
}