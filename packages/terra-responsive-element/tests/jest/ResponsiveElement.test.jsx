import React from 'react';
import ResponsiveElement from '../../src/ResponsiveElement';

it('should render the component defined for tiny', () => {
  const responsiveElement = shallow(<ResponsiveElement tiny={<div>Tiny</div>} />);
  expect(responsiveElement).toMatchSnapshot();
});
