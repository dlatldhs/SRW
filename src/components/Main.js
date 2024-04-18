import React,{ useState, useEffect } from 'react';
import styled, {keyframes} from 'styled-components';
import Header from './Header';
import Footer from './Footer';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// const MainPage = styled.div`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     width: 100%;
//     height: 100%;
//     max-width: 100vw;
//     max-height:100vh;
//     background-image: url('/img/image_7.png');
//     background-size: 100% 100%;
// `;

const MainPage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    max-width: 100vw;
    max-height:100vh;
    background-image: url('/img/image_7.png');
    background-size: 100% 100%;
    animation: ${fadeIn} 2s ease-in-out; // 2초 동안 천천히 나타나는 효과
`;

const MainBackground = styled.div`
    height: 100%;
    max-height: 100vh;
    width: 100%;
    max-width: 100vw;
`;

const GaryBackground = styled.div`
    position: relative;
    height: 65px;
    width: 100%;
    text-align: center;
    align-content: center;
    font-size: 25px;
    color: white;
    z-index: 1; // 여기에 z-index 추가

    &::before {
        content: "";
        background-color: gray;
        opacity: 0.4;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
    }
`;


const Main = () => {
    return (
        <MainBackground>
            <Header />
            <MainPage>
                <GaryBackground>
                    <p>로봇용접 기술로 미래의 혁신을 만들어 갑니다.</p>
                </GaryBackground>
            </MainPage>
            <Footer />
        </MainBackground>
    );
}

export default Main;