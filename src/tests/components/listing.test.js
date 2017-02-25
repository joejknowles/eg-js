import { Listing } from '../../components/listing';

import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';

const shallowRenderer = ReactTestUtils.createRenderer();

it('renders listing as before', () => {
  const component = shallowRenderer.render(<Listing />);
  expect(component).toMatchSnapshot();
});
