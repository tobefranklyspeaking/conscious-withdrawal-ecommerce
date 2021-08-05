import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { FaCircle, FaLongArrowAltDown } from "react-icons/fa";
import { VscTriangleDown } from "react-icons/vsc";

const CharWrapper = styled.div`
height: 20px;
width: 100%;
background-color: transparent;
display: flex;
border-bottom: 9px solid gray;
`;

const Icon = styled.div`
height: 100%;
width: ${props => props.per}%;
display: inline-block;
  text-align: right;
  justify-content: right;
`;
// const Triangle = styled.div`
// width: 2rem;
// margin-left: auto;
// margin-top: auto;
// margin-bottom: auto;
// margin-right: 0;
// height: 15px;
// border: 2px solid green;
// justify-content: right;
// `;
const Characteristic = styled.div`
text-align: left;
`;

const Descriptions = styled.div`
margin: .7rem 0;
display: flex;
justify-content: space-between;
font-size: 12px;
font-weight: lighter;
`;
const Least = styled.div`

`;

const Most = styled.div`

`;

const Middle = styled.div`

`;
// const Arrow = styled.img`
// border: 2px solid pink;
// object-fit: contain;
// `;

// const Container = styled.div`
//   background: #fff;
//   width: 100%;
//   padding-top: 10px;
//   padding-bottom: 5px;
//   border: 3px solid orange;
//   .progressbar li {
//     list-style-type: none;
//     width: 20%;
//     float: left;
//     font-size: 12px;
//     position: relative;
//     text-align: center;
//     text-transform: uppercase;
//     color: #7d7d7d;
//   }
// `;



const CharRating = ({char}) => {
  //console.log('---',percentage);
  //console.log('char in char-rating: ', char);

 const getWidth = (value) => {
    let newVal = Math.round(Number(value));
    if (newVal === 1) {
      return 1;
    } else if (newVal === 2) {
      return 35;
    } else if (newVal === 3) {
      return 55;
    } else if (newVal === 4) {
      return 75;
    } else if (newVal === 5) {
      return 99;
    }
  };

  return (
    <>
    {
      (char.Size) &&
      <>
    <Characteristic>Size</Characteristic>
    <CharWrapper>
      <Icon per={getWidth(char.Size.value)}>
        <VscTriangleDown color="black" size="2.5rem"/>
        </Icon>
    </CharWrapper>
    <Descriptions>
      <Least>Too Small </Least>
      <Middle>Perfect</Middle>
      <Most>Too Big </Most>
    </Descriptions>
    </>
    }

{
      (char.Width) &&
      <>
    <Characteristic>Width</Characteristic>
    <CharWrapper>
      <Icon per={getWidth(char.Width.value)}>
        <VscTriangleDown color="black" size="2.5rem"/>
        </Icon>
    </CharWrapper>
    <Descriptions>
      <Least>Too Narrow </Least>
      <Middle>Perfect</Middle>
      <Most>Too Wide </Most>
    </Descriptions>
    </>
    }

{
      (char.Comfort) &&
      <>
    <Characteristic>Comfort</Characteristic>
    <CharWrapper>
      <Icon per={getWidth(char.Comfort.value)}>
        <VscTriangleDown color="black" size="2.5rem"/>
        </Icon>
    </CharWrapper>
    <Descriptions>
      <Least>Uncomfortable </Least>
      <Most>Perfect </Most>
    </Descriptions>
    </>
    }

{
      (char.Quality) &&
      <>
    <Characteristic>Quality</Characteristic>
    <CharWrapper>
      <Icon per={getWidth(char.Quality.value)}>
        <VscTriangleDown color="black" size="2.5rem"/>
        </Icon>
    </CharWrapper>
    <Descriptions>
      <Least>Poor </Least>
      <Most>Perfect </Most>
    </Descriptions>
    </>
    }

{
      (char.Length) &&
      <>
    <Characteristic>Length</Characteristic>
    <CharWrapper>
      <Icon per={getWidth(char.Length.value)}>
        <VscTriangleDown color="black" size="2.5rem"/>
        </Icon>
    </CharWrapper>
    <Descriptions>
      <Least>Runs Short </Least>
      <Middle>Perfect</Middle>
      <Most>Runs Long </Most>
    </Descriptions>
    </>
    }

{
      (char.Fit) &&
      <>
    <Characteristic>Fit</Characteristic>
    <CharWrapper>
      <Icon per={getWidth(char.Fit.value)}>
        <VscTriangleDown color="black" size="2.5rem"/>
        </Icon>
    </CharWrapper>
    <Descriptions>
      <Least>Runs Tight </Least>
      <Middle>Perfect</Middle>
      <Most>Runs Long </Most>
    </Descriptions>
    </>
    }
    </>
  );
};

export default CharRating;

/*
 <Container className='line-container'>
        <ul className='progressbar'>
          <li className='active'>star 1</li>
          <li>star 2</li>
          <li>star 2</li>
          <li>star 2</li>
          <li>star 2</li>
        </ul>

      </Container>


              <Triangle><VscTriangleDown size="1.5rem"/></Triangle>

*/

