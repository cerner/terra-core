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
  const imageWithStatus = <Status>{image}</Status>;
  const wrapper = shallow(imageWithStatus);
  expect(wrapper).toMatchSnapshot();
});

it('should render a icon with status', () => {
  const iconWithStatus = <Status>{icon}</Status>;
  const wrapper = shallow(iconWithStatus);
  expect(wrapper).toMatchSnapshot();
});

it('should render a simpleText with status', () => {
  const simpleTextWithStatus = <Status>{simpleText}</Status>;
  const wrapper = shallow(simpleTextWithStatus);
  expect(wrapper).toMatchSnapshot();
});

it('should render a arrange with status and customProps', () => {
  const arrangeWithStatus = <Status id="id">{arrange}</Status>;
  const wrapper = shallow(arrangeWithStatus);
  expect(wrapper).toMatchSnapshot();
});

// Structure test
it('should have indicator section of component with correct class, style and type', () => {
  const arrangeWithStatus = <Status className="testClass">{arrange}</Status>;
  const wrapper = shallow(arrangeWithStatus);
  expect(wrapper.getElement(0).props.className).toContain('status');
  expect(wrapper.getElement(0).props.className).toContain('testClass');
});

// No Color Provided
it('should render status with no style', () => {
  const statusNoColor = <Status>{simpleText}</Status>;
  const wrapper = render(statusNoColor);
  expect(wrapper).toMatchSnapshot();
});
