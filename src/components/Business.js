import React from 'react';
import Footer from './Footer';
import Header from './Header';
import ImageSliderMini from './ImageSliderMini';
import YouTube from 'react-youtube';
import * as S from "./styleds/BusinessStyled";

const Business = () => {
    return (
        <S.BusinessBackground>
            <Header />
            <S.BusinessPage>
                <S.Title>사업분야</S.Title>
                <S.BusinessExplain>
                    <S.Picture>
                        <S.BusinessImage  src='/img/b_1.png' alt='사업분야' ></S.BusinessImage>
                        <S.PictureExplane>로봇용접 공정개발</S.PictureExplane>
                    </S.Picture>

                    <S.Picture>
                    <S.BusinessImage  src='/img/b_2.png' alt='사업분야' ></S.BusinessImage>
                        <S.PictureExplane>오퍼레이터 파견</S.PictureExplane>
                    </S.Picture>

                    <S.Picture>
                    <S.BusinessImage  src='/img/b_3.png' alt='사업분야' ></S.BusinessImage>
                        <S.PictureExplane>로봇용접사 교육</S.PictureExplane>
                    </S.Picture>

                    <S.Picture>
                    <S.BusinessImage  src='/img/b_4.png' alt='사업분야' ></S.BusinessImage>
                        <S.PictureExplane>디지털 용접서비스</S.PictureExplane>
                    </S.Picture>
                </S.BusinessExplain>
            </S.BusinessPage>
            <S.ItemPage>
                <S.ItemTitle>아이템</S.ItemTitle>
                <S.BusinessExplain>
                    <S.Picture>
                        <ImageSliderMini images={S.PipeImages}></ImageSliderMini>
                        <S.PictureExplane>Pipes Flange</S.PictureExplane>
                    </S.Picture>
                    <S.Picture>
                        <ImageSliderMini images={S.HeatExchangerImages}></ImageSliderMini>
                        <S.PictureExplane>channel cover</S.PictureExplane>
                    </S.Picture>
                    <S.Picture>
                        <ImageSliderMini images={S.PressureTankImages}></ImageSliderMini>
                        <S.PictureExplane>pressure vessel</S.PictureExplane>
                    </S.Picture>
                    <S.Picture>
                        <S.BusinessImage src='/img/i_7.png' alt='아이템'></S.BusinessImage>
                        <S.PictureExplane>기타</S.PictureExplane>
                    </S.Picture>

                </S.BusinessExplain>
            </S.ItemPage>
            <S.YoutubePage>
                    <YouTube
                        videoId="RiYEyRrDG3Q"
                        id="RiYEyRrDG3Q"
                        opts={{
                            width:'100%',
                            height: '100%',
                            playerVars: { controls: 1, rel: 0, showinfo: 0}, // 컨트롤 보이도록 설정
                        }}
                        onReady={(event) => {
                            console.log(event);
                            event.target.pauseVideo();
                        }}
                    />
            </S.YoutubePage>
            <Footer />
        </S.BusinessBackground>
    );
};

export default Business;