import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import axios from 'axios';
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
`;
const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
`;

const Rating = styled.div`
  display: inline-block;
  text-align: center;
  vertical-align: middle;
`;

const Review = styled.div`
display: inline-block;
text-align: center;
vertical-align: middle;
height:550px;
overflow: auto;
`;

const TotalReviews = styled.div`
  display: inline-block;
`;

const Inline = styled.div`
  display: inline-block;
`;

const Ratings = ({ current }) => {
  console.log('kbdkhb', current.id);
  const [reviews, setReviews] = useState([]);
  const [currentReview, setCurrentReview] = useState({});
  const [sort, setSort] = useState('relevent');





  useEffect(() => {
    const getReviews = async () => {
      let res = await axios.get(`/reviews?product_id=${current.id}&sort=${sort}&count=1000`);
      setReviews(res.data.results);
      setCurrentReview(res.data.results[0]);
      console.log('successful get current id: ', res.data.results);
    };
    getReviews();

  }, [current, sort]);


  return (
    <>
      <RatingsStyle>
        <h1>Ratings</h1>
        <div>test</div>
      </RatingsStyle>
      <Wrapper>
        <Rating>
          <h3>RATINGS & REVIEWS</h3>
        <Summary id={current.id} />
        </Rating>
        <Review>
          <TotalReviews>{reviews.length} reviews, sorted by </TotalReviews>
          <Inline><ReviewDropdown options={["helpful", "newest", "relevent"]} setSort={setSort} /> </Inline>
          {reviews.map((review, index) => (<><div>
            <Stars currentRating={review.rating}/>
            <h6>{review.reviewer_name}, {review.date}</h6>
            <h3 key={index}>{review.summary}</h3>
            <h5>{review.body}</h5>
            <Helpful path={'/reviews'} id={review.review_id} helpfulness={review.helpfulness} currentSort={sort}/>
            <Report path={'/reviews'} id={review.review_id} />
          </div></>))}
        </Review>
      </Wrapper>
    </>
  );
}

export default Ratings;