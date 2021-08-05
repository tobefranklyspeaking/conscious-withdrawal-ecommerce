import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai';


const LeftArrowWrapper = styled.div`
  height: 15px;
  width: 15px;
  position: absolute;
  top: 50%;
`;
const RightArrowWrapper = styled.div`
  height: 15px;
  width: 15px;
  position: absolute;
  top: 50%;
  left: calc(100% - 15px);
`;
const UpArrowWrapper = styled.div`
  height: 15px;
  width: 15px;
  position: absolute;
  left: 50%;
`;
const DownArrowWrapper = styled.div`
  height: 15px;
  width: 15px;
  position: absolute;
  top: calc(100% - 15px);
  left: 50%;
`;



//higher order component: pass it an array of components to render, as well as an orientation ('row' or 'column')
const mCarousel = ({ components=[], orientation='row'}) => {
  const CarouselWrapper = styled.div`
    display: flex;
    flex-direction: ${orientation};
  `;

  return (
  <CarouselWrapper>
    {orientation === 'row' ?
    <LeftArrowWrapper><AiOutlineArrowLeft /></LeftArrowWrapper> :
    <UpArrowWrapper><AiOutlineArrowUp /></UpArrowWrapper>}
    {components}
    {orientation === 'row' ?
    <RightArrowWrapper><AiOutlineArrowRight /></RightArrowWrapper> :
    <DownArrowWrapper><AiOutlineArrowDown /></DownArrowWrapper>}
  </CarouselWrapper>);
};

export default mCarousel;