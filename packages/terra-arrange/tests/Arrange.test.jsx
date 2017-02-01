import React from 'react';
import initStoryshots from 'storyshots';
import Arrange from '../src/Arrange';

const defaultVariety = <Arrange />;
const primaryVariety = <Arrange name="primary" variant="terra-Arrange--primary" />;

// Run snapshot tests for react-storybook
initStoryshots();

// Snapshot Tests
it('should render a default component', () => {
  const wrapper = shallow(defaultVariety);
  expect(wrapper).toMatchSnapshot();
});

it('should render a primary component', () => {
  const wrapper = shallow(primaryVariety);
  expect(wrapper).toMatchSnapshot();
});


// Prop Tests
it('should have the class terra-Arrange--default', () => {
  const wrapper = shallow(defaultVariety);
  expect(wrapper.prop('className')).toContain('terra-Arrange terra-Arrange--default');
});

it('should have the class terra-Arrange--primary', () => {
  const wrapper = shallow(primaryVariety);
  expect(wrapper.prop('className')).toContain('terra-Arrange terra-Arrange--primary');
});


// Event Tests
it('should toggle the class u-selected on default', () => {
  const wrapper = shallow(defaultVariety);
  expect(wrapper).toMatchSnapshot();
  wrapper.find('.terra-Arrange--default').simulate('click');
  expect(wrapper).toMatchSnapshot();
  wrapper.find('.terra-Arrange--default').simulate('click');
  expect(wrapper).toMatchSnapshot();
});

it('should toggle the class u-selected on primary', () => {
  const wrapper = shallow(primaryVariety);
  expect(wrapper).toMatchSnapshot();
  wrapper.find('.terra-Arrange--primary').simulate('click');
  expect(wrapper).toMatchSnapshot();
  wrapper.find('.terra-Arrange--primary').simulate('click');
  expect(wrapper).toMatchSnapshot();
});
