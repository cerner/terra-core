import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import List, {
  Item,
  Subsection,
} from 'terra-list/lib/List';

const ListSubsectionTest = () => (
  <List role="none">
    <Subsection
      key="static-subsection"
      title="Static Subsection"
    >
      <Item key="123">
        <p>test static</p>
      </Item>
    </Subsection>
    <Subsection
      key="collapsible-subsection"
      isCollapsible
      title="Collapsible Subsection"
    >
      <Item key="223">
        <p>test collapsible</p>
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
