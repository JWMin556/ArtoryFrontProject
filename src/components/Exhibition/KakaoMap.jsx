import React, { useEffect } from 'react'

const { kakao } = window; //함수형 컴포넌트에 인지시킴
function Kakao({Longitude,Latitude}) {
    console.log("경도",Longitude);
    console.log("위도",Latitude);
    useEffect(() => {
        const container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
        const options = {
            center : new kakao.maps.LatLng(Longitude,Latitude), //지도의 중심 좌표
            level : 3
        };
        const map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
         //마커가 표시 될 위치
    let markerPosition = new kakao.maps.LatLng(
        Longitude,
        Latitude
    );
        // 마커를 생성
        let marker = new kakao.maps.Marker({
            position: markerPosition,
        });
        // 마커를 지도 위에 표시
        marker.setMap(map);
        }, [])
return (
    <div id="map" style={{
        width : '1012px',
        height : '405.94px',
        margin : "8% 0 8% 0",
    }}>   
    </div>
)
}

export default Kakao;