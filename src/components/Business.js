// import React from 'react';
// import styled from 'styled-components';

// const BusinessPage = styled.div`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     width: 100%;
//     height: 75vh;
//     max-width: 100vw;
//     max-height:100vh;
//     background-color: #f0f0f0;
//     position: relative;
// `

// const BusinessExplain = styled.div`

// `

// const Picture = styled.div`
//     position: absolute;
//     width: 100%;
//     height:100%;
//     max-width: 300px;
//     max-height:400px;

//     background-color: #5AD2FF;


// `

// const Business = () => {
//     return <BusinessPage>
//         <BusinessExplain>
//             <Picture>
//             </Picture>
            
//             <Picture>
//             </Picture>
            
//             <Picture>
//             </Picture>
            
//             <Picture>
//             </Picture>

//         </BusinessExplain>
//     </BusinessPage>
// };

// export default Business;
import React from 'react';
import styled from 'styled-components';

const BusinessPage = styled.div`
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
    max-height:400px; 
    background-color: #5AD2FF;
    margin: 10px 10px;

    &:first-child {
        margin-left: 0; 
    }

    &:last-child {
        margin-right: 0; 
    }
`

const Title = styled.h1`
    margin: 0 0 0 0;
    background-color: #00FA9A;
    justify-content: center;
    align-items: center;
    text-align: center;
`

const Business = () => {
    return (
        <div>
            <Title>사업 소개</Title>
            <BusinessPage>
                <BusinessExplain>
                    <Picture></Picture>
                    <Picture></Picture>
                    <Picture></Picture>
                    <Picture></Picture>
                </BusinessExplain>
            </BusinessPage>
        </div>
    );
};

export default Business;
