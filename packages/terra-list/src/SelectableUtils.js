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
  if (currentKeys.indexOf(newKey) >= 0) {
    return true;
  }
  return false;
};

/**
 * Returns whether not the new key is already selected.
 */
const shouldHandleSingleSelect = (currentKey, newKey) => newKey !== currentKey;

/**
 * Returns a wrapped onClick callback function.
 */
const wrappedOnClickForItem = (onClick, isSelectable, onChange, key, metaData) => (
  (event) => {
    // The default isSelectable attribute is either undefined or true, unless the consumer specifies the item isSelectable attribute as false.
    if (isSelectable !== false && onChange) {
      onChange(event, { key, metaData });
    }

    if (onClick) {
      onClick(event);
    }
  }
);

/**
 * Returns a wrapped onKeyDown callback function with enter and space keys triggering onChange.
 */
const wrappedOnKeyDownForItem = (onKeyDown, isSelectable, onChange, key, metaData) => (
  (event) => {
    if (event.nativeEvent.keyCode === KEYCODES.ENTER || event.nativeEvent.keyCode === KEYCODES.SPACE) {
      // The default isSelectable attribute is either undefined or true, unless the consumer specifies the item isSelectable attribute as false.
      if (isSelectable !== false && onChange) {
        onChange(event, { key, metaData });
      }
    }

    if (onKeyDown) {
      onKeyDown(event);
    }
  }
);

/**
 * Returns an object containing accessiblity and selectable properties.
 */
const newPropsForItem = (item, onChange, hasChevrons, selectedKeys, disableUnselectedItems, isSelectable) => {
  const isSelected = selectedKeys.indexOf(item.props.listKey) >= 0;
  const newProps = { selectedKeys, disableUnselectedItems };
  // Set the isSelected attribute to false for all the items except the items whose index is set to state selectedIndex
  if (isSelected !== item.isSelected) {
    newProps.isSelected = isSelected;
  }

  // Set the default isSelectable attribute, unless the consumer specifies the item isSelectable attribute as false.
  newProps.isSelectable = isSelectable;
  if (isSelectable !== item.props.isSelectable) {
    newProps.isSelectable = item.props.isSelectable;
  }

  if (disableUnselectedItems && !isSelected) {
    newProps.isSelectable = false;
  }

  // If selectable, add tabIndex on items to navigate through keyboard tab key for selectable lists and add
  // onClick and onKeyDown functions.
  if (newProps.isSelectable) {
    newProps.onChange = onChange;
  }

  // Uses the props.hasChevron value, unless the consumer specifies the item hasChevron attribute as false.
  if (hasChevrons) {
    newProps.hasChevron = hasChevrons;
  }
  if (item.props.hasChevron !== undefined) {
    newProps.hasChevron = item.props.hasChevron;
  }

  return newProps;
};

const SelectableUtils = {
  updatedMultiSelectedKeys,
  validatedMaxCount,
  shouldHandleMultiSelect,
  shouldHandleSingleSelect,
  KEYCODES,
  wrappedOnClickForItem,
  wrappedOnKeyDownForItem,
  newPropsForItem,
};

export default SelectableUtils;
