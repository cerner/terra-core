import React from 'react';
import List, { Item } from 'terra-list/lib/index';
import SlidePanel from 'terra-slide-panel';

const DraggableListItemTest = () => (
  <List role="listbox" aria-label="test-label" dividerStyle="standard" isDraggable>
    <Item
      key="selected"
      isSelected
      isSelectable
      id="selectable-item"
    >
      <p>List item 1</p>
    </Item>
    <Item
      key="selectable2"
      isSelectable
    >
      <p>List item 2</p>
    </Item>
    <Item
      key="selectable3"
      isSelectable
    >
      <p>List item 3</p>
    </Item>
    <Item
      key="selectable4"
      isSelectable
    >
      <p>List item 4</p>
    </Item>
  </List>
);

const SlidePanelDraggableListTest = () => (
  <SlidePanel
    mainContent={<DraggableListItemTest />}
    panelContent={<DraggableListItemTest />}
    panelPosition="start"
    isOpen
  />
);

export default SlidePanelDraggableListTest;
