import React from 'react';
import { shallow, mount, render } from 'enzyme';

import Dropdown from '../client/components/shared/Dropdown.jsx'

it('should render correctly with no props', () => {
  const comp = shallow(<Dropdown />);
  expect(comp).toMatchSnapshot();
});
