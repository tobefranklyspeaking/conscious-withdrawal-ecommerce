import React, {useState, useEffect} from 'react';
import reactDOM from 'react-dom';

const App = () => {
  const [text, updateText] = useState('');

  useEffect(() => {
    updateText('World');
  })

  return (
    <div>
      <h1>Hello {text}!</h1>
    </div>
  );
}

reactDOM.render(<App />, document.getElementById('app'));
export default app;