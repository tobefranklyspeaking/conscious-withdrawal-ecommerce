import React from 'react';
import NavBar from './Navbar.jsx';
import Overview from '../overview/Overview.js';
import QandA from '../q&a/QandA.js';
import Ratings from '../ratings-reviews/Ratings-reviews.js';
import Related from '../related-items/Related-items.js';

const Shared = ({current}) => {
  return (
    <>
      <NavBar current={current}/>
      <Overview current={current}/>
      <QandA current={current}/>
      <Ratings current={current}/>
      <Related current={current}/>
    </>
  )
}

export default Shared;