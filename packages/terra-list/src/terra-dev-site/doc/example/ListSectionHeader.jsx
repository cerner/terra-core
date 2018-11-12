import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import List, {
  SectionHeader,
} from 'terra-list/lib/List';

const ListSectionHeaderExample = () => (
  <List role="none">
    <SectionHeader
      key="static-header"
      title="Static Header"
    />
    <SectionHeader
      key="collapsible-header-open"
      isCollapsible
      title="Collapsible Header"
    />
    <SectionHeader
      key="collapsible-header-collapsed"
      isCollapsed
      isCollapsible
      title="Collapsible Header"
    />
  </List>
);

export default ListSectionHeaderExample;
