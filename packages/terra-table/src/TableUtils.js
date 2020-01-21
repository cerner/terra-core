/**
 * Returns whether or not the provided value can be added or removed from the array given a max key count and presence checks.
 */
const canToggleArrayValue = (arrayMaxLength, currentArray, value) => (arrayMaxLength < 0 || currentArray.indexOf(value) >= 0 || currentArray.length < arrayMaxLength);

/**
 * Returns a new array, updated with the value being added or removed from the existing key array.
 */
const toggleArrayValue = (currentArray, value) => {
  if (currentArray.length) {
    if (currentArray.indexOf(value) >= 0) {
      const newArray = currentArray.slice();
      newArray.splice(newArray.indexOf(value), 1);
      return newArray;
    }
    return currentArray.concat([value]);
  }
  return [value];
};

const TableUtils = {
  canToggleArrayValue,
  toggleArrayValue,
};

export default TableUtils;
export {
  canToggleArrayValue,
  toggleArrayValue,
};
