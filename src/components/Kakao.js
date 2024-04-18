import React, { useEffect } from 'react';
import styled from 'styled-components';

const {kakao} = window;

const Kakao = () => {
    
    useEffect(() => {
        const initializeMap = async () => {
            const container = document.getElementById('map');
            const options = {
                center: new kakao.maps.LatLng(35.1608594, 128.8675003),
                level: 3
            };
            
            const map = new kakao.maps.Map(container, options);
        };

        initializeMap();
    }, []);

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

// import React, { useEffect } from 'react';
// import styled from 'styled-components';

// const {kakao} = window;

// const Kakao = () => {
    
//     useEffect(() => {
//         const container = document.getElementById('map');
//         const options = {
//             center: new kakao.maps.LatLng(35.1608594, 128.8675003),
//             level: 3
//         };
        
//         const map = new kakao.maps.Map(container, options);
//     }, [])
//     // Lat: 35.1605 Lon: 128.8641
//     return (
//         <div id="map" style={{
//             width: '600px',
//             height:'400px',
//             marginRight: '150px'
//         }}></div>
//     )
// };

// export default Kakao; 