import React from 'react';
import List, { Item, Subsection } from 'terra-list/lib/index';

const ListSubsectionTest = () => (
  <List>
    <Subsection
      key="static-subsection"
      title="Static Subsection"
    >
      <Item key="123">
        <p>test static</p>
      </Item>
    </Subsection>
    <Subsection
      key="collapsible-subsection-1"
      isCollapsible
      title="Collapsible Subsection"
    >
      <Item key="223">
        <p>test collapsible</p>
      </Item>
    </Subsection>
    <Subsection
      key="collapsible-subsection-2"
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
