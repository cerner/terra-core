import React from 'react';
import Notice from '../../src/Notice';

describe('Placeholder', () => {
  // Snapshot Tests
  it('should render a default component', () => {
    const wrapper = shallow(<Notice />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a deprecation notice with text', () => {
    const wrapper = shallow(
      <Notice variant="deprecation">
        notice text
      </Notice>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a maintenance notice with text', () => {
    const wrapper = shallow(
      <Notice variant="maintenance">
        notice text
      </Notice>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
