import React from 'react';
import Base from '../../src/Base';

// Snapshot Tests
it('should support rendering a string as children', () => {
  const base = shallow(<Base>String</Base>);
  expect(base).toMatchSnapshot();
});

it('should support rendering an element as children', () => {
  const base = shallow(<Base><p>Element</p></Base>);
  expect(base).toMatchSnapshot();
});

it('should support rendering an array of elements as a children', () => {
  const base = shallow(<Base><h1>Heading</h1><p>Element 1</p><p>Element 2</p></Base>);
  expect(base).toMatchSnapshot();
});

it('should render the component with merged attributes', () => {
  const base = shallow(<Base className="TestClass" data-mock="data" id="TestId">String</Base>);
  expect(base).toMatchSnapshot();
});
