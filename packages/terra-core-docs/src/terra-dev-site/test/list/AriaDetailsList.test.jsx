import React from 'react';
import List, { Item } from 'terra-list/lib/index';

const AriaDetailsListTest = () => (
  <>
    <p id="list-details">
      Here is some more information about this list.
    </p>
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
  </>
);

export default AriaDetailsListTest;
