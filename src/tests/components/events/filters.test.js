import { Filters } from '../../../components/events/filters';

import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import { shallow } from 'enzyme';

const shallowRenderer = ReactTestUtils.createRenderer();

describe('Filters component', () => {
  it('renders as before', () => {
    const component = shallowRenderer.render(<Filters />);
    expect(component).toMatchSnapshot();
  });

  it('calls on type filter Change', () => {
    const mock = jest.fn();
    const component = shallow(
      <Filters
        onTypeFilterChange={ mock }
      />
    );
    component.find('input').first().simulate('change', { target: { value: 'gigs' } });
    expect(mock).toHaveBeenCalledWith('gigs');
  });
});
