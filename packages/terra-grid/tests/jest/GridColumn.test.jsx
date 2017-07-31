/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import React from 'react';
import Col from '../../src/GridColumn';

// Snapshot Tests
it('should render a default Column', () => {
  const wrapper = shallow(<Col>Test</Col>);
  expect(wrapper).toMatchSnapshot();
});

it('should render column with all size breakpoints', () => {
  const col = <Col tiny={12} small={3} medium={2} large={1} huge={2}>Test</Col>;
  const wrapper = shallow(col);
  expect(wrapper).toMatchSnapshot();
});

it('should render specified width column', () => {
  const wrapper = shallow(<Col col={3} >Test</Col>);
  expect(wrapper).toMatchSnapshot();
});

// Prop Tests
it('should have customized class name', () => {
  const wrapper = shallow(<Col className="test">Test</Col>);
  expect(wrapper.prop('className')).toContain('column test');
});

// Error Handling Test
it('should throw error for range', () => {
  try {
    shallow(<Col className="test" col={13}>Test</Col>);
  } catch (e) {
    expect(e.message).toContain('must be in range 1 to 12 inclusively');
  }
});
