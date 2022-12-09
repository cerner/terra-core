import React from 'react';
import List, { Item } from 'terra-list/lib/index';

const AriaDetailsListTest = () => (
  <>
    <List ariaDetails="list-details">
      <Item key="0">
        <p>Item 1</p>
      </Item>
      <Item key="1">
        <p>Item 2</p>
      </Item>
      <Item key="2">
        <p>Item 3</p>
      </Item>
    </List>
    <p id="list-details">
      Here is some more information about this list.
    </p>
  </>
);

export default AriaDetailsListTest;
