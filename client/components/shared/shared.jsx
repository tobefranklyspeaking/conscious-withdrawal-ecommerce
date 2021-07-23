import React from 'react';
import NavBar from './Navbar.jsx';
import Overview from '../overview/Overview.js';
import QandA from '../q&a/QandA.js';
import Ratings from '../ratings-reviews/Ratings-reviews.js';
import Related from '../related-items/Related-items.js';

const Shared = () => {
  return (
    <>
      <NavBar/>
      <Overview/>
      <QandA/>
      <Ratings/>
      <Related/>
    </>
  )
}

export default Shared;