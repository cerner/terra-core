/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import React from 'react';
import Grid from '../../src/Grid';

// Snapshot Tests
it('should render a default Grid', () => {
  const wrapper = shallow(<Grid><Grid.Row><Grid.Column>Test</Grid.Column></Grid.Row></Grid>);
  expect(wrapper).toMatchSnapshot();
});

// Prop Tests
it('should contain customized class name', () => {
  const wrapper = shallow(<Grid className="test"><Grid.Row><Grid.Column>Test</Grid.Column></Grid.Row></Grid>);
  expect(wrapper.prop('className')).toContain('test');
});

// Error Handling Test
it('should throw error for required children', () => {
  try {
    shallow(<Grid />);
  } catch (e) {
    expect(e.message).toContain('The prop `children` is marked as required');
  }
});
