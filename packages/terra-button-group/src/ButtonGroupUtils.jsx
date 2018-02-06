/**
 * Returns true if the selected button is not the currently selected button.
 * This helper function is intended to be used to determine if a button has been selected in a single-selection button group.
 */
const shouldHandleSingleSelection = (currentSelectedKey, newSelectedKey) => newSelectedKey !== currentSelectedKey;

/**
 * If the new selected key (newSelectedKey) is already in the current selected keys list (currentSelectedKeys),
 * the new selected key will be removed from the selected keys list. If it is not in the selected keys list, it will be added to the list.
 * To be used for a multi-select button group to keep track of which button key to select and de-select.
 */
const handleMultiSelectedKeys = (currentSelectedKeys, newSelectedKey) => {
  if (!newSelectedKey) {
    return currentSelectedKeys;
  }

  if (!currentSelectedKeys) {
    return [newSelectedKey];
  }

  const clonedSelectedKeys = currentSelectedKeys.slice();
  const index = clonedSelectedKeys.indexOf(newSelectedKey);

  if (index > -1) {
    clonedSelectedKeys.splice(index, 1);
  } else {
    clonedSelectedKeys.push(newSelectedKey);
  }

  return clonedSelectedKeys;
};

const ButtonGroupUtils = {
  shouldHandleSingleSelection,
  handleMultiSelectedKeys,
};

export default ButtonGroupUtils;
