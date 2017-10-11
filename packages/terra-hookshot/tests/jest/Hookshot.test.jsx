import React from 'react';
import HookshotDefaultExample from './HookshotDefaultExample';

// Snapshot Tests
it('should shallow a default component', () => {
  const hookshot = shallow(<HookshotDefaultExample />);
  expect(hookshot).toMatchSnapshot();
});

it('should render a default component', () => {
  const hookshot = render(<HookshotDefaultExample />);
  expect(hookshot).toMatchSnapshot();
});
