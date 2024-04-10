import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import ImageSlider from './ImageSlider';

const CompanyBackground = styled.div`
    background-color: pink;
    height: 100%;
    max-height: 100vh;
    width: 100%;
    max-width: 100vw;
`

const CompanyPage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120vh;
    max-width: 100vw;
    max-height:100vh;
    background-color: #f0f0f0;
`

const CompanyGallery = styled.div`
    flex: 1;
    height: 100%;
    background-color: orange;
    display: flex;
    position: relative;
`

const Explanation = styled.div`
    flex: 1;
    height: 100%;
    background-color: #9ce644;
    display: grid;
    gap: 20px; // 요소들 사이의 간격을 20px로 설정
`;


const images = [
    'https://us.123rf.com/450wm/nuevoimg/nuevoimg2308/nuevoimg230819575/211219943-%ED%8C%8C%EB%9E%80%EC%83%89-%EB%B0%B0%EA%B2%BD%EC%97%90-%ED%8C%8C%EB%9E%80-%EB%88%88%EC%9D%84-%EA%B0%80%EC%A7%84-%ED%9D%B0-%EA%B3%A0%EC%96%91%EC%9D%B4%EC%9D%98-%EC%B4%88%EC%83%81%ED%99%94.jpg?ver=6',
    'https://m1.daumcdn.net/cfile202/image/2455914A56ADB1E315672A',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTySIc71GB-Dk3YTaA8_jTN6s06e7BdOpLcXTUfNuHAPVsh-cy05jJrlpijh3PVbzwFGbA&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz8Pfv78F2D4Y-CI8SfcOnSd5g44ucmFBZK3L5ioBkLxwKtD735pojKEZcV_IB53uuvXA&usqp=CAU',
];
const CompanyIG = styled.div`
    display: flex;
    align-items: center; // 세로 방향 정렬 확인
    justify-content: space-between; // 가로 방향 여백 분배 확인
    background-color: red;
    // max-height: 300px;
    height: 100%;
    position: relative;
`;


const CompanyIGBox1 = styled.div`
    flex: 70%; // 여기서 flex 속성 값 조정
    display: flex;
    flex-direction: column;
    background-color: #6A5ACD;
    height: 100%;
`;

const CompanyIGBox2 = styled.div`
    flex: 30%; // 여기서 flex 속성 값 조정
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #DA70D6;
    height: 100%;
`;
const TargetVision = styled.div`
    background-color: pink;
`;

const History = styled.div`
    background-color: orange;
`;

const Partners = styled.div`
    background-color: skyblue;
`;

const CEOP = styled.div`
    background-color: #00FFFF;
    width: 240px;
    height: 280px;
`;

const CompanyIntroduction = styled.div`
    flex: 1; // 여기에 추가
    height: 100%;
    max-height: 50vw;
    width: 100%;
    
    p {
        padding: 10px 10px 10px 10px;
    }
`;

const CompanyGreeting = styled.div`
    flex: 1; // 여기에 추가
    height: 100%;
    max-height: 50vw - 20px;
    width: 100%;

    p {
        padding: 10px 10px 10px 10px;
    }
`;

const Company = () => {
    return (
        <CompanyBackground>
            <Header />
            <CompanyPage>
                <CompanyGallery>
                    <ImageSlider images={images} />
                </CompanyGallery>
                <Explanation>

                    {/* 회사소개, 인사말, 대표이사 */}
                    <CompanyIG>
                        <CompanyIGBox1>
                            <CompanyIntroduction>
                                <p>
                                    회사소개회사소개회사소개회사소개회사소개회사소개회사소개회사소개회사소개회사소개회사소개회사소개회사소개회사소개
                                </p>
                            </CompanyIntroduction>
                            <CompanyGreeting>
                                <p>
                                    인사말인사말인사말인사말인사말인사말인사말인사말인사말인사말인사말
                                </p>
                            </CompanyGreeting>
                        </CompanyIGBox1>
                        <CompanyIGBox2>
                            <CEOP></CEOP>
                        </CompanyIGBox2>
                    </CompanyIG>

                    {/* 목표 비전 */}
                    <TargetVision>
                        목표 비전
                    </TargetVision>

                    {/* 연혁(마일스톤 IMG), 인증서 등 */}
                    <History>
                        연혁,인증서
                    </History>

                    {/* 협력사 거래처로고 */}
                    <Partners>
                        협력사 거래처 로고 이미지로 대체
                    </Partners>

                </Explanation>
            </CompanyPage>
            <Footer />
        </CompanyBackground>
    );
};

export default Company;