import React, {useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { useLocation } from 'react-router';
import MyPageTopic from '../components/MyPage/MyPageTopic';
import StyledButton from '../styled-components/StyledButton' 
import { saveGenre } from '../components/API/member_API';
import axios from 'axios';
import AWS from "aws-sdk";

const PageContainer = styled.div`
  display: flex;
  justify-content: center; /* 수평 가운데 정렬 */
  margin-top: 100px;
`;

const Page = styled.div`
  /* position: relative; */
  width: 76%;
  /* max-width: 800px; */
  padding: 0 20px;
  position: absolute;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px; /* 원하는 여백 값 */
`;

const TitleWrap = styled.div`
  color: black;
  font-size: 30px;
  font-family: 'Pretendard';
  font-weight: 700;
  word-wrap: break-word;
  line-height: 39.92px;
  letter-spacing: 1.05px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const TitleLeftWrap = styled.div`
  display: flex;
  flex-direction: column;
  
`;

const TitleLeftWrapParagraph = styled.div`
  display: flex;
  flex-direction: row;
`;

const TitleLeftWrapImgArea = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20%;
  width: 130px;
`;

const ImageContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const ImgStyled = styled.img`
  cursor: 'pointer';
  width: 130px;
  transition: filter 0.3s ease; /* 호버 효과에 적용할 transition */
  &:hover {
    filter: brightness(70%); /* 이미지 어둡게 만드는 효과 */
  }
`;

const SettingIcon = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: none; /* 초기에는 숨김 */
`;

const TitleRightWrap = styled.div` 
  display: flex;
  flex-direction: column;
`;

const TitleRightWrapParagraphArea = styled.div`  
  display: flex;
  flex-direction: row;
  margin-bottom: 2%;
`;

const TitleRightWrapParagraphTitle = styled.div`  
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* 텍스트를 왼쪽으로 정렬합니다. */
`;

const BoldSentence = styled.div`
  color: #262626;
  font-size: 20px;
  font-family: 'Pretendard';
  font-weight: 700;
  line-height: 26.61px;
  word-wrap: break-word;
  margin-right: 120px;
`;

const GraySentence = styled.div`
  color: #979797;
  font-size: 10px;
  font-family: 'Pretendard';
  font-weight: 400;
  line-height: 15.97px;
  word-wrap: break-word;
  margin-top: 2%;
`;

const InputWrap = styled.div`  
  display: flex;
  background: #EFEEEE;
  box-shadow: 1px 2px 8px #f3f3f3;
  padding: 5px;
  margin-left: auto;
  margin-top: 8px;
  margin-bottom: 13px;
  /* width : 250px; */
`;

const InputStyle = styled.input`  
  color: #262626;
  font-size: 16px;
  font-family: 'Pretendard';
  font-weight: 600;
  line-height: 21.29px;
  letter-spacing: 0.56px;
  word-wrap: break-word;
  border: none;
  outline: none;
  background: #EFEEEE;
`;

const ExamineWrap = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #EFEEEE;
`;

const ExamineContentBox = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export default function MyPageModify() {
  //MyPage에서 받아온 이름과 사진을 위해서 사용
  const location = useLocation();
  const query = new URLSearchParams(location.search);

  // URL에서 전달된 nickname과 image 값을 가져오기
  const myNickname = query.get('nickname');
  const myImage = query.get('image');

  //서버에 이름, 닉네임, 한줄소개, 키워드와 이미지를 제출하기 위한 변수 및 함수입니다. (전시조사수정, 비밀번호와 탈퇴는 아직 미완)
  const [name, setname] = useState('');
  const [nickname, setNickname] = useState('');
  const [length, setLength] = useState(0);
  const fileInputRef = useRef(null);
  const [imageSrc, setImageSrc] = useState(myImage);
  const [isHovered, setIsHovered] = useState(false);  //이미지 암영효과를 위해서
  const [imageSrcReal, setImageSrcReal] = useState('');
  const [introduction, setIntroduction] = useState('');
  const [myKeyword, setMyKeyword] = useState('');
  const [imgUrl, setImgUrl] = useState('');

  const handleNameChange = (e) => {
    setname(e.target.value);
  };

  const handleNicknameChange = (e) => {
    const value = e.target.value;
    value.length > 10 ? setLength(10) : setLength(value.length);
    setNickname(value);
  };

  const handleIntroductionChange = (e) => {
    setIntroduction(e.target.value);
  };

  const handleKeywordChange = (e) => {
    setMyKeyword(e.target.value);
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    // setImageSrc(file);
    setImageSrcReal(file);
    if (file) {
      // 파일 선택 후의 로직을 추가할 수 있습니다.
      //console.log('Selected file:', file.name);

      // FileReader를 사용하여 파일의 내용을 읽어옵니다.
      const reader = new FileReader();
      reader.onload = (event) => {
        // 이미지의 src를 선택한 파일의 내용으로 대체합니다.
        setImageSrc(event.target.result);
        uploadFileAWS(file);
      };
      reader.readAsDataURL(file);
    }
  };


  //이 부분은 나의 전시조사 수정하기 위한 부분입니다.   
  const [selectedTopics, setSelectedTopics] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState([]);
  const genres = [
    'MEDIA',
    'CRAFT',
    'DESIGN',
    'PICTURE',
    'SPECIAL_EXHIBITION',
    'SCULPTURE',
    'PLANEXHIBITION',
    'INSTALLATION_ART',
    'PAINTING',
    'ARTIST_EXHIBITION',
  ];
  const genres__kor = [
    '미디어',
    '공예',
    '디자인',
    '사진',
    '특별전시',
    '조각',
    '기획전',
    '설치미술',
    '회화',
    '작가전',
  ];
  const handleTopicClick = (topic, props_index) => {
    const updatedTopics = [...selectedTopics];
    const updatedIndex = [...selectedIndex];

    if (updatedTopics.includes(topic)) {
      // 주제가 이미 선택되어 있으면 제거합니다.
      const index = updatedTopics.indexOf(topic);
      updatedIndex.splice(index, 1);
      updatedTopics.splice(index, 1);
    } else if (updatedTopics.length < 3) {
      // 주제가 선택되어 있지 않고, 선택된 주제의 개수가 3개 미만이면 추가합니다.
      updatedTopics.push(topic);
      updatedIndex.push(props_index);
    } else {
      // 이미 3개의 주제가 선택되었으면 추가하지 않습니다.
      alert('최대 3개의 주제만 선택할 수 있습니다.');
      return;
    }
    console.log(updatedTopics.length);
    // 현재 최종 선택된 주제를 업데이트합니다.
    console.log(updatedTopics.length < 3);
    setSelectedIndex(updatedIndex);
    setSelectedTopics(updatedTopics);
  };
  const handleSubmitGenre = async () => {
    await saveGenre(
      genres[selectedIndex[0]],
      genres[selectedIndex[1]],
      genres[selectedIndex[2]]
    );
  };
  //여기까지가 나의 전시조사 수정하기 위한 부분입니다. 

  //aws용
  const [myBucket, setMyBucket] = useState(null);
  useEffect(() => {
    //1. AWS 키 설정
    AWS.config.update({
      accessKeyId: "AKIA4FTBI4U6A6W6RRPK",
      secretAccessKey: "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"
    })
    //2. AWS S3 객체 생성
    const myBucket = new AWS.S3({
      params: { Bucket: "artory-s3-arbitary" },
      region: "ap-northeast-2"  //서울에서 생성
    })
    
    setMyBucket(myBucket);
  }, []);

  //2. 장착한 그 파일을 S3로 전송
  const uploadFileAWS = (file) => {
    //2-1. aws에서 시킨 양식 그대로 따름
    const param = {
      ACL: "public-read", //일단 public으로 누구나 다 읽을 수 있다...임시로 이렇게 함(나중에 바꿔야)
      //ContentType: "image/png",  //일단 주석처리함
      Body: file,
      Bucket: "artory-s3-arbitary",
      Key: `upload/${imageSrcReal.name}`,
    }

    //2-2. AWS가 정한 양식대로 보내기
    myBucket
      .putObject(param)
      .send((error) => {
        if(error) {
          console.log(error);
        } else {
          //const url = myBucket.getSignedUrl("getObject", {Key: param.Key}); 기존의 코드..그런데 이렇게 하면 짤림
          const signedUrl = myBucket.getSignedUrl("getObject", { Key: param.Key });
          const pureUrl = signedUrl.match(/^(https:\/\/[^?]+)/)[1];
          console.log("awsurl: ", pureUrl);
          setImgUrl(pureUrl);
        }
      })
  }

  const URL = localStorage.getItem('URL');
  const token = localStorage.getItem('Token');
  const saveModifiedInformations = async() => {
    try {
      await handleSubmitGenre(); //전시정보 먼저 저장
      const baseUrl = `${URL}/api/mypage/update`;
			const response = await axios.post(
        baseUrl, 
        {
          "introduction": introduction,
          "myKeyword": myKeyword,
          "nickname": nickname,
          "image": imgUrl,
        },
        {
          headers: {
            'Accept': '*/*',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          }
        },
      );
      console.log('사용자 정보가 성공적으로 수정되었습니다.');
      alert("사용자 정보가 성공적으로 수정되었습니다.");
			console.log(response);
    } catch (error) {
			console.log(error.response.data);
    }
  };

  return (
    <PageContainer>
      <Page>
      <TitleWrap> 
        <TitleLeftWrap>
          <TitleLeftWrapParagraph>
            {myNickname}<br />  
            마이페이지
          </TitleLeftWrapParagraph>
          <TitleLeftWrapImgArea>
            <ImageContainer onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
              <ImgStyled src={imageSrc} alt="사진첨부" onClick={handleImageClick} />
              {isHovered && <SettingIcon style={{display:"block", width:"30%"}} src="/img/setting2.png" alt="설정 아이콘" onClick={handleImageClick} />}
            </ImageContainer>
            <input type="file" accept="image/*" ref={fileInputRef} style={{ display: 'none' }} onChange={handleFileChange}/>
            {/* <button onClick={() => uploadFileAWS(imageSrcReal)}>aws전송</button> 그 파일을 s3로 전송 */}
          </TitleLeftWrapImgArea>
        </TitleLeftWrap>

        <TitleRightWrap>
          <TitleRightWrapParagraphArea>
            <TitleRightWrapParagraphTitle>
              <BoldSentence>이름</BoldSentence> {/*아직 서버가 미완성*/}
              <GraySentence />
            </TitleRightWrapParagraphTitle>
            <InputWrap>
              <InputStyle onChange={handleNameChange} />
            </InputWrap>
          </TitleRightWrapParagraphArea>

          <TitleRightWrapParagraphArea>
            <TitleRightWrapParagraphTitle>
              <BoldSentence>닉네임</BoldSentence>
              <GraySentence>ARTORY에서 사용할 닉네임을 적어주세요</GraySentence>
            </TitleRightWrapParagraphTitle>
            <InputWrap>
              <InputStyle onChange={handleNicknameChange} />
            </InputWrap>
          </TitleRightWrapParagraphArea>

          <TitleRightWrapParagraphArea>
            <TitleRightWrapParagraphTitle>
              <BoldSentence>한 줄 소개</BoldSentence>
              <GraySentence>자신에 대해 떠오르는 소개글을 적어주세요</GraySentence>
            </TitleRightWrapParagraphTitle>
            <InputWrap>
              <InputStyle onChange={handleIntroductionChange} />
            </InputWrap>
          </TitleRightWrapParagraphArea>

          <TitleRightWrapParagraphArea>
            <TitleRightWrapParagraphTitle>
              <BoldSentence>나의 키워드</BoldSentence>
              <GraySentence>자신에 대해 떠오르는 키워드를 적어주세요</GraySentence>
            </TitleRightWrapParagraphTitle>
            <InputWrap>
              <InputStyle onChange={handleKeywordChange} />
            </InputWrap>
          </TitleRightWrapParagraphArea>

          
          <BoldSentence style={{marginRight:"10px"}}>나의 관심전시 수정하기</BoldSentence>
          <ExamineWrap style={{marginTop:"3%"}}>
            <ExamineContentBox>
              {genres__kor.map((genre, index) => {
                return (
                  <MyPageTopic
                    key={index}
                    genre={genre}
                    selectable={
                      selectedTopics.length < 3 || selectedTopics.includes(genre)
                    }
                    onClick={() => handleTopicClick(genre, index)}
                  />
                );
              })}
            </ExamineContentBox>
          </ExamineWrap>

          <TitleRightWrapParagraphArea style={{marginTop:"10%", marginBottom:"1px"}}>
            <TitleRightWrapParagraphTitle>
              <BoldSentence>비밀번호 변경</BoldSentence>
              <GraySentence>현재 비밀번호를 입력해주세요</GraySentence>
            </TitleRightWrapParagraphTitle>
            <InputWrap>
              <InputStyle />
            </InputWrap>
          </TitleRightWrapParagraphArea>

          <TitleRightWrapParagraphArea>
            <TitleRightWrapParagraphTitle>
              <GraySentence style={{marginTop:"20%"}}>변경 비밀번호를 입력해주세요</GraySentence>
            </TitleRightWrapParagraphTitle>
            <InputWrap>
              <InputStyle />
              <StyledButton
                //disabled={notAllow}
                height="23px"
                width="30%"
                fontSize="10px"
              >
                비밀번호 변경
              </StyledButton>
            </InputWrap>
          </TitleRightWrapParagraphArea>

          <TitleRightWrapParagraphArea>
            <TitleRightWrapParagraphTitle>
              <BoldSentence>회원탈퇴</BoldSentence>
              <GraySentence>탈퇴사유를 입력해주세요</GraySentence>
            </TitleRightWrapParagraphTitle>
            <InputWrap>
              <InputStyle />
              <StyledButton
                //disabled={notAllow}
                height="23px"
                width="30%"
                fontSize="10px"
              >
                회원탈퇴
              </StyledButton>
            </InputWrap>
          </TitleRightWrapParagraphArea>

          <StyledButton onClick={saveModifiedInformations} height="52px" width="70%" style={{marginTop:"40px", marginBottom:"30%"}}>수정하기</StyledButton>
        </TitleRightWrap>
      </TitleWrap>
    </Page>
    </PageContainer>
  )
}