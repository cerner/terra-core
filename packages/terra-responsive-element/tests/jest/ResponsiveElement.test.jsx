import React from 'react';
import ResponsiveElement from '../../src/ResponsiveElement';

it('should render the component defined for tiny', () => {
  const responsiveElement = mount(<ResponsiveElement tiny={<div>Tiny</div>} />);
  expect(responsiveElement).toMatchSnapshot();
});
