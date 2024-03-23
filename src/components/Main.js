import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';

const MainPage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    max-width: 100vw;
    max-height:80vh;
    background-color: #f0f0f0;
`

const MainBackground = styled.div`
    background-color: pink;

    height: 100%;
    max-height: 100vh;
    width: 100%;
    max-width: 100vw;
`

const Main = () => {
    return (
        <MainBackground>
            <Header />
            <MainPage>
                    메인 페이지( 사진 들어갈 공간 )
            </MainPage>
            <Footer />
        </MainBackground>
    );
}

export default Main;