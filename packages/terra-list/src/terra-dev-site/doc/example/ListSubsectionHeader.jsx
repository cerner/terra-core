import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import List, {
  SubsectionHeader,
} from 'terra-list/lib/List';

const ListSubsectionHeaderExample = () => (
  <List>
    <SubsectionHeader
      key="static-section"
      title="Static Section"
    />
    <SubsectionHeader
      key="collapsible-section-open"
      isCollapsible
      title="Collapsible Section"
    />
    <SubsectionHeader
      key="collapsible-section-collapsed"
      isCollapsed
      isCollapsible
      title="Collapsible Section"
    />
  </List>
);

export default ListSubsectionHeaderExample;
