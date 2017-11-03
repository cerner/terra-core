import React from 'react';

const KEYCODES = {
  ENTER: 13,
  SPACE: 32,
  LEFT_ARROW: 37,
  RIGHT_ARROW: 39,
};

const initialSelectedKey = (children) => {
  let selectedKey = null;

  React.Children.forEach(children, (child) => {
    if (child.props.isSelected) {
      selectedKey = child.key;
    }
  });

  return selectedKey;
};

const shouldHandleSelection = (currentSelectedKey, newSelectedKey) => newSelectedKey !== currentSelectedKey;

const SelectableUtils = {
  KEYCODES,
  initialSelectedKey,
  shouldHandleSelection,
};

export default SelectableUtils;
