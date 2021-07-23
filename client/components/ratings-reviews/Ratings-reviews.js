import React from 'react';
import styled from "styled-components";

const RatingsStyle = styled.div`
  background-color: LightGray;
  margin-left: auto;
  margin-right: auto;
`;

const Ratings = () => {

  return (
    <>
      <RatingsStyle>
        <h1>Ratings</h1>
      </RatingsStyle>
    </>
  );
}

export default Ratings;