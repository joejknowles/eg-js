import { Events } from '../../components/events';

import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';

const shallowRenderer = ReactTestUtils.createRenderer();

it('renders events as before', () => {
  const component = shallowRenderer.render(<Events events={ [] } />);
  expect(component).toMatchSnapshot();
});
