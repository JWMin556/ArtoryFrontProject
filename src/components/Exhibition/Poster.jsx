import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Title from './Title';
import { BeforeWritionSaveApi } from '../API/StorySave';
const PosterStyle = styled.img`
    width : 186px;
    height: 268px;
    //border-radius : 10px; 
    box-shadow: 5px 5px 8px #D9D9D9; 
`;
const WrapTitle = styled.div`
    position : relative;
    bottom : 270px;
`;
export default function Poster({setIsModalOpen,year,month,day,userStoryData,...props}) {
    //console.log('전시명:',props.item.exhibitionTitle)
    const navigate = useNavigate();
    const onClickDetail = (item) => {
        //console.log(userStoryData)
        if(props.source=="record")//스토리를 작성 페이지로 가기 위한 포스터
        {
            navigate(`/mystory/${item.exhibitionTitle}`, { state: { item, userStoryData}}) 
        }
        else if(props.source=="before")  //캘린더에 전시회를 저장하기 위한 포스터
        {
            BeforeWritionSaveApi(item.exhibitionId,year,month,day)
            setIsModalOpen(false)
        }
        else{
             //전시회 세부 정보로 가기 위한 포스터 
            navigate(`/exhibitiondetail/${item.exhibitionTitle}`, { state: { item } });
        }
    };
    // 상태 초기값을 true로 설정
    const [isShowTitle, setIsShowTitle] = useState(false);
    // 마우스가 Poster 위에 올라가면 Title을 보여주도록 변경
    const handleMouseEnter = () => {
        setIsShowTitle(true);
    };

    // 마우스가 Poster에서 벗어나면 Title을 숨기도록 변경
    const handleMouseLeave = () => {
        setIsShowTitle(false);
    };

return (
    <div style={{height:'268px' }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() => onClickDetail(props.item)}
    >
        <PosterStyle src={props.item.exhibitionImage}/>
        <WrapTitle>{isShowTitle && <Title title = {props.item.exhibitionTitle}/>}</WrapTitle>
    </div>
);
}


