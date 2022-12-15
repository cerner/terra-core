import React from 'react';
import List, { Item } from 'terra-list/lib/index';

const AriaDescribedByVisibleListTest = () => (
  <>
    <p id="list-help">
      Select a patient from the list to view patient details.
    </p>
    <List ariaDescribedBy="list-help">
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

export default AriaDescribedByVisibleListTest;
