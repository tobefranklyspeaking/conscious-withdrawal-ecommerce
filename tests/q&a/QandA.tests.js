/*
* @jest-environment jsdom
*/
import React from 'react';
import ReactDOM from 'react-dom';
import Dropdown from '../../client/components/shared/Dropdown.jsx'
import ReviewDropdown from '../../client/components/shared/ReviewDropdown.jsx';

it('Dropdown should render without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Dropdown />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('ReviewDropdown should render without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ReviewDropdown />, div);
  ReactDOM.unmountComponentAtNode(div);
});

