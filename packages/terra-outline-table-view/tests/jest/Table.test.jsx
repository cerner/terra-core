import React from 'react';

import OutlineTableView from '../../src/Table';

describe('OutlineTableView', () => {
  // Snapshot Tests
  it('should render a OutlineTableView', () => {
    const shallowComponent = shallow(
      <OutlineTableView
        summaryId="test-id"
      />,
    );
    expect(shallowComponent).toMatchSnapshot();
  });
});
