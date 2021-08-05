import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import Stars from '../shared/Stars.jsx';
import Star from '../shared/Star.jsx';
import axios from 'axios';
import getAverageRating from '../shared/getAverageRating.js';

const Card = styled.div`
  border: 1px solid black;
  width: 256px;
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
    ${props => props.img
      ? css`background: url(${props.img}) no-repeat center;`
      : `background: hsla(0, 0%, 90%, 1);`}
    background-size: cover;
    color: hsla(0, 0%, 60%, 1);
    text-transform: uppercase;
    text-align: center;
  }
  .no-img {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
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

export default ({ productID }) => {

const loadingState = {
    category: 'Loading...',
    name: 'Loading...',
    default_price: 'Loading...',
  };

  const [productInfo, setProductInfo] = useState(loadingState);
  const [productImage, setProductImage] = useState('');
  const [productRating, setProductRating] = useState(0);

  useEffect(() => {
    if (productID) {
      axios(`/products/${productID}`)
      .then((response) => {
        setProductInfo(response.data)
      })
      .catch((error) => console.log(error));
      axios(`/products/${productID}/styles`)
      .then((response) => {
        setProductImage(response.data.results[0].photos[0].thumbnail_url)
      })
      .catch((error) => console.log(error));
      axios(`/reviews/meta/?product_id=${productID}`)
      .then((response) => {setProductRating(getAverageRating(response.data.ratings))
      })
      .catch((error) => console.log(error));
    }
  }, [])

  return (
    <Card className='card' img={productImage}>
      <div className='image'>
        <div className='add-to-outfit'><Star color='hsla(0, 0%, 100%, .6)'/></div>
        {productImage === ''
          ? 'Loading...'
          : productImage === null
          ? <div className='no-img'><div>No Image Available For This Product</div></div>
          : ''}
      </div>
      <div className='info'>
        <h3 className='category'>{productInfo.category}</h3>
        <h2 className='expanded-name'>{productInfo.name}</h2>
        <h4 className='price'>${productInfo.default_price}</h4>
      </div>
      <div className='rating'>
        {isNaN(productRating) ? 'This product is not yet rated.' : <Stars currentRating={productRating} />}
      </div>
    </Card>
  )
};