import React from 'react';
import intlContexts from './intl-context-setup';
import Tabs from '../../src/Tabs';

describe('Tabs', () => {
  it('should render a default component', () => {
    const defaultRender = <Tabs><Tabs.Pane label="Default" key="default" /></Tabs>;
    const wrapper = shallow(defaultRender, intlContexts.shallowContext);
    expect(wrapper).toMatchSnapshot();
  });
});
