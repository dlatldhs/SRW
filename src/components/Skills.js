import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import YouTube from 'react-youtube';
import ImageSliderMini from './ImageSliderMini';

const PipeImages = [
    '/img/skill_4_1.png',
    '/img/skill_4_1.png',
];

const HeatExchangerImages = [
    '/img/skill_4_1.png',
    '/img/skill_4_1.png',
];

const PressureTankImages = [
    '/img/skill_3_1.png',
    '/img/skill_3_2.png',
];

const ShipBuildingImages = [
    '/img/skill_4_1.png',
    '/img/skill_4_1.png',
];

const SkillsBackground = styled.div`
    background-image: url('/img/background_1.jpg');
    height: 100%;
    max-height: 150vh;
    width: 100%;
    max-width: 100vw;
`;
const SkillsPage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 200vh;

    max-width: 100vw;
    max-height:200vh;

    background-image: url('/img/background_2.jpg');
    background-position: 40% 3000px;
    position: relative;
`;
const SkillsExplain = styled.div`
    display: flex; 
    justify-content: space-between; 
    align-items: center;
    width: 90%;
    height: 100%;
    position: absolute;
    top: 0px;
    max-height: 700px;
    background-color: gary;
`;
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

const ResponsiveYoutubeContainer = styled.div`
  position: absolute;
  bottom: 50px;
  width: 90vw; // 뷰포트 너비의 80%
  padding-top: 45vh; // 높이를 너비의 비율에 맞춰 조정
  overflow: hidden;
  height: 50vh;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const ItemBox = styled.img`
    max-width: 300px;
    max-height: 400px;
    width: 100%;
    height: 100%;
`;

const video = 'https://www.youtube.com/watch?v='

const Skills = () => {
    return (
        <SkillsBackground>
            <Header />
            <SkillsPage>
                <Title>서비스</Title>
                <SkillsExplain>

                    <Picture>
                        <ImageSliderMini  images={PipeImages} />
                        <PictureExplane>로봇용접<br></br>공정개발</PictureExplane>
                    </Picture>

                    <Picture>
                        <ImageSliderMini  images={HeatExchangerImages} />
                        <PictureExplane>디지털<br></br>용접서비스</PictureExplane>
                    </Picture>

                    <Picture>
                        <ImageSliderMini  images={PressureTankImages} />
                        <PictureExplane>오퍼레이터<br></br>파견</PictureExplane>
                    </Picture>

                    <Picture>
                        <ImageSliderMini  images={ShipBuildingImages} />
                        <PictureExplane>로봇용접사<br></br>교육</PictureExplane>
                    </Picture>

                </SkillsExplain>
                <ResponsiveYoutubeContainer>
                    <YouTube
                        videoId="1RFiFjG7Eh4"
                        id="1RFiFjG7Eh4"
                        opts={{
                            playerVars: { controls: 1, rel: 0, showinfo: 0}, // 컨트롤 보이도록 설정
                        }}
                        onReady={(event) => {
                            console.log(event);
                            event.target.pauseVideo();
                        }}
                    />
                </ResponsiveYoutubeContainer>
            </SkillsPage>
            <Footer />
        </SkillsBackground>
    )
}

export default Skills;