import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ImageSlider from './ImageSlider';
import * as S from "./styleds/CompanyStyled";

const Company = () => {
    return (
        <S.CompanyBackground>
            <Header />
            <S.CompanyPage>
                <S.CompanyGallery>
                    <ImageSlider images={S.images} />
                </S.CompanyGallery>
                <S.Explanation>
                    <S.CompanyIG>
                        <S.CompanyIGBox1>
                            <S.CompanyIntroduction>
                                안녕하십니까, 스타로보웰즈의 대표이사 강길수입니다.<br></br>
                                당사는 2023년에 설립되어 조선, 플랜트, 우주, 항공, 방산 산업 등 다양한 분야에 맞춤 로봇용접 솔루션을 제공하며,<br></br>
                                든든한 파트너로서 고객과 함께 생산성 향상과 효율성을 극대화 하고 있습니다.<br></br>
                                저희는 자체 개발한 로봇용접 통합 관리 솔루션을 통해 산업에 혁신적인 패러다임을 제시하고 있습니다.<br></br>
                                이를 바탕으로 디지털용접 서비스(생산대행), 로봇용접사 교육 및 파견, 그리고 데이터 기반의 체계적인 관리 플랫폼을 제공하여, 대한민국 용접산업의 미래를 선도하고 글로벌 경쟁력을 강화하고자 합니다.<br></br>
                                저희와 함께라면 귀사의 용접공정이 한층 더 혁신적이고 효율적으로 변모할 것입니다.<br></br>
                                함께 미래를 만들어 갈 준비가 되셨습니까?
                            </S.CompanyIntroduction>
                            <S.CEOSign src='/img/sign.png' alt='CEO Sign'></S.CEOSign>
                        </S.CompanyIGBox1>
                        <S.CompanyIGBox2>
                            <S.CEOP src="/img/image_5.jpg" alt="CEO"></S.CEOP>
                        </S.CompanyIGBox2>
                    </S.CompanyIG>
                    <S.VisionBox>
                        <S.VisionTitle>목표 비전</S.VisionTitle>
                        <S.VisionIntroduction> 1. 기술적 리더십 확립<br></br> 2. 고객의 생산성과 효율성 극대화<br></br> 3. 로봇용접 교육 및 인재 개발<br></br> 4. 친환경 및 지속 가능성 추구<br></br></S.VisionIntroduction>
                    </S.VisionBox>
                    <S.HistoryBox>
                        <S.HistoryImage src='/img/history.png' alt='연혁'></S.HistoryImage>
                    </S.HistoryBox>
                    <S.Certificate>
                        <S.CertificateImage src='/img/certificate_1.png' alt='인증서'></S.CertificateImage> <S.CertificateImage src='/img/certificate_2.png' alt='인증서'></S.CertificateImage><S.CertificateImage src='/img/certificate_3.png' alt='인증서'></S.CertificateImage><S.CertificateImage src='/img/certificate_4.png' alt='인증서'></S.CertificateImage>
                    </S.Certificate>
                </S.Explanation>
                <S.PartnersContainer>
                    <S.PartnersImage src='/img/image_10.jpg' alt="partners"></S.PartnersImage>
                </S.PartnersContainer>
            </S.CompanyPage>
            <Footer />
        </S.CompanyBackground>
    );
};
export default Company;
