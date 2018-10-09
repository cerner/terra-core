const KEYCODES = {
  ENTER: 13,
  SPACE: 32,
};

/**
 * The validates the max count prop, and if undefined returns a max of -1..
 */
const validatedMaxCount = (maxSelectionCount) => {
  if (maxSelectionCount !== undefined) {
    return maxSelectionCount;
  }
  return -1; // If undefined assume infinite.
};

/**
 * Returns a new array, updated with the newKey being added or removed from the existing.
 */
const updatedMultiSelectedKeys = (currentKeys, newKey) => {
  let newKeys = [];
  if (currentKeys.length) {
    if (currentKeys.indexOf(newKey) >= 0) {
      newKeys = currentKeys.slice();
      newKeys.splice(newKeys.indexOf(newKey), 1);
    } else {
      newKeys = currentKeys.concat([newKey]);
    }
  } else {
    newKeys.push(newKey);
  }
  return newKeys;
};

/**
 * Returns whether not the new index can be added if it adheres to the maxSelectionCount.
 * Or if the index is already present, and can be removed.
 */
const shouldHandleMultiSelect = (maxSelectionCount, currentKeys, newKey) => {
  const validMaxCount = validatedMaxCount(maxSelectionCount);
  if (validMaxCount < 0 || currentKeys.length < validMaxCount) {
    return true;
  }
  return currentKeys.indexOf(newKey) >= 0;
};

/**
 * Returns whether not the new key is already selected.
 */
const shouldHandleSingleSelect = (currentKey, newKey) => newKey !== currentKey;

const SelectableUtils = {
  updatedMultiSelectedKeys,
  validatedMaxCount,
  shouldHandleMultiSelect,
  shouldHandleSingleSelect,
  KEYCODES,
};

export default SelectableUtils;
