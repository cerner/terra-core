import React from 'react';
import Button from '../../src/Button';

// Snapshot Tests
it('should render a neutral button', () => {
  const button = shallow(<Button text="neutral" />);
  expect(button).toMatchSnapshot();
});

it('should render a emphasis button', () => {
  const button = shallow(<Button text="emphasis" variant="emphasis" />);
  expect(button).toMatchSnapshot();
});

it('should render a ghost button', () => {
  const button = shallow(<Button text="ghost" variant="ghost" />);
  expect(button).toMatchSnapshot();
});

it('should render a de-emphasis button', () => {
  const button = shallow(<Button text="de-emphasis" variant="de-emphasis" />);
  expect(button).toMatchSnapshot();
});

it('should render an action button', () => {
  const button = shallow(<Button text="action" variant="action" />);
  expect(button).toMatchSnapshot();
});

it('should render a utility button', () => {
  const button = shallow(<Button text="utility" variant="utility" />);
  expect(button).toMatchSnapshot();
});

it('should render a button with type equal to button', () => {
  const button = shallow(<Button text="button" type="button" />);
  expect(button).toMatchSnapshot();
});

it('should render a button with type equal to reset', () => {
  const button = shallow(<Button text="reset" type="reset" />);
  expect(button).toMatchSnapshot();
});

it('should render a button with type equal to submit', () => {
  const button = shallow(<Button text="submit" type="submit" />);
  expect(button).toMatchSnapshot();
});

it('should render an icon', () => {
  const testElement = <img alt="icon" />;
  const button = shallow(<Button icon={testElement} isIconOnly text="isIconOnly" />);
  expect(button).toMatchSnapshot();
});

it('should render an icon and a text', () => {
  const testElement = <img alt="icon" />;
  const button = shallow(<Button icon={testElement} text="text" />);
  expect(button).toMatchSnapshot();
});

it('should render text then an icon when reversed', () => {
  const testElement = <img alt="icon" />;
  const button = shallow(<Button icon={testElement} text="text" isReversed />);
  expect(button).toMatchSnapshot();
});

it('should render a Button with merged attributes', () => {
  /* eslint-disable react/forbid-component-props */
  const button = shallow(<Button className="TestClass" data-mock="data" text="text" style={{ height: '100px' }} />);
  expect(button).toMatchSnapshot();
  /* eslint-enable react/forbid-component-props */
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
it('should have the class neutral', () => {
  const button = shallow(<Button text="text" />);
  expect(button.prop('className')).toContain('button neutral');
});

it('should have the class emphasis when variant is set to emphasis', () => {
  const button = shallow(<Button variant="emphasis" text="text" />);
  expect(button.prop('className')).toContain('emphasis');
});

it('should have the class ghost when variant is set to ghost', () => {
  const button = shallow(<Button variant="ghost" text="text" />);
  expect(button.prop('className')).toContain('ghost');
});

it('should have the class de-emphasis when an de-emphasis variant', () => {
  const button = shallow(<Button variant="de-emphasis" text="text" />);
  expect(button.prop('className')).toContain('de-emphasis');
});

it('should have the class action when variant is set to action', () => {
  const button = shallow(<Button variant="action" text="text" />);
  expect(button.prop('className')).toContain('action');
});

it('should have the class utility when variant is set to utility', () => {
  const button = shallow(<Button variant="utility" text="text" />);
  expect(button.prop('className')).toContain('utility');
});

it('should have the class block when block is enabled', () => {
  const button = shallow(<Button isBlock text="text" />);
  expect(button.prop('className')).toContain('block');
});

it('should be disabled when set', () => {
  const button = shallow(<Button isDisabled text="text" />);
  expect(button.prop('disabled')).toEqual(true);
});

it('should pass in refCallback as the ref prop of the input element', () => {
  const refCallback = jest.fn();
  const wrapper = mount(<Button text="text" refCallback={refCallback} />);
  expect(refCallback).toBeCalled();
  expect(wrapper).toMatchSnapshot();
});

// Structure
it('should have the class text-only when only text is provided', () => {
  const button = shallow(<Button text="text" />);
  expect(button.childAt(0).hasClass('text-only')).toEqual(true);
});

it('should set the span text', () => {
  const button = shallow(<Button text="text" />);
  expect(button.find('.text-only').text()).toEqual('text');
});

it('should render the icon as the first child', () => {
  const testElement = <img alt="icon" />;
  const button = shallow(<Button icon={testElement} text="text" />);
  expect(button.childAt(0).childAt(0).hasClass('icon-first')).toEqual(true);
});

it('should render in order of text / icon when reverse', () => {
  const testElement = <img alt="icon" />;
  const button = shallow(<Button icon={testElement} isReversed text="text" />);
  expect(button.childAt(0).childAt(0).hasClass('text-first')).toEqual(true);
});

it('should render as an anchor tag when provided an href', () => {
  const button = shallow(<Button href="MockHref" text="text" />);
  expect(button.is('a')).toEqual(true);
});

// Attributes
it('should merge classes passed in with attributes', () => {
  const button = shallow(<Button className="TestClass" text="text" />);
  expect(button.prop('className')).toContain('TestClass');
});

it('should append data passed in with attributes', () => {
  const button = shallow(<Button data-terra-button-mock="MockData" text="text" />);
  expect(button.prop('data-terra-button-mock')).toContain('MockData');
});

it('should append styles passed in with attributes', () => {
  /* eslint-disable react/forbid-component-props */
  const button = shallow(<Button style={{ height: '100px' }} text="text" />);
  expect(button.prop('style')).toEqual({ height: '100px' });
  /* eslint-enable react/forbid-component-props */
});

it('should render an icon only button with text as a fallback title', () => {
  const button = shallow(<Button isIconOnly text="Icon Only" />);
  expect(button).toMatchSnapshot();
});

it('should render an icon only button with a custom title', () => {
  const button = shallow(<Button isIconOnly text="Icon Only" title="Custom Title" />);
  expect(button).toMatchSnapshot();
});

it('should render a utility button with text as a fallback title', () => {
  const button = shallow(<Button variant="utility" text="Icon Only" />);
  expect(button).toMatchSnapshot();
});

it('should render a utility button with a custom title', () => {
  const button = shallow(<Button variant="utility" text="Icon Only" title="Custom Title" />);
  expect(button).toMatchSnapshot();
});

it('should render a button with a title', () => {
  const button = shallow(<Button text="Button" title="Custom Title" />);
  expect(button).toMatchSnapshot();
});

it('should render an icon only button with text as a fallback accessible label', () => {
  const button = shallow(<Button isIconOnly text="Icon Only" />);
  expect(button).toMatchSnapshot();
});

it('should render an icon only button with a custom accessible label', () => {
  const button = shallow(<Button isIconOnly text="Icon Only" aria-label="Custom Accessible Label" />);
  expect(button).toMatchSnapshot();
});

it('should render a utility button with text as a fallback accessible label', () => {
  const button = shallow(<Button variant="utility" text="Icon Only" />);
  expect(button).toMatchSnapshot();
});

it('should render a utility button with a custom accessible label', () => {
  const button = shallow(<Button variant="utility" text="Icon Only" aria-label="Custom Accessible Label" />);
  expect(button).toMatchSnapshot();
});

it('should render a button with accessible label', () => {
  const button = shallow(<Button text="Button" aria-label="Custom Accessible Label" />);
  expect(button).toMatchSnapshot();
});
/* eslint-enable react/forbid-dom-props */
