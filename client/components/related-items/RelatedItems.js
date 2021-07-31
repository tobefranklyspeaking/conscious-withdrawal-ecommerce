import React from 'react';
import styled from 'styled-components';
import ProductCard from './ProductCard';

const RelatedProductsContainer = styled.section`
  margin: auto 0;

  * {
    font-family: sans-serif;
  }
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

const RelatedProducts = () => {

  return (
    <RelatedProductsContainer>
      <h1 className='section-title'>Related Products</h1>
      <div className='cards-container'>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </RelatedProductsContainer>
  );
}

export default RelatedProducts;