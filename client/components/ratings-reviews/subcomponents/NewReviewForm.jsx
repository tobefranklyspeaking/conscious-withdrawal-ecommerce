import React, {useState} from 'react';
import styled from 'styled-components';

const OverallRatingWrapper = styled.div`

`;
const RatingOpt = styled.span`
  display: inline-block;
  align: left;
`;

const RatingDesc = styled.span`
  display: inline-block;
  align: rigth;
`;

const NewReviewForm = () => {

  return (
    <form>
      <OverallRatingWrapper>
      <RatingOpt>
        <p> Overall Rating: </p>
      <input type='radio' id='oneStar' name='chooseStarRating' value='1' />
      <label htmlFor='oneStar'>1 star</label><br></br>
      <input type='radio' id='twoStars' name='chooseStarRating' value='2' />
      <label htmlFor='twoStars'>2 Stars</label><br></br>
      <input type='radio' id='threeStars' name='chooseStarRating' value='3' />
      <label htmlFor='threeStars'>3 Stars</label><br></br>
      <input type='radio' id='fourStars' name='chooseStarRating' value='4' />
      <label htmlFor='fourStars'>4 Stars</label><br></br>
      <input type='radio' id='fiveStars' name='chooseStarRating' value='5' />
      <label htmlFor='fiveStars'>5 Stars</label>
      </RatingOpt>
      <RatingDesc>
        <p>1 star = 'Poor'</p>
        <p>2 stars = 'Fair'</p>
        <p>3 stars = 'Average'</p>
        <p>4 stars = 'Good'</p>
        <p>5 stars = 'Great'</p>
      </RatingDesc>
      </OverallRatingWrapper>

    </form>
  );
}


export default NewReviewForm;
