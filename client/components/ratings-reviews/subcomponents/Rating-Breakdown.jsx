import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import ProgressBar from './Progress-Bar.jsx';

const StarRating = styled.div`
  width: 100%;
  height: 30px;
  text-decoration: underline;
  border: 5px solid orange;

`;

const StarNum = styled.span`
  width: 10%
  float: left;
  height: 10px;
  border: 5px solid pink;

`;


const RatingBreakdown = ({ratings, numRatings, setIsFiltered}) => {
  //console.log('ratibgs: num ratings', ratings, numRatings);

  const [one, setOne] = useState(0);
  const [two, setTwo] = useState(0);
  const [three, setThree] = useState(0);
  const [four, setFour] = useState(0);
  const [five, setFive] = useState(0);
  const [totalRatings, setTotalRatings] = useState(numRatings);
  const [filter, setFilter] = useState([]);
/*
  const setPercentage = () => {
  setOne(Math.round((Number(ratings['1'])/ numRatings) * 100));
  };
  setPercentage();
  //console.log('khdjhd', one) ;
  */

  useEffect(() => {
    if(ratings['1']) {
      setOne(Math.round((Number(ratings['1'])/ numRatings) * 100));
    }
    if(ratings['2']) {
      setTwo(Math.round((Number(ratings['2'])/ numRatings) * 100));
    }
    if(ratings['3']) {
      setThree(Math.round((Number(ratings['3'])/ numRatings) * 100));
    }
    if(ratings['4']) {
      setFour(Math.round((Number(ratings['4'])/ numRatings) * 100));
    }
    if(ratings['5']) {
      setFive(Math.round((Number(ratings['5'])/ numRatings) * 100));
    }
  });
 // console.log('khdjhd', one);
 //console.log('current filter', filter);




    let rmFilter = (num) => {
      let tempfilter = filter;
    let ratingIndex = filter.indexOf(num);
    tempfilter.splice(ratingIndex, 1);
    console.log('-=-=-=', tempfilter);
    setFilter(tempfilter);
    console.log('rm filter', filter);
    //setIsFiltered(filter);
    };

    let addFilter = (num) => {
      let tempfilter = filter;
      tempfilter.push(num);
    console.log('-=-=-=', tempfilter);
      setFilter(tempfilter);
      console.log('filter', filter, 'should equal ', tempfilter);
      //setIsFiltered(filter);
    };
  //console.log('234543', filter);



  return (
    <>
    {filter.length > 0 &&
    <div>
      <p>Current Filters: {filter.join(' stars, ')}  stars</p>
      <button onClick={(e) => {setFilter([]); setIsFiltered([])}}>Remove all filters</button>
    </div>
    }
    <StarRating><StarNum onClick={(e) => {((filter.indexOf(5) === -1) ? addFilter(5) : rmFilter(5)); setIsFiltered(filter)}}> 5 stars </StarNum><ProgressBar percentage={five} /> </StarRating>
    <StarRating><StarNum onClick={(e) => {{(filter.indexOf(4) === -1) ? addFilter(4) : rmFilter(4)}; setIsFiltered(filter)}}>4 stars </StarNum><ProgressBar percentage={four} /> </StarRating>
    <StarRating><StarNum onClick={(e) => {{(filter.indexOf(3) === -1) ? addFilter(3) : rmFilter(3)}; setIsFiltered(filter)}}>3 stars </StarNum><ProgressBar percentage={three} /> </StarRating>
    <StarRating><StarNum onClick={(e) => {{(filter.indexOf(2) === -1) ? addFilter(2) : rmFilter(2)}; setIsFiltered(filter)}}>2 stars </StarNum><ProgressBar percentage={two} /> </StarRating>
    <StarRating><StarNum onClick={(e) => {{(filter.indexOf(1) === -1) ? addFilter(1) : rmFilter(1)}; setIsFiltered(filter)}}>1 stars </StarNum><ProgressBar percentage={one} /> </StarRating>
    </>
  );

};


export default RatingBreakdown;