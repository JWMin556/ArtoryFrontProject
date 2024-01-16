import React from 'react';
import * as S from '../../styled-components/Slide.style';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Heart from './Heart';
import Save from './Save';
import Prev from './Prev';
import Next from './Next';
import Poster from './Poster';

export default function Slide(props) {

    const setting = {
        arrows: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 4,
        nextArrow: <Next />,
        prevArrow: <Prev />,
    };
    return (
        <S.WrapSlider>
            <S.Category>{props.title}</S.Category>
            <S.StyledSlider {...setting}>
                {props.Dummy.results.map((item, index) => (
                    <div key={index}>
                        <S.WrapPorter>
                            <Poster 
                                item = {item}/>
                            <S.WrapIcon>
                                <Heart />
                                <Save />
                            </S.WrapIcon>
                        </S.WrapPorter>
                    </div>
                ))}
            </S.StyledSlider>
        </S.WrapSlider>
    );
}