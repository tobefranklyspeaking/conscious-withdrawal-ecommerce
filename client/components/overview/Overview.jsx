import React from 'react';
import styled from "styled-components";
import Carousel from '../shared/'
//component styles
const OverviewWrapper = styled.div`
  background-color: LightGray;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  display: grid;
  grid-template-columns: 1fr minmax(150px, 33%);
  margin-bottom: 30px;
`;

//right side elements
const CarouselWrapper = styled.div``;
const DescriptionWrapper = styled.div``;

//left side elements
const Stars = styled.div``;
const Category = styled.div``;
const Name = styled.div``;
const Price = styled.div``;
const StyleSelector = styled.div``;
const SizeButton = styled.button``;
const QtyButton = styled.button``;
const AddToBag = styled.button``;
const Fav = styled.button``;
const BarChecklist = styled.div``;

const Column1 = styled.div`
  border: 1px solid black;
`;
const Column2 = styled.div`
  border: 1px solid blue;
`;

const Overview = () => {

  return (
    <>
      <OverviewWrapper>
        <Column1>
          <h1>Overview</h1>
        </Column1>
        <Column2>
        </Column2>
      </OverviewWrapper>
    </>
  );
}

export default Overview;
