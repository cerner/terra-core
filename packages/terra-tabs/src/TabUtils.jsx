const KEYCODES = {
  ENTER: 13,
  SPACE: 32,
  LEFT_ARROW: 37,
  RIGHT_ARROW: 39,
};

const shouldHandleSelection = (currentSelectedKey, newSelectedKey) => newSelectedKey !== currentSelectedKey;

const TabUtils = {
  KEYCODES,
  shouldHandleSelection,
};

export default TabUtils;
