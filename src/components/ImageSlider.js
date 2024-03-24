import React, {useEffect, useState} from "react";
import styled from "styled-components";

const Slider = styled.section`
    position: relative;
    width: 100%;
    height: 500px; /* 원하는 높이 조절 */
    overflow: hidden;
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

const ImageSlider = ({images}) => {

    const [ current, setCurrent ] = useState(0);
    const length = images.length;

    const nextSlider = () => {
        setCurrent(
            current === length - 1 ? 0 : current + 1
        );
    }

    useEffect(() => {
        const interval = setInterval(nextSlider, 5000);
        return () => clearInterval(interval);
    }, [current]);

    return (
        <Slider>
            {images.map( (image, idx ) => (
                <Slide className={idx===current ? 'active' : ''} key={idx}>
                    {idx === current && <Image src={image} alt='picture' />}
                </Slide>
            ))}
        </Slider>
    );
};

export default ImageSlider;