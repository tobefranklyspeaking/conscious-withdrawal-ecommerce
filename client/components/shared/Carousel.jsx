import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

const Car = styled.div``;
const SlideImage = styled.div`
  border: 1px solid black;
  width: 60%;
  height: 500px; 
`;

//slide subcomponent - image itself
const Slide = ({ url }) => {
  return (
    <SlideImage>
      <img src={url} alt="photo of clothing"/>
    </SlideImage>);
};

//arrow subcomponent for nav
const Arrow = ({direction}) => {
  return (
    <div>
      {direction === 'Left' ? <AiOutlineArrowLeft /> : <AiOutlineArrowRight/>}
    </div>); 
};

const Carousel = ({ urls }) => {
  const [index, setIndex] = useState(0); 
  return (
    <Car>
      <Arrow direction="Left"/>
      <Slide url={urls[index]}/>       
      <Arrow direction="Right" /> 
    </Car>);
};

export default Carousel;
