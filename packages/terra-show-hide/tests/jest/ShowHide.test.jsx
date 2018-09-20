import React from 'react';
import { IntlProvider } from 'react-intl';
import renderer from 'react-test-renderer';
import IconCaretLeft from 'terra-icon/lib/icon/IconCaretLeft';
import ShowHide from '../../src/ShowHide';

// You can pass your messages to the IntlProvider. Optional: remove if unneeded.
const messages = require('../../translations/en'); // en.json

const createComponentWithIntl = (children, props = { locale: 'en', messages }) => renderer.create(
  <IntlProvider {...props}>
    {children}
  </IntlProvider>,
);

describe('ShowHide', () => {
  // Snapshot Tests
  it('should render a default show-hide component', () => {
    const showHide = createComponentWithIntl(<ShowHide preview="Test">Full Text</ShowHide>);
    expect(showHide).toMatchSnapshot();
  });

  it('should render an animated show-hide component', () => {
    const showHide = createComponentWithIntl(<ShowHide preview="Test" isAnimated>Full Text</ShowHide>);
    expect(showHide).toMatchSnapshot();
  });

  it('should render an initially open show-hide component', () => {
    const showHide = createComponentWithIntl(<ShowHide preview="Test" isInitiallyOpen>Full Text</ShowHide>);
    expect(showHide).toMatchSnapshot();
  });

  // Event Tests
  it('should render an open show-hide component when clicked', () => {
    const showHide = createComponentWithIntl(<ShowHide preview="Test">Full Text</ShowHide>);
    const event = {};
    // mock out function to avoid runtime error
    event.preventDefault = jest.fn();
    const childButton = showHide.toJSON().children.find(object => object.type === 'button');
    childButton.props.onClick(event);
    expect(showHide).toMatchSnapshot();
  });

  // Prop Tests
  it('should set children prop correctly', () => {
    const showHide = createComponentWithIntl(<ShowHide preview="Test">Full Text</ShowHide>);
    expect(showHide.toTree().rendered.props.children).toEqual('Full Text');
  });

  it('should set collapsedButtonText prop correctly', () => {
    const showHide = createComponentWithIntl(<ShowHide preview="Test" collapsedButtonText="Collapsed Text">Full Text</ShowHide>);
    expect(showHide.toTree().rendered.props.collapsedButtonText).toEqual('Collapsed Text');
  });

  it('should set icon prop correctly', () => {
    const showHide = createComponentWithIntl(<ShowHide preview="Test">Full Text</ShowHide>);
    expect(showHide).toMatchSnapshot();
  });

  it('should set icon prop correctly with custom icon', () => {
    const showHide = createComponentWithIntl(<ShowHide preview="Test" icon={<IconCaretLeft />}>Full Text</ShowHide>);
    expect(showHide).toMatchSnapshot();
  });

  it('should set isAnimated prop correctly', () => {
    const showHide = createComponentWithIntl(<ShowHide preview="Test" isAnimated>Full Text</ShowHide>);
    expect(showHide.toTree().rendered.props.isAnimated).toEqual(true);
  });

  it('should set isInitiallyOpen prop correctly', () => {
    const showHide = createComponentWithIntl(<ShowHide preview="Test" isInitiallyOpen>Full Text</ShowHide>);
    expect(showHide.toTree().rendered.props.isInitiallyOpen).toEqual(true);
  });

  it('should set onOpen prop correctly', () => {
    window.alert = jest.fn();
    const event = {};
    event.preventDefault = jest.fn();

    // eslint-disable-next-line no-alert
    const showHide = createComponentWithIntl(<ShowHide preview="Test" onOpen={() => alert('Opened')}>Full Text</ShowHide>);
    const childButton = showHide.toJSON().children.find(object => object.type === 'button');
    childButton.props.onClick(event);
    expect(window.alert).toHaveBeenCalledWith('Opened');
  });

  it('should set onClose prop correctly', () => {
    window.alert = jest.fn();
    const event = {};
    event.preventDefault = jest.fn();

    // eslint-disable-next-line no-alert
    const showHide = createComponentWithIntl(<ShowHide preview="Test" onClose={() => alert('Closed')} isInitiallyOpen>Full Text</ShowHide>);
    const childButton = showHide.toJSON().children.find(object => object.type === 'button');
    childButton.props.onClick(event);
    expect(window.alert).toHaveBeenCalledWith('Closed');
  });

  it('should set expandedButtonText prop correctly', () => {
    const showHide = createComponentWithIntl(<ShowHide preview="Test" expandedButtonText="Expanded Text">Full Text</ShowHide>);
    expect(showHide.toTree().rendered.props.expandedButtonText).toEqual('Expanded Text');
  });

  it('should set preview prop correctly', () => {
    const showHide = createComponentWithIntl(<ShowHide preview="Preview Text">Full Text</ShowHide>);
    expect(showHide.toTree().rendered.props.preview).toEqual('Preview Text');
  });

  // Attributes
  it('should merge classes passed in with attributes', () => {
    const showHide = createComponentWithIntl(<ShowHide className="TestClass" preview="Test">Full Text</ShowHide>);
    expect(showHide.toJSON().props.className).toContain('TestClass');
  });

  it('should merge ids passed in with attributes', () => {
    const showHide = createComponentWithIntl(<ShowHide id="TestId" preview="Test">Full Text</ShowHide>);
    expect(showHide.toJSON().props.id).toContain('TestId');
  });

  it('should append data passed in with attributes', () => {
    const showHide = createComponentWithIntl(<ShowHide data-terra-text-mock="MockData" preview="Test">Full Text</ShowHide>);
    expect(showHide.toJSON().props['data-terra-text-mock']).toEqual('MockData');
  });

  it('should append styles passed in with attributes', () => {
    const showHide = createComponentWithIntl(<ShowHide style={{ height: '100px' }} preview="Test">Full Text</ShowHide>);
    expect(showHide.toJSON().props.style).toEqual({ height: '100px' });
  });

  // Error Handling Test
  it('should throw error for required children', () => {
    try {
      createComponentWithIntl(<ShowHide preview="Test" />);
    } catch (e) {
      expect(e.message).toContain('The prop `children` is marked as required');
    }
  });

  it('should throw error for required preview prop', () => {
    try {
      createComponentWithIntl(<ShowHide>Full Text</ShowHide>);
    } catch (e) {
      expect(e.message).toContain('The prop `preview` is marked as required');
    }
  });
});
