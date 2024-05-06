/* global kakao */
import React, { useEffect } from 'react';
import styled from 'styled-components';

const KakaoMap = () => {
    const Kakao = styled.div`
        height: 90%;
        max-height: 800px;
        max-width: 1200px;
        width: 60vw;
    `;
    useEffect(() => {
        const loadKakaoMap = () => {
            const script = document.createElement('script');
            script.async = true;
            script.src = "https://dapi.kakao.com/v2/maps/sdk.js?appkey=e8f1677269dd57608c41205f9e55842f&autoload=false";
            document.head.appendChild(script);

            script.onload = () => {
                kakao.maps.load(() => {
                    const container = document.getElementById('map');
                    const options = {
                        center: new kakao.maps.LatLng(35.1608594, 128.8675003),
                        level: 5,
                    };
                    const map = new kakao.maps.Map(container, options);
                });
            };
        };

        loadKakaoMap();
    }, []);
    
    return <Kakao id="map"></Kakao>
};

export default KakaoMap;