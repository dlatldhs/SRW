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
    height: 180vh;
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
const YoutubeBox = {
    position: 'absolute',
    bottom: '50px',
    // maxHeight: '1440px',
    // maxWidth: '810px',
    // width: '100%',
    // height: '100%',
}

const video = 'https://www.youtube.com/watch?v='

const opts = {
    height: '810',
    width: '1440',
    playerVars: { controls: 0, rel: 0, showinfo: 0 }
  };

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
                <YouTube style={YoutubeBox}
                    videoId="1RFiFjG7Eh4" // defaults -> ''
                    id="1RFiFjG7Eh4" // defaults -> ''
                    onPlay={() => {
                    console.log("test");
                    // setMute(0);
                    }}
                    opts={opts}
                    onReady={(event) => {
                    console.log(event);
                    event.target.pauseVideo();
                    }}
                />
            </SkillsPage>
            <Footer />
        </SkillsBackground>
    )
}

export default Skills;