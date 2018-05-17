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

const validatedMaxCountForSections = (children, maxSelectionCount) => {
  if (maxSelectionCount !== undefined) {
    return maxSelectionCount;
  }

  const childArray = React.Children.toArray(children);

  let totalNoOfListItems = 0;
  for (let i = 0; i < childArray.length; i += 1) {
    const eachSection = childArray[i];
    const listItems = eachSection.props.listItems;
    totalNoOfListItems += listItems.length;
  }
  return totalNoOfListItems;
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

const initialSingleSelectedIndexWithSections = (children) => {
  const childArray = React.Children.toArray(children);
  // childArray has all the sections.
  for (let i = 0; i < childArray.length; i += 1) {
    const eachSection = childArray[i];
    const listItems = eachSection.props.listItems;

    for (let j = 0; j < listItems.length; j += 1) {
      if (listItems[i].props.isSelected) {
        return `${i}-${j}`;
      }
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
  // childArray has all the sections.
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

const initialMultiSelectedIndexesWithSections = (children, maxSelectionCount) => {
  const selectedIndexes = [];
  const childArray = React.Children.toArray(children);
  const validMaxCount = validatedMaxCountForSections(children, maxSelectionCount);

  for (let i = 0; i < childArray.length; i += 1) {
    const listItems = childArray[i].props.listItems;

    if (selectedIndexes.length >= validMaxCount) {
      break;
    }

    for (let j = 0; j < listItems.length; j += 1) {
      if (listItems[j].props.isSelected) {
        selectedIndexes.push(`${i}-${j}`);
      }
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
      // It means its already selected. Trying to de-select it.
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
const shouldHandleMultiSelect = (children, maxSelectionCount, currentIndexes, newIndex, hasSections) => {
  if (!hasSections && currentIndexes.length < validatedMaxCount(children, maxSelectionCount)) {
    return true;
  } else if (hasSections) {
    if (currentIndexes.length < validatedMaxCountForSections(children, maxSelectionCount)) {
      return true;
    }
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

/**
 * Returns a wrapped onClick callback function.
 */
const wrappedOnClickForItem = (item, index, onChange) => {
  const initialOnClick = item.props.onClick;
  return (event) => {
    // The default isSelectable attribute is either undefined or true, unless the consumer specifies the item isSelectable attribute as false.
    if (item.props.isSelectable !== false && onChange) {
      onChange(event, index);
    }

    if (initialOnClick) {
      initialOnClick(event);
    }
  };
};

/**
 * Returns a wrapped onKeyDown callback function with enter and space keys triggering onChange.
 */
const wrappedOnKeyDownForItem = (item, index, onChange) => {
  const initialOnKeyDown = item.props.onKeyDown;

  return (event) => {
    if (event.nativeEvent.keyCode === KEYCODES.ENTER || event.nativeEvent.keyCode === KEYCODES.SPACE) {
      // The default isSelectable attribute is either undefined or true, unless the consumer specifies the item isSelectable attribute as false.
      if (item.props.isSelectable !== false && onChange) {
        onChange(event, index);
      }
    }

    if (initialOnKeyDown) {
      initialOnKeyDown(event);
    }
  };
};

/**
 * Returns an object containing accessiblity and selectable properties.
 */
const newPropsForItem = (item, index, onClick, onKeyDown, hasChevrons, selectedIndexes, disableUnselectedItems) => {
  const isSelected = selectedIndexes.indexOf(index) >= 0;
  const newProps = { role: 'option', 'aria-selected': isSelected };

  // Set the isSelected attribute to false for all the items except the items whose index is set to state selectedIndex
  if (isSelected !== item.isSelected) {
    newProps.isSelected = isSelected;
  }

  // Set the default isSelectable attribute to true, unless the consumer specifies the item isSelectable attribute as false.
  newProps.isSelectable = true;
  if (item.props.isSelectable === false) {
    newProps.isSelectable = item.props.isSelectable;
  }

  if (disableUnselectedItems && !isSelected) {
    newProps.isSelectable = false;
  }

  // If selectable, add tabIndex on items to navigate through keyboard tab key for selectable lists and add
  // onClick and onKeyDown functions.
  if (newProps.isSelectable) {
    newProps.tabIndex = '0';
    newProps.onClick = onClick;
    newProps.onKeyDown = onKeyDown;
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

const newPropsForSection = (section, clonedListItems) => {
  const newProps = {};
  newProps.headerContent = section.props.headerContent;
  newProps.listItems = clonedListItems;

  return newProps;
};

const SelectableUtils = {
  initialSingleSelectedIndex,
  initialSingleSelectedIndexWithSections,
  initialMultiSelectedIndexes,
  initialMultiSelectedIndexesWithSections,
  updatedMultiSelectedIndexes,
  validatedMaxCount,
  validatedMaxCountForSections,
  shouldHandleMultiSelect,
  shouldHandleSingleSelect,
  KEYCODES,
  wrappedOnClickForItem,
  wrappedOnKeyDownForItem,
  newPropsForItem,
  newPropsForSection,
};

export default SelectableUtils;
