import React from 'react';
import PopupDefaultExample from './PopupDefaultExample';

// Snapshot Tests
it('should shallow a default component', () => {
  const popup = shallow(<PopupDefaultExample />);
  expect(popup).toMatchSnapshot();
});

it('should render a default component', () => {
  const popup = render(<PopupDefaultExample />);
  expect(popup).toMatchSnapshot();
});
