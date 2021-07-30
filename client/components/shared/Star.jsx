import React from 'react';
import styled from 'styled-components';

const starSVG = ({className}) => (
  <svg className={className} color='transparent' viewBox='0 0 51 48'>
    <path fill='currentColor' stroke='black' strokeWidth='2'
      d='m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z'/>
  </svg>
);

export default styled(starSVG)`
  color: ${({ color }) => color ? color : 'transparent' };
  width: 1rem;
  height: auto;
  margin: 0 .06rem;
`;