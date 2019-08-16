import React from 'react';
import List, { SubsectionHeader } from 'terra-list/lib/index';

const ListSubsectionHeaderTest = () => (
  <List>
    <SubsectionHeader
      key="static-header"
      title="Static Header"
    />
    <SubsectionHeader
      key="collapsible-header-open"
      isCollapsible
      title="Collapsible Header"
      id="test-header"
    />
    <SubsectionHeader
      key="collapsible-header-collapsed"
      isCollapsed
      isCollapsible
      title="Collapsible Header"
    />
  </List>
);

export default ListSubsectionHeaderTest;
