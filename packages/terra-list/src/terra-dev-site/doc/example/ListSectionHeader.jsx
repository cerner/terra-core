import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import List, {
  SectionHeader,
} from 'terra-list/lib/List';

const ListSectionHeaderExample = () => (
  <List>
    <SectionHeader
      key="static-section"
      title="Static Section"
    />
    <SectionHeader
      key="collapsible-section-open"
      isCollapsible
      title="Collapsible Section"
    />
    <SectionHeader
      key="collapsible-section-collapsed"
      isCollapsed
      isCollapsible
      title="Collapsible Section"
    />
  </List>
);

export default ListSectionHeaderExample;
