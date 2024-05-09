import styled, { css } from 'styled-components';

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

export const CompanyBackground = styled.div`
  background-color: #f5f5f5;
`;

export const CompanyPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const CompanyGallery = styled.div`
  height: 90vh;
  width: 100%;
`;

export const Explanation = styled.div`
  width: 80vw;
  margin-left: 10vw;
  margin-right: 10vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CompanyIG = styled.div`
  display: flex;
  width: 100%;
  margin-top: 3rem;
`;

export const CompanyIGBox1 = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const CompanyIntroduction = styled.div`
  font-size: 1.2rem;
  line-height: 1.8;
  text-align: left;

  ${theme.media.mobile`
    font-size: 0.5rem;
    line-height: 1.2;
  `}

  ${theme.media.tablet`
    font-size: 0.8rem;
    line-height: 1.2;
  `}
`;

export const CEOSign = styled.img`
  width: 150px;
  margin-top: 2rem;

  ${theme.media.mobile`
    margin-top: 0.5rem;
    width: 75px;
  `}

  ${theme.media.tablet`
    margin-top: 1.4rem;
    width: 125px;
  `}
`;

export const CompanyIGBox2 = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CEOP = styled.img`
  width: 80%;
  height: auto;

  ${theme.media.mobile`
    width: 95%;
    height: auto;
  `}

  ${theme.media.tablet`
    width: 80%;
    height: auto;
  `}
`;

export const VisionBox = styled.div`
  width: 100%;
  margin-top: 3rem;
  
`;

export const VisionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;

  ${theme.media.mobile`
    font-size: 1.0rem;
  `}

  ${theme.media.tablet`
    font-size: 1.5rem;
  `}
`;

export const VisionIntroduction = styled.div`
  font-size: 1.2rem;
  line-height: 1.8;

  ${theme.media.mobile`
    font-size: 0.6rem;
    line-height: 1.5;
  `}

  ${theme.media.tablet`
    font-size: 0.9rem;
    line-height: 1.7;
  `}
`;

export const HistoryBox = styled.div`
  width: 100%;
  max-height: 1120px;
  margin-top: 3rem;
  overflow: hidden;
`;

export const HistoryImage = styled.img`
  width: 100%;
  height: auto;
`;

export const Certificate = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 3rem;

  ${theme.media.mobile`
      margin-top: 0.5rem;
    `}

    ${theme.media.tablet`
      margin-top: 2rem;
    `}
  
  > img {
    width: 20%;
    height: auto;
    margin: 1rem;

    ${theme.media.mobile`
      width: 35%;
    `}

    ${theme.media.tablet`
      width: 40%;
    `}

    ${theme.media.desktop`
      width: 20%;
    `}
  }
`;

export const CertificateImage = styled.img`
  width: 100%;
  height: auto;
`;

export const PartnersContainer = styled.div`
  width: 100%;
  margin-top: 3rem;
  position: relative;
  background-color: #495959; // 배경색을 pink로 설정하여 크기 확인
  overflow: hidden;
  display: flex;
  justify-content: center;

  ${theme.media.mobile`
    height: 100px;
  `}

  ${theme.media.tablet`
    height: 248px;
  `}

  ${theme.media.desktop`
    height: 248px;
  `}
`;

export const PartnersImage = styled.img`
  position: absolute;
  bottom: 0;

  ${theme.media.mobile`
    height: 105px;
  `}
`;

export const images = [
  '/img/image_11.jpg',
  '/img/image_12.jpg',
  '/img/image_7.png',
];
