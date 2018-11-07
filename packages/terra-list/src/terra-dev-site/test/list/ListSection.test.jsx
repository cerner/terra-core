import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import List, {
  Item,
  Section,
} from 'terra-list/lib/List';

const ListSectionTest = () => (
  <List>
    <Section
      key="static-section"
      title="Static Section"
    >
      <Item key="123">
        <p>test static</p>
      </Item>
    </Section>
    <Section
      key="collapsible-section"
      isCollapsible
      title="Collapsible Section"
    >
      <Item key="223">
        <p>test collapsible</p>
      </Item>
    </Section>
    <Section
      key="collapsible-section"
      isCollapsed
      isCollapsible
      title="Collapsed Section"
    >
      <Item key="323">
        <p>test collapsed</p>
      </Item>
    </Section>
  </List>
);

export default ListSectionTest;
