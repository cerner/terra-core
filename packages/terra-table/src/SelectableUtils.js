import React from 'react';

/**
 * Returns a validated max count for selection. Validates the max count prop, and if undefined
 * returns a max of the count of children.
 */
const validatedMaxCountSelection = (rows, maxSelectionCount) => {
  if (maxSelectionCount !== undefined) {
    return maxSelectionCount;
  }
  return React.Children.count(rows);
};

/**
 * Returns the index of the first selected row for SingleSelectableRows.
 * To be used in the constructor, to set initial state.
 */
const initialSingleSelectRowIndex = (rows) => {
  if (!rows || !rows.length) {
    return null;
  }

  for (let i = 0; i < rows.length; i += 1) {
    if (rows[i].props.isSelected) {
      return i;
    }
  }
  return -1;
};

/**
 * Returns the indexes of the selected rows for MultiSelectableRows.
 * To be used in the constructor, to set initial state.
 */
const initialMultiSelectRowIndexes = (rows, maxSelectionCount) => {
  const childArray = React.Children.toArray(rows);

  // Find the rows which are selected and are selectable
  const selectedIndexes = [];
  const validatedMaxSelectionCount = validatedMaxCountSelection(childArray, maxSelectionCount);
  for (let i = 0; i < childArray.length; i += 1) {
    if (childArray[i].props.isSelected) {
      selectedIndexes.push(i);

      if (selectedIndexes.length >= validatedMaxSelectionCount) {
        break;
      }
    }
  }
  return selectedIndexes;
};

/**
 * Returns a new array of the selected indexes, updated with the newIndex being added or removed
 * from the existing.
 */
const updatedMultiSelectedIndexes = (currentIndexes, newIndex) => {
  let newIndexes = [];
  if (currentIndexes && currentIndexes.length) {
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
 * Returns if the selected row index is already selected for SingleSelectableRows.
 */
const shouldHandleSingleSelectRowSelection = (currentIndex, newIndex) => currentIndex !== newIndex;

/**
 * Returns whether not the new index can be added if it adheres to the maxSelectionCount.
 * Or if the index is already present, and can be removed.
 */
const shouldHandleMultiSelectRowSelection = (children, maxSelectionCount, currentIndexes, newIndex) => {
  if (currentIndexes.length < validatedMaxCountSelection(children, maxSelectionCount)) {
    return true;
  }
  return currentIndexes.indexOf(newIndex) >= 0;
};

const SelectableUtils = {
  validatedMaxCountSelection,
  initialSingleSelectRowIndex,
  initialMultiSelectRowIndexes,
  updatedMultiSelectedIndexes,
  shouldHandleSingleSelectRowSelection,
  shouldHandleMultiSelectRowSelection,
};

export default SelectableUtils;
