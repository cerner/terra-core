import React from 'react';

import List, { Item } from '../../../List';

const ListTest = () => (
  <List>
    <Item key="0">
      <p>test 0</p>
    </Item>
    <Item key="1">
      <p>test 1</p>
    </Item>
    <Item key="2">
      <p>test 2</p>
    </Item>
  </List>
);

export default ListTest;
