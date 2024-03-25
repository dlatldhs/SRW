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
    height: 80vh;
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
    // display: flex;
    display: grid;
`

const images = [
    'https://us.123rf.com/450wm/nuevoimg/nuevoimg2308/nuevoimg230819575/211219943-%ED%8C%8C%EB%9E%80%EC%83%89-%EB%B0%B0%EA%B2%BD%EC%97%90-%ED%8C%8C%EB%9E%80-%EB%88%88%EC%9D%84-%EA%B0%80%EC%A7%84-%ED%9D%B0-%EA%B3%A0%EC%96%91%EC%9D%B4%EC%9D%98-%EC%B4%88%EC%83%81%ED%99%94.jpg?ver=6',
    'https://m1.daumcdn.net/cfile202/image/2455914A56ADB1E315672A',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTySIc71GB-Dk3YTaA8_jTN6s06e7BdOpLcXTUfNuHAPVsh-cy05jJrlpijh3PVbzwFGbA&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz8Pfv78F2D4Y-CI8SfcOnSd5g44ucmFBZK3L5ioBkLxwKtD735pojKEZcV_IB53uuvXA&usqp=CAU',
];

const CompanyExplaneBox = styled.div`
`;

const CEOBox = styled.div`
`;

const GreetingBox = styled.div`
`;

const VisionBox = styled.div`
`;

const HistoryBox = styled.div`
`;

const CooperativeBox = styled.div`
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

                    <CompanyExplaneBox>

                    </CompanyExplaneBox>

                    <CEOBox>

                    </CEOBox>

                    <GreetingBox>

                    </GreetingBox>

                    <VisionBox>

                    </VisionBox>

                    <HistoryBox>

                    </HistoryBox>

                    <CooperativeBox>

                    </CooperativeBox>

                </Explanation>
            </CompanyPage>
            <Footer />
        </CompanyBackground>
    )
};

export default Company;