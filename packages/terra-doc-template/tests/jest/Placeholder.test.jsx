import React from 'react';
import Placeholder from '../../src/Placeholder';

describe('Placeholder', () => {
  // Snapshot Tests
  it('should render a default component', () => {
    const wrapper = shallow(<Placeholder />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should show the light version with a title', () => {
    const wrapper = shallow(<Placeholder title="test light" variant="light" />);
    expect(wrapper).toMatchSnapshot();
  });
});
