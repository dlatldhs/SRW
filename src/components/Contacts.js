import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import Kakao from './Kakao';

// 반응형 스타일을 위한 테마 설정
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

const ContactsBackground = styled.div`
  background-color: white;
  height: 100vh;
  max-height: 100vh;
  width: 100%;
  max-width: 100vw;
`;

const ContactsPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 90vh;
  max-width: 100vw;
  max-height: 90vh;

  ${theme.media.mobile`
    height: auto;
    max-height: none;
  `}
`;

const MapInfoTitle = styled.h2`
  margin: 0;
  text-align: center;
  width: 100%;
  background-color: #c0c0c0;
  color: white; // 글자 색을 흰색으로 변경
  padding: 10px 0;
  font-size: 1.5rem;

  ${theme.media.mobile`
    font-size: 0.8rem;
  `}
`;

const CustomerConnect = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90vh;
  max-width: 100vw;
  max-height: 90vh;
  position: relative;
  overflow-y: hidden;

  ${theme.media.mobile`
    height: 90vh;
    max-height: 90vh;
  `}
`;

const Title = styled.div`
  margin: 0;
  text-align: center;
  top: 0;
  width: 100%;
  height: 44px;
  line-height: 44px;
  background-color: #c0c0c0;
  margin-bottom: 20px;
`;

const MapInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 80%;
  margin: 10% 10%;

  ${theme.media.mobile`
    height: auto;
    margin: 0;
    width: 80%;
  `}
`;

const MapInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 30%;

  ${theme.media.mobile`
    width: 100%;
    height: 200px;
  `}
`;

const KakaoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 70%;

  ${theme.media.mobile`
    width: 70%;
    height: 200px;
  `}
`;

const PictureInfo = styled.p`
  width: 100%;
  height: 100%;
  background-color: #f0f0f0;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  padding: 20px;

  ${theme.media.mobile`
    font-size: 0.6rem;
  `}
`;

const Contacts = () => {
  return (
    <ThemeProvider theme={theme}>
      <ContactsBackground>
        <Header />

        <CustomerConnect>
          <Title>고객 문의</Title>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSfO_K3RS0UlUuZo_kJEHB1mP1YAC-GhhqPZAoQ5G_ggHjebyA/viewform?embedded=true"
            width="100%"
            height="100%"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
          >
            로드 중…
          </iframe>
        </CustomerConnect>

        <ContactsPage>
          <MapInfoTitle>찾아오시는 길</MapInfoTitle>
          <MapInfoContainer>
            <MapInfo>
              <PictureInfo>
                부산사무실 : 부산광역시 강서구 미음산단5로41번길 77
                <br />
                부산 공장 : 부산광역시 강서구 미음산단4로 32
                <br />
                전화번호 055) 362-9992
                <br />
                이메일 starobt@naver.com
              </PictureInfo>
            </MapInfo>
            <KakaoContainer>
              <Kakao />
            </KakaoContainer>
          </MapInfoContainer>
        </ContactsPage>

        <Footer />
      </ContactsBackground>
    </ThemeProvider>
  );
};

export default Contacts;
