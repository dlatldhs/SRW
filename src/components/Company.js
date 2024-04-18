import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import ImageSlider from './ImageSlider';

const CompanyBackground = styled.div`
    height: 100%;
    max-height: 100vh;
    width: 100%;
    max-width: 100vw;
`

// const CompanyPage = styled.div`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     width: 100%;
//     height: 120vh;
//     max-width: 100vw;
//     max-height:100vh;
// `

// const CompanyGallery = styled.div`
//     flex: 1;
//     height: 100%;
//     display: flex;
//     position: relative;
// `

// const Explanation = styled.div`
//     flex: 1;
//     height: 100%;
//     display: grid;
//     gap: 20px; // 요소들 사이의 간격을 20px로 설정
// `;

const CompanyPage = styled.div`
    display: flex;
    flex-direction: column; // 세로 방향으로 컴포넌트를 나열
    align-items: center;
    width: 100vw; // 전체 화면 너비를 차지
    min-height: 100vh; // 최소 높이 설정
    // overflow: auto; // 내용이 넘칠 경우 스크롤 가능
`

const CompanyGallery = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw; // 전체 화면 너비를 차지
    height: 90vh; // 높이를 90vh로 설정
    position: relative;
`

const Explanation = styled.div`
    // background-color:pink;
    display: flex;
    flex-direction: column; // 세로 방향으로 내용을 나열
    justify-content: center;
    align-items: center;
    width: 100vw; // 전체 화면 너비를 차지
    height: 130vh; // 높이를 90vh로 설정
    gap: 20px; // 요소들 사이의 간격을 20px로 설정
`;

const images = [
    '/img/image_11.jpg',
    '/img/image_12.jpg',
    '/img/image_7.png',
    '/img/image_14.jpg',
    
];
const CompanyIG = styled.div`
    display: flex;
    align-items: center; // 세로 방향 정렬 확인
    justify-content: space-between;
    // max-height: 300px;
    height: 100%;
    position: relative;
`;


const CompanyIGBox1 = styled.div`
    flex: 70%; // 여기서 flex 속성 값 조정
    display: flex;
    flex-direction: column;
    height: 100%;
    max-height: 280px;
    position:relative;
    max-width: 75vw;
    width: 100%;
`;

const CompanyIGBox2 = styled.div`
    flex: 30%; // 여기서 flex 속성 값 조정
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding-right: 15px;
`;
const TargetVision = styled.div`
    width: 100%;
    max-width: 100vw;
    height: 100%;
    max-height: 150px;
    align-text: center;
    
    display: flex;
    flex-direction: column;
    align-items: center;

`;

const Certificate = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Partners = styled.div`
    background-color: #495959;
    display: flex; // Flex 컨테이너로 설정
    justify-content: center; // 가로 방향으로 중앙 정렬
    align-items: center; // 세로 방향으로 중앙 정렬
    height: 100%; // 높이 설정
    position: relative;
    max-height: 130px;
    gap: 0px; // gap 속성 조정 또는 제거
    z-index: -1;
    max-width: 100vw;
    width: 100%;
`;


const CEOP = styled.img`
    width: 240px;
    height: 280px;
`;

const CompanyIntroduction = styled.p`
    flex: 1; // 여기에 추가
    height: 100%;
    max-height: 50vw;
    width: 50vw;
    line-height: 35px;
    p {
        padding: 10px 10px 10px 10px;
    }
`;

const CompanyGreeting = styled.div`
    flex: 1; // 여기에 추가
    height: 100%;
    max-height: 50vw - 20px;
    width: 100%;

    p {
        padding: 10px 10px 10px 10px;
    }
`;

const PartnersImage = styled.img`
    width: 500px;
    height: auto; 
`;

const PartnersTitle = styled.h2`
    font-size: 20px;
    width: 100%; // 가로 너비를 부모 컴포넌트의 100%로 설정
    text-align: center; // 제목을 가운데 정렬하고 싶다면 추가
    color: white;
    position: absolute;
    top: 0;
    margin: 0;
    line-height: 44px;
`;

const CertificateImage = styled.img`
    max-width: 185px;
    max-height: 290px;
    width: 100%;
    height: 100%;
`;

const CEOSign = styled.img`
    max-width: 130px;
    max-height: 35px;
    width: 100%;
    height: 100%;
    position: absolute;
    right: 20px;
    bottom: 0;
`;

const VisionList = styled.li`
    list-style-type: none;
`;

const Company = () => {
    return (
        <CompanyBackground>
            <Header />
            <CompanyPage>
                <CompanyGallery>
                    <ImageSlider images={images} />
                </CompanyGallery>
                <Explanation>
                    <CompanyIG>
                        <CompanyIGBox1>
                            <CompanyIntroduction>
                                안녕하십니까, 스타로보웰즈의 대표이사 강길수입니다.<br></br>
                                당사는 2023년에 설립되어 조선, 플랜트, 우주, 항공, 방산 산업 등 다양한 분야에 맞춤 로봇용접 솔루션을 제공하며,<br></br>
                                든든한 파트너로서 고객과 함께 생산성 향상과 효율성을 극대화 하고 있습니다.<br></br>
                                저희는 자체 개발한 로봇용접 통합 관리 솔루션을 통해 산업에 혁신적인 패러다임을 제시하고 있습니다.<br></br>
                                이를 바탕으로 디지털용접 서비스(생산대행), 로봇용접사 교육 및 파견, 그리고 데이터 기반의 체계적인 관리 플랫폼을 제공하여, 대한민국 용접산업의 미래를 선도하고 글로벌 경쟁력을 강화하고자 합니다.<br></br>
                                저희와 함께라면 귀사의 용접공정이 한층 더 혁신적이고 효율적으로 변모할 것입니다.<br></br>
                                함께 미래를 만들어 갈 준비가 되셨습니까?
                            </CompanyIntroduction>
                            <CEOSign src='/img/sign.png' alt='CEO Sign'></CEOSign>
                        </CompanyIGBox1>
                        <CompanyIGBox2>
                            <CEOP src="/img/image_5.png" alt="CEO"></CEOP>
                        </CompanyIGBox2>
                    </CompanyIG>

                    {/* 목표 비전
                    <TargetVision>
                        <ul>
                            <VisionList>- 기술적 리더십 확립</VisionList>
                            <VisionList>- 고객의 생산성과 효율성 극대화</VisionList>
                            <VisionList>- 로봇용접 교육과 인재 개발</VisionList>
                            <VisionList>- 친환경 및 지속 가능성</VisionList>
                        </ul>
                    </TargetVision> */}

                    {/* 연혁(마일스톤 IMG), 인증서 등 */}
                    <Certificate>
                        <CertificateImage src='/img/certificate_1.png' alt='인증서'></CertificateImage>
                        <CertificateImage src='/img/certificate_2.png' alt='인증서'></CertificateImage>
                        <CertificateImage src='/img/certificate_3.png' alt='인증서'></CertificateImage>
                        <CertificateImage src='/img/certificate_4.png' alt='인증서'></CertificateImage>
                    </Certificate>

                    {/* 협력사 거래처로고 */}
                    <Partners>
                        <PartnersTitle>협력사</PartnersTitle>
                        <PartnersImage src='/img/image_10.jpg' alt="partners"></PartnersImage>
                    </Partners>

                </Explanation>
            </CompanyPage>
            <Footer />
        </CompanyBackground>
    );
};

export default Company;