import React from 'react';
import initStoryshots from 'storyshots';
import Grid from '../src/Grid';

const defaultVariety = <Grid />;
const primaryVariety = <Grid name="primary" variant="terra-Grid--primary" />;

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
it('should have the class terra-Grid--default', () => {
  const wrapper = shallow(defaultVariety);
  expect(wrapper.prop('className')).toContain('terra-Grid terra-Grid--default');
});

it('should have the class terra-Grid--primary', () => {
  const wrapper = shallow(primaryVariety);
  expect(wrapper.prop('className')).toContain('terra-Grid terra-Grid--primary');
});


// Event Tests
it('should toggle the class u-selected on default', () => {
  const wrapper = shallow(defaultVariety);
  expect(wrapper).toMatchSnapshot();
  wrapper.find('.terra-Grid--default').simulate('click');
  expect(wrapper).toMatchSnapshot();
  wrapper.find('.terra-Grid--default').simulate('click');
  expect(wrapper).toMatchSnapshot();
});

it('should toggle the class u-selected on primary', () => {
  const wrapper = shallow(primaryVariety);
  expect(wrapper).toMatchSnapshot();
  wrapper.find('.terra-Grid--primary').simulate('click');
  expect(wrapper).toMatchSnapshot();
  wrapper.find('.terra-Grid--primary').simulate('click');
  expect(wrapper).toMatchSnapshot();
});
