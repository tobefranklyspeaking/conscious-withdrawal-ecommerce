import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Star from './Star.jsx';

const Input = styled.input`
  display: none;
`;
// If rendering Stars to display an already extant rating, pass the rating in with
// props currentRating={3.5} (or whatever).
function Stars({ currentRating , setCurrentOverallRating }) {
  const [rating, setRating] = useState(currentRating || null);
  const [hover, setHover] = useState(currentRating || null);

  useEffect(() => {
    setRating(currentRating);
  }, [currentRating])

  return (
    <>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label key={`star${i}`}
          onMouseEnter={() => setHover(currentRating || ratingValue)}
          onMouseLeave={() => setHover(currentRating || null)}
          >
            <Input
              type='radio'
              name='rating'
              value={ratingValue}
              onClick={(e) => {setRating(currentRating || ratingValue); if(setCurrentOverallRating) {setCurrentOverallRating(ratingValue);}}}
              />
            <Star
              className='star'
              color={ratingValue <= (hover || rating) ? 'hsla(0, 0%, 30%, 1)' : 'transparent'}
            />
          </label>
        );
      })}
    </>
  )
};

export default Stars;