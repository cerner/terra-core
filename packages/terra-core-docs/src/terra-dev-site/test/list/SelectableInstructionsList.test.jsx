import React, { useState } from 'react';
import List, { Item } from 'terra-list/lib/index';

const SelectableInstructionsListTest = () => {
  const [selected, setSelected] = useState({ selectedKey: null });

  const handleSelectItem = (event, metaData) => {
    event.preventDefault();
    if (selected.selectedKey !== metaData.key) {
      setSelected({ selectedKey: metaData.key });
    }
  };

  return (
    <>
      <List ariaDescribedBy="list-help" role="listbox">
        <Item key="1" isSelectable isSelected={selected.selectedKey === '1'} metaData={{ key: '1' }} onSelect={handleSelectItem}>
          <p>Item 1</p>
        </Item>
        <Item key="2" isSelectable isSelected={selected.selectedKey === '2'} metaData={{ key: '2' }} onSelect={handleSelectItem}>
          <p>Item 2</p>
        </Item>
        <Item key="3" isSelectable isSelected={selected.selectedKey === '3'} metaData={{ key: '3' }} onSelect={handleSelectItem}>
          <p>Item 3</p>
        </Item>
      </List>
      <p id="list-help">
        Here are some instructions for using this list.
      </p>
    </>
  );
};

export default SelectableInstructionsListTest;
