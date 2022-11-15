import React from 'react';
import List, { Item } from 'terra-list/lib/index';
import VisuallyHiddenText from 'terra-visually-hidden-text';

const HiddenInstructionsListTest = () => (
  <>
    <List instructions="list-help">
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
    <VisuallyHiddenText
      id="list-help"
      text="Here are some instructions for using this list."
    />
  </>
);

export default HiddenInstructionsListTest;
