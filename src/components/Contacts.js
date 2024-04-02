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
    height: 80vh;
    max-width: 100vw;
    max-height:100vh;
    background-color: #f0f0f0;
`;

const Map = styled.div`
    width: 500px;
    height: 500px;
`;

const Contacts = () => {

    return (
        <ContactsBackground>
            <Header />
            <ContactsPage>
                <Kakao />
            </ContactsPage>
            <Footer />
        </ContactsBackground>
    );
};

export default Contacts;