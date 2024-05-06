import styled from 'styled-components';

export const PipeImages = [
    '/img/i_1.png',
    '/img/i_2.png',
];

export const HeatExchangerImages = [
    '/img/i_3.png',
    '/img/i_4.png',
];

export const PressureTankImages = [
    '/img/i_5.png',
    '/img/i_6.png',
];

export const ShipBuildingImages = [
    '/img/i_7.png',
];

export const Title = styled.h1`
    margin: 0 0 0 0;
    font-size:40px;
    text-align: center;
    position: absolute;
    top: 0;
    width: 100%;
    color: black;
`;

export const BusinessExplain = styled.div`
    display: flex; 
    justify-content: space-between; 
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 100px 100px;
`;

export const BusinessImage = styled.img`
    width: 100%;
    height: 100%;
    max-height: 400px;
`;

export const BusinessBackground = styled.div`
    height: 100%;
    max-height: 100vh;
    width: 100%;
    max-width: 100vw;
    
    background-color: white;
`

export const BusinessPage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 90vh;

    max-width: 100vw;
    max-height:100vh;

    // background-image: url('/img/background_1.jpg');
    position: relative;
`

export const Picture = styled.div`
    width: 100%;
    height:100%;
    max-width: 300px; 
    max-height:435px;

    margin: 10px 10px;
    position: relative;

    &:first-child {
        margin-left: 0; 
    }

    &:last-child {
        margin-right: 0; 
    }
`;

export const PictureExplane = styled.p`
    text-align: center;
    max-height: 35px;
    height: 100%;
    font-size: 30px;
    width: 100%;
    position: absolute;
    bottom: 0;
    color: black;
`;

export const ItemBox = styled.img`
    max-width: 300px;
    max-height: 400px;
    width: 100%;
    height: 100%;
`;

export const ItemPage = styled.div`
    width: 100%;
    height: 90vh;
`;

export const ItemTitle = styled.h1`
    margin: 0 0 0 0;
    font-size:40px;
    text-align: center;
    top: 0;
    width: 100%;
    color: black;
`;

export const YoutubePage = styled.div`
    width: 100%;
    height: 100%;
    max-height: 90vh;
    position: relative;

    iframe {
        position: absolute;
        top: 0;
        // left: 0;
        width: 100%;
        height: 100%;
      }
`;

export const YoutubeBox = styled.div`
    width: 100%;
    height: 100%;
`;