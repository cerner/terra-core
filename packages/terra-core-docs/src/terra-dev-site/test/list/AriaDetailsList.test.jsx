import React from 'react';
import List, { Item } from 'terra-list/lib/index';

const AriaDetailsListTest = () => (
  <>
    <p id="list-details">
      Here is some more information about this list.
    </p>
    <List ariaDetails="list-details">
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
  </>
);

export default AriaDetailsListTest;
