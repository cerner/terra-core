import React from 'react';
import HeaderChevronCell from '../../../src/subcomponents/HeaderChevronCell';

describe('HeaderChevronCell', () => {
  // Snapshot Tests
  it('should render a HeaderChevronCell', () => {
    const shallowComponent = shallow(<HeaderChevronCell />);
    expect(shallowComponent).toMatchSnapshot();
  });
});
