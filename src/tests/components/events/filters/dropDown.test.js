import { FilterDropDown } from '../../../../components/events/filters/dropDown';

import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';

const shallowRenderer = ReactTestUtils.createRenderer();

it('renders type filter as before', () => {
  const component = shallowRenderer.render(
    <FilterDropDown options={ [] } />
  );
  expect(component).toMatchSnapshot();
});
