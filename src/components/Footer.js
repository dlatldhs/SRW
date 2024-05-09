import React from 'react';
import styled,{css} from 'styled-components';

// 반응형 스타일링을 위한 미디어 쿼리 설정
const theme = {
  sizes: {
    mobile: 360,
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
  font-size: 11px;

  ${theme.media.mobile`
    font-size: 8px;
  `}

  ${theme.media.tablet`
    font-size: 10px;
  `}
`;

const Footer = () => {
    return (
      <StyledFooter>
        <FooterContent>
          <p>주소 본점 : 경상남도 양산시 주남로 288, 3618호(영산대학교 코스모스관)<br></br>부산사무실 : 부산광역시 강서구 미음산단5로41번길 77&nbsp;&nbsp;&nbsp;&nbsp;부산 공장 : 부산광역시 강서구 미음산단4로 32<br></br>전화번호 055) 362-9992&nbsp;&nbsp;&nbsp;&nbsp;이메일 starobt@naver.com&nbsp;&nbsp;&nbsp;&nbsp;사업자등록번호 290-86-02788
</p>
        </FooterContent>
      </StyledFooter>
    );
  }
  
  
  export default Footer;
  