import styled from "styled-components";

export const Container = styled.div`
    display : flex;
    flex-direction : column;
    justify-content: center;
    align-items: center;
`;

export const WrapSaveExhibition = styled.div`
    display : flex;
    flex-direction : row;
    flex-wrap : wrap;
    margin-top : 2%;
    margin-left : 19%;
    margin-right : 10%;
    justify-content: center;
    align-items: center;
`;
export const WrapPoster = styled.div`
    margin-right  : 3%;
`;
export const WrapCalendar = styled.div`
    width : 76%;
    height : 630px;
    //border : 1px solid red;
    display : flex;
    justify-content : center;
    position : relative;
    bottom : 30px;
`;
export const RecordName = styled.div`
    font-size : 30px;
    font-family: 'Pretendard';
    font-weight : bold;
    margin-top : 10%;
`;

export const WrapProfile = styled.div`
    display : flex;
    flex-direction : column;
    justify-content: space-evenly;
`;

export const WrapExhibitionPoster = styled.div`
    margin-right : 5%;
    margin-bottom : 5%;
`;

export const WrapProfileAndButton = styled.div`
    width : 76%;
    display : flex;
    justify-content: space-between;
    margin-top : 6%;
    //border : 1px solid blue;
`;
