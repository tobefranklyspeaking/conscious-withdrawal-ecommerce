import React, { useState, useEffect } from 'react';
import Star from '../shared/Star.jsx';

export default ({ productID }) => {
  var outfitList = JSON.parse(localStorage.getItem('myOutfit'));
  const [isFavorited, setIsFavorited] = useState();

  useEffect(() => {
    if (outfitList.includes(productID)) {
      setIsFavorited(true);
    } else {
      setIsFavorited(false);
    }
  }, [])

  const handleClick = () => {
    console.log('Toggle was clicked! 👀');
    if (isFavorited) {
      var productIndex = outfitList.indexOf(productID);
      outfitList.splice(productIndex, 1);
      outfitList = JSON.stringify(outfitList);
      localStorage.setItem('myOutfit', outfitList);
    } else {
      outfitList.push(productID);
      outfitList = JSON.stringify(outfitList);
      localStorage.setItem('myOutfit', outfitList);
    }
    setIsFavorited(!isFavorited);
  }

  return (
    <div onClick={handleClick}>
      <Star
      className='toggle-outfit star'
      color={isFavorited ? 'gold' : 'hsla(0, 0%, 100%, .6)'}
      />
    </div>
  )
}