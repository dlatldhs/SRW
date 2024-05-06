import React from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import Header from './Header';
import ImageSliderMini from './ImageSliderMini';

const PipeImages = [
    '/img/item_1_1.png',
    '/img/item_1_2.png',
    '/img/item_1_3.png',
    '/img/item_1_4.png',
    '/img/item_1_5.png',
];

const HeatExchangerImages = [
    '/img/item_2_1.png',
    '/img/item_2_1.png',
    '/img/item_2_1.png',
    '/img/item_2_1.png',
    '/img/item_2_1.png',
];

const PressureTankImages = [
    '/img/item_3_1.png',
    '/img/item_3_1.png',
    '/img/item_3_1.png',
    '/img/item_3_1.png',
    '/img/item_3_1.png',
];

const ShipBuildingImages = [
    '/img/item_4_1.png',
    '/img/item_4_1.png',
    '/img/item_4_1.png',
    '/img/item_4_1.png',
    '/img/item_4_1.png',
];

const BusinessBackground = styled.div`
    height: 100%;
    max-height: 100vh;
    width: 100%;
    max-width: 100vw;
    
    background-color: white;
`

const BusinessPage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 90vh;

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
`;

const PictureExplane = styled.p`
    text-align: center;
    max-height: 35px;
    height: 100%;
    font-size: 30px;
    width: 100%;
    position: absolute;
    bottom: 0;
    color: white;
`;

const Title = styled.h1`
    margin: 0 0 0 0;
    font-size:25px;
    text-align: center;
    position: absolute;
    top: 0;
    width: 100%;
    color: white;
`;

const ItemBox = styled.img`
    max-width: 300px;
    max-height: 400px;
    width: 100%;
    height: 100%;
`;

const Business = () => {

    return (
        <BusinessBackground>
            <Header />
            <BusinessPage>
            <Title>사업분야</Title>
                <BusinessExplain>

                    <Picture>
                        <ImageSliderMini  images={PipeImages} />
                        <PictureExplane>Pipes Flange</PictureExplane>
                    </Picture>

                    <Picture>
                        <ImageSliderMini  images={HeatExchangerImages} />
                        <PictureExplane>heat exchanger</PictureExplane>
                    </Picture>

                    <Picture>
                        <ImageSliderMini  images={PressureTankImages} />
                        <PictureExplane>Pressure Tank</PictureExplane>
                    </Picture>

                    <Picture>
                        <ImageSliderMini  images={ShipBuildingImages} />
                        <PictureExplane>Ship building</PictureExplane>
                    </Picture>

                </BusinessExplain>
            </BusinessPage>
            <Footer />
        </BusinessBackground>
    );
};

export default Business;
