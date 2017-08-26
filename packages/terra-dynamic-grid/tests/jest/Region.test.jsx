import React from 'react';
import DynamicGrid from '../../src/DynamicGrid';

describe('DynamicGrid', () => {
  const defaultRender = <DynamicGrid.Region name="foo" />;

  // Snapshot Tests
  it('should render a default component', () => {
    const region = shallow(defaultRender);
    expect(region).toMatchSnapshot();
  });

  it('should render a Grid with merged attributes', () => {
    const region = shallow(<DynamicGrid.Region className="TestClass" data-mock="data" style={{ height: '100px' }} />);
    expect(region).toMatchSnapshot();
  });

  // Attributes
  it('should merge classes passed in with attributes', () => {
    const region = shallow(<DynamicGrid.Region className="TestClass" />);
    expect(region.prop('className')).toContain('TestClass');
  });
});
