import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Title from './Title';

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";
const PosterStyle = styled.img`
    width : 186px;
    height: 268px;
    border-radius : 10px; 
    box-shadow: 5px 5px 8px #D9D9D9; 
`;
export default function Poster(props) {
    const navigate = useNavigate();
    const [isShowTitle,setIsShowTitle] = useState(false)
    const onClickDetail = (item) => {
        navigate(`/exhibitiondetail/${item.title}`, { state: { item } });
    };
    const handleMouseOverImg = () => {
        setIsShowTitle(true);
    };
    const handleMouseOutImg = () => {
        setIsShowTitle(false);
    };
return (
    <div 
        onMouseOver = {handleMouseOverImg} 
        onMouseOut = {handleMouseOutImg}
        onClick={() => onClickDetail(props.item)}
    >
        <PosterStyle 
            src={IMG_BASE_URL+props.item.poster_path}
            />
        {isShowTitle && <Title title = {props.item.title}/>}
    </div>

)
}
