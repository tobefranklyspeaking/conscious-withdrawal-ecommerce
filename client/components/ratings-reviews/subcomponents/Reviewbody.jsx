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
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);



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
//console.log('review photos', photos);

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
    {(photos[0]) && <><Image  src={photos[0].url} alt="Review Image" onClick={() => setShow1(true)}/><ReviewPhotos onClose={() => setShow1(false)} current={photos[0]} show={show1}/></>}
    {(photos[1]) && <><Image src={photos[1].url} alt="Review Image" onClick={() => setShow2(true)}/><ReviewPhotos onClose={() => setShow2(false)} current={photos[1]} show={show2}/></>}
    {(photos[2]) && <><Image  src={photos[2].url} alt="Review Image" onClick={() => setShow3(true)}/><ReviewPhotos onClose={() => setShow3(false)} current={photos[2]} show={show3}/></>}
    {(photos[3]) && <><Image  src={photos[3].url} alt="Review Image" onClick={() => setShow4(true)}/><ReviewPhotos onClose={() => setShow4(false)} current={photos[3]} show={show4}/></>}
    {(photos[4]) && <><Image  src={photos[4].url} alt="Review Image" onClick={() => setShow5(true)}/><ReviewPhotos onClose={() => setShow5(false)} current={photos[4]} show={show5}/></>}
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

onClose={() => setShow(false)} current={current} show={show}

         {photos ? photos.map((pho, index) => (<><Image key={index} src={pho.url} alt="Review Image" onClick={() => setShow(true)}/></>))  : '#'}

         {photos ? photos.map((pho, index) => (<><Image key={index} src={pho.url} alt="Review Image"/></>))  : '#'}


*/