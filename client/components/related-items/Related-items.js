import React from 'react';
import styled from "styled-components";
import Stars from '../shared/Stars.jsx';

const RelatedStyle = styled.div`
  background-color: LightGray;
  margin-left: auto;
  margin-right: auto;
`;

const RelatedProducts = () => {

  return (
    <>
      <RelatedStyle>
        <h1>Related Items</h1>
      </RelatedStyle>
    </>
  );
}

export default RelatedProducts;