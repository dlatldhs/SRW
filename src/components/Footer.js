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
          <p>본점: 경상남도 양산시 주남로 288, 3618호(주남동, 영산대학교 코스모스관)
부산사무실 : 부산시</p>
          <p>© 2024 회사명. 모든 권리 보유.</p>
        </FooterContent>
      </StyledFooter>
    );
  }
  
  
  export default Footer;
  