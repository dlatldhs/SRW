import styled from 'styled-components';

export const CompanyBackground = styled.div`
    height: 100%;
    // max-height: 100vh;
    max-height: auto;
    width: 100%;
    max-width: 100vw;
`;

export const CompanyPage = styled.div`
    display: flex;
    flex-direction: column; // 세로 방향으로 컴포넌트를 나열
    align-items: center;
    width: 100%; // 전체 화면 너비를 차지
    overflow-x: hidden;
`;

export const CompanyGallery = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw; // 전체 화면 너비를 차지
    height: 90vh; // 높이를 90vh로 설정
    position: relative;
`;

export const Explanation = styled.div`
    display: flex;
    flex-direction: column; // 세로 방향으로 내용을 나열
    justify-content: center;
    align-items: center;
    width: 100vw; // 전체 화면 너비를 차지
    height: 294vh; // 높이를 90vh로 설정
    gap: 20px; // 요소들 사이의 간격을 20px로 설정
`;

export const images = [
    '/img/image_11.jpg',
    '/img/image_12.jpg',
    '/img/image_7.png',
    
];

export const CompanyIG = styled.div`
    display: flex;
    align-items: center; // 세로 방향 정렬 확인
    justify-content: space-between;
    // max-height: 300px;
    height: 100%;
    position: relative;
    max-width: 80vw;
    width: 100%;
    max-height: 550px;
`;

export const CompanyIGBox1 = styled.div`
    flex: 70%; // 여기서 flex 속성 값 조정
    display: flex;
    flex-direction: column;
    height: 100%;
    max-height: 420px;
    position:relative;
    max-width: 75vw;
    width: 100%;
`;

export const CompanyIntroduction = styled.p`
    flex: 1; // 여기에 추가
    height: 100%;
    max-height: 50vw;
    width: 50vw;
    line-height: 45px;
    p {
        padding: 10px 10px 10px 10px;
    }
    font-size: 20px;
`;

export const CEOSign = styled.img`
    max-width: 130px;
    max-height: 35px;
    width: 100%;
    height: 100%;
    position: absolute;
    right: 20px;
    bottom: 0;
`;

export const CompanyIGBox2 = styled.div`
    flex: 30%; // 여기서 flex 속성 값 조정
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding-right: 15px;
`;

export const CEOP = styled.img`
    width: 360px;
    height: 420px;
`;

export const VisionBox = styled.div`
    width: 100%;
    max-width: 100vw;
    height: 100%;
    max-height: 250px;
    align-text: center;
    
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const VisionIntroduction = styled.p`
    flex: 1; // 여기에 추가
    height: 100%;
    max-height: 50vw;
    width: 50vw;
    line-height: 45px;
    p {
        padding: 10px 10px 10px 10px;
    }
    font-size: 20px;
    width: 80vw;
`;

export const VisionTitle = styled.h2`
    font-size: 35px;
    width: 100%; // 가로 너비를 부모 컴포넌트의 100%로 설정
    text-align: center; // 제목을 가운데 정렬하고 싶다면 추가
    margin: 0;
    line-height: 44px;
`;

export const HistoryBox = styled.div`
    width: 100%;
    max-width: 100vw;
    height: 100%;
    max-height: 1120px;
    
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const HistoryImage = styled.img`
    width: 100%;
`;

export const Certificate = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-height: 650px;
`;

export const CertificateImage = styled.img`
    max-height: 640px;
    width: 100%;
    height: 100%;
`;

export const Partners = styled.div`
    background-color: #495959;
    display: flex; // Flex 컨테이너로 설정
    justify-content: center; // 가로 방향으로 중앙 정렬
    align-items: center; // 세로 방향으로 중앙 정렬
    height: 100%; // 높이 설정
    position: relative;
    max-height: 200px;
    gap: 0px; // gap 속성 조정 또는 제거
    z-index: -1;
    max-width: 100vw;
    width: 100%;
`;

export const PartnersImage = styled.img`
    // width: ;
    height: 200px; 
`;

export const PartnersTitle = styled.h2`
    font-size: 20px;
    width: 100%; // 가로 너비를 부모 컴포넌트의 100%로 설정
    text-align: center; // 제목을 가운데 정렬하고 싶다면 추가
    color: white;
    position: absolute;
    top: 0;
    margin: 0;
    line-height: 44px;
`;