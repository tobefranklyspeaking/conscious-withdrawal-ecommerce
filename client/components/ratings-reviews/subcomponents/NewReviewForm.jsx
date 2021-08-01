import React, { useState, useEffect } from 'react';
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

const ProductRec = styled.div`
`;

const ProductChars = styled.div`
`;

const CharInput = styled.input`
display: block;
margin: 0 auto;
`;

const CharLabel = styled.label`
display: inline-block;
`;

const ReviewSummary = styled.div`
`;

const ReviewBody = styled.div`
`;

const ReviewPhotos = styled.div`
`;

const ReviewName = styled.div`
`;

const ReviewEmail = styled.div`
`;


const NewReviewForm = ({ charOptions }) => {
  console.log('hgjvh', charOptions);
  const [size, setSize] = useState(null);
  const [width, setWidth] = useState(null);
  const [comfort, setComfort] = useState(null);
  const [quality, setQuality] = useState(null);
  const [length, setLength] = useState(null);
  const [fit, setFit] = useState(null);

  useEffect(() => {
    if (charOptions.Size) {
      setSize(charOptions.Size.id);
    }
    if (charOptions.Width) {
      setWidth(charOptions.Width.id);
    }
    if (charOptions.Comfort) {
      setComfort(charOptions.Comfort.id);
    }
    if (charOptions.Quality) {
      setQuality(charOptions.Quality.id);
    }
    if (charOptions.Length) {
      setLength(charOptions.Length.id);
    }
    if (charOptions.Fit) {
      setFit(charOptions.Fit.id);
    }
  });

  //console.log('------------', size, width, comfort, quality, length, fit);

  return (
    <form>
      <OverallRatingWrapper>
        <RatingOpt>
          <p> *Overall Rating: </p>
          <label htmlFor='oneStar'>
            <input type='radio' id='oneStar' name='chooseStarRating' value='1' required />
            1 star
          </label><br></br>

          <label htmlFor='twoStars'>
            <input type='radio' id='twoStars' name='chooseStarRating' value='2' />
            2 Stars
          </label><br></br>

          <label htmlFor='threeStars'>
            <input type='radio' id='threeStars' name='chooseStarRating' value='3' />
            3 Stars
          </label><br></br>

          <label htmlFor='fourStars'>
            <input type='radio' id='fourStars' name='chooseStarRating' value='4' />
            4 Stars
          </label><br></br>

          <label htmlFor='fiveStars'>
            <input type='radio' id='fiveStars' name='chooseStarRating' value='5' />
            5 Stars
          </label>
        </RatingOpt>
        <RatingDesc>
          <p>1 star = 'Poor'</p>
          <p>2 stars = 'Fair'</p>
          <p>3 stars = 'Average'</p>
          <p>4 stars = 'Good'</p>
          <p>5 stars = 'Great'</p>
        </RatingDesc>
      </OverallRatingWrapper>

      <ProductRec>
        <p>*Do you recommend this product</p>
        <label htmlFor='yesRec'>
          <input type='radio' id='yesRec' name='chooseRec' value='true' defaultChecked="checked" required />
          Yes
        </label>

        <label htmlFor='noRec'>
          <input type='radio' id='noRec' name='chooseRec' value='false' />
          No
        </label>
      </ProductRec>

      <ProductChars>
        <p>---Characteristics---</p>
        {size &&
          <div>
            <p> *Size: </p>
            <CharLabel >
              1<br></br>
              <CharInput type='radio' name='chooseSize' value='1' required />
              A size too small
            </CharLabel>

            <CharLabel >
              2<br></br>
              <CharInput type='radio' name='chooseSize' value='2' />
              1/2 a size too small
            </CharLabel><br></br>

            <CharLabel >
              3<br></br>
              <CharInput type='radio' name='chooseSize' value='3' />
              Perfect
            </CharLabel>

            <CharLabel >
              4<br></br>
              <CharInput type='radio' name='chooseSize' value='4' />
              1/2 a size too big
            </CharLabel>

            <CharLabel >
              5<br></br>
              <CharInput type='radio' name='chooseSize' value='5' />
              A size too wide
            </CharLabel>
          </div>
        }

        {width &&
          <div>
            <p> *Width: </p>
            <CharLabel >
              1<br></br>
              <CharInput type='radio' name='chooseWidth' value='1' required />
              Too narrow
            </CharLabel>

            <CharLabel >
              2<br></br>
              <CharInput type='radio' name='chooseWidth' value='2' />
              Slightly narrow
            </CharLabel><br></br>

            <CharLabel >
              3<br></br>
              <CharInput type='radio' name='chooseWidth' value='3' />
              Perfect
            </CharLabel>

            <CharLabel >
              4<br></br>
              <CharInput type='radio' name='chooseWidth' value='4' />
              Slightly wide
            </CharLabel>

            <CharLabel >
              5<br></br>
              <CharInput type='radio' name='chooseWidth' value='5' />
              Too wide
            </CharLabel>
          </div>
        }

        {comfort &&
          <div>
            <p> *Comfort: </p>
            <CharLabel >
              1<br></br>
              <CharInput type='radio' name='chooseComfort' value='1' required />
              Uncomfortable
            </CharLabel>

            <CharLabel >
              2<br></br>
              <CharInput type='radio' name='chooseComfort' value='2' />
              Slightly uncomfortable
            </CharLabel><br></br>

            <CharLabel >
              3<br></br>
              <CharInput type='radio' name='chooseComfort' value='3' />
              Ok
            </CharLabel>

            <CharLabel >
              4<br></br>
              <CharInput type='radio' name='chooseComfort' value='4' />
              Comfortable
            </CharLabel>

            <CharLabel >
              5<br></br>
              <CharInput type='radio' name='chooseComfort' value='5' />
              Perfect
            </CharLabel>
          </div>
        }

        {quality &&
          <div>
            <p> *Quality: </p>
            <CharLabel >
              1<br></br>
              <CharInput type='radio' name='chooseQuality' value='1' required />
              Poor
            </CharLabel>

            <CharLabel >
              2<br></br>
              <CharInput type='radio' name='chooseQuality' value='2' />
              Below Average
            </CharLabel><br></br>

            <CharLabel >
              3<br></br>
              <CharInput type='radio' name='chooseQuality' value='3' />
              What I expected
            </CharLabel>

            <CharLabel >
              4<br></br>
              <CharInput type='radio' name='chooseQuality' value='4' />
              Pretty Great
            </CharLabel>

            <CharLabel >
              5<br></br>
              <CharInput type='radio' name='chooseQuality' value='5' />
              Perfect
            </CharLabel>
          </div>
        }

        {length &&
          <div>
            <p> *Length: </p>
            <CharLabel >
              1<br></br>
              <CharInput type='radio' name='chooseLength' value='1' required />
              Runs Short
            </CharLabel>

            <CharLabel >
              2<br></br>
              <CharInput type='radio' name='chooseLength' value='2' />
              Runs slightly short
            </CharLabel><br></br>

            <CharLabel >
              3<br></br>
              <CharInput type='radio' name='chooseLength' value='3' />
              Perfect
            </CharLabel>

            <CharLabel >
              4<br></br>
              <CharInput type='radio' name='chooseLength' value='4' />
              Runs slightly long
            </CharLabel>

            <CharLabel >
              5<br></br>
              <CharInput type='radio' name='chooseLength' value='5' />
              Runs long
            </CharLabel>
          </div>
        }

        {fit &&
          <div>
            <p> *Fit: </p>
            <CharLabel >
              1<br></br>
              <CharInput type='radio' name='chooseFit' value='1' required />
              Runs tight
            </CharLabel>

            <CharLabel >
              2<br></br>
              <CharInput type='radio' name='chooseFit' value='2' />
              Runs slightly tight
            </CharLabel><br></br>

            <CharLabel >
              3<br></br>
              <CharInput type='radio' name='chooseFit' value='3' />
              Perfect
            </CharLabel>

            <CharLabel >
              4<br></br>
              <CharInput type='radio' name='chooseFit' value='4' />
              Runs slightly long
            </CharLabel>

            <CharLabel >
              5<br></br>
              <CharInput type='radio' name='chooseFit' value='5' />
              Runs long
            </CharLabel>
          </div>
        }

      </ProductChars><br></br>

      <ReviewSummary>
        <label>
          Review Summary: <br></br>
          <input type='text' name='reviewsummary' placeholder='Example: Best purchase ever!' maxLength='60'/>
        </label>
      </ReviewSummary><br></br>
      <ReviewBody>
      <label>
          *Review Body: <br></br>
          <input type='text' name='reviewbody' placeholder='Why do you like the product or not?' maxLength='1000' minLength='50' required/>
        </label>
      </ReviewBody><br></br>
      <ReviewPhotos>
        <label>
          Enter Photo Url: <br></br>
          <input type='text' name='reviewphoto'/>
        </label>
      </ReviewPhotos><br></br>
      <ReviewName>
        <label>
          *Review Name: <br></br>
          <input type='text' name='reviewname' placeholder='Example: Jackson11!' maxLength='60' required/>
        </label>
      </ReviewName><br></br>
      <ReviewEmail>
        <label>
          *Review Email: <br></br>
          <input type='text' name='reviewemail' placeholder='Example: jackson11@email.com' maxLength='60' required/>
        </label>
      </ReviewEmail>

        <input type='submit' value='Submit'/>



    </form>
  );
}


export default NewReviewForm;
