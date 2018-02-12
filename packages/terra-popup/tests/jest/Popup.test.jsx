import React from 'react';
import PopupDefaultExample from './PopupDefaultExample';

// Snapshot Tests
it('should shallow a default component', () => {
  const popup = shallow(<PopupDefaultExample />);
  expect(popup).toMatchSnapshot();
});
