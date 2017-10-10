import React from 'react';

const KEYCODES = {
  ENTER: 13,
  SPACE: 32,
};

/**
 * The validates the max count prop, and if undefined returns a max of the count of children.
 */
const validatedMaxCount = (children, maxSelectionCount) => {
  if (maxSelectionCount !== undefined) {
    return maxSelectionCount;
  }
  return React.Children.count(children);
};

/**
 * Returns the first valid index of a child with isSelected set.
 * To be used in the contructor, to set initial state.
 */
const initialSingleSelectedIndex = (children) => {
  const childArray = React.Children.toArray(children);
  for (let i = 0; i < childArray.length; i += 1) {
    if (childArray[i].props.isSelected) {
      return i;
    }
  }
  return -1;
};

/**
 * Returns the first valid indexes of children with isSelected set, up to the maxSelectionCount.
* To be used in the contructor, to set initial state.
 */
const initialMultiSelectedIndexes = (children, maxSelectionCount) => {
  const selectedIndexes = [];
  const childArray = React.Children.toArray(children);
  const validMaxCount = validatedMaxCount(children, maxSelectionCount);

  for (let i = 0; i < childArray.length; i += 1) {
    if (selectedIndexes.length >= validMaxCount) {
      break;
    }
    if (childArray[i].props.isSelected) {
      selectedIndexes.push(i);
    }
  }
  return selectedIndexes;
};

/**
 * Returns a new array, updated with the newIndex being added or removed from the existing.
 */
const updatedMultiSelectedIndexes = (currentIndexes, newIndex) => {
  let newIndexes = [];
  if (currentIndexes.length) {
    if (currentIndexes.indexOf(newIndex) >= 0) {
      newIndexes = currentIndexes.slice();
      newIndexes.splice(newIndexes.indexOf(newIndex), 1);
    } else {
      newIndexes = currentIndexes.concat([newIndex]);
    }
  } else {
    newIndexes.push(newIndex);
  }
  return newIndexes;
};

/**
 * Returns whether not the new index can be added if it adheres to the maxSelectionCount.
 * Or if the index is already present, and can be removed.
 */
const shouldHandleMultiSelect = (children, maxSelectionCount, currentIndexes, newIndex) => {
  if (currentIndexes.length < validatedMaxCount(children, maxSelectionCount)) {
    return true;
  }
  if (currentIndexes.indexOf(newIndex) >= 0) {
    return true;
  }
  return false;
};

/**
 * Returns whether not the new index is already selected.
 */
const shouldHandleSingleSelect = (currentIndex, newIndex) => newIndex !== currentIndex;

const SelectableUtils = {
  initialSingleSelectedIndex,
  initialMultiSelectedIndexes,
  updatedMultiSelectedIndexes,
  validatedMaxCount,
  shouldHandleMultiSelect,
  shouldHandleSingleSelect,
  KEYCODES,
};

export default SelectableUtils;
