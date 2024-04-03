import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import Kakao from './Kakao';

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

const Map = styled.div`
    width: 500px;
    height: 500px;
`;

const CustomerConnect = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 60vh;
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

const Contacts = () => {

    return (
        <ContactsBackground>
            <Header />
            <ContactsPage>
                <Kakao />
            </ContactsPage>
            <CustomerConnect>
                <Title>고객 문의</Title>
            </CustomerConnect>
            <Footer />
        </ContactsBackground>
    );
};

export default Contacts;
