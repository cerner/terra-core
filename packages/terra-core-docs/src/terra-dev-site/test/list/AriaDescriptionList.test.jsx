import React from 'react';
import List, { Item } from 'terra-list/lib/index';

const AriaDescriptionListTest = () => (
  <List ariaDescription="Here are some instructions for using this list.">
    <Item key="0">
      <p>John Smith</p>
    </Item>
    <Item key="1">
      <p>Mary Jones</p>
    </Item>
    <Item key="2">
      <p>Sam Brown</p>
    </Item>
  </List>
);

export default AriaDescriptionListTest;
