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
background: transparent;
border: 1px solid black;
margin: 0 auto;
display: flex;
height: 3rem;
width: 8rem;
justify-content: space-between;
align-items: center;
padding: .5rem;
`;

const Dropdown = ({ options, title }) => {
  //setting state
  const [opt, setOpt] = useState(options);
  const [isOpen, setOpen] = useState(false);
  const [choice, setChoice] = useState('');


  return (
    <Wrapper>
    {/*title button -> switches to choice */}
      <Button onClick={(e) => setOpen(!isOpen)}>
    {choice.length ? choice : title}{isOpen ? <FaAngleUp size="1rem"/> : <FaAngleDown size="1rem"/> }
    </Button>
    {/*iterates over options array and generates a button for each */}
      {isOpen && options.map((option, i) => (
        <Button key={i} onClick={(e) => {setChoice(option); setOpen(!isOpen)}}>
        {option}
        </Button>
      ))}
    </Wrapper>
  );
};

export default Dropdown;
