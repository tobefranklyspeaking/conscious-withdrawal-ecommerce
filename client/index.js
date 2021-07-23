import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from "styled-components";
import axios from 'axios';
// import NavBar from './components/shared/Navbar.jsx';
import Dropdown from './components/shared/Dropdown.js'
import Shared from './components/shared/shared.jsx'

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
      </div>
      <Dropdown options={['yes', 'no']} title="dropdown" />
    </div>
  );
}
export default App;

ReactDOM.render(<App />, document.getElementById('app'));