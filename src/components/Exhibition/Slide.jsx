import React from 'react';
import * as S from '../../styled-components/Slide.style';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Heart from './Heart';
import Save from './Save';
import Prev from './Prev';
import Next from './Next';
import Poster from './Poster';
import { getPopularity } from '../API/exhibition_API';

export default function Slide(props) {

    // function handleClick()
    // {
    //     getPopularity();
    // }
    const setting = {
        arrows: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 4,
        nextArrow: <Next />,
        prevArrow: <Prev />,
    };
    function Click()
    {
        getPopularity(1);
    }
    return (
        <S.WrapSlider>
            <div onClick={Click}> Api 통신 테스트</div>
            <S.Category>{props.title}</S.Category>
            <S.StyledSlider {...setting}>
                {props.Dummy.results.map((item, index) => (
                    <div key={index}>
                        <S.WrapPorter>
                            <Poster 
                                item = {item}/>
                            <S.WrapIcon>
                                <Heart/>
                                <Save />
                            </S.WrapIcon>
                        </S.WrapPorter>
                    </div>
                ))}
            </S.StyledSlider>
        </S.WrapSlider>
    );
}