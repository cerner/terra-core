import React from 'react';
import { withActiveBreakpoint } from '../../src/index';

describe('withActiveBreakpoint', () => {
  // Snapshot Tests
  it('should render using the provided render function', () => {
    const TestComponent = withActiveBreakpoint(() => <div>I am a test component</div>);

    const wrapper = mount(<TestComponent />);
    expect(wrapper).toMatchSnapshot();
  });
});
