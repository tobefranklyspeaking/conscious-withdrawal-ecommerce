import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import ReviewPhotos from './ReviewPhotos.jsx';


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

const ImageContainer = styled.div`
display: flex;
justify-content: start;
`;

const Image = styled.img`
border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;
  max-width: 7rem;
max-height: 7rem;
&:hover {
  box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5);
}
`;

const Reviewbody = ({body, photos}) => {

  const [bodyDisplay, setBodyDisplay] = useState("");
  const [photoDisplay, setPhotoDisplay] = useState([photos]);
  const [showMore, setShowMore] = useState(false);
  const [show, setShow] = useState(false);



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

let handleImgClick = () => {
  <Modal onClick={onClose}>
      <ModalContent onClick={e => e.stopPropagation()}>
        <ModalHeader>
          <h4 className="modal-title">Write Your Review</h4>
        </ModalHeader>
        <ModalBody>
          About the {index}
        </ModalBody>
        <ModalFooter className="modal-footer">
          <button onClick={() => {onClose(); setCurrentIndex(null)}} className="button">Close</button>
        </ModalFooter>
      </ModalContent>
    </Modal>


};

//console.log('reviewbody: ', bodyDisplay);
console.log('review photos', photos);

  return (
    //
    <>
    <ReviewBodyWrapper>
      {showMore ? bodyDisplay + '...' : bodyDisplay}
      {showMore &&
      <ShowMoreButton className="ShowMoreButton" onClick={(e) => {setBodyDisplay(body); setShowMore(false);}}>Show More</ShowMoreButton>
      }
    </ReviewBodyWrapper>
    <ImageContainer>
    {photos ? photos.map((pho, index) => (<><Image key={index} src={pho.url} alt="Review Image"/></>))  : '#'}
      </ImageContainer>
    </>
  );
}

export default Reviewbody;

/*

    <Image src="http://placecorgi.com/250" alt="corgi" />
    <Image src="http://placecorgi.com/460/180" alt="corgi" />
    <Image src="http://placecorgi.com/250" alt="corgi" />


    {(photoDisplay.length > 0) &&
    <ImageContainer>
      photoDisplay.map((img) => (
        <Image src={img} alt="image" />
      ));
    </ImageContainer>
    }



         {photos ? photos.map((pho, index) => (<><Image key={index} src={pho.url} alt="Review Image" onClick={() => setShow(true)}/></>))  : '#'}


*/