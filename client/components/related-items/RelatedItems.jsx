import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ProductCard from './ProductCard.jsx';
import axios from 'axios';

const RelatedProductsContainer = styled.section`
  margin: 80px 0;

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

const RelatedProducts = ({ current }) => {
  const [relatedProductsList, setRelatedProducts] = useState([]);

  useEffect(() => {
    if (current.id) {
      axios(`/products/${current.id}/related`)
        .then((response) => {
          setRelatedProducts(response.data);
        })
        .catch((error) => console.log(error));
    }
  }, [current])

  return (
    <RelatedProductsContainer>
      <h1 className='section-title'>Related Products</h1>
      <div className='cards-container'>
        {relatedProductsList && relatedProductsList.map(
          product => <ProductCard key={product} productID={product} />
        )}
      </div>
    </RelatedProductsContainer>
  );
}

export default RelatedProducts;