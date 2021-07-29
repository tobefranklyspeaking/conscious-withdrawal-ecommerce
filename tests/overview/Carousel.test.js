import React from 'react';
import { shallow, mount, render } from 'enzyme';

import Carousel from '../../client/components/shared/Carousel.jsx'

it('should render correctly with no props', () => {
  const comp = shallow(<Carousel urls={['#', '#']}/>);
  expect(comp).toMatchSnapshot();
});

it('should render correctly with dummy data', () => {
  let urls = ['http://placecorgi.com/260/260', 'http://placecorgi.com/250', 'http://placecorgi.com/250'];
  const comp = shallow(<Carousel urls={urls}/>);
  expect(comp).toMatchSnapshot();
});
