import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import List, { Item } from 'terra-list/lib/index';
import Placeholder from 'terra-doc-template/lib/Placeholder';

const ListExample = () => (
  <List role="none">
    <Item key="123">
      <Placeholder title="Item 0" style={{ height: '50px' }} />
    </Item>
    <Item key="124">
      <Placeholder title="Item 1" style={{ height: '50px' }} />
    </Item>
    <Item key="125">
      <Placeholder title="Item 2" style={{ height: '50px' }} />
    </Item>
  </List>
);

export default ListExample;
