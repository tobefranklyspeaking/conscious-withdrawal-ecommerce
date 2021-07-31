import React from 'react';
import styled from 'styled-components';
import Stars from '../shared/Stars.jsx';
import Star from '../shared/Star.jsx';

const Card = styled.div`
  border: 1px solid black;
  max-width: 256px;
  margin: 0 12px;

  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }
  .add-to-outfit, .image, .info > * {
    margin: 0;
    padding: 0;
  }
  .image {
    position: relative;
    width: 100%;
    height: 254px;
    background-color: hsla(0, 0%, 90%, 1);
    color: hsla(0, 0%, 60%, 1);
  }
  .add-to-outfit {
    position: absolute;
    right: 3.5%;
    top: 4%;
  }
  .info, .rating {
    margin: 8px;
    color: hsla(0, 0%, 30%, 1);
  }
  .category, .expanded-name, .price {
    margin-bottom: 10px;
    font-size: .7em;
  }
  .category {
    text-transform: uppercase;
  }
  .expanded-name {
    font-weight: bolder;
    font-size: 1em;
  }
`;

export default () => {
  return (
    <Card className='card'>
      <div className='image'>
        <div className='add-to-outfit'><Star /></div>
      </div>
      <div className='info'>
        <h3 className='category'>Category</h3>
        <h2 className='expanded-name'>Expanded Product Name with Extra Text</h2>
        <h4 className='price'>$$$$$$</h4>
      </div>
      <div className='rating'>
        <Stars />
      </div>
    </Card>
  )
};