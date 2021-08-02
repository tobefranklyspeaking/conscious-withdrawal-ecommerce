import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background: transparent;
  border: 1.5px solid black;
  display: flex;
  height: ${props => props.height || 'inherit'};
  width: ${props => props.width || 'inherit'};
  align-items: center;
  padding: .5rem 1rem;
  justify-content: space-between;
  font-weight: bold;
`;

export default Button;