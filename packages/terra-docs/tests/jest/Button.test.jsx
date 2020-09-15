import React from 'react';
import Button from '../../src/Button';

describe('Button', () => {
  // Snapshot Tests
  it('should render a default component', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should show with text', () => {
    const wrapper = shallow(
      <Button>
        title
      </Button>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should adds the onclick', () => {
    const wrapper = shallow(
      <Button onClick={() => 'function'}>
        title
      </Button>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
