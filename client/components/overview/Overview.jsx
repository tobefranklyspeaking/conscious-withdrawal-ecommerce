import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import Carousel from '../shared/Carousel.jsx'
import Stars from '../shared/Stars.jsx';
import Dropdown from '../shared/Dropdown.jsx';
import Button from '../shared/Button.jsx';
import { FaRegHeart, FaCheck, FaPlus } from 'react-icons/fa'
//component styles
const OverviewWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  display: grid;
  grid-template-columns: 1fr minmax(150px, 40%);
  margin-bottom: 1rem;
`;

const Banner = styled.div`
  height: 2rem;
  grid-column: 1 / span 2;
  text-transform: uppercase;
  font-style: italic;
  vertical-align: middle;
  display: grid;
  place-items: center;
`;

//right side elements
const Slogan = styled.h2`
  margin-top: 1rem;
  margin-left: 10%;
  width: 90%;
  align-self: end;
  color: #3D4849;
`;
const Description = styled.div`
  margin-left: 10%;
  width: 90%;
  align-self: end;
`;

//left side elements
const StarsWrapper = styled.div`
  margin-top: 2rem;
  font-size: .8rem;
  display: flex;
  & > a {
    margin-left: 1rem;
  }
`;
const Category = styled.div`
  padding: .5rem 0;
  text-transform: uppercase;
  color: grey;
`;
const Name = styled.div`
  font-size: 36px;
  font-weight: 700;
  color: #3D4849;
`;
const Price = styled.div`
  margin: 1rem 0;
`;
const ButtonRow1 = styled.div`
  margin-top: 1rem;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ButtonRow2 = styled.div`
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const StyleHeader = styled.div`
  margin-top: -1rem;
  & > h4 {
    display: inline-block;
  }
`;
const StyleSelector = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-row-gap: 1rem;
  width: 80%;
`;
const StyleContainer = styled.div`
  border: 1px solid black;
  border-radius: 50%;
  height: 3.75rem;
  width: 3.75rem;
  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`;

const AddToBag = styled.button``;
const Fav = styled.button``;
const FeatureChecklist = styled.div`
  margin-top: 1.5rem;
  margin-left: 1rem;
  display: flex;
  flex-flow: column nowrap;
`;

const Column1 = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;
const Column2 = styled.div`
  display: flex;
  flex-flow: column nowrap;
  padding-left: 1rem;
`;

const Overview = ({ current }) => {
  const [styles, updateStyles] = useState([]);
  const [currentStyle, updateCurrentStyle] = useState({});
  const [photos, updatePhotos] = useState([]);
  const [thumbnails, updateThumbnails] = useState([]);
  //fetches styles and sets default to first style based on current product on mount
  useEffect(async () => {
    try {
        if(current.id) {
          let res = await fetch(`/products/${current.id}/styles`);
          let arr = await res.json();
          // console.log('arr.results here', arr.results);
          updateStyles(arr.results);
          updateCurrentStyle(arr.results[0]);
        }
    } catch (err) {
      console.error('err fetching styles', err);
    }
  },[current]);

  // updates photos for carousel on change to current style to avoid type errors
  useEffect(() => {
    if(currentStyle.photos) {
      let newPhotos = currentStyle.photos.map(photo => photo.url);
      let newThumbnails = currentStyle.photos.map(photo => photo.thumbnail_url);
      updatePhotos(newPhotos);
      updateThumbnails(newThumbnails);
    }
  }, [currentStyle]);

  return (
    <>
      <OverviewWrapper>
        <Banner>SITE-WIDE ANNOUCEMENT MESSAGE!</Banner>
        <Column1>
          <Carousel urls={photos}/>
          <Slogan>{current.slogan}</Slogan>
          <Description>{current.description}</Description>
        </Column1>
        <Column2>
        <StarsWrapper>
          <Stars />
          <a href="#" style={{color: 'grey'}}>Read all reviews</a>
        </StarsWrapper>
          <Category>{current.category}</Category>
          <Name>{current.name}</Name>
          <Price>{'$' + current.default_price}</Price>
          <StyleHeader> <h4>STYLE ></h4> SELECTED STYLE</StyleHeader>
          <StyleSelector>
            {thumbnails.map((nail, i) => (
            <StyleContainer key={i}>
              <img src={nail}/>
            </StyleContainer>
            ))}
          </StyleSelector>
          <ButtonRow1>
            <Dropdown options={['#']} title="SELECT SIZE" width="60%"/>
            <Dropdown options={['#']} title="1"/>
          </ButtonRow1>
          <ButtonRow2>
            <Button height="4rem" width="70%">ADD TO BAG<FaPlus /></Button>
            <Button height="4rem" width="3rem"><FaRegHeart/></Button>
          </ButtonRow2>
          <FeatureChecklist>
            <div><FaCheck /> GMO and Pesticide-free</div>
            <div><FaCheck /> Where can I find this in the product data?</div>
            <div><FaCheck /> I have no clue</div>
            <div><FaCheck /> CSS why</div>
          </FeatureChecklist>
        </Column2>
      </OverviewWrapper>
    </>
  );
}

export default Overview;
