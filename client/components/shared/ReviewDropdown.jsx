import React, { useState } from 'react';
import styled from 'styled-components';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

//styling component elements
const Wrapper = styled.div`
  display: inline-block;
  height: 100%
  flex-flow: column nowrap;
  justify-content: space-around;
  width: 6rem;
  z-index: 1;
`;
const Button = styled.button`
  border: none;
  background-color: transparent;
  margin-top: 5px;
  display: flex;
  height: 2rem;
  width: 4.5rem;
  justify-content: space-evenly;
  align-items: left;
  font-weight: bold;
  ${props => (props.open === true) && `
    background-color: gray;
    `}
    z-index: 2;
`;

const ReviewDropdown = ({ options, setSort }) => {
  //setting state
  const [opt, setOpt] = useState(options);
  const [isOpen, setOpen] = useState(false);
  const [choice, setChoice] = useState('relevent');


  return (
    <Wrapper>
    {/*title button -> switches to choice */}
      <Button open={isOpen} onClick={(e) => setOpen(!isOpen)}>
    <u>{choice}</u>{isOpen ? <FaAngleUp size="1rem"/> : <FaAngleDown size="1rem"/>}
    </Button>
    {/*iterates over options array and generates a button for each */}
      {isOpen && options.map((option, i) => (
        <Button open={isOpen} key={i} onClick={(e) => {setChoice(option); setOpen(!isOpen); setSort(option)}}>
        <u>{option}</u>
        </Button>
      ))}
    </Wrapper>
  );
};

export default ReviewDropdown;


/*
choice.length ? choice : title

*/