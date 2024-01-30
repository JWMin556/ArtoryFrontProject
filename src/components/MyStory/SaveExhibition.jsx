import React from 'react'
import styled from 'styled-components';
import Heart from '../Exhibition/Heart';
import Save from '../Exhibition/Save';
const WrapPoster = styled.div`
    margin-right: 2%;
    padding-bottom : 5%;
    margin-bottom : 15%;

`;
const PosterStyle = styled.img`
    width : 186px;
    height : 268px;
    //border-radius : 10px;
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

export default function SaveExhibition(props) {
    //console.log("record에서 찍힘",props.id)
return (
    <WrapPoster>
        <PosterStyle src={props.item.exhibitionImage}/>
        <WrapIcon>
            <Heart item={props.item}/>
            <Save item={props.item}/>
        </WrapIcon>
    </WrapPoster>
)
}
