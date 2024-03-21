import React from 'react';
import styled from 'styled-components';

// display: flex;
const CompanyPage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 75vh;
    max-width: 100vw;
    max-height:100vh;
    background-color: #f0f0f0;
`

const Pictures = styled.div`
    flex: 1;
    height: 75vh;
    background-color: orange;
    display: flex;
    // position: absolute;
`

const Explanation = styled.div`
    flex: 1;
    height: 75vh;
    background-color: pink;
    display: flex;
    // position: absolute;
`

const Company = () => {
    return <CompanyPage>
        <Pictures>
            작업현장 사진
            공장/saw 사진
        </Pictures>
        <Explanation>
            회사 소개, 대표이사 사진, 인사말, 목표비전, 연혁, 인증서등
        </Explanation>
    </CompanyPage>
};

export default Company;