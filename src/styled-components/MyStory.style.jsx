import styled from "styled-components";

export const Container = styled.div`
    display : flex;
    flex-direction : column;
    justify-content: center;
    align-item: center;
`;

export const WrapRecord = styled.div`
    display : flex;
    flex-wrap : wrap;
    margin-top : 2%;
    margin-left : 10%;
    margin-right : 15%;
    justify-content: center;

`;

export const WrapCalendar = styled.div`
    display : flex;
    justify-content: center;
    margin-top : 5%;
`;

export const RecordName = styled.div`
    font-size : 30px;
    font-family: Pretendard;
    font-weight : bold;
    margin-top : 10%;
    //position : relative;
    //left : 18%;
`;

export const WrapProfile = styled.div`
    display : flex;
    flex-direction : column;
    justify-content: space-evenly;
    //position : relative;
    //left : 20%;
`;

export const ProfileIMG = styled.img`
    border-radius : 10px;
`;

export const WrapProfileAndButton = styled.div`
    width : 100%;
    display : flex;
    justify-content: space-around;

`;