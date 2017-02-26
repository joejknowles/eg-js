import { EventDetails } from '../../components/eventDetails';

import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';

const shallowRenderer = ReactTestUtils.createRenderer();

it('renders EventDetail page as before', () => {
  const detailProps = {
    "id":"266970","title":"The Warehouse Project || Tuskegee","date":"Tuesday 27th December","image":"http://d13rtmsmlweq99.cloudfront.net/cms_media/images/events/948e6b789115dac236b33b5f606600ef.1467646509.jpg","type":"club","venue":"Store Steet, Manchester"
  };
  const component = shallowRenderer.render(
    <EventDetails { ...detailProps } />
  );
  expect(component).toMatchSnapshot();
});
