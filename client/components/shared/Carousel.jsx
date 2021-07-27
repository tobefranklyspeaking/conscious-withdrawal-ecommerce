import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const Car = styled.div``;

const Slide = ({ url }) => {
  return (
    <div>
      <img src={url} alt="photo of clothing"/>
    </div>);
}

const Carousel = ({ urls }) => {
  const [index, setIndex] = useState(0); 
  return (
    <Car>
       
    </Car>);
};

export default Carousel;
