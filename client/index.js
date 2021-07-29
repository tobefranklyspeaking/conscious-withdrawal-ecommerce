import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from "styled-components";
import axios from 'axios';
import Carousel from './components/shared/Carousel.jsx';
//import ReviewDropdown from './components/shared/ReviewDropdown.jsx';
import Shared from './components/shared/shared.jsx';
const sampleData = ['http://placecorgi.com/260/260', 'http://placecorgi.com/250', 'http://placecorgi.com/250'];
const App = () => {

  /**********************Not needed at this time***********************/
  const [currentProduct, updateCurrent] = useState({});

  useEffect(async () => {
    try {
      let res = await axios.get('/products/19094');
      updateCurrent(res.data);
      console.log('successful get');
    } catch (err) {
      console.error(err)
    }
  }, []);
  /**********************Not needed at this time***********************/

  return (
    <div>
      <Shared current={currentProduct}/>
      <div>
        {currentProduct.id}
        <Carousel urls={sampleData}/>
      </div>
    </div>
  );
}
export default App;

ReactDOM.render(<App />, document.getElementById('app'));
