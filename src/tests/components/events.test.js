import { Events } from '../../components/events';

import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import { shallow } from 'enzyme';

const shallowRenderer = ReactTestUtils.createRenderer();

describe('Events Component', () => {
  it('renders as before', () => {
    const component = shallowRenderer.render(<Events events={ [] } />);
    expect(component).toMatchSnapshot();
  });

  it('calls fetchEvents on componentDidMount', () => {
    const fetchEventsMock = jest.fn();
    const component = shallow(
      <Events
        events={ [] }
        fetchEvents={ fetchEventsMock }
      />
    );
    component.instance().componentDidMount();
    expect(fetchEventsMock).toHaveBeenCalled();
  });
});
