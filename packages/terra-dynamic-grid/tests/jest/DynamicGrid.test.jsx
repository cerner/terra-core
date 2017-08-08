import React from 'react';
import DynamicGrid from '../../src/DynamicGrid';

describe('DynamicGrid', () => {
  const defaultRender = <DynamicGrid />;

  // Snapshot Tests
  it('should render a default component', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper).toMatchSnapshot();
  });
});
