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

const CompanyPage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120vh;
    max-width: 100vw;
    max-height:100vh;
`

const CompanyGallery = styled.div`
    flex: 1;
    height: 100%;
    display: flex;
    position: relative;
`

const Explanation = styled.div`
    flex: 1;
    height: 100%;
    display: grid;
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
    background-color: pink;
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
`;


const CEOP = styled.img`
    width: 240px;
    height: 280px;
`;

const CompanyIntroduction = styled.div`
    flex: 1; // 여기에 추가
    height: 100%;
    max-height: 50vw;
    width: 100%;
    
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
                                <p>
                                    회사소개회사소개회사소개회사소개회사소개회사소개회사소개회사소개회사소개회사소개회사소개회사소개회사소개회사소개
                                </p>
                            </CompanyIntroduction>
                            <CompanyGreeting>
                                <p>
                                    인사말인사말인사말인사말인사말인사말인사말인사말인사말인사말인사말
                                </p>
                            </CompanyGreeting>
                            <CEOSign src='/img/sign.png' alt='CEO Sign'></CEOSign>
                        </CompanyIGBox1>
                        <CompanyIGBox2>
                            <CEOP src="/img/image_5.png" alt="CEO"></CEOP>
                        </CompanyIGBox2>
                    </CompanyIG>

                    {/* 목표 비전 */}
                    <TargetVision>
                        목표 비전
                    </TargetVision>

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