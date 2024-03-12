import React, { useRef, useState } from 'react';
import List, { Item } from 'terra-list/lib/index';
import { Placeholder } from '@cerner/terra-docs';
import classNames from 'classnames/bind';
import styles from './ListDocCommon.module.scss';

const cx = classNames.bind(styles);

const ListDraggableExample = () => {
  const mockData = [
    {
      title: 'John Smith',
      key: 'unique-0',
    },
    {
      title: 'Mary Jones',
      key: 'unique-1',
    },
    {
      title: 'Sam Brown',
      key: 'unique-2',
    },
    {
      title: 'John David',
      key: 'unique-3',
    },
  ];

  const [dataList, setDataList] = useState(mockData);
  const [selectedKey, setselectedKey] = useState('unique-0');
  const [selectedData, setSelectedData] = useState('John Smith');
  const listNode = useRef(null);

  const reorderListItems = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  const handleRef = (node) => {
    listNode.current = node;
  };

  const handleDragAndDrop = (draggedElement) => {
    const result = reorderListItems(dataList, draggedElement.source.index, draggedElement.destination.index);
    setDataList(result);
    setselectedKey(draggedElement.draggableId);
  };

  const handleItemSelection = (event, metaData) => {
    event.preventDefault();
    if (selectedKey !== metaData.key) {
      setselectedKey(metaData.key);
      setSelectedData(metaData.data);
    }
  };

  const createListItem = (itemData) => (
    <Item
      key={itemData.key}
      isSelectable
      isSelected={selectedKey === itemData.key}
      metaData={{ key: itemData.key, data: itemData.title }}
      onSelect={handleItemSelection}
    >
      <Placeholder title={itemData.title} className={cx('placeholder')} />
    </Item>
  );

  const createListItems = (data) => data.map((childItem, index) => createListItem(childItem, index));

  return (
    <>
      <p id="list-help">
        Select a patient from the list to view patient details.
        Selected Item:
        {' '}
        {selectedData}
      </p>
      <List role="listbox" ariaDescribedBy="list-help" aria-label="list of patient" isDraggable onDragEnd={handleDragAndDrop} refCallback={(node) => handleRef(node)}>
        {createListItems(dataList)}
      </List>
    </>
  );
};

export default ListDraggableExample;
