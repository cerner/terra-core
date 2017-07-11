/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Arrange from 'terra-arrange';
import Status from '../../src/Status';

const image = <img style={{ display: 'block' }} height="150" width="300" src="http://placehold.it/350x150" alt="placeholder" />;
const icon = <svg xmlns="http://www.w3.org/2000/svg" width="75" height="100" style={{ display: 'block' }} fill="#8bc34a" viewBox="0 0 1000 1000"><path d="M525 841.3c-7.5 " /></svg>;
const ipsum = 'Lorem labore et dolore magna aliqua.';
const simpleText = <div>{ipsum}</div>;
const arrange = <Arrange fitStart={image} fill={simpleText} />;

// Snapshot Tests
it('should render a image with status', () => {
  const imageWithStatus = <Status color="red" >{image}</Status>;
  const wrapper = shallow(imageWithStatus);
  expect(wrapper).toMatchSnapshot();
});

it('should render a icon with status', () => {
  const iconWithStatus = <Status color="grey" >{icon}</Status>;
  const wrapper = shallow(iconWithStatus);
  expect(wrapper).toMatchSnapshot();
});

it('should render a simpleText with status', () => {
  const simpleTextWithStatus = <Status color="blue" >{simpleText}</Status>;
  const wrapper = shallow(simpleTextWithStatus);
  expect(wrapper).toMatchSnapshot();
});

it('should render a arrange with status and customProps', () => {
  const arrangeWithStatus = <Status color="green" id="id" >{arrange}</Status>;
  const wrapper = shallow(arrangeWithStatus);
  expect(wrapper).toMatchSnapshot();
});

// Prop Tests
it('should have all props including customProps set correctly', () => {
  const arrangeWithStatus = <Status color="green" id="id" >{arrange}</Status>;
  const wrapper = shallow(arrangeWithStatus);
  expect(wrapper.unrendered.props.color).toEqual('green');
  expect(wrapper.unrendered.props.id).toEqual('id');
  expect(wrapper.unrendered.props.children).toEqual(arrange);
});

// Structure test
it('should have indicator section of component with correct class, style and type', () => {
  const arrangeWithStatus = <Status color="green" className="testClass" >{arrange}</Status>;
  const wrapper = shallow(arrangeWithStatus);
  expect(wrapper.node.props.style.borderColor).toEqual('green');
  expect(wrapper.node.props.className).toContain('status');
  expect(wrapper.node.props.className).toContain('testClass');
});

// No Color Provided
it('should render status with no style', () => {
  const statusNoColor = <Status>{simpleText}</Status>;
  const wrapper = render(statusNoColor);
  expect(wrapper).toMatchSnapshot();
});
