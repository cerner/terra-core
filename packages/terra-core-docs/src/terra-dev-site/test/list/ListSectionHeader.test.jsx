import React from 'react';
import List, { SectionHeader } from 'terra-list/lib/index';

const ListSectionHeaderTest = () => (
  <List>
    <SectionHeader
      key="static-header"
      title="Static Header"
    />
    <SectionHeader
      key="collapsible-header-open"
      isCollapsible
      title="Collapsible Header"
      id="test-header"
    />
    <SectionHeader
      key="collapsible-header-collapsed"
      isCollapsed
      isCollapsible
      title="Collapsible Header"
    />
  </List>
);

export default ListSectionHeaderTest;
