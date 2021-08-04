import React, { useState } from 'react';
import styled from 'styled-components';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import Button from './Button.jsx';
//styling component elements
const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  width: ${props => props.width || '8rem'};
  height: 4rem;
  z-index: 999;
`;

const Dropdown = ({ options=['#'], title, width, callback }) => {
  //setting state
  const [opt, setOpt] = useState(options);
  const [isOpen, setOpen] = useState(false);
  const [choice, setChoice] = useState('');


  return (
    <Wrapper width={width}>
    {/*title button -> switches to choice */}
      <Button onClick={(e) => setOpen(!isOpen)}>
    {choice.length ? choice : title}{isOpen ? <FaAngleUp size="1rem"/> : <FaAngleDown size="1rem"/> }
    </Button>
    {/*iterates over options array and generates a button for each */}
      {isOpen && options.map((option, i) => (
        <Button key={i} onClick={(e) => {
          setChoice(option);
          setOpen(!isOpen);
          callback(option);
        }}>
        {option}
        </Button>
      ))}
    </Wrapper>
  );
};

export default Dropdown;
