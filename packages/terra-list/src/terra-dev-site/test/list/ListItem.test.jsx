import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import List, { Item } from 'terra-list/lib/index';

const ListItemTest = () => (
  <React.Fragment>
    <List>
      <Item
        key="default"
      >
        <p>test default</p>
      </Item>
      <Item
        key="chevron"
        hasChevron
      >
        <p>test chevron</p>
      </Item>
    </List>
    <List role="listbox">
      <Item
        key="selectable"
        isSelectable
        id="selectable-item"
      >
        <p>test selectable</p>
      </Item>
      <Item
        key="selected"
        isSelectable
        isSelected
      >
        <p>test selected</p>
      </Item>
    </List>
  </React.Fragment>
);

export default ListItemTest;
