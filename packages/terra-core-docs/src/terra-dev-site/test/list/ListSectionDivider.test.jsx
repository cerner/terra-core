import React from 'react';
import List, { Item, Section } from 'terra-list/lib/index';

const ListSectionTest = () => (
  <List dividerStyle="standard">
    <Section
      key="static-section"
      title="Static Section"
    >
      <Item key="123">
        <p>test static 1</p>
      </Item>
      <Item key="124">
        <p>test static 2</p>
      </Item>
      <Item key="125">
        <p>test static 3</p>
      </Item>
    </Section>
    <Section
      key="collapsible-section"
      isCollapsible
      title="Collapsible Section"
    >
      <Item key="223">
        <p>test collapsible 1</p>
      </Item>
      <Item key="224">
        <p>test collapsible 2</p>
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
