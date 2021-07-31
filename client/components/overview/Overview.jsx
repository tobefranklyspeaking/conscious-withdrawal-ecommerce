import React from 'react';
import styled from "styled-components";
import Carousel from '../shared/Carousel.jsx'
import Stars from '../shared/Stars.jsx';
//component styles
const OverviewWrapper = styled.div`
  border: 1px solid coral;
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
const StarsWrapper = styled.div`
  margin-top: 7rem;
  & > a {
    margin-left: 1rem;
  }
`;

const Category = styled.div`
  border: 1px solid black;
  padding: .5rem 0;
`;
const Name = styled.div`
  border; 1px solid black;
  font-size: 24px;
  font-weight: 700;
  height: 5rem;

`;
const Price = styled.div`
  border: 1px solid black;
`;
const ButtonRow1 = styled.div`
  height: 5rem;
  display: flex;
  border: 1px solid black;
  justify-content: center;
`;
const ButtonRow2 = styled.div`
  height: 5rem;
  display: flex;
  border: 1px solid black;
`;
const StyleSelector = styled.div`
  border: 1px solid black;
  height: 10rem;
`;
const SizeButton = styled.button`
  border: 1px solid black;
  margin: 0 auto;
`;
const QtyButton = styled.button`
  border: 1px solid black;
  margin: 0 auto;
`;
const AddToBag = styled.button``;
const Fav = styled.button``;
const BarChecklist = styled.div`
  border: 1px solid black;
`;

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
  console.log('this is the current obj ---', current);
  return (
    <>
      <OverviewWrapper>
        <Column1>
          <h1>Overview</h1>
          <Carousel urls={['#']}/>
          <Description>Description here</Description>
        </Column1>
        <Column2>
        <StarsWrapper>
          <Stars />
          <a href="#" style={{color: 'grey'}}>Read all reviews</a>
        </StarsWrapper>
          <Category>{current.category}</Category>
          <Name>{current.name}</Name>
          <Price>{current.default_price}</Price>
          <StyleSelector>Style Selector here</StyleSelector>
          <ButtonRow1>
            <SizeButton />
            <QtyButton />
          </ButtonRow1>
          <ButtonRow2>add + fave here</ButtonRow2>
          <BarChecklist>Checklist Here</BarChecklist>
        </Column2>
      </OverviewWrapper>
    </>
  );
}

export default Overview;
