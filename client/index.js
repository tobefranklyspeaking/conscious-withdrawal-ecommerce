import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from "styled-components";
import axios from 'axios';
import Shared from './components/shared/Shared.jsx'

const App = () => {

  /**********************Not needed at this time***********************/
  // const [text, updateText] = useState('');
  // const [products, updateProducts] = useState([]);
  // useEffect(async () => {
  //   try {
  //     let res = await axios.get('/products');
  //     updateProducts(res.data);
  //     console.log('successful get');
  //   } catch (err) {
  //     console.error(err)
  //   }
  // }, []);
  /**********************Not needed at this time***********************/

  return (
    <>
      <Shared />
    </>
  );
}
export default App;

ReactDOM.render(<App />, document.getElementById('app'));