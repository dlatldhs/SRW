import React from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import Header from './Header';

const BusinessBackground = styled.div`
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
    background-image: url('/img/background_1.jpg');
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
    max-height:435px;
    margin: 10px 10px;
    position: relative;

    &:first-child {
        margin-left: 0; 
    }

    &:last-child {
        margin-right: 0; 
    }
`

const Title = styled.h1`
    margin: 0 0 0 0;
    text-align: center;
    position: absolute;
    top: 0;
    width: 100%;
    color: white;
`
const PictureExplane = styled.div`
    text-align: center;
    max-height: 35px;
    height: 100%;
    font-size: 30px;
    width: 100%;
    position: absolute;
    bottom: 0;
`

const Business = () => {
    return (
        <BusinessBackground>
            <Header />
            <BusinessPage>
            <Title>사업분야</Title>
                <BusinessExplain>

                    <Picture>
                        <PictureExplane>
                            로봇용접 공정개발
                        </PictureExplane>
                    </Picture>

                    <Picture>
                        <PictureExplane>
                            로봇용접 공정개발
                        </PictureExplane>
                    </Picture>

                    <Picture>
                        <PictureExplane>
                            로봇용접 공정개발
                        </PictureExplane>
                    </Picture>

                    <Picture>
                        <PictureExplane>
                            로봇용접 공정개발
                        </PictureExplane>
                    </Picture>
                </BusinessExplain>
            </BusinessPage>
            <Footer />
        </BusinessBackground>
    );
};

export default Business;
