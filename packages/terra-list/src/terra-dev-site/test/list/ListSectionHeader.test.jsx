import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import List, {
  SectionHeader,
} from 'terra-list/lib/index';

const ListSectionHeaderTest = () => (
  <List role="none">
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
