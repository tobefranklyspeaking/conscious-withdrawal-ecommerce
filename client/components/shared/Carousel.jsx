import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

//component styles
const SlideWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ArrowWrapper = styled.div`
  box-sizing: border-box;
  position: absolute;
  top: 50%
`;

const CarouselWrapper = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 50%;
  height: 50%;
  border: 1px solid black;
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
      (<ArrowWrapper onClick={clickHandler}>
        <AiOutlineArrowLeft />  
      </ArrowWrapper>) : 
      (<ArrowWrapper onClick={clickHandler}>
        <AiOutlineArrowRight />
      </ArrowWrapper>)
    );
}
/************ PRIMARY COMPONENT HERE ************/
const Carousel = ({ urls }) => {
  //state: index of images based on current item
  const [index, setIndex] = useState(0); 

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
    <CarouselWrapper>
      <Arrow direction="Left" clickHandler={previousSlide}/>
      <Slide url={urls[index]}/>
      <Arrow direction="Right" clickHandler={nextSlide}/> 
    </CarouselWrapper>);
};

export default Carousel;
