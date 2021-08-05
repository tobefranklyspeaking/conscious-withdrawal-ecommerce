import React, { useState, useEffect } from 'react';
import Star from '../shared/Star.jsx';

export default ({ productID }) => {
  const [isFavorited, setIsFavorited] = useState();

  useEffect(() => {
    var outfitList = JSON.parse(localStorage.getItem('myOutfit'));
    if (outfitList.includes(productID)) {
      setIsFavorited(true);
    } else {
      setIsFavorited(false);
    }
  }, [])

  return (
    <Star
    className='toggle-outfit star'
    color={isFavorited ? 'gold' : 'hsla(0, 0%, 100%, .6)'}
    />
  )
}