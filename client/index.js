import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from "styled-components";
import axios from 'axios';
import NavBar from './components/shared/navBar.js';

const App = () => {
  const [text, updateText] = useState('');
  const [products, updateProducts] = useState([]);
  useEffect(async () => {
    try {
      let res = await axios.get('/products');
      updateProducts(res.data);
      console.log('successful get');
    } catch (err) {
      console.error(err)
    }
  }, []);

  return (
    <div>
      <NavBar />
      <div>
        <h1>Hello {text}!</h1>
        {products.map((product, i) => (
          <p key={i}>{product.description}</p>
        ))}
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
export default app;
