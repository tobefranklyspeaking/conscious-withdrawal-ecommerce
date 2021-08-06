import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai';

//higher order component: pass it an array of components to render, as well as an orientation ('row' or 'column'). It also takes an optional count for number of components to display at one time. Going back and forth on adding a clickHandler prop because I figure that can be added in the components array before you pass them in; can definitely change that if there's demand!

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

const CarouselWrapper = styled.div`
  display: flex;
  flex-direction: ${props => props.orientation};
  align-items: center;
  justify-content: space-evenly;
`;

const ModularCarousel = ({ components=defaultComponents, orientation='row', count=3}) => {

  //state for which components out of the total components prop to display
  const [displayed, updateDisplayed] = useState(components.slice(0, count));

  useEffect(() => {
    updateDisplayed(components.slice(0, count));
  }, [components])


  //two handlers to shift which items are currently being displayed by updating state
  const decrementDisplayed = (e) => {
    let firstIndex = components.indexOf(displayed[0]);
    if (firstIndex !== 0) {
      let newDisplayed = components.slice(firstIndex-1, count);
      updateDisplayed(newDisplayed);
    }

  };
  const incrementDisplayed = (e) => {
    let firstIndex = components.indexOf(displayed[0]);
    let lastIndex = components.indexOf(displayed[displayed.length-1]);

    if (lastIndex < components.length-1) {
      let newDisplayed = components.slice(firstIndex+1, count);
      updateDisplayed(newDisplayed);
    }
  };

  //renders right set of arrows based on orientation string value
  return (
  <CarouselWrapper orientation={orientation}>
    <ArrowWrapper onClick={decrementDisplayed}>{orientation === 'row' ? <AiOutlineArrowLeft /> : <AiOutlineArrowUp />}</ArrowWrapper>
    {displayed}
    <ArrowWrapper onClick={incrementDisplayed}>{orientation === 'row' ? <AiOutlineArrowRight /> : <AiOutlineArrowDown />}</ArrowWrapper>
  </CarouselWrapper>);
};

export default ModularCarousel;