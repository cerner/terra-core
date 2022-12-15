import React from 'react';
import List, { Item } from 'terra-list/lib/index';
import VisuallyHiddenText from 'terra-visually-hidden-text';

const AriaDescribedByHiddenListTest = () => (
  <>
    <VisuallyHiddenText
      id="list-help"
      text="Here are some instructions for using this list."
    />
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

export default AriaDescribedByHiddenListTest;
