import React from 'react';
import { shallow, mount, render } from 'enzyme';

import Dropdown from '../client/components/Dropdown.jsx'

it('should render correctly with no props', () => {
  const comp = shallow(<DropDown />);
  expect(comp).toMatchSnapshot();
});
