import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai';

//higher order component: pass it an array of components to render, as well as an orientation ('row' or 'column')

//necessary styles
const ArrowWrapper = styled.div`
  height: 15px;
  width: 15px;
`;
const SampleCard = styled.div`
  width: 8rem;
  height: 8rem;
  border: 1px solid black;
`;

//test data
const defaultComponents = [
  <SampleCard />,
  <SampleCard />,
  <SampleCard />
];


const ModularCarousel = ({ components=defaultComponents, orientation='row', clickHandler}) => {
  //this style inside component to allow for passing props
  const CarouselWrapper = styled.div`
    display: flex;
    flex-direction: ${orientation};
    align-items: center;
    justify-content: center;
  `;

  //renders right set of arrows based on orientation string value
  return (
  <CarouselWrapper>
    <ArrowWrapper>{orientation === 'row' ? <AiOutlineArrowLeft /> : <AiOutlineArrowUp />}</ArrowWrapper>
    {components}
    <ArrowWrapper>{orientation === 'row' ? <AiOutlineArrowRight /> : <AiOutlineArrowDown />}</ArrowWrapper>
  </CarouselWrapper>);
};

export default ModularCarousel;