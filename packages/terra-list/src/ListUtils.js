const KEYCODES = {
  ENTER: 13,
  SPACE: 32,
};

const shouldBeMultiSelectable = (maxSelectionCount, selectedKeys, key) => (maxSelectionCount < 0 || selectedKeys.indexOf(key) >= 0 || selectedKeys.length < maxSelectionCount);

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
 * Returns a wrapped onClick callback function.
 */
const wrappedOnClickForItem = (onClick, onSelect, metaData) => (
  (event) => {
    onSelect(event, metaData);

    if (onClick) {
      onClick(event);
    }
  }
);

/**
 * Returns a wrapped onKeyDown callback function with enter and space keys triggering onSelect.
 */
const wrappedOnKeyDownForItem = (onKeyDown, onSelect, metaData) => (
  (event) => {
    if (event.nativeEvent.keyCode === KEYCODES.ENTER || event.nativeEvent.keyCode === KEYCODES.SPACE) {
      onSelect(event, metaData);
    }

    if (onKeyDown) {
      onKeyDown(event);
    }
  }
);

/**
 * Returns a function that wraps both the old and new callback.
 */
const wrappedEventCallback = (callback, newCallback) => {
  if (!callback) {
    return newCallback;
  }
  return (event) => {
    newCallback(event);

    if (callback) {
      callback(event);
    }
  };
};

const SelectableUtils = {
  updatedMultiSelectedKeys,
  shouldBeMultiSelectable,
  wrappedOnClickForItem,
  wrappedOnKeyDownForItem,
  wrappedEventCallback,
  KEYCODES,
};

export default SelectableUtils;
