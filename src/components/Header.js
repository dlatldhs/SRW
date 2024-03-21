import React from 'react';
import styled from 'styled-components';

// 스타일이 적용된 컴포넌트들
const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 50px;
`;

const Logo = styled.div`
  max-width: 250px;
  width: 100%;
  max-height: 50px;
  height: 50px;
  background-color: red;
`;

const Navigation = styled.nav`
  a {
    text-decoration: none;
    color: black;
    outline: none;
    
    padding: 15px 25px 15px 25px;

    width: 100%;
    height: 100%;

    max-width: 150px;
    max-height: 120px;
    

    &:hover {
      background-color: gray;
      color: white;
    }
  }
`;

function Header() {
  return (
    <StyledHeader>
      <Logo>로고 들어갈 자리</Logo>
      <Navigation>
        <a href="company">회사소개</a>
        <a href="business">사업소개</a>
        <a href="skills">기술소개</a>
        <a href="contacts">고객센터</a>
      </Navigation>
    </StyledHeader>
  );
}

export default Header;
