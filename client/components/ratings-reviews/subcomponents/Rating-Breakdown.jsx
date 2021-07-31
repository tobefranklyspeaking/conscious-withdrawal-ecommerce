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


const RatingBreakdown = ({ratings, numRatings, setRatingFilter}) => {
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
    setOne(Math.round((Number(ratings['1'])/ numRatings) * 100));
    setTwo(Math.round((Number(ratings['2'])/ numRatings) * 100));
    setThree(Math.round((Number(ratings['3'])/ numRatings) * 100));
    setFour(Math.round((Number(ratings['4'])/ numRatings) * 100));
    setFive(Math.round((Number(ratings['5'])/ numRatings) * 100));
  });
 // console.log('khdjhd', one);
 console.log('current filter', filter);

//  useEffect(() => {

//     setIsFiltered(filter);

//  }, [filter]);

/*
    let rmFilter = () => {
    const ratingIndex = filter.indexOf(starval);
    rmFilter.splice(ratingIndex, 1);
    console.log('-=-=-=', rmFilter);
    setFilter(rmFilter);
    console.log('rm filter', filter);
    //setIsFiltered(filter);
    };
*/
    let addFilter = (num) => {
      let tempfilter = filter;
      tempfilter.push(num);
    console.log('-=-=-=', tempfilter);
      setFilter(tempfilter);
      setRatingFilter(tempfilter);
    console.log('filter', filter, 'should equal ', tempfilter);
    };
  console.log('234543', filter);
 // setIsFiltered(filter);



  return (
    <>
    <StarRating><StarNum onClick={(e) => {(filter.indexOf(5) === -1) ? addFilter(5) : console.log('does  exist')}}> 5 stars </StarNum><ProgressBar percentage={five} /> </StarRating>
    <StarRating><StarNum onClick={(e) => {(filter.indexOf(4) === -1) ? addFilter(4) : console.log('does  exist')}}>4 stars </StarNum><ProgressBar percentage={four} /> </StarRating>
    <StarRating><StarNum onClick={(e) => {(filter.indexOf(3) === -1) ? addFilter(3) : console.log('does  exist')}}>3 stars </StarNum><ProgressBar percentage={three} /> </StarRating>
    <StarRating><StarNum onClick={(e) => {(filter.indexOf(2) === -1) ? addFilter(2) : console.log('does  exist')}}>2 stars </StarNum><ProgressBar percentage={two} /> </StarRating>
    <StarRating><StarNum onClick={(e) => {(filter.indexOf(1) === -1) ? addFilter(1) : console.log('does  exist')}}>1 stars </StarNum><ProgressBar percentage={one} /> </StarRating>
    </>
  );

};


export default RatingBreakdown;