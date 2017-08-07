const getPopupHeight = (contentHeight) => {
  if (contentHeight <= 40) {
    return 40;
  } else if (contentHeight <= 80) {
    return 80;
  } else if (contentHeight <= 120) {
    return 120;
  } else if (contentHeight <= 160) {
    return 160;
  } else if (contentHeight <= 240) {
    return 240;
  } else if (contentHeight <= 320) {
    return 320;
  } else if (contentHeight <= 400) {
    return 400;
  } else if (contentHeight <= 480) {
    return 480;
  } else if (contentHeight <= 560) {
    return 560;
  } else if (contentHeight <= 640) {
    return 640;
  } else if (contentHeight <= 720) {
    return 720;
  } else if (contentHeight <= 800) {
    return 800;
  }

  return 880;
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

const MenuUtils = {
  getPopupHeight,
  isFullScreen,
};

export default MenuUtils;
