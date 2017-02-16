import React from 'react';
import initStoryshots from 'storyshots';
import ProgressBar from '../src/ProgressBar';

const defaultVariety = <ProgressBar />;
const primaryVariety = <ProgressBar name="primary" variant="terra-ProgressBar--primary" />;

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
it('should have the class terra-ProgressBar--default', () => {
  const wrapper = shallow(defaultVariety);
  expect(wrapper.prop('className')).toContain('terra-ProgressBar terra-ProgressBar--default');
});

it('should have the class terra-ProgressBar--primary', () => {
  const wrapper = shallow(primaryVariety);
  expect(wrapper.prop('className')).toContain('terra-ProgressBar terra-ProgressBar--primary');
});


// Event Tests
it('should toggle the class u-selected on default', () => {
  const wrapper = shallow(defaultVariety);
  expect(wrapper).toMatchSnapshot();
  wrapper.find('.terra-ProgressBar--default').simulate('click');
  expect(wrapper).toMatchSnapshot();
  wrapper.find('.terra-ProgressBar--default').simulate('click');
  expect(wrapper).toMatchSnapshot();
});

it('should toggle the class u-selected on primary', () => {
  const wrapper = shallow(primaryVariety);
  expect(wrapper).toMatchSnapshot();
  wrapper.find('.terra-ProgressBar--primary').simulate('click');
  expect(wrapper).toMatchSnapshot();
  wrapper.find('.terra-ProgressBar--primary').simulate('click');
  expect(wrapper).toMatchSnapshot();
});
