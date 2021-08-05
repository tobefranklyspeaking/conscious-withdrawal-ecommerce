// this file is a placeholder and can be modified to meet any needs
import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import axios from 'axios';
import Stars from '../../shared/Stars.jsx';
import RatingBreakdown from './Rating-Breakdown.jsx';


const RatingSummaryNum = styled.div`
  display: inline-block;
  font-size: 80px;
  font-weight: bold;
`;

const SummaryWrapper = styled.div`
margin-bottom: 10px;
`;
const BreakdownWrapper = styled.div`

`;

const StarWrapper = styled.div`
display: inline-block;
margin-top: 5px;
vertical-align: top;
`;

const RecommendDiv = styled.div`
width: 100%;
text-align: justify;
margin-top: 5px;
margin-left: 5px;
font-size: 14px;
`;

const Summary = ({ id, setIsFiltered }) => {
  //console.log('id in summary', id);

  const [metaData, setMetaData] = useState({});
  const [characteristics, setCharacteristics] = useState({});
  const [ratings, setRatings] = useState({});
  const [recommended, setRecommended] = useState({});
  const [avgRating, setAvgRating] = useState(0);
  const [fil, setFil] = useState([]);

  /*
  useEffect(() => {
    const getMetaData = async () => {
      let res = await axios.get(`/reviews/meta?product_id=${id}`);
      setMetaData(res.data.results);
      console.log('successful get meta data: ', res.data.results);
    };
    getMetaData();
    console.log('metadata: ', metaData);

  }, [id]);
  */

 useEffect(async () => {
   if(id) {
     try {
       let res = await axios.get(`/reviews/meta?product_id=${id}`);
       setMetaData(res.data);
       setCharacteristics(res.data.characteristics);
       setRatings(res.data.ratings);
       setRecommended(res.data.recommended);
       //average();
      //  console.log('successful get meta data: ', res.data);
      } catch (err) {
        console.error(err)
      }
   }
  }, [id]);

  // useEffect(() => {
  //   console.log('this is called', fil);
  //   setRatingFilter(fil);
  // }, [fil]);

  //console.log('meta date: wbakfhbs', metaData);

  const totalRatings = () => {
    //
    //console.log('what is ratings', ratings);
    let total = 0;
    //console.log('total first', Number(ratings['1']));
    if(ratings['1']) {
      total += Number(ratings['1']);
    }
    // console.log('total 1', total);
    if(ratings['2']) {
      total += Number(ratings['2']);
    }
    // console.log('total 2', total);
    if(ratings['3']) {
      total += Number(ratings['3']);
    }
    // console.log('total 3', total);
    if(ratings['4']) {
      total += Number(ratings['4']);
    }
    // console.log('total 4', total);
    if(ratings['5']) {
      total += Number(ratings['5']);
    }
    // console.log('total', total);
    return total;
  };

  const sum = () => {
    //
    let totalSum = 0;
    //console.log('total', Number(ratings['1']));
    if(ratings['1']) {
      totalSum += Number(ratings['1']);
    }
    if(ratings['2']) {
      totalSum += (Number(ratings['2']) * 2);
    }
    if(ratings['3']) {
      totalSum += (Number(ratings['3']) * 3);
    }
    if(ratings['4']) {
      totalSum += (Number(ratings['4']) * 4);
    }
    if(ratings['5']) {
      totalSum += (Number(ratings['5']) * 5);
    }
    // totalSum += Number(ratings['1']);
    // totalSum += (Number(ratings['2']) * 2);
    // totalSum += (Number(ratings['3']) * 3);
    // totalSum += (Number(ratings['4']) * 4);
    // totalSum += (Number(ratings['5']) * 5);
    //console.log('total', totalSum);
    return totalSum;
  };

  const average = () => {
    //
    let avg = sum()/totalRatings();
    avg = Math.round(avg);
    //console.log('average ', avg);
    //setAvgRating(avg);
    return avg;
  };

  let averageRating = average();
  // console.log('this is the average', avgRating);

  const percentRec = () => {
    //
    let totalrec = Number(recommended['false']) + Number(recommended['true']);
    let percent = Math.round(((Number(recommended['true'])) / totalrec) * 100);
    //console.log('total rec', percent);
    return percent;
  };
  let percentRecommended = percentRec();

  // const handleFilterChange = (newVal) => {
  //   setFil(newVal);
  //   console.log('summary kskns : ', fil);
  //   setRatingFilter(fil);
  // };



  return (
    <>
    <SummaryWrapper className='SummaryWrapper'>
    <RatingSummaryNum>{averageRating}  </RatingSummaryNum>
    <StarWrapper><Stars currentRating={averageRating}> </Stars></StarWrapper>
    <RecommendDiv>{percentRecommended}% of reviews recommend this product</RecommendDiv>
    </SummaryWrapper>
    <BreakdownWrapper className='BreakdownWrapper'>
    <RatingBreakdown ratings={ratings} numRatings={totalRatings()} setIsFiltered={setIsFiltered} characteristics={characteristics}/>
    </BreakdownWrapper>
    </>
  );

};

export default Summary;