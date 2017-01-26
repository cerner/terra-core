import React from 'react';
import initStoryshots from 'storyshots';
import Button from '../src/Button';

// Run snapshot tests for react-storybook
initStoryshots();

// Snapshot Tests
it('should render a default component', () => {
  const button = shallow(<Button />);
  expect(button).toMatchSnapshot();
});

it('should render a default link component', () => {
  const button = shallow(<Button variant="link" />);
  expect(button).toMatchSnapshot();
});

it('should render a default outline component', () => {
  const button = shallow(<Button variant="outline" />);
  expect(button).toMatchSnapshot();
});

it('should render a icon', () => {
  const testElement = <img alt="icon" />;
  const button = shallow(<Button icon={testElement} size="tiny" />);
  expect(button).toMatchSnapshot();
});

it('should render a icon and a text', () => {
  const testElement = <img alt="icon" />;
  const button = shallow(<Button icon={testElement} size="tiny" text="text" />);
  expect(button).toMatchSnapshot();
});

it('should render a Button with merged attributes', () => {
  const attributes = { className: 'TestClass', 'data-mock': 'data', style: { height: '100px' } };
  const button = shallow(<Button attributes={attributes} />);
  expect(button).toMatchSnapshot();
});

it('should render as an anchor when provided an href', () => {
  const button = shallow(<Button text="href" href="MockHref" />);
  expect(button).toMatchSnapshot();
});

it('should render as disabled when set', () => {
  const button = shallow(<Button text="Disabled" isDisabled />);
  expect(button).toMatchSnapshot();
});

// Prop Tests
it('should have the class terra-Button--default', () => {
  const button = shallow(<Button />);
  expect(button.prop('className')).toContain('terra-Button terra-Button--default');
});

it('should have the class terra-Button--primary when type is set to primary', () => {
  const button = shallow(<Button intent="primary" />);
  expect(button.prop('className')).toContain('terra-Button--primary');
});

it('should have the class terra-Button--tiny when size is set to tiny', () => {
  const button = shallow(<Button size="tiny" />);
  expect(button.prop('className')).toContain('terra-Button--tiny');
});

it('should have the class terra-Button--huge when size is set to huge', () => {
  const button = shallow(<Button size="huge" />);
  expect(button.prop('className')).toContain('terra-Button--huge');
});

it('should have the class terra-Button--block when block is enabled', () => {
  const button = shallow(<Button isBlock />);
  expect(button.prop('className')).toContain('terra-Button--block');
});

it('should have the class terra-Button--outlineDefault when an outline variant', () => {
  const button = shallow(<Button variant="outline" />);
  expect(button.prop('className')).toContain('terra-Button--outlineDefault');
});

it('should have the class terra-Button--linkDefault when a link variant', () => {
  const button = shallow(<Button variant="outline" />);
  expect(button.prop('className')).toContain('terra-Button--outlineDefault');
});

it('should have the class terra-Button--linkPrimary when a link variant and primary intent', () => {
  const button = shallow(<Button intent="primary" variant="link" />);
  expect(button.prop('className')).toContain('terra-Button--linkPrimary');
});

it('should be disabled when set', () => {
  const button = shallow(<Button isDisabled />);
  expect(button.prop('disabled')).toEqual(true);
});

// Structure
it('should have the class terra-Button-text when a text is provided', () => {
  const button = shallow(<Button text="text" />);
  expect(button.childAt(0).hasClass('terra-Button-text')).toEqual(true);
});

it('should set the text text', () => {
  const button = shallow(<Button text="text" />);
  expect(button.find('.terra-Button-text').text()).toEqual('text');
});

it('should not append a text span without a text', () => {
  const button = shallow(<Button />);
  expect(button.find('.terra-Button-text').length).toEqual(0);
});

it('should render the icon as the first child', () => {
  const testElement = <img alt="icon" />;
  const button = shallow(<Button icon={testElement} />);
  expect(button.childAt(0).is('img')).toEqual(true);
});

it('should render in order of text / icon when reverse', () => {
  const testElement = <img alt="icon" />;
  const button = shallow(<Button icon={testElement} isReversed text="text" />);
  expect(button.childAt(0).hasClass('terra-Button-text')).toEqual(true);
});

it('should render as an anchor tag when provided an href', () => {
  const button = shallow(<Button href="MockHref" />);
  expect(button.is('a')).toEqual(true);
});

// Attributes
it('should merge classes passed in with attributes', () => {
  const attributes = { className: 'TestClass' };
  const button = shallow(<Button attributes={attributes} />);
  expect(button.prop('className')).toContain('TestClass');
});

it('should append data passed in with attributes', () => {
  const attributes = { 'data-terra-button-mock': 'MockData' };
  const button = shallow(<Button attributes={attributes} />);
  expect(button.prop('data-terra-button-mock')).toContain('MockData');
});

it('should append styles passed in with attributes', () => {
  const attributes = { style: { height: '100px' } };
  const button = shallow(<Button attributes={attributes} />);
  expect(button.prop('style')).toEqual({ height: '100px' });
});
