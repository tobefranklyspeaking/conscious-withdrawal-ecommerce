import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Dropdown = ({ options, title }) => {
  const [opt, setOpt] = useState(options);
  const [isOpen, setOpen] = useState(false);

  const Wrapper = styled.div`
    display: flex;
    flex-flow: column nowrap;
    position: absolute;
    justify-content: space-around;
    width: 8rem;
  `;

  const Button = styled.button`
    background: transparent;
    border-radius: .25rem;
    border: 2px solid black;
    padding: 0.25rem 1rem;
    margin: 0 auto;
    height: 50%;
    width: 75%;
  `;
  return (
    <Wrapper>
      <Button onClick={(e) => {setOpen(!isOpen)}}>{title}</Button>
      {isOpen && options.map((option, i) => (
        <Button key={i}>{option}</Button>
      ))}
    </Wrapper>

  );
};
export default Dropdown;
