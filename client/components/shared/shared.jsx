import React, { useEffect } from 'react';
import NavBar from './Navbar.jsx';
import Overview from '../overview/Overview.jsx';
import QandA from '../q&a/QandA.jsx';
import Ratings from '../ratings-reviews/Ratings-reviews.js';
import RelatedProducts from '../related-items/RelatedItems.jsx';

const Shared = ({ current, update }) => {
  return (
    <>
      <NavBar update={update} />
      <Overview current={current} />
      <RelatedProducts current={current} />
      <QandA current={current} />
      <Ratings current={current} />
    </>
  )
}

export default Shared;
