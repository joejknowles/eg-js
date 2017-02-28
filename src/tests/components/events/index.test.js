import { Events } from '../../../components/events';

import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import { shallow } from 'enzyme';

const shallowRenderer = ReactTestUtils.createRenderer();

describe('Events Component', () => {
  it('renders as before with an event', () => {
    const component = shallowRenderer.render(<Events events={ [ 1 ] } />);
    expect(component).toMatchSnapshot();
  });

  it('renders as before with no events', () => {
    const component = shallowRenderer.render(<Events events={ [] } />);
    expect(component).toMatchSnapshot();
  });

  it('renders as before while loading', () => {
    const component = shallowRenderer.render(<Events eventsLoading={ true } />);
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
