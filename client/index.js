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
      let res = await axios.get('/products/19089');
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
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
