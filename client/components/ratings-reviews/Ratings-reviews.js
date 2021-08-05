import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import axios from 'axios';
import moment from 'moment';
import Helpful from '../shared/Helpful.jsx';
import Report from '../shared/Report.jsx';
import ReviewDropdown from '../shared/ReviewDropdown.jsx';
import Stars from '../shared/Stars.jsx';
import Summary from './subcomponents/Summary.jsx';
import NewReview from './subcomponents/NewReview.jsx';
import Reviewbody from './subcomponents/Reviewbody.jsx';
import { FaCheck } from 'react-icons/fa'

//--------------------------------STYLED COMPONENTS----------------------------------------------//


//Wrappers
const Wrapper = styled.div`
  margin: auto;
  width: 100%;
  display: grid;
  grid-auto-columns: 1fr;
  grid-template-columns: 0.5fr 1.5fr;
  grid-template-rows: 0.2fr 1.8fr;
  gap: 0px 10px;
  grid-template-areas:
    "Title ."
    "Rating Review";
`;

const Title = styled.div`
grid-area: Title;
`;

const Rating = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: Rating;
`;

const Review = styled.div`
grid-area: Review;
text-align: center;
vertical-align: middle;
`;

//Ratings Styled Components


//Reviews Styled Components

const ReviewContainer = styled.div`
height:440px;
height: 550px;
overflow: auto;
`;

const TotalReviews = styled.div`
height: 100%;
text-align: center;
margin-top: 5px;
margin-left: 5px;
font-weight: bold;
`;

const Inline = styled.div`
  display: inline-block;
  vertical-align: top;
  height: 100%;
  border: 1px solid black;
`;

const SortContainer = styled.div`
display: flex;
justify-content: flex-start;
  height: 40px;
`;

const EachReview = styled.div`
  border-bottom: 1px solid black;
  display: flex;
  flex-direction: column;
  margin: 10px;
`;

const StarUser = styled.div`
display: flex;
justify-content: space-between;
height: 1 vh;
font-size: 12px;
`;

const User = styled.div`
display: inline-flex;
justify-content: right;
text-align: center;
font-weight: lighter;
margin-top: 2px;
height: 100%;
`;

const StarDiv = styled.div`
display: inline-flex;
justify-content: left;
`;


const Buttons = styled.button`
  background: white;
  width: auto;
  border: 1px solid black;
  margin: 1rem 1rem 0 0;
  padding: 1rem;
  font-size: .7rem;
  cursor: pointer;
`;

const ReviewSummary = styled.div`
font-weight: bold;
text-align: left;
justify-content: left;
margin: .2rem 0rem;
font-size: 20px;
`;

// const ReviewBody = styled.div`
// font-weight: lighter;
// justify-content: left;
// text-align: left;
// margin: .2rem 0rem;
// font-size: 12px;
// `;

const ReviewRec = styled.div`
text-align: left;
margin: .5rem 0rem;
font-size: 12px;
font-weight: lighter;
`;

const ReviewRes = styled.div`
text-align: left;
margin: .5rem 0rem;
display: flex;
flex-direction: column;
background-color: hsl(0,0%,0%, 0.2);
`;

const ResTitle = styled.p`
font-weight: bold;
margin: .5rem .5rem;
font-size: 12px;
`;

const ResBody = styled.p`
font-weight: lighter;
margin: .5rem .5rem;
font-size: 12px;
`;

const HelpfulReport = styled.div`
display: inline-flex;
font-size: 12px;
.helpfulButton {
  background-color: Transparent;
  text-align: center;
  font-size: 12px;
  font-weight: lighter;
  margin-left: .7rem;
  margin-bottom: .3rem;
  outline: none;
  border: none;
  text-decoration: underline;
  &:hover.helpfulButton {
    color: blue;
  }
}
.helpfulend {
  margin-right: 1rem;
}
.reportButton {
  background-color: Transparent;
  margin-left: 1rem;
   margin-bottom: .3rem;
  outline: none;
  border: none;
     font-size: 12px;
     font-weight: lighter;
     text-decoration: underline;
     &:hover.reportButton {
       color: blue;
     }
}
`;

const Ratings = ({ current }) => {
   //console.log('kbdkhb', current);
  //--------------------------------STATE----------------------------------------------//

  const [reviews, setReviews] = useState([]);
  const [reviewCount, setReviewCount] = useState(2);
  const [sort, setSort] = useState('relevent');
  const [isFiltered, setIsFiltered] = useState([]);
  const [reviewsDisplayed, setReviewsDisplayed] = useState([]);
  const [show, setShow] = useState(false);

  //--------------------------------useEffect/GET----------------------------------------------//

  useEffect(() => {
    if (current.id) {
    handleMoreReviews();
    };
  }, [current, sort, isFiltered]);


  let handleMoreReviews = () => {
    const getReviews = async () => {
      let res = await axios.get(`/reviews?product_id=${current.id}&sort=${sort}&count=1000`);
      setReviews(res.data.results);
    };
    getReviews();
  };

  //--------------------------------FILTER REVIEWS----------------------------------------------//

  let buildFilter = (filter) => {
    let query = {};
    for (let keys in filter) {
      if (filter[keys].constructor === Array && filter[keys].length > 0) {
        query[keys] = filter[keys];
      }
    }
    return query;
  };

  let filterData = (data, query) => {
    const filteredData = data.filter((item) => {
      for (let key in query) {
        if (item[key] === undefined || !query[key].includes(item[key])) {
          return false;
        }
      }
      return true;
    });
    return filteredData;
  };

  let filter = {
    rating: isFiltered
  };

  let query = buildFilter(filter);
  let filteredReviews = filterData(reviews, buildFilter(filter));

  //--------------------------------LENGTH OF REVIEWS DISPLAYED----------------------------------------------//

  let display = (filterReview, count) => {
    let reviewsToDisplay = filterReview;
    if (filterReview.length > 2) {
      //console.log('should be displayed', reviewsToDisplay.slice(0, count));
      reviewsToDisplay = reviewsToDisplay.slice(0, count);
      // console.log('should be displayed', reviewsToDisplay);
      return reviewsToDisplay;
    } else {
      return reviewsToDisplay;
    }
  }

  let finalReviews = display(filteredReviews, reviewCount);
  //console.log('should equal should be displayed', finalReviews);

  //--------------------------------RETURN----------------------------------------------//
  if (reviews.length === 0) {
    return (
      <Wrapper>
        <Rating>
        <Title id="reviews" className='Title' ><p>RATINGS & REVIEWS</p></Title>
        </Rating>
        <Review>
          <p>NO REVIEWS YET</p>
          <button onClick={() => setShow(true)}>ADD A REVIEW +</button>
          <NewReview onClose={() => setShow(false)} current={current} show={show} />
        </Review>
      </Wrapper>
    );
  }

  if (reviews.length > 0) {
    return (
      <>
        <Wrapper>
          <Title id="reviews" className='Title' ><p>RATINGS & REVIEWS</p></Title>
          <Rating className='Rating'>
            <Summary id={current.id} setIsFiltered={setIsFiltered} />
          </Rating>
          <Review className='Review'>
            <SortContainer>
              <TotalReviews>{reviews.length} reviews, sorted by </TotalReviews>
              <ReviewDropdown options={["helpful", "newest", "relevent"]} setSort={setSort} />
            </SortContainer>
            <ReviewContainer><>
              {finalReviews.map((review, index) => (<EachReview key={index}>
                <StarUser>
                  <StarDiv><Stars currentRating={review.rating} /></StarDiv>
                  <User>{review.reviewer_name}, {moment(review.date).format('ll')}</User>
                </StarUser>
                <ReviewSummary key={index}>{review.summary}</ReviewSummary>
                <Reviewbody body={review.body} photos={review.photos}/>
                {(review.recommend === true) &&
                <ReviewRec><FaCheck /> I recommend this product</ReviewRec>}
                {(review.response !== null && review.response.length > 0) &&
                <ReviewRes>
                  <ResTitle>Response:</ResTitle>
                  <ResBody>{review.response}</ResBody>
                </ReviewRes>}
                  <HelpfulReport>
                <Helpful path={'/reviews'} id={review.review_id} helpfulness={review.helpfulness} currentSort={sort} />
                  |
                <Report path={'/reviews'} id={review.review_id} />
                </HelpfulReport>
              </EachReview>))}</>
            </ReviewContainer>
            {(reviewCount < reviews.length && reviews.length > 2) &&
              <Buttons onClick={(e) => { setReviewCount(reviewCount + 2) }}>MORE REVIEWS</Buttons>}
            <Buttons onClick={() => setShow(true)}>ADD A REVIEW +</Buttons>
            <NewReview onClose={() => setShow(false)} current={current} show={show} />
          </Review>
        </Wrapper>
      </>
    );
  };
}

export default Ratings;