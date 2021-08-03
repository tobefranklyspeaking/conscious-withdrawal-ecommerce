import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from "styled-components";
import axios from 'axios';
import Shared from './components/shared/shared.jsx';

const App = () => {

  /**********************Not needed at this time***********************/
  const [currentProduct, updateCurrent] = useState({});

  useEffect(async () => {
    try {
      let res = await axios.get('/products/17068');
      updateCurrent(res.data);
      console.log('successful get with item: ', res.data);
    } catch (err) {
      console.error(err)
    }
  }, []);
  /**********************Not needed at this time***********************/

  return (
    <div>
      <Shared current={currentProduct}/>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
