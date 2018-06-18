import React from 'react';
import ResponsiveElement from '../../src/ResponsiveElement';

it('should render a default component', () => {
  const responsiveElement = shallow(<ResponsiveElement defaultElement={<div>Default</div>} />);
  expect(responsiveElement).toMatchSnapshot();
});
