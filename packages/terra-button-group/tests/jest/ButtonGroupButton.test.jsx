import React from 'react';
import Button from '../../src/ButtonGroupButton';

it('should render a default component', () => {
  const button = shallow(<Button />);
  expect(button).toMatchSnapshot();
});

it('should render as selected', () => {
  const button = shallow(<Button isSelected />);
  expect(button).toMatchSnapshot();
});

it('should render with text', () => {
  const button = shallow(<Button text="text" />);
  expect(button).toMatchSnapshot();
});

it('should render with icon only', () => {
  const testElement = <img alt="icon" />;
  const button = shallow(<Button icon={testElement} />);
  expect(button).toMatchSnapshot();
});

it('should render with icon and text', () => {
  const testElement = <img alt="icon" />;
  const button = shallow(<Button icon={testElement} text="text" />);
  expect(button).toMatchSnapshot();
});

it('should render with icon and text reversed', () => {
  const testElement = <img alt="icon" />;
  const button = shallow(<Button icon={testElement} text="text" isReversed />);
  expect(button).toMatchSnapshot();
});

it('should not render as disabled', () => {
  const button = shallow(<Button isDisabled />);
  expect(button).toMatchSnapshot();
});

it('should not render an href', () => {
  const button = shallow(<Button href="/fakeURL" />);
  expect(button).toMatchSnapshot();
});

it('should not render as a block element', () => {
  const button = shallow(<Button isBlock />);
  expect(button).toMatchSnapshot();
});
