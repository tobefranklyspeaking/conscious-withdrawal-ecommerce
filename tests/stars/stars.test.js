import React from 'react';
import { shallow } from 'enzyme';

import Stars from '../../client/components/shared/Stars.jsx';
import Star from '../../client/components/shared/Star.jsx'
import { it } from '@jest/globals';

describe('<Stars /> Ratings Component', () => {
  it('renders five <Star /> components.', () => {
    const wrapper = shallow(<Stars />);
    expect(wrapper.find(Star).length).toBe(5);
  });
});
