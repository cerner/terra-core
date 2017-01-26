import React from 'react';
import initStoryshots from 'storyshots';
import CompactTile from '../src/TerraCompactTile';

const defaultVariety = <CompactTile />;
const primaryVariety = <CompactTile name="primary" variant="terra-CompactTile--primary" />;

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
it('should have the class terra-CompactTile--default', () => {
  const wrapper = shallow(defaultVariety);
  expect(wrapper.prop('className')).toContain('terra-CompactTile terra-CompactTile--default');
});

it('should have the class terra-CompactTile--primary', () => {
  const wrapper = shallow(primaryVariety);
  expect(wrapper.prop('className')).toContain('terra-CompactTile terra-CompactTile--primary');
});


// Event Tests
it('should toggle the class u-selected on default', () => {
  const wrapper = shallow(defaultVariety);
  expect(wrapper).toMatchSnapshot();
  wrapper.find('.terra-CompactTile--default').simulate('click');
  expect(wrapper).toMatchSnapshot();
  wrapper.find('.terra-CompactTile--default').simulate('click');
  expect(wrapper).toMatchSnapshot();
});

it('should toggle the class u-selected on primary', () => {
  const wrapper = shallow(primaryVariety);
  expect(wrapper).toMatchSnapshot();
  wrapper.find('.terra-CompactTile--primary').simulate('click');
  expect(wrapper).toMatchSnapshot();
  wrapper.find('.terra-CompactTile--primary').simulate('click');
  expect(wrapper).toMatchSnapshot();
});
