import React from 'react';
import DynamicGrid from '../../src/DynamicGrid';

describe('DynamicGrid', () => {
  // Snapshot Tests
  it('should render a default component', () => {
    const grid = shallow(<DynamicGrid />);
    expect(grid).toMatchSnapshot();
  });

  // Snapshot Tests
  it('should render a default component', () => {
    const grid = shallow(<DynamicGrid><DynamicGrid.Region>Hello</DynamicGrid.Region></DynamicGrid>);
    expect(grid).toMatchSnapshot();
  });

  it('should render a Grid with merged attributes', () => {
    /* eslint-disable react/forbid-component-props */
    const grid = shallow(<DynamicGrid className="TestClass" data-mock="data" style={{ height: '100px' }} />);
    expect(grid).toMatchSnapshot();
    /* eslint-enable react/forbid-component-props */
  });

  // Attributes
  it('should merge classes passed in with attributes', () => {
    const grid = shallow(<DynamicGrid className="TestClass" />);
    expect(grid.prop('className')).toContain('TestClass');
  });
});
