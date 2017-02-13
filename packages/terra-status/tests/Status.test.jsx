import React from 'react';
import initStoryshots from 'storyshots';
import Status from '../src/Status';

const defaultVariety = <Status />;
const primaryVariety = <Status name="primary" variant="terra-Status--primary" />;

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
it('should have the class terra-Status--default', () => {
  const wrapper = shallow(defaultVariety);
  expect(wrapper.prop('className')).toContain('terra-Status terra-Status--default');
});

it('should have the class terra-Status--primary', () => {
  const wrapper = shallow(primaryVariety);
  expect(wrapper.prop('className')).toContain('terra-Status terra-Status--primary');
});


// Event Tests
it('should toggle the class u-selected on default', () => {
  const wrapper = shallow(defaultVariety);
  expect(wrapper).toMatchSnapshot();
  wrapper.find('.terra-Status--default').simulate('click');
  expect(wrapper).toMatchSnapshot();
  wrapper.find('.terra-Status--default').simulate('click');
  expect(wrapper).toMatchSnapshot();
});

it('should toggle the class u-selected on primary', () => {
  const wrapper = shallow(primaryVariety);
  expect(wrapper).toMatchSnapshot();
  wrapper.find('.terra-Status--primary').simulate('click');
  expect(wrapper).toMatchSnapshot();
  wrapper.find('.terra-Status--primary').simulate('click');
  expect(wrapper).toMatchSnapshot();
});
