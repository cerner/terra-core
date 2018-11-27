import React from 'react';
import intlContexts from './intl-context-setup';
import Dialog from '../../src/Dialog';

describe('Dialog', () => {
  const defaultRender = <Dialog header="Header Content" footer="Footer Content">some body content</Dialog>;

  // Snapshot Test
  it('should render a default component', () => {
    const wrapper = shallow(defaultRender, intlContexts.shallowContext);
    expect(wrapper).toMatchSnapshot();
  });

  // Structure Tests
  it('should have the class dialog', () => {
    const wrapper = shallow(defaultRender, intlContexts.shallowContext);
    expect(wrapper.prop('className')).toContain('dialog');
  });

  it('should render a Dialog with merged attributes', () => {
    const wrapper = shallow(<Dialog header="Header Content" footer="Footer Content" className="TestClass">some body content</Dialog>, intlContexts.shallowContext);
    expect(wrapper).toMatchSnapshot();
  });
});

it('throws error on missing locale prop in Base', () => {
  global.console = { error: jest.fn() };

  expect(() => {
    render(<Dialog header="Header Content" footer="Footer Content" />);
  }).toThrowError();
  // eslint-disable-next-line no-console
  expect(console.error).toBeCalledWith(expect.stringContaining('Component is internationalized, and must be wrapped in terra-base'));
});
