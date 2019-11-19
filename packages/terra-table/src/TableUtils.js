const shouldBeMultiSelectable = (maxSelectionCount, selectedKeys, key) => (maxSelectionCount < 0 || selectedKeys.indexOf(key) >= 0 || selectedKeys.length < maxSelectionCount);

/**
 * Returns a new array, updated with the newKey being added or removed from the existing.
 */
const updatedMultiSelectedKeys = (currentKeys, newKey) => {
  if (currentKeys.length) {
    if (currentKeys.indexOf(newKey) >= 0) {
      const newKeys = currentKeys.slice();
      newKeys.splice(newKeys.indexOf(newKey), 1);
      return newKeys;
    }
    return currentKeys.concat([newKey]);
  }
  return [newKey];
};

const TableUtils = {
  updatedMultiSelectedKeys,
  shouldBeMultiSelectable,
};

export default TableUtils;
export {
  updatedMultiSelectedKeys,
  shouldBeMultiSelectable,
};
