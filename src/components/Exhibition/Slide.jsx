import React from 'react';
import * as S from '../../styled-components/Slide.style';
import { useNavigate } from 'react-router-dom';
import { EXDummy } from '../../EXDummy';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Heart from './Heart';
import Save from './Save';
import Prev from './Prev';
import Next from './Next';

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";

export default function Slide(props) {
    const navigate = useNavigate();

    const setting = {
        slide: 'div',
        arrows: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 4,
        nextArrow: <Next />,
        prevArrow: <Prev />,
    };

    const onClickDetail = (item) => {
        navigate(`/exhibitiondetail/${item.title}`, { state: { item } });
    };

    return (
        <S.WrapSlider>
            <S.Category>{props.title}</S.Category>
            <S.StyledSlider {...setting}>
                {EXDummy.results.map((item, index) => (
                    <div key={index}>
                        <S.WrapImg>
                            <S.IMG
                                src={`${IMG_BASE_URL}${item.poster_path}`}
                                alt={item.title}
                                onClick={() => onClickDetail(item)}
                            />
                            <S.WrapIcon>
                                <Heart />
                                <Save />
                            </S.WrapIcon>
                        </S.WrapImg>
                    </div>
                ))}
            </S.StyledSlider>
        </S.WrapSlider>
    );
}