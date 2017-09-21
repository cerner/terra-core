import React from 'react';
import CollapsibleMenuViewDivider from '../../src/CollapsibleMenuViewDivider';

describe('CollapsibleMenuViewDivider', () => {
  // Snapshot Tests
  it('should render a default component', () => {
    const wrapper = shallow(<CollapsibleMenuViewDivider />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a menu divider in the context of the collapsible menu', () => {
    const context = { isCollapsibleMenuItem: true };
    const wrapper = shallow(<CollapsibleMenuViewDivider />, { context });
    expect(wrapper).toMatchSnapshot();
  });
});
