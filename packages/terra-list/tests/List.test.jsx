import React from 'react';
import initStoryshots from 'storyshots';
import List from '../src/List';

const defaultVariety = <List />;
const primaryVariety = <List name="primary" variant="terra-List--primary" />;

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
it('should have the class terra-List--default', () => {
  const wrapper = shallow(defaultVariety);
  expect(wrapper.prop('className')).toContain('terra-List terra-List--default');
});

it('should have the class terra-List--primary', () => {
  const wrapper = shallow(primaryVariety);
  expect(wrapper.prop('className')).toContain('terra-List terra-List--primary');
});


// Event Tests
it('should toggle the class u-selected on default', () => {
  const wrapper = shallow(defaultVariety);
  expect(wrapper).toMatchSnapshot();
  wrapper.find('.terra-List--default').simulate('click');
  expect(wrapper).toMatchSnapshot();
  wrapper.find('.terra-List--default').simulate('click');
  expect(wrapper).toMatchSnapshot();
});

it('should toggle the class u-selected on primary', () => {
  const wrapper = shallow(primaryVariety);
  expect(wrapper).toMatchSnapshot();
  wrapper.find('.terra-List--primary').simulate('click');
  expect(wrapper).toMatchSnapshot();
  wrapper.find('.terra-List--primary').simulate('click');
  expect(wrapper).toMatchSnapshot();
});
