import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import { InterestDummy } from '../Interestdummy';
import MyPageTopic from '../components/MyPageTopic';
import StyledButton from '../styled-components/StyledButton' 

const Page = styled.div`
  z-index: 900;
  position: relative;
  width: 100%;
  max-width: 700px;
  padding: 0 20px;
  /* background: rgba(0, 0, 0, 0.1); */
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  overflow: hidden;
  display: flex;
  flex-direction: column;
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
  /* margin-right: 22%; */
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
  border-radius: 10px;
`;

const ImgStyled = styled.img`
  cursor: 'pointer';
  width: 130px;
`;

const TitleRightWrap = styled.div` 
  display: flex;
  flex-direction: column;
`;

const TitleRightWrapParagraphArea = styled.div`  
  display: flex;
  flex-direction: row;
  margin-bottom: 5%;
`;

const TitleRightWrapParagraphTitle = styled.div`  
  display: flex;
  flex-direction: column;
`;

const BoldSentence = styled.p`
  color: #262626;
  font-size: 20px;
  font-family: 'Pretendard';
  font-weight: 700;
  line-height: 26.61px;
  word-wrap: break-word;
  margin-right: 120px;
`;

const GraySentence = styled.p`
  color: #979797;
  font-size: 12px;
  font-family: Pretendard;
  font-weight: 400;
  line-height: 15.97px;
  word-wrap: break-word;
`;

const InputWrap = styled.div`  
  display: flex;
  background: #EFEEEE;
  border-radius: 10px;
  /* border: 1px rgba(170.71, 170.71, 170.71, 0.02) solid; */
  box-shadow: 1px 2px 8px #f3f3f3;
  padding: 5px;
  margin-top: 8px;
  margin-bottom: 13px;
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
  border-radius: 10px;
`;

const ExamineContentBox = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export default function MyPageModify() {

  //이미지를 수정하는 부분은 Onboarding.jsx에서 은향씨가 만들어놓으신 컴포넌트 및 함수들을 사용했습니다. 
  const fileInputRef = useRef(null);
  const [imageSrc, setImageSrc] = useState('/Img/input_pic.png');
  
  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // 파일 선택 후의 로직을 추가할 수 있습니다.
      console.log('Selected file:', file.name);

      // FileReader를 사용하여 파일의 내용을 읽어옵니다.
      const reader = new FileReader();
      reader.onload = (event) => {
        // 이미지의 src를 선택한 파일의 내용으로 대체합니다.
        setImageSrc(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };
  //여기까지가 이미지를 수정하는 부분


  //이 부분은 나의 전시조사 수정하기 위한 부분입니다.   
  const [selectedTopics, setSelectedTopics] = useState([]);

  const handleTopicClick = (topic) => {
    const updatedTopics = [...selectedTopics];

    if (updatedTopics.includes(topic)) {
      // 주제가 이미 선택되어 있으면 제거합니다.
      const index = updatedTopics.indexOf(topic);
      updatedTopics.splice(index, 1);
    } else {
      // 주제가 선택되어 있지 않으면 추가합니다.
      updatedTopics.push(topic);
    }
    console.log(updatedTopics.length);
    // 현재 최종 선택된 주제를 업데이트합니다.
    console.log(updatedTopics.length < 3);
    setSelectedTopics(updatedTopics);
  };
  //여기까지가 나의 전시조사 수정하기 위한 부분입니다. 

  return (
    <Page>
      <TitleWrap> 
        <TitleLeftWrap>
          <TitleLeftWrapParagraph>
            니모님, <br />  {/*임시로 넣은 것이며, 실제로는 서버에서 이름을 받아와야 합니다. */}
            마이페이지
          </TitleLeftWrapParagraph>
          <TitleLeftWrapImgArea>
            <ImgStyled src={imageSrc} alt="사진첨부" onClick={handleImageClick} />
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              style={{ display: 'none' }}
              onChange={handleFileChange}
            />
          </TitleLeftWrapImgArea>
        </TitleLeftWrap>

        <TitleRightWrap>
          <TitleRightWrapParagraphArea>
            <TitleRightWrapParagraphTitle>
              <BoldSentence>닉네임</BoldSentence>
              <GraySentence>ARTORY에서 사용할 닉네임을 적어주세요</GraySentence>
            </TitleRightWrapParagraphTitle>
            <InputWrap>
              <InputStyle />
            </InputWrap>
          </TitleRightWrapParagraphArea>

          <TitleRightWrapParagraphArea>
            <TitleRightWrapParagraphTitle>
              <BoldSentence>한 줄 소개</BoldSentence>
              <GraySentence>자신에 대해 떠오르는 소개글을 적어주세요</GraySentence>
            </TitleRightWrapParagraphTitle>
            <InputWrap>
              <InputStyle />
            </InputWrap>
          </TitleRightWrapParagraphArea>

          <TitleRightWrapParagraphArea>
            <TitleRightWrapParagraphTitle>
              <BoldSentence>나의 키워드</BoldSentence>
              <GraySentence>자신에 대해 떠오르는 키워드를 적어주세요</GraySentence>
            </TitleRightWrapParagraphTitle>
            <InputWrap>
              <InputStyle />
            </InputWrap>
          </TitleRightWrapParagraphArea>

          <ExamineWrap>
            나의 전시조사 수정하기
            <ExamineContentBox>
              {InterestDummy.interests.map((item) => {
                return (
                  <MyPageTopic
                    key={item.topic}
                    topic={item.topic}
                    onClick={() => handleTopicClick(item.topic)}
                  />
                );
              })}
            </ExamineContentBox>
          </ExamineWrap>

          <StyledButton height="52px" width="70%" style={{marginTop:"40px"}}>수정하기</StyledButton>
        </TitleRightWrap>
      </TitleWrap>
    </Page>
  )
}
