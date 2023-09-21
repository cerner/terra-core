import React from 'react';
import List, { Item } from 'terra-list/lib/index';
import SlidePanel from 'terra-slide-panel';

const MainContent = () => (
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

const PanelContent = () => (
  <List role="listbox" aria-label="test-label" dividerStyle="standard" isDraggable>
    <Item
      key="selected-1"
      isSelected
      isSelectable
      id="selectable-item-1"
    >
      <p>List item 1</p>
    </Item>
    <Item
      key="selectable-2"
      isSelectable
    >
      <p>List item 2</p>
    </Item>
    <Item
      key="selectable-3"
      isSelectable
    >
      <p>List item 3</p>
    </Item>
    <Item
      key="selectabl-e4"
      isSelectable
    >
      <p>List item 4</p>
    </Item>
  </List>
);

const SlidePanelDraggableListTest = () => (
  <SlidePanel
    mainContent={<MainContent />}
    panelContent={<PanelContent />}
    panelPosition="start"
    isOpen
  />
);

export default SlidePanelDraggableListTest;
