import React from 'react';
import Tabs from '../../src/Tabs';

describe('TabContainer', () => {
  const defaultRender = <Tabs><Tabs.Pane label="Default" key="default" /></Tabs>;

  // Snapshot Tests
  it('should render a default component', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper).toMatchSnapshot();
  });
});
