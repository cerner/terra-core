import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import List, {
  Item,
} from 'terra-list/lib/List';
import Placeholder from 'terra-doc-template/lib/Placeholder';

const ListSectionExample = () => (
  <List>
    <Item
      key="default"
    >
      <Placeholder title="Default ListItem" style={{ height: '50px' }} />
    </Item>
    <Item
      key="divided"
      isDivided
    >
      <Placeholder title="Divided ListItem" style={{ height: '50px' }} />
    </Item>
    <Item
      key="chevron"
      hasChevron
    >
      <Placeholder title="Chevron ListItem" style={{ height: '50px' }} />
    </Item>
    <Item
      key="selectable"
      isSelectable
    >
      <Placeholder title="Selectable ListItem" style={{ height: '50px' }} />
    </Item>
    <Item
      key="selected"
      isSelectable
      isSelected
    >
      <Placeholder title="Selected ListItem" style={{ height: '50px' }} />
    </Item>
  </List>
);

export default ListSectionExample;
