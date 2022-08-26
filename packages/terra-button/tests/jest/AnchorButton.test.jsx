import React from 'react';

import AnchorButton from '../../src/variants/_AnchorButton';

// Snapshot Tests
it('should render as an anchor when AnchorButton is used', () => {
  const anchorButton = shallow(<AnchorButton text="href" href="MockHref" />);
  expect(anchorButton).toMatchSnapshot();
});

// Structure
it('should render as an anchor tag when AnchorButton is used', () => {
  const anchorButton = shallow(<AnchorButton href="MockHref" text="text" />);
  expect(anchorButton.is('a')).toEqual(true);
});
