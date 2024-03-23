import React from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import Header from './Header';

const BusinessBackground = styled.div`
    background-color: pink;

    height: 100%;
    max-height: 100vh;
    width: 100%;
    max-width: 100vw;
`

const BusinessPage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 80vh;
    max-width: 100vw;
    max-height:100vh;
    background-color: #f0f0f0;
    position: relative;
`

const BusinessExplain = styled.div`
    display: flex; 
    justify-content: space-between; 
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 50px 50px;
`

const Picture = styled.div`
    width: 100%;
    height:100%;
    max-width: 300px; 
    max-height:400px; 
    background-color: #5AD2FF;
    margin: 10px 10px;

    &:first-child {
        margin-left: 0; 
    }

    &:last-child {
        margin-right: 0; 
    }
`

const Title = styled.h1`
    margin: 0 0 0 0;
    background-color: #00FA9A;
    text-align: center;
    position: absolute;
    top: 0;
    width: 100%;
`

const Business = () => {
    return (
        <BusinessBackground>
            <Header />
            <BusinessPage>
            <Title>사업 소개</Title>
                <BusinessExplain>
                    <Picture></Picture>
                    <Picture></Picture>
                    <Picture></Picture>
                    <Picture></Picture>
                </BusinessExplain>
            </BusinessPage>
            <Footer />
        </BusinessBackground>
    );
};

export default Business;
