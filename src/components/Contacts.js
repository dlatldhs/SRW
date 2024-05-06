import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import Kakao from './Kakao';
import FormfacadeEmbed from "@formfacade/embed-react";

const ContactsBackground = styled.div`
    background-color: white;
    height: 180vh;
    max-height: 180vh;
    width: 100%;
    max-width: 100vw;
    // background-image: url('/img/background_1.jpg');
    // background-repeat: repeat;
`;

const ContactsPage = styled.div`
    // display: flex;
    // justify-content: center;
    // align-items: center;
    // width: 100%;
    // height: 60vh;
    // max-width: 100vw;
    // max-height:100vh;

    // display: flex;
    // flex-direction: column;
    // justify-content: center;
    // align-items: center;
    // width: 100%;
    // height: 70vh;
    // max-width: 100vw;
    // max-height:100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    max-width: 100vw;
    max-height:100vh;

`;

const CustomerConnect = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 130vh;
    max-width: 100vw;
    max-height:100vh;
    position: relative; /* 여기에 추가 */
`;

const Title = styled.div`
    margin: 0;
    text-align: center;
    position: absolute;
    top: 0;
    width: 100%;
    height: 44px;
    line-height: 44px;
    background-color: #c0c0c0;
`;

const FormWrapper = styled.div`
    width: calc(100vw - 30px); // 전체 뷰포트 너비에서 원하는 만큼의 padding 값을 빼줍니다.
    max-width: 100vw; // 최대 너비 설정
    padding: 0 15px; // 양쪽으로 padding을 줍니다.

    // 미디어 쿼리를 사용하여 화면 크기에 따른 스타일 조정
    @media (max-width: 768px) {
        width: calc(100vw - 20px); // 모바일 화면에서는 더 적은 padding을 적용할 수 있습니다.
        padding: 0 10px;
    }
    @media (max-width: 480px) {
        width: 100vw; // 가장 작은 화면에서는 padding 없이 화면 전체를 사용합니다.
        padding: 0;
    }
`;

const MapInfo = styled.div`
    // max-height: 400px;
    // max-width: 600px;
    // height: 100%;
    // width: 100%;

    // flex: 0.2; // MapInfo가 20% 차지
    // height: 100%;
    // display: flex;
    // flex-direction: column;
    // justify-content: center;
    // align-items: center;

    flex: 0.2; // MapInfo가 20% 차지
    height: 100%;
    // display: flex;
    // flex-direction: column;
    // justify-content: center;
    align-items: center;
`;

const Info = styled.div`
    // & > *:not(:last-child) { /* Info 컴포넌트의 모든 직접적인 자식에 대해, 마지막 자식을 제외하고 적용 */
    //     margin-bottom: 10px; /* 또는 원하는 간격에 맞춰 조절 */
    // }
    text-align: center;
    margin-bottom: 20px;
`;

const PictureInfo = styled.p`
    // max-height: 331px;
    // max-width: 600px;
    // height: 100%;
    // width: 100%;
    // background-color: pink;

    width: 100vw;
    height: 100%;
    background-color: #f0f0f0;
    text-align: center;
    display: table-cell;
    vertical-align: middle;
`;

const InfoTitle = styled.h2`
    margin: 0 0 0 0;

`;


const Contacts = () => {

    return (
        <ContactsBackground>
            <Header />
            
            <CustomerConnect>
                <Title>고객 문의</Title>
                <FormWrapper> 
                    <FormfacadeEmbed
                        formFacadeURL="https://formfacade.com/include/106597252125648279836/form/1FAIpQLSeWHmxuJOaVLxTrZEv5kIWsLLCdkc-L00XHHqqDs8MWYYc0UA/classic.js/?div=ff-compose"
                        onSubmitForm={() => console.log('Form submitted')}
                    />
                </FormWrapper>
            </CustomerConnect>

            <ContactsPage>
                <Kakao />
                
                {/* <MapInfo> */}
                    {/* <Info>
                        <InfoTitle>Contacts</InfoTitle> 
                    </Info> */}
                    {/* <PictureInfo>부산사무실 : 부산광역시 강서구 미음산단5로41번길 77<br></br>부산 공장 : 부산광역시 강서구 미음산단4로 32<br></br>전화번호 055) 362-9992<br></br>이메일 starobt@naver.com</PictureInfo> */}
                {/* </MapInfo> */}
            </ContactsPage>

            <Footer />
        </ContactsBackground>
    );
};

export default Contacts;
