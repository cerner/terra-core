import React from 'react';
import List, { Item } from 'terra-list/lib/index';

const ListTest = () => (
  <React.Fragment>
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
    <List paddingStyle="standard" dividerStyle="standard">
      <Item key="0">
        <p>divided test 0</p>
      </Item>
      <Item key="1">
        <p>divided test 1</p>
      </Item>
      <Item key="2">
        <p>divided test 2</p>
      </Item>
    </List>
    <List paddingStyle="compact" dividerStyle="bottom-only">
      <Item key="0">
        <p>divided test 0</p>
      </Item>
      <Item key="1">
        <p>divided test 1</p>
      </Item>
      <Item key="2">
        <p>divided test 2</p>
      </Item>
    </List>
  </React.Fragment>
);

export default ListTest;
