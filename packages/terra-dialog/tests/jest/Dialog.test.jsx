import React from 'react';
import Dialog from '../../src/Dialog';

describe('Dialog', () => {
  const defaultRender = <Dialog header="Header Content" footer="Footer Content">some body content</Dialog>;

  // Snapshot Tests
  it('should render a default component', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper).toMatchSnapshot();
  });

  // Prop Tests
  it('should render a header', () => {
    const container = <Dialog header="Header Content">children required</Dialog>;
    const wrapper = shallow(container);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render header & footer', () => {
    const container = <Dialog header="Header Content" footer="Footer Content">children required</Dialog>;
    const wrapper = shallow(container);
    expect(wrapper).toMatchSnapshot();
  });


  // Structure Tests
  it('should have the class dialog', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper.prop('className')).toContain('dialog');
  });
});
