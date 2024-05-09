// import React, {useEffect, useState} from "react";
// import styled from "styled-components";

// const theme = {
//     sizes: {
//       mobile: 360,
//       tablet: 768,
//       desktop: 1024,
//     },
//     media: {
//       mobile: (...args) => `@media (max-width: ${theme.sizes.mobile}px) {
//         ${args}
//       }`,
//       tablet: (...args) => `@media (min-width: ${theme.sizes.mobile + 1}px) and (max-width: ${theme.sizes.tablet}px) {
//         ${args}
//       }`,
//       desktop: (...args) => `@media (min-width: ${theme.sizes.tablet + 1}px) {
//         ${args}
//       }`,
//     },
//   };

// const Slider = styled.section`
//     position: relative;
//     overflow: hidden;
//     height: 100%;
// `;

// const Slide = styled.div`
//     position: absolute;
//     width: 100%;
//     height: 100%;
//     opacity: 0;
//     transition: opacity ease-in-out 1s;

//     &.active {
//         opacity: 1;
//     }
// `;

// const Image = styled.img`
//     width: 100%;
//     height: 100%;
//     max-height: 400px;
//     object-fit: cover;

//     ${theme.media.mobile`
//       width: 72px;
//       height: 90px;
//     `}

//     ${theme.media.tablet`
//       width: 150px;
//       height: 180px;
//     `}
// `

// const Button = styled.button`
//     all: unset; /* 기본 버튼 스타일 제거 */
//     cursor: pointer;
//     position: absolute;
//     top: 50%;
//     transform: translateY(-50%);
//     z-index: 10;
//     background-color: rgba(0,0,0,0.5);
//     color: white;
//     padding: 10px;
//     font-size: 24px;

//     &:hover {
//         background-color: rgba(0,0,0,0.8);
//     }
// `;

// const PrevButton = styled(Button)`
//     left: 10px;
//     ${theme.media.mobile`
//         font-size: 9px;
//     `}

//     ${theme.media.tablet`
//         font-size: 15px;
//     `}
// `;

// const NextButton = styled(Button)`
//     right: 10px;
//     ${theme.media.mobile`
//         font-size: 9px;
//     `}

//     ${theme.media.tablet`
//         font-size: 15px;
//     `}
// `;


// const ImageSliderMini = ({images}) => {

//     const [ current, setCurrent ] = useState(0);
//     const length = images.length;

//     const nextSlider = () => {
//         setCurrent(
//             current === length - 1 ? 0 : current + 1
//         );
//     }

//     const prevSlide = () => {
//         setCurrent(current === 0 ? length - 1 : current - 1);
//     };

//     const nextSlide = () => {
//         setCurrent(current === length - 1 ? 0 : current + 1);
//     };

//     useEffect(() => {
//         const interval = setInterval(nextSlider, 5000);
//         return () => clearInterval(interval);
//     }, [current]);

//     return (
//         <Slider>
//             <PrevButton onClick={prevSlide}>&#10094;</PrevButton>
//             <NextButton onClick={nextSlide}>&#10095;</NextButton>
//             {images.map( (image, idx ) => (
//                 <Slide className={idx===current ? 'active' : ''} key={idx}>
//                     {idx === current && <Image src={image} alt='picture' />}
//                 </Slide>
//             ))}
//         </Slider>
//     );
// };

// export default ImageSliderMini;
import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";

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

const Slider = styled.section`
  position: relative;
  overflow: hidden;
  height: 100%;
  max-height: 400px;

  ${theme.media.mobile`
    max-height: 90px;
    height: 90px;
    width: 100%;
  `}

  ${theme.media.tablet`
    max-height: 180px;
  `}
`;

const Slide = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity ease-in-out 1s;

  &.active {
    opacity: 1;
  }
  ${theme.media.mobile`
  width: 72px;
    height: 90px;
  `}

  ${theme.media.tablet`
  width: 72px;
    height: 90px;
  `}
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${theme.media.mobile`
  width: 72px;
    height: 90px;
  `}

  ${theme.media.tablet`
  width: 72px;
    height: 90px;
  `}
`;

const Button = styled.button`
  all: unset; /* 기본 버튼 스타일 제거 */
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 10px;
  font-size: 24px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }

  ${theme.media.mobile`
    font-size: 9px;
    padding: 2px;
  `}

  ${theme.media.tablet`
    font-size: 15px;
    padding: 2px;
  `}
`;

const PrevButton = styled(Button)`
  left: 2px;
`;

const NextButton = styled(Button)`
  right: 2px;
`;

const ImageSliderMini = ({ images }) => {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  const nextSlider = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  useEffect(() => {
    const interval = setInterval(nextSlider, 5000);
    return () => clearInterval(interval);
  }, [current]);

  return (
    <Slider>
      <PrevButton onClick={prevSlide}>&#10094;</PrevButton>
      <NextButton onClick={nextSlide}>&#10095;</NextButton>
      {images.map((image, idx) => (
        <Slide className={idx === current ? "active" : ""} key={idx}>
          {idx === current && <Image src={image} alt="picture" />}
        </Slide>
      ))}
    </Slider>
  );
};

export default ImageSliderMini;
