import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Stars from '../../shared/Stars.jsx';
import AddImage from '../AddImg.jsx';

const OverallRatingWrapper = styled.div`
display: inline-flex;
justify-content: space-between;
`;
const RatingOpt = styled.div`
  display: flex;
  align-items: center;
  margin: 3rem;
`;

const RatingDesc = styled.div`
  display: flex;
flex-direction: column;
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
margin: .15rem;
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

const CharContainer = styled.div`
display: flex;
flex-wrap: nowrap;
justify-content: center;
`;

const CharTitle = styled.p`
font-weight: bold;
`;

const ReviewForm = styled.form`
font-weight: bold;
font-size: 15px;
margin-top: 3rem;
`;

const NewReviewForm = ({ charOptions, id, onClose }) => {
  //console.log('hgjvh', charOptions);
  const [sizeID, setSizeID] = useState(null);
  const [widthID, setWidthID] = useState(null);
  const [comfortID, setComfortID] = useState(null);
  const [qualityID, setQualityID] = useState(null);
  const [lengthID, setLengthID] = useState(null);
  const [fitID, setFitID] = useState(null);
  const [currentOverallRating, setCurrentOverallRating] = useState(0);
  const [currentSummary, setCurrentSummary] = useState("");
  const [currentBody, setCurrentBody] = useState("");
  const [currentRecommended, setCurrentRecommended] = useState(true)
  const [size, setSize] = useState(0);
  const [width, setWidth] = useState(0);
  const [comfort, setComfort] = useState(0);
  const [quality, setQuality] = useState(0);
  const [length, setLength] = useState(0);
  const [fit, setFit] = useState(0);
  const [currentPhotos, setCurrentPhotos] = useState("");
  const [currentName, setCurrentName] = useState("");
  const [currentEmail, setCurrentEmail] = useState("");
  const [showImg, setShowImg] = useState(false);

  useEffect(() => {
    if (charOptions.Size) {
      setSizeID(`${charOptions.Size.id}`);
    }
    if (charOptions.Width) {
      setWidthID(charOptions.Width.id);
    }
    if (charOptions.Comfort) {
      setComfortID(charOptions.Comfort.id);
    }
    if (charOptions.Quality) {
      setQualityID(charOptions.Quality.id);
    }
    if (charOptions.Length) {
      setLengthID(charOptions.Length.id);
    }
    if (charOptions.Fit) {
      setFitID(charOptions.Fit.id);
    }
  }, [charOptions]);

  //console.log('------------', sizeID, widthID, comfortID, qualityID, lengthID, fitID);

  let handleOverallRating = (e) => {
    setCurrentOverallRating(e.target.value);
    console.log('does starts work', e);
  };
  let handleSummary = (e) => {
    setCurrentSummary(e.target.value);
  };
  let handleBody = (e) => {
    setCurrentBody(e.target.value);
  };
  let handleRecommended = (e) => {
    setCurrentRecommended(e.target.value);
  };

  let handleSize = (e) => {
    setSize(e.target.value);
  };
  let handleWidth = (e) => {
    setWidth(e.target.value);
  };
  let handleComfort = (e) => {
    setComfort(e.target.value);
  };
  let handleQuality = (e) => {
    setQuality(e.target.value);
  };
  let handleLength = (e) => {
    setLength(e.target.value);
  };
  let handleFit = (e) => {
    setFit(e.target.value);
  };
  let handlePhotos = (e) => {
    setCurrentPhotos(e.target.value);
  };
  let handleName = (e) => {
    setCurrentName(e.target.value);
  };
  let handleEmail = (e) => {
    setCurrentEmail(e.target.value);
  };


  let handleSubmit = (e) => {
    e.preventDefault();
    let currentChars = {};

    if (sizeID !== null) {
      currentChars[`${sizeID}`] = Number(size);
    }
    if (widthID !== null) {
      currentChars[`${widthID}`] =  Number(width);
    }
    if (comfortID !== null) {
      currentChars[`${comfortID}`] =  Number(comfort);
    }
    if (qualityID !== null) {
      currentChars[`${qualityID}`] =  Number(quality);
    }
    if (lengthID !== null) {
      currentChars[`${lengthID}`] =  Number(length);
    }
    if (fitID !== null) {
      currentChars[`${fitID}`] =  Number(fit);
    }
    console.log('d', currentChars);
    let submitData = {
      "product_id": id,
      "rating": Number(currentOverallRating),
      "summary": currentSummary,
      "body": currentBody,
      "recommend": currentRecommended,
      "name": currentName,
      "email": currentEmail,
      "photos": ["photo"],
      "characteristics": currentChars
    };

    console.log('data-submit', submitData);

       axios.post('/reviews', submitData)
       .then((res) => {
         console.log('yay it works');
       })
       .catch((err) => {console.log('error: ', err)});


       onClose();

  };

  //console.log('curr', currentOverallRating);
  return (
    <ReviewForm onSubmit={handleSubmit}>
      <OverallRatingWrapper >
        <RatingDesc>
          <p>1 star = 'Poor'</p>
          <p>2 stars = 'Fair'</p>
          <p>3 stars = 'Average'</p>
          <p>4 stars = 'Good'</p>
          <p>5 stars = 'Great'</p>
        </RatingDesc>
        <RatingOpt>
      <Stars setCurrentOverallRating={setCurrentOverallRating}/>
        </RatingOpt>
      </OverallRatingWrapper>

      <ProductRec onChange={handleRecommended}>
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
        <CharTitle>---Characteristics---</CharTitle>
        {sizeID &&
          <CharContainer onChange={handleSize}>
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
          </CharContainer>
        }

        {widthID &&
          <CharContainer onChange={handleWidth}>
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
          </CharContainer>
        }

        {comfortID &&
          <CharContainer onChange={handleComfort}>
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
          </CharContainer>
        }

        {qualityID &&
          <CharContainer onChange={handleQuality}>
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
          </CharContainer>
        }

        {lengthID &&
          <CharContainer onChange={handleLength}>
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
          </CharContainer>
        }

        {fitID &&
          <CharContainer onChange={handleFit}>
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
          </CharContainer>
        }

      </ProductChars><br></br>

      <ReviewSummary onChange={handleSummary}>
        <label>
          Review Summary: <br></br>
          <input type='text' name='reviewsummary' placeholder='Example: Best purchase ever!' maxLength='60' />
        </label>
      </ReviewSummary><br></br>
      <ReviewBody onChange={handleBody}>
        <label>
          *Review Body: <br></br>
          <input type='text' name='reviewbody' placeholder='Why do you like the product or not?' maxLength='1000' minLength='50' required />
        </label>
      </ReviewBody><br></br>
      <ReviewPhotos onChange={handlePhotos}>
        <label>
          Enter Photo Url: <br></br>
          <input type='text' name='reviewphoto' />
          {/* <button onClick={() => setShowImg(true)}>Add Photos</button>
          <AddImage onClose={() => setShowImg(false)} setPhoto={handlePhotos} showImg={showImg}/> */}
        </label>
      </ReviewPhotos><br></br>
      <ReviewName onChange={handleName}>
        <label>
          *Review Name: <br></br>
          <input type='text' name='reviewname' placeholder='Example: Jackson11!' maxLength='60' required />
        </label>
      </ReviewName><br></br>
      <ReviewEmail onChange={handleEmail}>
        <label>
          *Review Email: <br></br>
          <input type='email' name='reviewemail' placeholder='Example: jackson11@email.com' maxLength='60' required /><br></br>
          <p>For authentication reasons, you will not be emailed</p>
        </label>
      </ReviewEmail> <br></br>

      <input type='submit' value='Submit' />



    </ReviewForm>
  );
}


export default NewReviewForm;

/*
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
*/