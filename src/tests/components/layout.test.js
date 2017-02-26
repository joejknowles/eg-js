import Component from '../../components/layout';

import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';

const shallowRenderer = ReactTestUtils.createRenderer();

it('renders layout as before', () => {
  const component = shallowRenderer.render(<Component children={ <div className="child" /> } />);
  expect(component).toMatchSnapshot();
});
