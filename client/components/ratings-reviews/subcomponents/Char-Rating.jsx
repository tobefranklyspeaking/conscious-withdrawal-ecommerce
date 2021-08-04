import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { VscTriangleDown } from "react-icons/vsc";


// const CharWrapper = styled.div`
// height: 10px;
// width: 60%;
// background-color: grey;
// margin: 8px;
// float: right;
// border: 2px solid blue;

// `;

// const Icon = styled.div`
// height: 100%;
//   width: ${props => props.per}%;
//   background-color: green;
//   text-align: right;
// `;

// const Arrow = styled.img`
// border: 2px solid pink;
// object-fit: contain;
// `;

const Container = styled.div`
  background: #fff;
  width: 100%;
  padding-top: 10px;
  padding-bottom: 5px;
  border: 3px solid orange;
  .progressbar li {
    list-style-type: none;
    width: 20%;
    float: left;
    font-size: 12px;
    position: relative;
    text-align: center;
    text-transform: uppercase;
    color: #7d7d7d;
  }
`;


const CharRating = ({ percentage }) => {
  //console.log('---',percentage);

  return (
    <>
      <Container className='line-container'>
        <ul className='progressbar'>
          <li className='active'>star 1</li>
          <li>star 2</li>
          <li>star 2</li>
          <li>star 2</li>
          <li>star 2</li>
        </ul>

      </Container>
    </>
  );
};

export default CharRating;

{/* <Icon per={50}> */ }

