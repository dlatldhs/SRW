import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  background-color: #333;
  color: white;
  text-align: center;
  height: 10vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  align-items: center;
`;

const Footer = () => {
    return (
      <StyledFooter>
        <FooterContent>
          <p>문의: example@example.com</p>
          <p>© 2024 회사명. 모든 권리 보유.</p>
        </FooterContent>
      </StyledFooter>
    );
  }
  
  
  export default Footer;
  