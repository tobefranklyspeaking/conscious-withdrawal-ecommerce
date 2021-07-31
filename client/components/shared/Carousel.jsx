import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

//component styles
const SlideWrapper = styled.div`
  box-sizing: border-box;
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
  box-sizing: border-box;
  position: absolute;
  top: 50%;
`;

const RightArrowWrapper = styled.div`
  height: 15px;
  width: 15px;
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: calc(100% - 15px);
`;

const CarouselWrapper = styled.div`
  margin-left: 20px;
  box-sizing: border-box;
  position: relative;
  width: 25%;
  height: 25%;
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
      (<LeftArrowWrapper onClick={clickHandler}>
        <AiOutlineArrowLeft />
      </LeftArrowWrapper>) :
      (<RightArrowWrapper onClick={clickHandler}>
        <AiOutlineArrowRight />
      </RightArrowWrapper>)
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
