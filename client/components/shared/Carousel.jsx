import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

//component styles
const SlideImage = styled.div`
  border: 1px solid black;
  width: 60%;
  height: 500px; 
`;

const ArrowWrapper = styled.div`
/*must add z index here*/
`;

const CarouselWrapper = styled.div`
  display: flex;
`;
//slide subcomponent - image itself
const Slide = ({ url }) => {
  return (
    <SlideImage>
      <img src={url} alt="photo of clothing"/>
    </SlideImage>);
};

//arrow subcomponent for nav
const Arrow = ({ direction, clickHandler}) => {
  return (
    <ArrowWrapper onClick={clickHandler}>
      {direction === 'Left' ? <AiOutlineArrowLeft /> : <AiOutlineArrowRight/>}
    </ArrowWrapper>); 
};

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
