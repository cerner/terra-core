import React from 'react';
import Toggler from '../../src/Toggler';

// Snapshot Tests
it('should render a default toggler', () => {
  const toggler = shallow(<Toggler />);
  expect(toggler).toMatchSnapshot();
});
