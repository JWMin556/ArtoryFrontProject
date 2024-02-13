import React, { useEffect } from 'react'
const { naver } = window;
function Naver({Longitude,Latitude}) {
    console.log("경도",Longitude);
    console.log("위도",Latitude);
    useEffect(() => { 
        const location = new naver.maps.LatLng(Longitude,Latitude);
        const mapOption = {
            center : location, //지도의 초기 중심 좌표
            zoom : 13 , //지도의 초기 줌 레벨
            zoomControl : true, //줌 컨트롤 표시 여부
            zoomControlOptions : { //줌 컨트롤 옵션
                position : naver.maps.Position.TOP_RIGHT
            }
        };
        const mapDiv = document.getElementById('map');
        const map = new naver.maps.Map('map',mapOption);
        const marker = new naver.maps.Marker({ //지도에 마커 생성
            map,
            position : location,
        });
    }, [])

return (
    <div id="map" style={{
        width : '1012px',
        height : '405.94px',
        margin : "8% 0 8% 0",
    }}></div>
)
}

export default Naver;