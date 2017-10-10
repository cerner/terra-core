const getPopupHeight = (contentHeight) => {
  if (contentHeight <= 160) {
    // This will round the content height up to the nearest multiple of 40 for smaller content heights
    return Math.ceil(contentHeight / 40) * 40;
  }

  // This will round the content height up to the nearest mulitple of 80 and take the min of that and 880
  return Math.min(Math.ceil(contentHeight / 80) * 80, 880);
};

const isFullScreen = (boundingFrame, popupHeight, popupWidth) => {
  const width = popupWidth;
  const height = popupHeight;
  let maxHeight;
  let maxWidth;

  if (boundingFrame) {
    maxHeight = boundingFrame.clientHeight;
    maxWidth = boundingFrame.clientWidth;
  } else {
    maxHeight = window.innerHeight;
    maxWidth = window.innerWidth;
  }

  if (maxHeight <= 0 || maxWidth <= 0) {
    return false;
  }

  return height >= maxHeight && width >= maxWidth;
};

const KEYCODES = {
  ENTER: 13,
  SPACE: 32,
  UP_ARROW: 38,
  DOWN_ARROW: 40,
  LEFT_ARROW: 37,
  RIGHT_ARROW: 39,
};


const MenuUtils = {
  getPopupHeight,
  isFullScreen,
  KEYCODES,
};

export default MenuUtils;
