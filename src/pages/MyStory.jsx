import React ,{useEffect, useState}from 'react'
import axios from 'axios';

import MyCalendar from '../components/MyStory/MyCalendar'
import * as S from '../styled-components/MyStory.style'
import { TestDummy } from '../TestDummy'
import Recrod from '../components/MyStory/Recrod';
import StyledButton from '../styled-components/StyledButton';
import SearchModal from '../components/MyStory/SearchModal';
const url = 'http://3.39.39.6:8080/api/member/info';
const token = localStorage.getItem('Token');
export default function MyStory() {
  const [userData, setUserData] = useState([]);
  const [isButtonClick,setIsButtonClick] = useState(false);
  const profileIMG = userData.image;
  const handleClickStoryBotton = () =>{
    if(isButtonClick)
    {
      setIsButtonClick(false);
    }
    else{
      setIsButtonClick(true);
    }
  }
  useEffect(() => {
    (async () => {
      //유저 정보 불러오기
        try {
        const response = await axios.get(url,
            {
                headers: {
                    'Accept': '*/*',
                    'Authorization': `Bearer ${token}`,
                    'content-type': 'application/json',
            }
            }
        );
        setUserData(response.data);
        console.log(response.data);
        } catch (error) {
        console.error('Error fetching data:', error.response.data);
    }
      //fetchData();
    })();
  }, []);
  return (
    <S.Container>
      {isButtonClick && <SearchModal isButtonClick={isButtonClick}/>}
      <S.WrapProfileAndButton>
      <S.WrapProfile>
        <S.ProfileIMG src={profileIMG} style={{width : '100px', height: '100px'}}></S.ProfileIMG>
        <S.RecordName> {userData.nickname +" "} 님의 기록</S.RecordName>
      </S.WrapProfile>
      <StyledButton height="35px" width="169px" style={{marginTop:'20px',fontSize:"13px"}} onClick={handleClickStoryBotton}>스토리 작성하기</StyledButton>
      </S.WrapProfileAndButton>
      <S.WrapCalendar>
        <MyCalendar/>
      </S.WrapCalendar>
      <div style={{margin:'5%'}}>
      <S.WrapRecord>
        {TestDummy.results.map((item) => (
                <Recrod
                  title = {item.title}
                  poster = {item.poster_path}
                />
                ))}
        </S.WrapRecord>
      </div>
    </S.Container>
    
  )
}
