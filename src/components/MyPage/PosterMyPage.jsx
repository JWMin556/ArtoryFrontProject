import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { getStoryInfo } from '../API/story_API';

const PosterStyle = styled.img`
  display: block;
  width: 172px;
  height: 268px;
  box-shadow: 5px 5px 8px #d9d9d9;
`;
const WrapTitle = styled.div`
  width: 172px;
  height: 268px;
  background-color: rgba(0, 0, 0, 0.6);
  color: #ffff;
  z-index: 1;
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: small;
  font-family: Pretendard;
`;
export default function PosterMyPage(props) {
    const navigate = useNavigate();
    const [isShowTitle, setIsShowTitle] = useState(false);

    const onClickDetail = async (id) => {
        try {
          const item = await getStoryInfo(id);
          navigate(`/story/${id}`, { state: { item } });
        } catch (error) {
          // 오류 처리
          console.error('Story data fetching failed', error);
        }
      };

    const handleMouseOverImg = () => {
        setIsShowTitle(true);
    };

    const handleMouseOutImg = () => {
        setIsShowTitle(false);
    };
  return (
    <div style={{ height: '268px', position: 'relative' }}
        //onMouseEnter={handleMouseEnter}
        //onMouseLeave={handleMouseLeave}
        onMouseOver={handleMouseOverImg}
        onMouseOut={handleMouseOutImg}
        onClick={() => onClickDetail(props.item.storyId)}
    >
        {/* <PosterStyle src={props.item.exhibitionImage}/> */}
        <PosterStyle src={props.item.storyImage} alt={props.item.storyId} />
        {isShowTitle && <WrapTitle>{props.item.storyId}</WrapTitle>}
    </div>
  )
}