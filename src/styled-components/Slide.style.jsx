import styled from 'styled-components';
import Slider from "react-slick";
export const WrapSlider = styled.div`
    width: 885px;
    height: 350px;
    margin-bottom : 10%;
`;
export const Category = styled.span`
    position : relative;
    top : 5%;
    left : 2.5%;
    font-family: Pretendard;
    font-weight : 900;
    font-size : 1.6em;
    word-spacing : 1px;
`;
export const IMG = styled.img`
    width : 186px;
    height: 268px;
    border-radius : 10px; 
    box-shadow: 5px 5px 8px #D9D9D9; 

`;
export const WrapPorter = styled.div`
    display : flex;
    justify-content: center;
    align-items: center;
    height: 350px;

`;
export const StyledSlider = styled(Slider)`

`;
export const WrapIcon = styled.div`
    width : 175px;
    position: absolute;
    top : 90%;
    display : flex;
    justify-content: space-between;
    align-items: flex-end;
`;

export const Title = styled.div`

`;