import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background: transparent;
  border: 1.5px solid black;
  margin: 0 auto;
  display: flex;
  height: ${props => props.height || 'inherit'};
  width: ${props => props.width || 'inherit'};
  align-items: center;
  padding: .5rem;
  flex-flow: row nowrap;
  justify-content: space-between;
  width: 8rem;
`;

export default Button;