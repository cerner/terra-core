import React, { useState } from 'react';
import List, { Item } from 'terra-list/lib/index';

const AriaDescribedBySelectableListTest = () => {
  const [selected, setSelected] = useState({ selectedKey: null });

  const handleSelectItem = (event, metaData) => {
    if (selected.selectedKey !== metaData.key) {
      setSelected({ selectedKey: metaData.key });
    }
  };

  return (
    <>
      <p id="list-help">
        Select a patient from the list to view patient details.
      </p>
      <List ariaDescribedBy="list-help" role="listbox">
        <Item key="1" isSelectable isSelected={selected.selectedKey === '1'} metaData={{ key: '1' }} onSelect={handleSelectItem}>
          <p>John Smith</p>
        </Item>
        <Item key="2" isSelectable isSelected={selected.selectedKey === '2'} metaData={{ key: '2' }} onSelect={handleSelectItem}>
          <p>Mary Jones</p>
        </Item>
        <Item key="3" isSelectable isSelected={selected.selectedKey === '3'} metaData={{ key: '3' }} onSelect={handleSelectItem}>
          <p>Sam Brown</p>
        </Item>
      </List>
    </>
  );
};

export default AriaDescribedBySelectableListTest;
