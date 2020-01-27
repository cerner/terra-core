import React from 'react';
import ChevronCell from '../../../src/subcomponents/_ChevronCell';

describe('ChevronCell', () => {
  // Snapshot Tests
  it('should render a ChevronCell', () => {
    const shallowComponent = shallow(<ChevronCell />);
    expect(shallowComponent).toMatchSnapshot();
  });
});
