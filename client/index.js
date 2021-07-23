import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from "styled-components";
import axios from 'axios';
// import NavBar from './components/shared/Navbar.jsx';
import Dropdown from './components/shared/Dropdown.js'
import Shared from './components/shared/shared.jsx'

const App = () => {

  /**********************Not needed at this time***********************/
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
  /**********************Not needed at this time***********************/

  return (
    <div>
      <Shared />
      <div>
        <h1>Hello {text}!</h1>
        {products.map((product, i) => (
          <p key={i}>{product.description}</p>
        ))}
      </div>
      <Dropdown options={['yes', 'no']} title="dropdown" />
    </div>
  );
}
export default App;

ReactDOM.render(<App />, document.getElementById('app'));