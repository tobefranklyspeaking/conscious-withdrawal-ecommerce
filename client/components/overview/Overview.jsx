import React, { useState, useEffect, useRef } from 'react';
import styled from "styled-components";
import Carousel from '../shared/Carousel.jsx'
import Stars from '../shared/Stars.jsx';
import getAverageRating from '../shared/getAverageRating.js';
import Dropdown from '../shared/Dropdown.jsx';
import Button from '../shared/Button.jsx';
import { FaRegHeart, FaCheck, FaPlus, FaFacebook, FaTwitter, FaPinterest } from 'react-icons/fa';
import { IconContext } from 'react-icons';
//component styles
const OverviewWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
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
const SocialButtonRow = styled.div`
  display: flex;
  margin-top: 1rem;
  align-items: center;
  justify-content: space-evenly;
  & > * {
    color: inherit;
  }
`

const Overview = ({ current }) => {
  //set state: have isolated photos/thumbnails and sku/sale for easier useEffect logic
  const [styles, updateStyles] = useState([]);
  const [currentStyle, updateCurrentStyle] = useState({});
  const [features, updateFeatures] = useState([]);
  const [thumbnails, updateThumbnails] = useState([]);
  const [meta, updateMeta] = useState({});
  const [numReviews, updateNumReviews] = useState(0);

  //state which depends on the currentStyle/is updated in the second useEffect hook
  const [avgRating, updateAvg] = useState(0);
  const [photos, updatePhotos] = useState([]);
  const [skus, updateSkus] = useState([]);

  //state which depends on user interaction with dropdowns + is useful for cart
  const [size, updateSize] = useState('');
  const [qty, updateQty] = useState(0);

  //ref to access size dropdown
  const sizeRef = useRef(null);

  //fetches styles and sets default to first style based on current product on mount. This useEffect acts like componentDidMount
  useEffect(async () => {
    try {
        if(current.id) {
          let res = await fetch(`/products/${current.id}/styles`);
          let arr = await res.json();

          updateStyles(arr.results);
          updateCurrentStyle(arr.results[0]);
          updateFeatures(current.features);
          console.log('current obj here!', current);
          console.log('current Style here!', arr.results[0]);

          let newMeta = await fetch(`/reviews/meta?product_id=${current.id}`).then(data => data.json());
          let avg = getAverageRating(newMeta.ratings);
          updateAvg(avg);
          updateMeta(newMeta);

          let reviews = await fetch(`/reviews?product_id=${current.id}&count=1000`).then(data => data.json());
          updateNumReviews(reviews.results.length);
        }
    } catch (err) {
      console.error('err fetching styles or metadata', err);
    }
  },[current]);

  // updates photos for carousel on change to current style to avoid type errors
  useEffect(() => {
    if(currentStyle.photos) {
      let newPhotos = currentStyle.photos.map(photo => photo.url);
      let newThumbnails = currentStyle.photos.map(photo => photo.thumbnail_url);
      updatePhotos(newPhotos);
      updateThumbnails(newThumbnails);
      updateSkus(Object.values(currentStyle.skus));
    }
  }, [currentStyle]);

//click handlers for *all* the buttons
  const styleClickHandler = (e) => {
    const thumb = e.target.src;
    let newStyle = styles.filter(style => style.photos[0].thumbnail_url === thumb)[0];
    updateCurrentStyle(newStyle);
  };

  const sizeDropdownCallback = (option) => {
    updateSize(option);
  };

  const qtyDropdownCallback = (option) => {
    updateQty(option);
  }

  const cartClickHandler = (e) => {
    //edge cases: size not selected or sku not in stock
    if (!size) {
      sizeRef.current.click();
      alert('Please select size.')
      return;
    }
    let currentSku = skus.filter(sku => (sku.size === size))
    let inStock = currentSku[0].quantity;
    if(!inStock) {
      document.getElementById('cartButton').remove();
      return;
    }
    //most requests should fall through to here
    let body = {
      sku_id: Object.keys(currentStyle.skus).find(key => currentStyle.skus[key] === currentSku[0]),
      count: qty
    }
    fetch('/cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }).then((res) => {
      if(res.status === (200 || 201)) {
        alert('successfully added to cart!');
      } else {
        console.error('err posting to cart', res);
      }
    }).catch((err) => {
      console.error('err posting to cart', err);
    });
  }
  const reviewScroller = (e) => {
    e.preventDefault();
    let elt = document.getElementById('reviews');
    console.log(elt);
    elt.scrollIntoView();
  };


  return (
    <>
      <OverviewWrapper>
        <Banner>SITE-WIDE ANNOUCEMENT MESSAGE!</Banner>
        <Column1>
          <Carousel urls={photos}/>
          <Slogan>{current.slogan}</Slogan>
          <Description>{current.description}</Description>
          <SocialButtonRow>
            <a href="http://facebook.com"><FaFacebook size="2em" /></a>
            <a href="http://twitter.com"><FaTwitter size="2em"/></a>
            <a href="http://pinterest.com"><FaPinterest size="2em"/></a>
          </SocialButtonRow>
        </Column1>
        <Column2>
        <StarsWrapper>
          <Stars currentRating={avgRating}/>
          {(numReviews > 0) && <a href="#" onClick={reviewScroller} style={{color: 'grey'}}>Read all {numReviews} reviews</a> }
        </StarsWrapper>
          <Category>{current.category}</Category>
          <Name>{current.name}</Name>
          <Price style={currentStyle.sale_price ? {color: 'red'} : {}} >{'$' + (currentStyle.sale_price || currentStyle.original_price)}</Price>
          <StyleHeader> <h4>STYLE ></h4> SELECTED STYLE</StyleHeader>
          <StyleSelector>
            {styles.length && currentStyle.photos && styles.map(style => style.photos[0].thumbnail_url).map((nail, i) => (
            <StyleContainer key={i}>
              {(nail === currentStyle.photos[0].thumbnail_url) && (<IconContext.Provider value={{ style: { position: 'absolute' } }}>
                <FaCheck />
              </IconContext.Provider>)}
              <img src={nail} onClick={styleClickHandler}/>
            </StyleContainer>
            ))}
          </StyleSelector>
          <ButtonRow1>
            <Dropdown
              options={ skus.length && skus.filter(sku => (sku.quantity > 0)).map(sku => sku.size)}
              title={ skus.length && skus.filter(sku => (sku.quantity > 0)).length ? 'SELECT SIZE' : 'OUT OF STOCK' }
              width="60%"
              callback={sizeDropdownCallback}
              nref={sizeRef}
            />
            <Dropdown
            options={skus.length && skus.filter(sku => (sku.size === size)).map(sku => sku.quantity).reduce((acc, quant) => {
              for(var x = 1; x < (quant > 15 ? 15 : quant); x++) {
                acc.push(x);
              }
              return acc;
            }, [])}
            title="QUANTITY"
            callback={qtyDropdownCallback}/>
          </ButtonRow1>
          <ButtonRow2>
            <Button
              height="4rem"
              width="70%"
              onClick={cartClickHandler}
              id="cartButton"
              >ADD TO CART<FaPlus />
            </Button>
            <Button height="4rem" width="3rem"><FaRegHeart/></Button>
          </ButtonRow2>
          <FeatureChecklist>
              {features.map((feature, i) => {
                return (<div key={i}>
                  <FaCheck /> {`${feature.feature}`}
                </div>);
                  })}
          </FeatureChecklist>
        </Column2>
      </OverviewWrapper>
    </>
  );
}

export default Overview;
