/*
* @jest-environment jsdom
*/
const React = require('react');
const ReactDOM = require('react-dom');
const Dropdown = require('../../client/components/shared/Dropdown');
const ReviewDropdown = require('../../client/components/shared/ReviewDropdown');

it('should render without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Dropdown />, div);
  ReactDOM.unmountComponentAtNode(div);
});

