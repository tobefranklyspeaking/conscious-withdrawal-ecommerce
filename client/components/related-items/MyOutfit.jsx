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
  // Set up local storage if nothing cached or if it is not an array.
  try {
    JSON.parse(localStorage.getItem('myOutfit'));
    if (!Array.isArray(JSON.parse(localStorage.getItem('myOutfit')))) {
      throw Error;
    }
  }
  catch {
    localStorage.setItem('myOutfit', JSON.stringify([]));
  }

  var outfitList = JSON.parse(localStorage.getItem('myOutfit'));
  const [myOutfit, setMyOutfit] = useState(outfitList);

  // Update localStorage every time myOutfit changes.
  useEffect(() => {
    outfitList = JSON.stringify(myOutfit);
    localStorage.setItem('myOutfit', outfitList);
  }, [myOutfit]);

  return (
    <MyOutfitContainer>
      <h1 className='section-title'>My Outfit</h1>
      <div className='cards-container'>
        {!myOutfit && 'When you add items to your outfit, they will appear here!'}
        {myOutfit && myOutfit.map(product => <ProductCard key={product} productID={product} />)}
      </div>
    </MyOutfitContainer>
  )
}