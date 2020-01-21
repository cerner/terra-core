import { KEY_RETURN, KEY_SPACE } from 'keycode-js';
/**
 * Returns a wrapped onClick callback function. If the onSelect method isn't passed, we return the initial onClick.
 */
const wrappedOnClickForItem = (onClick, onSelect, metaData) => {
  if (!onSelect) {
    return onClick;
  }
  return (event) => {
    onSelect(event, metaData);

    if (onClick) {
      onClick(event);
    }
  };
};

/**
 * Returns a wrapped onKeyDown callback function with enter and space keys triggering onSelect. If the onSelect method isn't passed, we return the initial onClick.
 */
const wrappedOnKeyDownForItem = (onKeyDown, onSelect, metaData) => {
  if (!onSelect) {
    return onKeyDown;
  }
  return (event) => {
    if (event.nativeEvent.keyCode === KEY_RETURN || event.nativeEvent.keyCode === KEY_SPACE) {
      onSelect(event, metaData);
    }

    if (onKeyDown) {
      onKeyDown(event);
    }
  };
};

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

const staticStyle = width => (
  {
    msFlex: '0 0 0px',
    flex: '0 0 0px',
    maxWidth: width,
    minWidth: width,
  }
);

const scalarStyle = width => (
  {
    msFlex: `${width} ${width} 0px`,
    flex: `${width} ${width} 0px`,
  }
);

const styleFromWidth = (width) => {
  if (!width) {
    return undefined;
  }
  if (width.static) {
    return staticStyle(`${width.static.value}${width.static.unit}`);
  }
  if (width.percentage) {
    return staticStyle(`${width.percentage}%`);
  }
  if (width.scalar) {
    return scalarStyle(width.scalar);
  }
  return undefined;
};

const TableUtils = {
  wrappedOnClickForItem,
  wrappedOnKeyDownForItem,
  wrappedEventCallback,
  staticStyle,
  scalarStyle,
  styleFromWidth,
};

export default TableUtils;
export {
  wrappedOnClickForItem,
  wrappedOnKeyDownForItem,
  wrappedEventCallback,
  staticStyle,
  scalarStyle,
  styleFromWidth,
};
