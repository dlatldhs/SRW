import React, { useEffect } from 'react';
import styled from 'styled-components';

const {kakao} = window;

const Kakao = () => {
    
    useEffect(() => {
        const container = document.getElementById('map');
        const options = {
            center: new kakao.maps.LatLng(35.1605, 128.8641),
            level: 3
        };
        
        const map = new kakao.maps.Map(container, options);
    }, [])
    // Lat: 35.1605 Lon: 128.8641
    return (
        <div id="map" style={{
            width: '600px',
            height:'400px',
            marginRight: '150px'
        }}></div>
    )
};

export default Kakao; 