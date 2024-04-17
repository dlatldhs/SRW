import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import Kakao from './Kakao';
import FormfacadeEmbed from "@formfacade/embed-react";

const ContactsBackground = styled.div`
    background-color: pink;
    height: 100%;
    max-height: 100vh;
    width: 100%;
    max-width: 100vw;
`;

const ContactsPage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 60vh;
    max-width: 100vw;
    max-height:100vh;
    background-color: #f0f0f0;
`;

const CustomerConnect = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 130vh;
    max-width: 100vw;
    max-height:100vh;
    background-color: blue;
    position: relative; /* 여기에 추가 */
`;

const Title = styled.div`
    margin: 0;
    background-color: #00FA9A;
    text-align: center;
    position: absolute;
    top: 0;
    width: 100%;
    height: 44px;
    line-height: 44px;
`;

const FormWrapper = styled.div`
    width: calc(100vw - 30px); // 전체 뷰포트 너비에서 원하는 만큼의 padding 값을 빼줍니다.
    max-width: 100vw; // 최대 너비 설정
    padding: 0 15px; // 양쪽으로 padding을 줍니다.

    // 미디어 쿼리를 사용하여 화면 크기에 따른 스타일 조정
    @media (max-width: 768px) {
        width: calc(100vw - 20px); // 모바일 화면에서는 더 적은 padding을 적용할 수 있습니다.
        padding: 0 10px;
    }
    @media (max-width: 480px) {
        width: 100vw; // 가장 작은 화면에서는 padding 없이 화면 전체를 사용합니다.
        padding: 0;
    }
`;

const MapInfo = styled.div`
    max-height: 400px;
    max-width: 600px;
    height: 100%;
    width: 100%;
    background-color: green;
`;

const Info = styled.div`
    background-color: red;
    & > *:not(:last-child) { /* Info 컴포넌트의 모든 직접적인 자식에 대해, 마지막 자식을 제외하고 적용 */
        margin-bottom: 10px; /* 또는 원하는 간격에 맞춰 조절 */
    }
`;

const PictureInfo = styled.div`
    max-height: 331px;
    max-width: 600px;
    height: 100%;
    width: 100%;
    background-color: pink;
`;

const InfoTitle = styled.h2`
    margin: 0 0 0 0;

`;

const Contacts = () => {

    return (
        <ContactsBackground>
            <Header />
            <ContactsPage>
                <Kakao />
                <MapInfo>
                    <Info>
                        <InfoTitle>Contacts</InfoTitle>
                        <p>주소</p>    
                    </Info>
                    <PictureInfo></PictureInfo>
                </MapInfo>
            </ContactsPage>
            <CustomerConnect>
                <Title>고객 문의</Title>
                <FormWrapper> {/* FormfacadeEmbed 컴포넌트를 FormWrapper로 감싸기 */}
                    <FormfacadeEmbed
                        formFacadeURL="https://formfacade.com/include/106597252125648279836/form/1FAIpQLSeWHmxuJOaVLxTrZEv5kIWsLLCdkc-L00XHHqqDs8MWYYc0UA/classic.js/?div=ff-compose"
                        onSubmitForm={() => console.log('Form submitted')}
                    />
                </FormWrapper>
            </CustomerConnect>
            <Footer />
        </ContactsBackground>
    );
};

export default Contacts;
