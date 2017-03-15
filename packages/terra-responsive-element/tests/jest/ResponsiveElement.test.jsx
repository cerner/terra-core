import React from 'react';
import ResponsiveElement from '../../src/ResponsiveElement';

// Snapshot Tests
it('should render a default component', () => {
  const responsiveElement = shallow(<ResponsiveElement />);
  expect(responsiveElement).toMatchSnapshot();
});

it('should merge classes passed in through props', () => {
  const responsiveElement = shallow(<ResponsiveElement className="TestClass" />);
  expect(responsiveElement).toMatchSnapshot();
});

// Prop Tests
it('should have the class terra-ResponsiveElement', () => {
  const responsiveElement = shallow(<ResponsiveElement />);
  expect(responsiveElement.prop('className')).toContain('terra-ResponsiveElement');
});

// Custom Props
it('should merge classes passed in through props', () => {
  const responsiveElement = shallow(<ResponsiveElement className="TestClass" />);
  expect(responsiveElement.prop('className')).toContain('terra-ResponsiveElement TestClass');
});

it('should pass custom props onto the root element', () => {
  const responsiveElement = shallow(<ResponsiveElement data-terra-mock="MockData" />);
  expect(responsiveElement.prop('data-terra-mock')).toContain('MockData');
});
