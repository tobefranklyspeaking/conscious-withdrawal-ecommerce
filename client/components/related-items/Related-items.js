import React from 'react';
import styled from "styled-components";
import Stars from '../shared/Stars.jsx';
import Star from '../shared/Star.jsx';

const RelatedProductsContainer = styled.section`
  * {
    font-family: sans-serif;
  }
  margin: auto 0;
  .card-container {
    display: flex;
  }
  .section-title {
    color: hsla(0, 0%, 30%, 1);
    text-transform: uppercase;
    margin-top: 30px;
    margin-bottom: 10px;
  }
  .card {
    border: 1px solid black;
    max-width: 256px;
    margin: 0 12px;
  }
  .card:first-child {
    margin-left: 0;
  }
  .card:last-child {
    margin-right: 0;
  }
  .image {
    position: relative;
    width: 100%;
    height: 254px;
    background-color: hsla(0, 0%, 90%, 1);
    font-size: 30px;
    color: hsla(0, 0%, 60%, 1);
  }
  .add-to-outfit {
    position: absolute;
    margin: 0;
    padding: 0;
    right: 4%;
    top: .5%;
  }
  .info * {
    margin: 0;
    padding: 0;
  }
  .info {
    padding: 0;
    margin: 0;
    color: hsla(0, 0%, 30%, 1);
  }
  .info, .rating {
    margin: 8px;
  }
  .category {
    text-transform: uppercase;
    font-size: .7em;
    margin-bottom: 10px;
  }
  .expanded-name {
    font-weight: bolder;
    font-size: 1em;
    margin-bottom: 10px;
  }
  .price {
    margin-top: 10px;
    font-size: .7em;
    margin-bottom: 10px;
  }
`;

const RelatedProducts = () => {

  return (
    <RelatedProductsContainer>
      <h1 className='section-title'>Related Products</h1>
      <div className='card-container'>
        <div className='card'>
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
        </div>
        <div className='card'>
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
        </div>
        <div className='card'>
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
        </div>
        <div className='card'>
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
        </div>
      </div>
    </RelatedProductsContainer>
  );
}

export default RelatedProducts;