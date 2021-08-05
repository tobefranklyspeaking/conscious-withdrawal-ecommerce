import React, { useState, useEffect } from 'react';
import styled from "styled-components";


const ReviewBodyWrapper = styled.div`
font-weight: lighter;
justify-content: left;
text-align: left;
margin: .2rem 0rem;
font-size: 12px;
`;

const ShowMoreButton = styled.button`
background-color: transparent;
  text-align: center;
  font-size: 12px;
  font-weight: lighter;
  outline: none;
  border: none;
  text-decoration: underline;
  &:hover.ShowMoreButton {
    color: blue;
  }
`;

const Reviewbody = ({body, photos}) => {

  const [bodyDisplay, setBodyDisplay] = useState("");
  const [showMore, setShowMore] = useState(false);



useEffect(() => {
  if (body) {
    if (body.length <= 250) {
      setBodyDisplay(body);
    } else {
      setBodyDisplay(body.slice(0, 250));
      setShowMore(true)
    }
  }
}, [body]);


//console.log('reviewbody: ', bodyDisplay);
//console.log('review photos', photos);

  return (
    //
    <ReviewBodyWrapper>
      {showMore ? bodyDisplay + '...' : bodyDisplay}
      {showMore &&
      <ShowMoreButton className="ShowMoreButton" onClick={(e) => {setBodyDisplay(body); setShowMore(false);}}>ShowMore</ShowMoreButton>
      }
    </ReviewBodyWrapper>

  );
}

export default Reviewbody;