const selectedIndexFromItems = (items) => {
  for (let i = 0; i < items.length; i += 1) {
    if (items[i].props.isSelected) {
      return i;
    }
  }
  return -1;
};

const selectedIndexesFromItems = (items, maxSelectionCount) => {
  const selectedIndexes = [];
  for (let i = 0; i < items.length; i += 1) {
    if (selectedIndexes.length >= maxSelectionCount) {
      break;
    }
    if (items[i].props.isSelected) {
      selectedIndexes.push(i);
    }
  }
  return selectedIndexes;
};

const newPropsForItem = (item, index, onClick, onKeyDown, isSelected, hasChevrons, disableUnselectedItems) => {
  const newProps = { };

  // Set the isSelected attribute to false for all the items except the items whose index is set to state selectedIndex
  if (isSelected !== item.isSelected) {
    newProps.isSelected = isSelected;
  }

  // Set the default isSelectable attribute to true, unless the consumer specifies the item isSelectable attribute as false.
  newProps.isSelectable = true;
  if (item.props.isSelectable === false) {
    newProps.isSelectable = item.props.isSelectable;
  }

  // If selectable, add tabIndex on items to navigate through keyboard tab key for selectable lists and add
  // onClick and onKeyDown functions.
  if (newProps.isSelectable) {
    newProps.tabIndex = '0';
    newProps.onClick = onClick;
    newProps.onKeyDown = onKeyDown;
  }

  // Uses the props.hasChevron value, unless the consumer specifies the item hasChevron attribute as false.
  if (hasChevrons)  {
    newProps.hasChevron = hasChevrons;
  }
  if (item.props.hasChevron !== undefined) {
    newProps.hasChevron = item.props.hasChevron;
  }

  if (disableUnselectedItems && !isSelected) {
    newProps.isSelectable = false;
  }

  return newProps;
};

const SelectableUtils = {
  selectedIndexFromItems,
  selectedIndexesFromItems,
  newPropsForItem,
};

export default SelectableUtils;
