// this file is a placeholder and can be modified to meet any needs

import React, {useState, useEffect} from 'react';
import reactDOM from 'react-dom';

const App = () => {
  //state hooks
  const [text, updateText] = useState('');


  //useEffect hooks
  useEffect(() => {
    updateText('world from useEffect');
    //fetch
  });

  //return (like render)
  return (
    <div>
      <p>Hello {text}</p>
    </div>
  );

};

reactDOM.render(<App />, document.getElementById('app'));
export default App;
