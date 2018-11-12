import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import List, {
  SubsectionHeader,
} from 'terra-list/lib/List';

const ListSubsectionHeaderTest = () => (
  <List role="none">
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
