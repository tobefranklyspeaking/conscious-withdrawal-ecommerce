import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ProductCard from './ProductCard.jsx';
import axios from 'axios';

const MyOutfitContainer = styled.section`
  margin: 80px 0;

  .section-title {
    color: hsla(0, 0%, 30%, 1);
    text-transform: uppercase;
    margin-top: 30px;
    margin-bottom: 10px;
  }
  .cards-container {
    display: flex;
  }
`;

export default () => {
  const [myOutfit, setMyOutfit] = useState();

  return (
    <MyOutfitContainer>
      <h1 className='section-title'>My Outfit</h1>
      <div className='cards-container'>
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </MyOutfitContainer>
  )
}