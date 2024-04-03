import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import YouTube from 'react-youtube';

const SkillsBackground = styled.div`
    background-color: pink;

    height: 100%;
    max-height: 150vh;
    width: 100%;
    max-width: 100vw;
`
const SkillsPage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 170vh;
    max-width: 100vw;
    max-height:200vh;
    background-color: #f0f0f0;
    position: relative;
    flex-direction: column;
`
const SkillsExplain = styled.div`
    display: flex; 
    justify-content: space-between; 
    align-items: center;
    width: 90%;
    height: 100%;
    position: absolute;
    top: 0px;
    max-height: 700px;
`
const Picture = styled.div`
    width: 100%;
    height:100%;
    max-width: 300px; 
    max-height:435px; 
    background-color: #5AD2FF;
    margin: 10px 10px;
    position: relative;

    &:first-child {
        margin-left: 0; 
    }

    &:last-child {
        margin-right: 0; 
    }
`
const PictureExplane = styled.div`
    text-align: center;
    background-color: yellow;
    max-height: 35px;
    height: 100%;
    font-size: 30px;
    width: 100%;
    position: absolute;
    bottom: 0;
`
const Title = styled.h1`
    margin: 0 0 0 0;
    background-color: #00FA9A;
    text-align: center;
    top: 0;
    width: 100%;
    position: absolute;
`

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

const video = 'https://www.youtube.com/watch?v='

const Skills = () => {
    return (
        <SkillsBackground>
            <Header />
            <SkillsPage>
                <Title>기술 소개</Title>
                <SkillsExplain>

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