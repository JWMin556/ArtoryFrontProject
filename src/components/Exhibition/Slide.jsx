import React from 'react'
import styled from 'styled-components';
import Slider from "react-slick";
import { EXDummy } from '../../EXDummy'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Heart from './Heart'
import Save from './Save'

import Prev from './Prev';
import Next from './Next';
const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";

export const IMG = styled.img`
    width : 186px;
    height: 268px;
    border-radius : 10px; 
`;
export const WrapImg = styled.div`
    display : flex;
    justify-content: center;
    align-items: center;
    height: 350px;

`;
export const StyledSlider = styled(Slider)`

`;
export const WrapIcon = styled.div`
    width : 186px;
    height: 92%;
    position: absolute;
    display : flex;
    justify-content: space-between;
    align-items: flex-end;

`;
export default function Slide() {
    const setting = {
        slide : 'div',
        arrows : true,
        infinite : true,
        speed : 2000,
        slidesToShow : 4,
        slidesToScroll : 4,
        nextArrow: <Next/>,
        prevArrow: <Prev/>,
    }

return (
    <StyledSlider {...setting}>
        {EXDummy.results.map((item,index) => (
            <div key={index}>
                <WrapImg>
                    <IMG src={`${IMG_BASE_URL}${item.poster_path}`} alt={item.title}/>
                    <WrapIcon>
                        <Heart/>
                        <Save/>
                    </WrapIcon>
                </WrapImg>
            </div>
        ))}
    </StyledSlider>

)
}
