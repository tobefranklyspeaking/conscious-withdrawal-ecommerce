import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from "styled-components";
import axios from 'axios';
import Shared from './components/shared/shared.jsx';

const App = (props) => {

  /**********************Not needed at this time***********************/
  const [currentProduct, updateCurrent] = useState({});

  useEffect(async (props) => {
    try {
      console.log('-----------', props);

      let temp = Math.floor((Math.random() * (18077 - 17067)) + 17067);
      let res = await axios.get(`/products/${temp}`);
      updateCurrent(res.data);
      console.log('successful get with item: ', res.data);
    } catch (err) {
      console.error(err);
    }
  }, []);

  const handleClick = async () => {
    // This will allow the user to submit search

    console.log('handleClick clicked', event.target)
  }

  /**********************Not needed at this time***********************/

  return (
    <div>
      <Shared current={currentProduct}/>
    </div>
  );
}

export default App;

ReactDOM.render(<App />, document.getElementById('app'));
