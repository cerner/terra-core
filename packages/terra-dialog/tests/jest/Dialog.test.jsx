import React from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { shallowWithIntl } from 'terra-enzyme-intl';
import Dialog from '../../src/Dialog';

describe('Dialog', () => {
  const defaultRender = <Dialog header="Header Content" footer="Footer Content">some body content</Dialog>;

  // Snapshot Test
  it('should render a default component', () => {
    const wrapper = shallowWithIntl(defaultRender);
    expect(wrapper.dive()).toMatchSnapshot();
  });

  // Structure Tests
  it('should have the class dialog', () => {
    const wrapper = shallowWithIntl(defaultRender);
    expect(wrapper.dive().prop('className')).toContain('dialog');
  });

  it('should render a Dialog with merged attributes', () => {
    const wrapper = shallowWithIntl(<Dialog header="Header Content" footer="Footer Content" className="TestClass">some body content</Dialog>);
    expect(wrapper.dive()).toMatchSnapshot();
  });
});
