import React from 'react'
import styled from 'styled-components';
import Heart from '../Exhibition/Heart';
import Save from '../Exhibition/Save';
const WrapPoster = styled.div`
    margin-right: 2%;
    padding-bottom : 5%;
`;
const PosterStyle = styled.img`
    width : 186px;
    height : 268px;
    border-radius : 10px;
`;
const WrapIcon = styled.div`
    width : 175px;
    position: relative;
    left : 4%;
    display : flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-top : 5%;
`;
const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";

export default function Recrod(props) {
return (
    <WrapPoster>
        <PosterStyle src={IMG_BASE_URL+props.poster}/>
        <WrapIcon>
            <Heart/>
            <Save/>
        </WrapIcon>
    </WrapPoster>
)
}
