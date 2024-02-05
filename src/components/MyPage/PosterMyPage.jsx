import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
const PosterStyle = styled.img`
    width : 186px;
    height: 268px;
    //border-radius : 10px; 
    box-shadow: 5px 5px 8px #D9D9D9; 
`;

export default function PosterMyPage(props) {
    const navigate = useNavigate();
    const onClickDetail = (item) => { //수정필요
        console.log(item.storyTitle)
        // props.source=="record" ?
        // navigate(`/mypage/${item.storyTitle}`, { state: { item } }) :
        // navigate(`/mypage/${item.storyTitle}`, { state: { item } });
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
    </div>
  )
}
