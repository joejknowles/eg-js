import { EventDetails } from '../../components/eventDetails';

import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import { shallow } from 'enzyme';

const shallowRenderer = ReactTestUtils.createRenderer();

describe('EventDetails component', () => {
  const detailProps = {
    "id":"266970","title":"The Warehouse Project || Tuskegee","date":"Tuesday 27th December","image":"http://d13rtmsmlweq99.cloudfront.net/cms_media/images/events/948e6b789115dac236b33b5f606600ef.1467646509.jpg","type":"club","venue":"Store Steet, Manchester"
  };

  it('renders as before', () => {
    const component = shallowRenderer.render(
      <EventDetails { ...detailProps } />
    );
    expect(component).toMatchSnapshot();
  });

  it('calls fetchEventDetails on componentDidMount', () => {
    const fetchEventDetailsMock = jest.fn();
    const component = shallow(
      <EventDetails
        events={ [] }
        fetchEventDetails={ fetchEventDetailsMock }
      />
    );
    component.instance().componentDidMount();
    expect(fetchEventDetailsMock).toHaveBeenCalledWith("266970");
  });
});
