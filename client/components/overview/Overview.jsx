import React from 'react';
import styled from "styled-components";
import Carousel from '../shared/Carousel.jsx'
//component styles
const OverviewWrapper = styled.div`
  background-color: LightGray;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  display: grid;
  grid-template-columns: 1fr minmax(150px, 40%);
  margin-bottom: 20px;
`;

//right side elements
const Description = styled.div`
  margin-top: 20px;
  height: 200px;
  margin-left: 10%;
  width: 90%;
  align-self: end;
  border: 1px solid black;
`;

//left side elements
const Stars = styled.div`
  margin-top: 40px;
  height: 40px;
  border: 1px solid black;
`;
const Category = styled.div``;
const Name = styled.div`
  font-size: 24px;
  font-weight: 700;
`;
const Price = styled.div``;
const StyleSelector = styled.div``;
const SizeButton = styled.button``;
const QtyButton = styled.button``;
const AddToBag = styled.button``;
const Fav = styled.button``;
const BarChecklist = styled.div``;

const Column1 = styled.div`
  border: 1px solid black;
  display: flex;
  flex-flow: column nowrap;
`;
const Column2 = styled.div`
  border: 1px solid blue;
  display: flex;
  flex-flow: column nowrap;
`;

const Overview = ({ current }) => {

  return (
    <>
      <OverviewWrapper>
        <Column1>
          <h1>Overview</h1>
          <Carousel urls={['#']}/>
          <Description>Description here</Description>
        </Column1>
        <Column2>
          <Stars>Stars here</Stars>
          <Category>CATEGORY</Category>
          <Name>EXPANDED PRODUCT NAME</Name>
        </Column2>
      </OverviewWrapper>
    </>
  );
}

export default Overview;
