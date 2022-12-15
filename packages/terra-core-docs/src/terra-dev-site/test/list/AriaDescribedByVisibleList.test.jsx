import React from 'react';
import List, { Item } from 'terra-list/lib/index';

const AriaDescribedByVisibleListTest = () => (
  <>
    <p id="list-help">
      Here are some instructions for using this list.
    </p>
    <List ariaDescribedBy="list-help">
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

export default AriaDescribedByVisibleListTest;
