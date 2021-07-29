import React, { useState } from 'react';
import styled from 'styled-components';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

//styling component elements
const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  position: absolute;
  justify-content: space-around;
  width: 8rem;
`;
const Button = styled.button`
  border: none;
  background: transparent;
  margin: 0 auto;
  display: flex;
  height: 2rem;
  width: 6rem;
  justify-content: space-evenly;
  align-items: center;
  padding: .5rem;
  font-weight: 700;
`;

const ReviewDropdown = ({ options, setSort }) => {
  //setting state
  const [opt, setOpt] = useState(options);
  const [isOpen, setOpen] = useState(false);
  const [choice, setChoice] = useState('relevent');


  return (
    <Wrapper>
    {/*title button -> switches to choice */}
      <Button onClick={(e) => setOpen(!isOpen)}>
    <u>{choice}</u>{isOpen ? <FaAngleUp size="1rem"/> : <FaAngleDown size="1rem"/>}
    </Button>
    {/*iterates over options array and generates a button for each */}
      {isOpen && options.map((option, i) => (
        <Button key={i} onClick={(e) => {setChoice(option); setOpen(!isOpen); setSort(option)}}>
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