import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import axios from 'axios';
import moment from 'moment';
import Helpful from '../shared/Helpful.jsx';
import Report from '../shared/Report.jsx';
import ReviewDropdown from '../shared/ReviewDropdown.jsx';
import Stars from '../shared/Stars.jsx';
import Summary from './subcomponents/Summary.jsx';
import RatingBreakdown from './subcomponents/Rating-Breakdown.jsx';

const RatingsStyle = styled.div`
  background-color: LightGray;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid black;
`;
const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  border: 1px solid black;
`;

const Rating = styled.div`
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  border: 1px solid black;
`;

const Review = styled.div`
display: inline-block;
text-align: center;
vertical-align: middle;
border: 1px solid black;
`;

const ReviewContainer = styled.div`
height:440px;
height: 550px;
overflow: auto;
border: 1px solid black;
`;

const TotalReviews = styled.div`
  display: inline-block;
  margin-top: 5px;
  margin-bottom: 5px;
  margin-left: 5px;
  border: 1px solid black;
`;

const Inline = styled.div`
  display: inline-block;
  vertical-align: top;
  height: 100%
  border: 1px solid black;
`;

const SortContainer = styled.div`
  height: 40px;
  border: 1px solid black;
`;

const Ratings = ({ current }) => {
  // console.log('kbdkhb', current.id);
  const [reviews, setReviews] = useState([]);
  const [reviewCount, setReviewCount] = useState(2);
  const [sort, setSort] = useState('relevent');
  const [isFiltered, setIsFiltered] = useState([]);
  const [reviewsDisplayed, setReviewsDisplayed] = useState([]);


  useEffect(() => {
    console.log('filter in r-r', isFiltered);
    const getReviews = async () => {
      let res = await axios.get(`/reviews?product_id=${current.id}&sort=${sort}&count=1000`);
      setReviews(res.data.results);
      // console.log('asd', reviews);
      // let display = reviews.slice(0, reviewCount)
      // setReviewsDisplayed(display);
      // console.log('should be displayed', reviewsDisplayed);
      //setCurrentReview(res.data.results[0]);
       //console.log('successful get current id: ', res.data.results);
    };
    getReviews();

  }, [current, sort, isFiltered]);



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
  const filteredData = data.filter( (item) => {
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
console.log('---',filteredReviews);

  let display = (filterReview, count) => {
    let reviewsToDisplay = filterReview;
    if(filterReview.length > 2) {
      //console.log('should be displayed', reviewsToDisplay.slice(0, count));
      reviewsToDisplay = reviewsToDisplay.slice(0, count);
      console.log('should be displayed', reviewsToDisplay);
      return reviewsToDisplay;
    } else {
      return reviewsToDisplay;
    }
  }

  let finalReviews = display(filteredReviews, reviewCount);
  console.log('sould equal should be displayed', finalReviews);

  let handleMoreReviews = () => {

  };

  return (
    <>
      <RatingsStyle>
        <h1>Ratings</h1>
        <div>test</div>
      </RatingsStyle>
      <Wrapper>
        <Rating>
          <h3>RATINGS & REVIEWS</h3>
        <Summary id={current.id} setIsFiltered={setIsFiltered}/>
        </Rating>
        <Review>
          <SortContainer>
          <TotalReviews>{reviews.length} reviews, sorted by </TotalReviews>
          <ReviewDropdown options={["helpful", "newest", "relevent"]} setSort={setSort} />
          </SortContainer>
          <ReviewContainer><>
          {finalReviews.map((review, index) => (<div key={index}>
            <Stars currentRating={review.rating}/>
            <h6>{review.reviewer_name}, {moment(review.date).format('ll')}</h6>
            <h3 key={index}>{review.summary}</h3>
            <h5>{review.body}</h5>
            <Helpful path={'/reviews'} id={review.review_id} helpfulness={review.helpfulness} currentSort={sort}/>
            <Report path={'/reviews'} id={review.review_id} />
          </div>))}</>
          </ReviewContainer>
          {(reviewCount < reviews.length && reviews.length > 2) &&
          <button onClick={(e) => {setReviewCount(reviewCount + 2)}}>MORE REVIEWS</button>}
          <button>ADD A REVIEW +</button>
        </Review>
      </Wrapper>
    </>
  );
}

export default Ratings;