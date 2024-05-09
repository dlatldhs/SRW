import styled, {css} from 'styled-components';

const theme = {
    sizes: {
      mobile: 360,
      tablet: 768,
      desktop: 1024,
    },
    media: {
      mobile: (...args) => `@media (max-width: ${theme.sizes.mobile}px) {
        ${args}
      }`,
      tablet: (...args) => `@media (min-width: ${theme.sizes.mobile + 1}px) and (max-width: ${theme.sizes.tablet}px) {
        ${args}
      }`,
      desktop: (...args) => `@media (min-width: ${theme.sizes.tablet + 1}px) {
        ${args}
      }`,
    },
  };

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


export const Title = styled.h2`
    margin: 0 0 0 0;
    font-size:35px;
    text-align: center;
    position: absolute;
    top: 0;
    width: 100%;
    color: white;
    background-color: #333333;

    ${theme.media.mobile`
      font-size: 18px;
    `}

    ${theme.media.tablet`
      font-size: 25px;
    `}
`;
export const BusinessExplain = styled.div`
    display: flex; 
    justify-content: space-between; 
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 100px 100px;

    ${theme.media.mobile`
    padding: 5px 5px;
    `}

    ${theme.media.tablet`
    padding: 5px 5px;
    `}
`;
export const BusinessImage = styled.img`
    width: 100%;
    height: 100%;
    max-height: 400px;

    ${theme.media.mobile`
      width: 72px;
      height: 90px;
    `}

    ${theme.media.tablet`
      width: 150px;
      height: 180px;
    `}
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
  max-height: 100vh;
  position: relative;

  ${theme.media.mobile`
    height: auto;
    padding: 50px 0;
  `}

  ${theme.media.tablet`
    height: auto;
    padding: 80px 0;
  `}
`;

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

    ${theme.media.mobile`  
      font-size: 9px;
      max-height: 2px;
    `}

    ${theme.media.tablet`
      font-size: 25px;
      max-height: 20px;
    `}
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

  ${theme.media.mobile`
    height: auto;
    padding: 50px 0;
  `}

  ${theme.media.tablet`
    height: auto;
    padding: 80px 0;
  `}
`;

export const ItemTitle = styled.h2`
    margin: 0 0 0 0;
    font-size:35px;
    text-align: center;
    top: 0;
    width: 100%;
    color: white;
    background-color: #333333;

    ${theme.media.mobile`
    font-size: 18px;
    `}

    ${theme.media.tablet`
      font-size: 25px;
    `}
`;
export const YoutubePage = styled.div`
    width: 100%;
    height: 100%;
    max-height: 90vh;
    position: relative;
    iframe {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
      }
`;
export const YoutubeBox = styled.div`
    width: 100%;
    height: 100%;
`;