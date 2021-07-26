import React from 'react';
import ReactDOM from 'react-dom';
import Dropdown from '../../client/components/shared/Dropdown'; 
import ReviewDropdown from '../../client/components/shared/ReviewDropdown'; 

it('should render without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Dropdown />, div);
  ReactDOM.unmountComponentAtNode(div);
})
