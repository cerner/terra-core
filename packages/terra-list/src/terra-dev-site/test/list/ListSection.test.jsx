import React from 'react';
import List, { Item, Section } from 'terra-list/lib/index';

const ListSectionTest = () => (
  <List role="listbox" aria-label="list section">
    <Section
      key="static-section"
      title="Static Section"
      role="option"
    >
      <Item key="123" isSelectable>
        <p>test static</p>
      </Item>
    </Section>
    <Section
      key="collapsible-section-1"
      isCollapsible
      title="Collapsible Section"
    >
      <Item key="223" isSelectable isDisabled>
        <p>test collapsible</p>
      </Item>
    </Section>
    <Section
      key="collapsible-section2"
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
