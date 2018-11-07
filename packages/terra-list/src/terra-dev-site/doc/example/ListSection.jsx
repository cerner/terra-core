import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import List, {
  Item,
  Section,
} from 'terra-list/lib/List';
import Placeholder from 'terra-doc-template/lib/Placeholder';

const ListSectionExample = () => (
  <List>
    <Section
      key="static-section"
      title="Static Section"
    >
      <Item key="123">
        <Placeholder title="Item 0" style={{ height: '50px' }} />
      </Item>
      <Item key="124">
        <Placeholder title="Item 1" style={{ height: '50px' }} />
      </Item>
      <Item key="125">
        <Placeholder title="Item 2" style={{ height: '50px' }} />
      </Item>
    </Section>
    <Section
      key="collapsible-section"
      isCollapsible
      title="Collapsible Section"
    >
      <Item key="223">
        <Placeholder title="Item 0" style={{ height: '50px' }} />
      </Item>
      <Item key="224">
        <Placeholder title="Item 1" style={{ height: '50px' }} />
      </Item>
      <Item key="225">
        <Placeholder title="Item 2" style={{ height: '50px' }} />
      </Item>
    </Section>
    <Section
      key="collapsible-section"
      isCollapsed
      isCollapsible
      title="Collapsed Section"
    >
      <Item key="323">
        <Placeholder title="Item 0" style={{ height: '50px' }} />
      </Item>
      <Item key="324">
        <Placeholder title="Item 1" style={{ height: '50px' }} />
      </Item>
      <Item key="325">
        <Placeholder title="Item 2" style={{ height: '50px' }} />
      </Item>
    </Section>
  </List>
);

export default ListSectionExample;
