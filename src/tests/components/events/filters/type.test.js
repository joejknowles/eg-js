import { TypeFilter } from '../../../../components/events/filters/type';

import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';

const shallowRenderer = ReactTestUtils.createRenderer();

it('renders type filter as before', () => {
  const component = shallowRenderer.render(<TypeFilter />);
  expect(component).toMatchSnapshot();
});
