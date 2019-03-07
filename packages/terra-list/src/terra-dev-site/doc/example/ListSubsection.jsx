import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import List, { Item, Subsection } from 'terra-list/lib/index';
import Placeholder from 'terra-doc-template/lib/Placeholder';

const ListSubsectionExample = () => (
  <List>
    <Subsection
      key="static-subsection"
      title="Static Subsection"
    >
      <Item key="123">
        <Placeholder title="Item 0-0" style={{ height: '50px' }} />
      </Item>
      <Item key="124">
        <Placeholder title="Item 0-1" style={{ height: '50px' }} />
      </Item>
      <Item key="125">
        <Placeholder title="Item 0-2" style={{ height: '50px' }} />
      </Item>
    </Subsection>
    <Subsection
      key="collapsible-subsection"
      isCollapsible
      title="Collapsible Subsection"
    >
      <Item key="223">
        <Placeholder title="Item 1-0" style={{ height: '50px' }} />
      </Item>
      <Item key="224">
        <Placeholder title="Item 1-1" style={{ height: '50px' }} />
      </Item>
      <Item key="225">
        <Placeholder title="Item 1-2" style={{ height: '50px' }} />
      </Item>
    </Subsection>
    <Subsection
      key="collapsible-subsection"
      isCollapsed
      isCollapsible
      title="Collapsed Subsection"
    >
      <Item key="323">
        <Placeholder title="Item 2-0" style={{ height: '50px' }} />
      </Item>
      <Item key="324">
        <Placeholder title="Item 2-1" style={{ height: '50px' }} />
      </Item>
      <Item key="325">
        <Placeholder title="Item 2-2" style={{ height: '50px' }} />
      </Item>
    </Subsection>
  </List>
);

export default ListSubsectionExample;
