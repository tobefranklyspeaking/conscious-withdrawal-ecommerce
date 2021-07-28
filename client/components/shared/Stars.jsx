import React, { useState } from 'react';
import styled from 'styled-components';
import Star from './Star.jsx';

const Input = styled.input`
  display: none;
`;

function Stars() {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label key={`star${i}`}>
            <Input
              type='radio'
              name='rating'
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
            />
            <Star
              className='star'
              color={ratingValue <= (hover || rating) ? 'black' : 'transparent'}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
    </>
  )
};

export default Stars;