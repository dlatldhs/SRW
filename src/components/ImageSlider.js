import React, {useEffect, useState} from "react";
import styled from "styled-components";

const Slider = styled.section`
    position: relative;
    width: 100%;
    // height: 500px;
    overflow: hidden;
    // top: 136px;
    height: 100%;
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
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const Button = styled.button`
    all: unset; /* 기본 버튼 스타일 제거 */
    cursor: pointer;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
    background-color: rgba(0,0,0,0.5);
    color: white;
    padding: 10px;
    font-size: 24px;

    &:hover {
        background-color: rgba(0,0,0,0.8);
    }
`;

const PrevButton = styled(Button)`
    left: 10px;
`;

const NextButton = styled(Button)`
    right: 10px;
`;


const ImageSlider = ({images}) => {

    const [ current, setCurrent ] = useState(0);
    const length = images.length;

    const nextSlider = () => {
        setCurrent(
            current === length - 1 ? 0 : current + 1
        );
    }

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
            {images.map( (image, idx ) => (
                <Slide className={idx===current ? 'active' : ''} key={idx}>
                    {idx === current && <Image src={image} alt='picture' />}
                </Slide>
            ))}
        </Slider>
    );
};

export default ImageSlider;