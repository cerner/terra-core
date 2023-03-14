import React from 'react';
import List, { Item, Subsection } from 'terra-list/lib/index';

const ListSubsectionTest = () => (
  <List dividerStyle="standard">
    <Subsection
      key="static-subsection"
      title="Static Subsection"
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
    </Subsection>
    <Subsection
      key="collapsible-subsection"
      isCollapsible
      title="Collapsible Subsection"
    >
      <Item key="223">
        <p>test collapsible 1</p>
      </Item>
      <Item key="224">
        <p>test collapsible 2</p>
      </Item>
    </Subsection>
    <Subsection
      key="collapsible-subsection"
      isCollapsed
      isCollapsible
      title="Collapsed Subsection"
    >
      <Item key="323">
        <p>test collapsed</p>
      </Item>
    </Subsection>
  </List>
);

export default ListSubsectionTest;
