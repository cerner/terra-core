/**
 * Returns a validated max count for selection based on the rows and max provided.
 */
const validatedMaxCount = (rows, maxSelectionCount) => {
  if (maxSelectionCount !== undefined) {
    return maxSelectionCount;
  }
  if (rows) {
    return rows.length;
  }
  return 0;
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
  if (!rows || !rows.length) {
    return [];
  }
  // Find the rows which are selected and are selectable
  const selectedIndexes = [];
  const validatedMaxSelectionCount = validatedMaxCount(rows, maxSelectionCount);
  for (let i = 0; i < rows.length; i += 1) {
    if (selectedIndexes.length >= validatedMaxSelectionCount) {
      break;
    }
    if (rows[i].props.isSelected) {
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
 * Returns if the selected row index is already selected for SingleSelectableRows.
 */
const shouldHandleSingleSelectRowSelection = (currentIndex, newIndex) => currentIndex !== newIndex;

/**
 * Returns whether not the new index can be added if it adheres to the maxSelectionCount.
 * Or if the index is already present, and can be removed.
 */
const shouldHandleMultiSelectRowSelection = (children, maxSelectionCount, currentIndexes, newIndex) => {
  if (currentIndexes.length < validatedMaxCount(children, maxSelectionCount)) {
    return true;
  }
  return currentIndexes.indexOf(newIndex) >= 0;
};

/**
 * The KEYCODES supported by seletectable table components.
 */
const KEYCODES = {
  ENTER: 13,
  SPACE: 32,
};

const SelectableUtils = {
  validatedMaxCount,
  initialSingleSelectRowIndex,
  initialMultiSelectRowIndexes,
  updatedMultiSelectedIndexes,
  shouldHandleSingleSelectRowSelection,
  shouldHandleMultiSelectRowSelection,
  KEYCODES,
};

export default SelectableUtils;
