// import React from 'react';
// import styled from 'styled-components';
// import { useNavigate } from 'react-router-dom';

// // 스타일이 적용된 컴포넌트들
// const StyledHeader = styled.header`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   height: 10vh;
//   position: relative;
//   background-color: #ffffff;
// `;

// const Logo = styled.img`
//   max-width: 230px;
//   width: 100%;
//   max-height: 64px;
//   height: 100%;
//   // background-color: red;
//   left: 120px;
//   position: absolute;
//   cursor: pointer;
// `;

// const Navigation = styled.nav`
//   position: absolute;
//   right: 50px;
//   max-width: 600px;
//   max-height: 50px;

//   width: 100%;
//   height: 100%;

//   display: flex;
//   justify-content: space-around;
  
//   a {
//     text-decoration: none;
//     color: black;
//     outline: none;

//     width: 100%;
//     height: 100%;

//     max-width: 150px;
//     max-height: 50px;
    
//     display: block;

//     text-align: center;
//     align-content: center;

//     font-size: 17px;

//     &:hover {
//       background-color: gray; opacity : 0.5;
//       color: white;
//     }
//   }
// `;

// const Header = () => {

//   const navigate = useNavigate();

//   const handleClickLogo = () => {
//     navigate('/')
//   }

//   return (
//     <StyledHeader>
//       <Logo onClick={handleClickLogo} src="/img/image_6.png" alt="LOGO"></Logo>
//       <Navigation>
//         <a href="company">회사소개</a>
//         <a href="business">사업소개</a>
//         {/* <a href="skills">서비스</a> */}
//         <a href="contacts">Contacts</a>
//       </Navigation>
//     </StyledHeader>
//   );
// }

// export default Header;
import React from 'react';
import styled, { css } from 'styled-components';
import { useNavigate } from 'react-router-dom';

// 반응형 스타일링을 위한 미디어 쿼리 설정
const theme = {
  sizes: {
    mobile: 480,
    tablet: 768,
    desktop: 1024,
  },
  media: {
    mobile: (...args) => `@media (max-width: ${theme.sizes.mobile}px) {
      ${args}
    }`,
    tablet: (...args) => `@media (min-width: ${theme.sizes.mobile + 1}px) and (max-width: ${theme.sizes.tablet}px) {
      ${args}
    }`,
    desktop: (...args) => `@media (min-width: ${theme.sizes.tablet + 1}px) {
      ${args}
    }`,
  },
};

// 스타일이 적용된 컴포넌트들
const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
  position: relative;
  background-color: #ffffff;
`;

const Logo = styled.img`
  max-width: 230px;
  width: 100%;
  max-height: 64px;
  height: 100%;
  left: 120px;
  position: absolute;
  cursor: pointer;

  ${theme.media.mobile`
    max-width: 150px;
    left: 20px;
  `}

  ${theme.media.tablet`
    max-width: 180px;
    left: 50px;
  `}
`;

// const Navigation = styled.nav`
//   position: absolute;
//   right: 50px;
//   max-width: 600px;
//   max-height: 50px;
//   width: 100%;
//   height: 100%;
//   display: flex;
//   justify-content: space-around;

//   a {
//     text-decoration: none;
//     color: black;
//     outline: none;
//     width: 100%;
//     height: 100%;
//     max-width: 100px;
//     max-height: 50px;
//     display: block;
//     text-align: center;
//     align-content: center;
//     font-size: 17px;

//     &:hover {
//       background-color: gray;
//       opacity: 0.5;
//       color: white;
//     }

//     ${theme.media.mobile`
//       font-size: 14px;
//       max-width: 100px;
//     `}

//     ${theme.media.tablet`
//       font-size: 16px;
//       max-width: 120px;
//     `}
//   }
// `;

const Navigation = styled.nav`
  position: absolute;
  right: 50px;
  max-width: 400px;
  max-height: 50px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 20px; // 모바일/태블릿 화면에서 a 태그 사이의 간격 조정

  a {
    text-decoration: none;
    color: black;
    outline: none;
    width: 100%;
    height: 100%;
    max-width: 150px; // 모바일/태블릿 화면에서 a 태그 최대 너비 조정
    max-height: 50px;
    display: block;
    text-align: center;
    align-content: center;
    font-size: 17px;

    &:hover {
      background-color: gray;
      opacity: 0.5;
      color: white;
    }

    ${theme.media.mobile`
      font-size: 14px;
      max-width: 100px;
    `}

    ${theme.media.tablet`
      font-size: 16px;
      max-width: 120px;
    `}
  }
`;


const Header = () => {
  const navigate = useNavigate();

  const handleClickLogo = () => {
    navigate('/');
  };

  return (
    <StyledHeader>
      <Logo onClick={handleClickLogo} src="/img/image_6.png" alt="LOGO" />
      <Navigation>
        <a href="company">회사소개</a>
        <a href="business">사업소개</a>
        <a href="contacts">Contacts</a>
      </Navigation>
    </StyledHeader>
  );
};

export default Header;
