import React ,{useEffect, useState}from 'react'
import axios from 'axios';
import MyCalendar from '../components/MyStory/MyCalendar'
import * as S from '../styled-components/MyStory.style'
import SaveExhibition from '../components/MyStory/SaveExhibition';
import StyledButton from '../styled-components/StyledButton';
import SearchModal from '../components/MyStory/SearchModal1';
import Memo from '../components/MyStory/Memo'
const url = 'http://3.39.39.6:8080/api/mystory/all?page=1';
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
        console.log("유저정보",response.data);
        } catch (error) {
        console.error('Error fetching data:', error.response.data);
    } 
      //fetchData();
    })();
  }, []);
  return (
    <S.Container>
      {isButtonClick && <SearchModal isButtonClick={isButtonClick} source={'record'}/>}
      <S.WrapProfileAndButton>
      <S.WrapProfile>
        <S.ProfileIMG src={profileIMG} style={{width : '100px', height: '100px'}}></S.ProfileIMG>
        <S.RecordName> {userData.nickname +" "} 님의 기록</S.RecordName>
      </S.WrapProfile>
      <StyledButton height="35px" width="169px" style={{marginTop:'20px',fontSize:"13px"}} onClick={handleClickStoryBotton}>스토리 작성하기</StyledButton>
      </S.WrapProfileAndButton>
      <S.WrapCalendar>
        <S.WrapMemo>
          <Memo content={userData.memo}/>
          </S.WrapMemo>
          <S.WrapCalendar2>
            <MyCalendar/>
          </S.WrapCalendar2>
      </S.WrapCalendar>
      <div style={{ margin: '5%'}}>
        <div style={{
          fontSize:'30px',
          fontWeight:'bold',
          fontFamily:'Pretendard',
          width : '50%',
          textAlign:'center'
          }}>저장한 전시</div>
      <S.WrapSaveExhibition>
        {userData.exhibitions===undefined ? (
          <p>Loading...</p>
        ) : (
          //<p>있음</p>
          userData.exhibitions.map((item, index) => (
            <S.WrapPoster className='hi' key={index}>
              <SaveExhibition
                item={item}
              />
            </S.WrapPoster>
          ))
        )}
      </S.WrapSaveExhibition>
    </div>
    </S.Container>
    
  )
}
