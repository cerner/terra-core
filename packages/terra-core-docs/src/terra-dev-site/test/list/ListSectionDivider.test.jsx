import React from 'react';
import List, { Item, Section } from 'terra-list/lib/index';

const ListSectionDividerTest = () => (
  <List dividerStyle="standard">
    <Section
      key="static-section"
      title="Static Section"
    >
      <Item key="123" isSelectable>
        <p>test static 1</p>
      </Item>
      <Item key="124" isSelectable>
        <p>test static 2</p>
      </Item>
      <Item key="125" isSelectable>
        <p>test static 3</p>
      </Item>
    </Section>
    <Section
      key="collapsible-section"
      isCollapsible
      title="Collapsible Section"
    >
      <Item key="223" isSelectable>
        <p>test collapsible 1</p>
      </Item>
      <Item key="224" isSelectable>
        <p>test collapsible 2</p>
      </Item>
    </Section>
    <Section
      key="collapsible-section"
      isCollapsed
      isCollapsible
      title="Collapsed Section"
    >
      <Item key="323" isSelectable>
        <p>test collapsed</p>
      </Item>
    </Section>
  </List>
);

export default ListSectionDividerTest;
