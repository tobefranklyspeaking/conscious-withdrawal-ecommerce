import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import ProgressBar from './Progress-Bar.jsx';

const StarRating = styled.div`
  width: 100%;
  height: 30px;
`;

const StarNum = styled.span`
  width: 10%
  float: left;
  height: 10px;
`;


const RatingBreakdown = ({ratings, numRatings, setIsFiltered}) => {
  //console.log('ratibgs: num ratings', ratings, numRatings);

  const [one, setOne] = useState(0);
  const [two, setTwo] = useState(0);
  const [three, setThree] = useState(0);
  const [four, setFour] = useState(0);
  const [five, setFive] = useState(0);
  const [totalRatings, setTotalRatings] = useState(numRatings);
/*
  const setPercentage = () => {
  setOne(Math.round((Number(ratings['1'])/ numRatings) * 100));
  };
  setPercentage();
  //console.log('khdjhd', one) ;
  */

  useEffect(() => {
    setOne(Math.round((Number(ratings['1'])/ numRatings) * 100));
    setTwo(Math.round((Number(ratings['2'])/ numRatings) * 100));
    setThree(Math.round((Number(ratings['3'])/ numRatings) * 100));
    setFour(Math.round((Number(ratings['4'])/ numRatings) * 100));
    setFive(Math.round((Number(ratings['5'])/ numRatings) * 100));
  });
 // console.log('khdjhd', one);


  return (
    <>
    <StarRating><StarNum onClick={(e) => {setIsFiltered([5])}}>5 stars </StarNum><ProgressBar percentage={five} /> </StarRating>
    <StarRating><StarNum onClick={(e) => {setIsFiltered([4])}}>4 stars </StarNum><ProgressBar percentage={four} /> </StarRating>
    <StarRating><StarNum onClick={(e) => {setIsFiltered([3])}}>3 stars </StarNum><ProgressBar percentage={three} /> </StarRating>
    <StarRating><StarNum onClick={(e) => {setIsFiltered([2])}}>2 stars </StarNum><ProgressBar percentage={two} /> </StarRating>
    <StarRating><StarNum onClick={(e) => {setIsFiltered([1])}}>1 stars </StarNum><ProgressBar percentage={one} /> </StarRating>
    </>
  );

};


export default RatingBreakdown;