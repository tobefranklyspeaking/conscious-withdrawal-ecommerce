import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const OverallRatingWrapper = styled.div`

`;
const RatingOpt = styled.span`
  display: inline-block;
  align: left;
`;

const RatingDesc = styled.span`
  display: inline-block;
  align: right;
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


const NewReviewForm = ({ charOptions, id, onClose }) => {
  //console.log('hgjvh', charOptions);
  const [sizeID, setSizeID] = useState(null);
  const [widthID, setWidthID] = useState(null);
  const [comfortID, setComfortID] = useState(null);
  const [qualityID, setQualityID] = useState(null);
  const [lengthID, setLengthID] = useState(null);
  const [fitID, setFitID] = useState(null);
  const [currentOverallRating, setCurrentOverallRating] = useState(0);
  const [currentSummary, setCurrentSummary] = useState('');
  const [currentBody, setCurrentBody] = useState('');
  const [currentRecommended, setCurrentRecommended] = useState(true)
  const [size, setSize] = useState(0);
  const [width, setWidth] = useState(0);
  const [comfort, setComfort] = useState(0);
  const [quality, setQuality] = useState(0);
  const [length, setLength] = useState(0);
  const [fit, setFit] = useState(0);
  const [currentPhotos, setCurrentPhotos] = useState('');
  const [currentName, setCurrentName] = useState('');
  const [currentEmail, setCurrentEmail] = useState('');

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
      currentChars[`"${lengthID}"`] =  Number(length);
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
      "photos": [],
      "characteristics": currentChars
    };
    // submitData['product_id'] = id;
    // submitData['rating'] = Number(currentOverallRating);
    // submitData['summary'] = currentSummary;
    // submitData['body'] = currentBody;
    // submitData['recommend'] = currentRecommended;
    // submitData['name'] = currentName;
    // submitData['email'] = currentEmail;
    // submitData['photos'] = [];
    // submitData['characteristics'] = currentChars;
    //  submitData.name = currentName;
    //  submitData.email = currentEmail;
    //  submitData.photos = [currentPhotos];
    //  submitData.characteristics = currentChars;

    console.log('data-submit', submitData);

       axios.post('/reviews', submitData)
       .then((res) => {
         onClose()
       })
       .catch((err) => {console.log('error: ', err)});

       onClose();


        // {
        //   "product_id": id,
        //   "rating": Number(currentOverallRating),
        //   "summary": currentSummary,
        //   "body": currentBody,
        //   "recommend": currentRecommended,
        //   "name": currentName,
        //   "email": currentEmail,
        //   "photos": [],
        //   "characteristics": currentChars
        // }

      // axios.post('/reviews', submitData)
      //   .then((res) => {
      //     console.log('res', res);
      //   });

    // axios.post('/reviews', submitData)
    // .then((res) => console.log(res));
    // {
    //   product_id: id,
    //   rating: currentOverallRating,
    //   summary: currentSummary,
    //   body: currentBody,
    //   recommend: currentRecommended,
    //   name: currentName,
    //   email: currentEmail,
    //   photos: [],
    //   characteristics: currentChars
    // }
    // console.log('successful post data: ', res);
    // {
    //   'product_id': id,
    //   'rating': currentOverallRating,
    //   'summary': currentSummary,
    //   'body': currentBody,
    //   'recommend': currentRecommended,
    //   'name': currentName,
    //   'email': currentEmail,
    //   'photos': [],
    //   'characteristics': currentChars
    // }
  };

  //console.log('curr', currentOverallRating);
  return (
    <form onSubmit={handleSubmit}>
      <OverallRatingWrapper onChange={handleOverallRating}>
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
        <p>---Characteristics---</p>
        {sizeID &&
          <div onChange={handleSize}>
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

        {widthID &&
          <div onChange={handleWidth}>
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

        {comfortID &&
          <div onChange={handleComfort}>
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

        {qualityID &&
          <div onChange={handleQuality}>
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

        {lengthID &&
          <div onChange={handleLength}>
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

        {fitID &&
          <div onChange={handleFit}>
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



    </form>
  );
}


export default NewReviewForm;
