import Component from '../../components/eventImage';

import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';

const shallowRenderer = ReactTestUtils.createRenderer();

it('renders event image as before with url', () => {
  const component = shallowRenderer.render(<Component url='something' />);
  expect(component).toMatchSnapshot();
});

it('renders event image as before without url', () => {
  const component = shallowRenderer.render(<Component />);
  expect(component).toMatchSnapshot();
});
