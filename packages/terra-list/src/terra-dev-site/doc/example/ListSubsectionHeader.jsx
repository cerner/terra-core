import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import List, {
  SubsectionHeader,
} from 'terra-list/lib/List';

const ListSubsectionHeaderExample = () => (
  <List role="none">
    <SubsectionHeader
      key="static-subheader"
      title="Static Subheader"
    />
    <SubsectionHeader
      key="collapsible-subheader-open"
      isCollapsible
      title="Collapsible Subheader"
    />
    <SubsectionHeader
      key="collapsible-subheader-collapsed"
      isCollapsed
      isCollapsible
      title="Collapsible Subheader"
    />
  </List>
);

export default ListSubsectionHeaderExample;
