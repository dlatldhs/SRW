import React from 'react';
import styled from 'styled-components';

const MainPage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 75vh;
    max-width: 100vw;
    max-height:100vh;
    background-color: #f0f0f0;
    position: relative;
`

const Main = () => {
    // return <div>
    return <MainPage>
            메인 페이지( 사진 들어갈 공간 )
        </MainPage>
    // </div>;
}

export default Main;