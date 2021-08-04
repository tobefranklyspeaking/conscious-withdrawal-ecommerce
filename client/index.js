import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from "styled-components";
import axios from 'axios';
import Shared from './components/shared/shared.jsx';
import NavSearch from '/client/components/shared/NavSearchBar.jsx';

const App = () => {

  /**********************Not needed at this time***********************/
  const [currentProduct, updateCurrent] = useState({});
  const [currentSelection, updateSelection] = useState(Math.floor((Math.random() * (18077 - 17067)) + 17067));

  useEffect(async () => {
    try {
      let res = await axios.get(`/products/${currentSelection}`);
      updateCurrent(res.data);
      console.log('successful get with item: ', res.data);
    } catch (err) {
      console.error(err);
    }
  }, [currentSelection]);

  const updateProduct = (props) => {
    updateSelection(props);
  }

  return (
    <div>
      <Shared current={currentProduct} update={updateProduct}/>
    </div>
  );
}

export default App;

ReactDOM.render(<App />, document.getElementById('app'));
