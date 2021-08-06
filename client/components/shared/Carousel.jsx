import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import ModularCarousel from './Modular-Carousel.jsx'
//component styles

const SlideWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 5rem;
  z-index: 998;
  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const LeftArrowWrapper = styled.div`
  height: 20px;
  width: 20px;
  /* position: absolute;
  top: 50%; */
`;
const RightArrowWrapper = styled.div`
  height: 20px;
  width: 20px;
  /* position: absolute;
  top: 50%;
  left: calc(100% - 20px); */
  margin-right: 1rem;
`;
const CarouselWrapper = styled.div`
  position: relative;
  width: auto;
  height: ${props => props.height || '65vh'};
  border: 1px solid black;
  display: flex;
  align-items: center;
`;
const SideSlideWrapper = styled.div`
  width: 7rem;
  height: 7rem;
  margin-right: 2rem;
  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const Zoomed = styled.div`
  background-image: url(${props => props.url});
  position: absolute;
  border-radius: 50%;
  top: 70%;
  width: 40vh;
  height: 40vh;
  border: 1px solid black;
  z-index: 999;
`;

//slide subcomponent - image itself
const Slide = ({ url, onMouseEnter, onMouseLeave}) => {
  return (
    <SlideWrapper id="crSlide">
      <img src={url} alt="photo of clothing" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}/>
    </SlideWrapper>);
};

//arrow subcomponent for nav
const Arrow = ({ direction, clickHandler}) => {
  return (
    direction === 'Left' ?
      (<LeftArrowWrapper onClick={clickHandler}>
        <AiOutlineArrowLeft size={'1.5em'}/>
      </LeftArrowWrapper>) :
      (<RightArrowWrapper onClick={clickHandler}>
        <AiOutlineArrowRight size={'1.5em'}/>
      </RightArrowWrapper>)
    );
}

const ZoomedSlide = ({url}) => {
  return (<Zoomed url={url} id="zoomed"/>);
};

/************ PRIMARY COMPONENT HERE ************/
const Carousel = ({ urls, height, thumbnails}) => {
  //state: index of images based on current item
  const [index, setIndex] = useState(0);
  const [modComponents, setModComponents] = useState([]);
  const [showZoom, setShowZoom] = useState(false);

  useEffect(() => {
    const handler = (e) => {
      //need to setIndex to correct component; should be index of thata component in modComponents
    };
    let newThumbnails = thumbnails.map((url,i) => (<SideSlideWrapper key={i} onClick={handler}><img src={url}/></SideSlideWrapper>))
    setModComponents(newThumbnails);

  }, [thumbnails]);

  useEffect(() => {
    if(showZoom) {
      const elt = document.querySelector("#zoomed");
      const crSlide = document.querySelector("#crSlide")
      crSlide.addEventListener("mousemove", (e) => {
        elt.style.backgroundPositionX = -e.offsetX + "px";
        elt.style.backgroundPositionY = -e.offsetY + "px";
      });
    }
  }, [showZoom])

  //event handlers to switch carousel to next/previous image
  const previousSlide = (e) => {
    if (index >= 1) {
      setIndex(index - 1);
    }
  };
  const nextSlide = (e) => {
    if (index < urls.length - 1) {
      setIndex(index + 1);
    }
  };

  return (
    <>
    <CarouselWrapper height={height}>
      {showZoom && (<ZoomedSlide url={urls[index]}/>)}
      <ModularCarousel orientation="column" components={modComponents}/>
      <Arrow direction="Left" clickHandler={previousSlide}/>
      <Slide
      url={urls[index]}
      onMouseEnter={(e) => {setShowZoom(true)}}
      onMouseLeave={(e) => {setShowZoom(false)}}
      />
      <Arrow direction="Right" clickHandler={nextSlide}/>
    </CarouselWrapper>
    </>
    );


}
export default Carousel;
