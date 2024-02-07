import React from 'react';
import Button from '../../src/Button';

describe('Button', () => {
  // Snapshot Tests
  it('should render a default component', () => {
    const wrapper = enzyme.shallow(<Button />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should show with text', () => {
    const wrapper = enzyme.shallow(
      <Button>
        title
      </Button>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should adds the onclick', () => {
    const wrapper = enzyme.shallow(
      <Button onClick={() => 'function'}>
        title
      </Button>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
