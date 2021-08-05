import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import ModularCarousel from './Modular-Carousel.jsx'
//component styles
const SlideWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 5rem;
  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const LeftArrowWrapper = styled.div`
  height: 15px;
  width: 15px;
  /* position: absolute;
  top: 50%; */
`;

const RightArrowWrapper = styled.div`
  height: 15px;
  width: 15px;
  /* position: absolute;
  top: 50%;
  left: calc(100% - 15px); */
`;

const CarouselWrapper = styled.div`
  position: relative;
  width: auto;
  height: ${props => props.height || '65vh'};
  border: 1px solid black;
  display: flex;
  align-items: center;
`;

//slide subcomponent - image itself
const Slide = ({ url }) => {
  return (
    <SlideWrapper>
      <img src={url} alt="photo of clothing"/>
    </SlideWrapper>);
};

//arrow subcomponent for nav
const Arrow = ({ direction, clickHandler}) => {
  return (
    direction === 'Left' ?
      (<LeftArrowWrapper onClick={clickHandler}>
        <AiOutlineArrowLeft />
      </LeftArrowWrapper>) :
      (<RightArrowWrapper onClick={clickHandler}>
        <AiOutlineArrowRight />
      </RightArrowWrapper>)
    );
}

/************ PRIMARY COMPONENT HERE ************/
const Carousel = ({ urls, height, thumbnails}) => {
  //state: index of images based on current item
  const [index, setIndex] = useState(0);
  const [modComponents, setModComponents] = useState([]);
  useEffect(() => {
    let newThumbnails = thumbnails.map(url => (<img src={url}/>))
    setModComponents(newThumbnails);

  }, [thumbnails]);


  //event handlers to switch carousel to next/previous image
  const previousSlide = (e) => {
    if (index >= 1) {
      setIndex(index - 1);
    }
  };
  const nextSlide = (e) => {
    if (index < urls.length - 1) {
      setIndex(index + 1);
    }
  };

  return (
    <CarouselWrapper height={height}>
      <ModularCarousel orientation="column" components={modComponents}/>
      <Arrow direction="Left" clickHandler={previousSlide}/>
      <Slide url={urls[index]}/>
      <Arrow direction="Right" clickHandler={nextSlide}/>
    </CarouselWrapper>);
};

export default Carousel;
