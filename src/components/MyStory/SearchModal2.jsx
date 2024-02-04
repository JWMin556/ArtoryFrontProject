import React,{useState} from 'react'
import styled from 'styled-components'
import Modal  from 'react-modal';
import { searchExhibition } from '../API/search_API';
import Poster from '../Exhibition/Poster';
import SEARCH from '../../Img/Search/search.svg'
const StyledModal = {
    overlay: {
        backgroundColor: " rgba(0, 0, 0, 0)",
        width: "100%",
        height: "100vh",
        zIndex: "10",
        position: "fixed",
        top: "0",
        left: "0",
    },
    content: {
        width: "413px",
        height: "516px",
        zIndex: "150",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        borderRadius: "10px",
        backgroundColor: "#ffff",
        justifyContent: "center",
        overflow: "auto",
        border : 'none',
        boxShadow: '2px 2px 5px #f3f3f3',
    },
}
const Container = styled.div`
    display : flex;
    justify-content: center;
    align-items:center;
    flex-direction : column;
    justify-content : center;
`;
const WrapSearch = styled.div`
    width : 370px;
    height : 39px;  
`;
const SearchStyle = styled.input`
    background-color : #f5f5f5;
    border : none;
    border-radius : 5px;
    width : 283px;
    height : 100%;
    padding : 0;
    padding-left :14%;
    font-family: 'Pretendard';
    color : #ababab;
`;
const SearchImg = styled.img`
    position: relative;
    top : 9%;
    right : 87%;
`;
const WrapResult = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items:center;
    margin-top : 5%;
`;
const WrapPoster = styled.div`
    margin-right : 2%;
    padding : 0;
    margin-bottom : 3%;
`;

export default function SearchModal({isModalOpen,setIsModalOpen,year,month,day}) {
    const [isOutLine,setOutLine] = useState(); //input 박스 클릭 시 outline의 상태를 관리하기 위한 변수
    const [isInputClick,setIsInputClick] = useState(false); //ID input 박스 클릭 여부에 따라 placeholder의 상태를 관리하기 위한 변수
    const [keyword,setKeyWord] = useState(); 
    const [result,setResult] = useState([]);
    const [isOpenModal,setIsOpenModal] = useState(isModalOpen);

    function handleInputFocus() 
    { //ID input박스에 들어오면 true(placeholder 텍스트 안보임), outline이 안보이도록 바꿔줌
        setIsInputClick(true); 
        setOutLine({outline:'none'}); 
    } 
    function handleInputBlur()
    { //ID input박스에 나가면 false (placeholder 텍스트 보임)
        setIsInputClick(false);
    } 

const handleKeyPress = async(e) => {
    if(e.key === "Enter"){
        try{
            const result = await searchExhibition(keyword);
            setResult(result);
            console.log(result);
        }
        catch (error){
            console.error('Error fetching weather data:', error);
        }
    }
}
return (
    <Modal 
        isOpen={isOpenModal} 
        onRequestClose={()=>setIsOpenModal(false)}
        style={StyledModal}
        shouldCloseOnOverlayClick={true}>
        <Container>
            <WrapSearch>
            <SearchStyle 
                type="text" 
                onFocus={handleInputFocus} 
                onBlur={handleInputBlur} 
                placeholder={isInputClick ?  "" : "원하는 전시를 검색해보세요" }
                style={isOutLine}
                value={keyword}
                onChange={(e)=>setKeyWord(e.target.value)}
                onKeyPress={handleKeyPress}
            
            />
            <SearchImg src={SEARCH}/>
            </WrapSearch>
        <WrapResult>
        {result.map((item, index) => (
            <WrapPoster key={index}>
                <div>
                    <Poster 
                        item={item} 
                        year={year}
                        month={month}
                        day={day}
                        source={"before"}
                        setIsModalOpen={setIsModalOpen}
                        />
                </div>
            </WrapPoster>
        ))}
        </WrapResult>
        </Container>
    </Modal>
)
}
