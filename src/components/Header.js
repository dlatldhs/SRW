import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

// 스타일이 적용된 컴포넌트들
const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
  position: relative;
`;

const Logo = styled.div`
  max-width: 250px;
  width: 100%;
  max-height: 50px;
  height: 50px;
  background-color: red;
  left: 120px;
  position: absolute;
  cursor: pointer;
`;

const Navigation = styled.nav`
  position: absolute;
  right: 50px;
  max-width: 600px;
  max-height: 50px;

  width: 100%;
  height: 100%;

  display: flex;
  justify-content: space-around;
  
  a {
    text-decoration: none;
    color: black;
    outline: none;

    width: 100%;
    height: 100%;

    max-width: 150px;
    max-height: 50px;
    
    display: block;

    text-align: center;
    align-content: center;

    &:hover {
      background-color: gray;
      color: white;
    }
  }
`;

const Header = () => {

  const navigate = useNavigate();

  const handleClickLogo = () => {
    navigate('/')
  }

  return (
    <StyledHeader>
      <Logo onClick={handleClickLogo}>로고 들어갈 자리</Logo>
      <Navigation>
        <a href="company">회사소개</a>
        <a href="business">사업소개</a>
        <a href="skills">기술소개</a>
        <a href="contacts">Contacts</a>
      </Navigation>
    </StyledHeader>
  );
}

export default Header;
