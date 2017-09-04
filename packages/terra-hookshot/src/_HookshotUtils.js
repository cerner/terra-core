const BOUNDS_FORMAT = ['left', 'top', 'right', 'bottom'];
const MIRROR_LR = {
  center: 'center',
  left: 'right',
  right: 'left',
};

const MIRROR_TB = {
  middle: 'middle',
  top: 'bottom',
  bottom: 'top',
};

// Same as native getBoundingClientRect, except it takes into account parent <frame> offsets
// if the element lies within a nested document (<frame> or <iframe>-like).
const getActualBoundingClientRect = (node) => {
  const clientRect = node.getBoundingClientRect();
  const rect = {
    top: clientRect.top,
    right: clientRect.right,
    bottom: clientRect.bottom,
    left: clientRect.left,
    width: clientRect.width,
    height: clientRect.height,
  };

  if (node.ownerDocument !== document) {
    const frameElement = node.ownerDocument.defaultView.frameElement;
    if (frameElement) {
      const frameRect = getActualBoundingClientRect(frameElement);
      rect.top += frameRect.top;
      rect.bottom += frameRect.top;
      rect.left += frameRect.left;
      rect.right += frameRect.left;
    }
  }

  return rect;
};

const getScrollParents = (element) => {
  const computedStyle = getComputedStyle(element) || {};
  const position = computedStyle.position;
  const parents = [];

  if (position === 'fixed') {
    return [element];
  }

  let parent = element.parentNode;
  while (parent && parent.nodeType === 1) {
    let style;
    try {
      style = getComputedStyle(parent);
    } catch (err) {
      style = null;
    }

    if (typeof style === 'undefined' || style === null) {
      parents.push(parent);
      return parents;
    }

    const { overflow, overflowX, overflowY } = style;
    if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
      if (position !== 'absolute' || ['relative', 'absolute', 'fixed'].indexOf(style.position) >= 0) {
        parents.push(parent);
      }
    }
    parent = parent.parentNode;
  }

  parents.push(element.ownerDocument.body);

  // If the node is within a frame, account for the parent window scroll
  if (element.ownerDocument !== document) {
    parents.push(element.ownerDocument.defaultView);
  }

  return parents;
};

const getBounds = (element) => {
  let doc;
  let currentElement = element;
  if (element === document) {
    doc = document;
    currentElement = document.documentElement;
  } else {
    doc = element.ownerDocument;
  }

  const docEl = doc.documentElement;
  const box = getActualBoundingClientRect(currentElement);
  const origin = { top: 0, left: 0 };

  box.top -= origin.top;
  box.left -= origin.left;

  if (typeof box.width === 'undefined') {
    box.width = document.body.scrollWidth - box.left - box.right;
  }
  if (typeof box.height === 'undefined') {
    box.height = document.body.scrollHeight - box.top - box.bottom;
  }

  box.top -= docEl.clientTop;
  box.left -= docEl.clientLeft;
  box.right = doc.body.clientWidth - box.width - box.left;
  box.bottom = doc.body.clientHeight - box.height - box.top;

  return box;
};

const getBoundingRect = (boundingElement) => {
  if (boundingElement === 'window') {
    return {
      top: 0,
      bottom: innerHeight,
      left: 0,
      right: innerWidth,
    };
  }

  const bounds = getBounds(boundingElement);
  const style = getComputedStyle(boundingElement);
  const rect = {
    top: bounds.top,
    bottom: bounds.top + bounds.height,
    left: bounds.left,
    right: bounds.left + bounds.width,
  };

  // Account any parent Frames scroll offset
  if (boundingElement.ownerDocument !== document) {
    const win = boundingElement.ownerDocument.defaultView;
    rect.left += win.pageXOffset;
    rect.top += win.pageYOffset;
    rect.right += win.pageXOffset;
    rect.bottom += win.pageYOffset;
  }

  BOUNDS_FORMAT.forEach((side) => {
    const subSide = side[0].toUpperCase() + side.substr(1);
    if (subSide === 'Top' || subSide === 'Left') {
      rect[side] += parseFloat(style[`border${subSide}Width`]);
    } else {
      rect[side] -= parseFloat(style[`border${subSide}Width`]);
    }
  });

  return rect;
};

const switchAttachmentToRTL = (attachment) => {
  return { vertical: attachment.vertical, horizontal: MIRROR_LR[attachment.horizontal] };
};

const switchOffsetToRTL = (offset) => {
  return { vertical: offset.vertical, horizontal: -offset.horizontal };
};

const parseStringPair = (value) => {
  if (!value) {
    return { vertical: '', horizontal: '' };
  }
  const [vertical, horizontal] = value.split(' ');
  return { vertical, horizontal };
};

const parseOffset = (value) => {
  if (!value) {
    return { vertical: 0, horizontal: 0 };
  }

  const pair = parseStringPair(value);
  return { vertical: Number.parseFloat(pair.vertical), horizontal: Number.parseFloat(pair.horizontal) };
};

const mirrorAttachment = (attachment) => {
  const mAttachment = {};
  if (attachment.vertical !== 'middle') {
    mAttachment.horizontal = attachment.horizontal;
    mAttachment.vertical = MIRROR_TB[attachment.vertical];
  } else {
    mAttachment.horizontal = MIRROR_LR[attachment.horizontal];
    mAttachment.vertical = attachment.vertical;
  }
  return mAttachment;
};

const mirrorOffset = (offset, attachment) => {
  if (attachment.vertical !== 'middle') {
    return { vertical: -offset.vertical, horizontal: offset.horizontal };
  }
  return { vertical: offset.vertical, horizontal: -offset.horizontal };
};

const rotateContentAttachment = (attachment, angle) => {
  const rAttachment = {};
  if (attachment.vertical === 'middle') {
    if (angle === '90') {
      rAttachment.vertical = attachment.horizontal === 'left' ? 'bottom' : 'top';
    } else if (angle === '-90') {
      rAttachment.vertical = attachment.horizontal === 'left' ? 'top' : 'bottom';
    }
    rAttachment.horizontal = 'center';
  } else {
    if (angle === '90') {
      rAttachment.horizontal = attachment.vertical === 'top' ? 'left' : 'right';
    } else if (angle === '-90') {
      rAttachment.horizontal = attachment.vertical === 'top' ? 'right' : 'left';
    }
    rAttachment.vertical = 'middle';
  }
  return rAttachment;
};

const isValidPositions = (positions, cRect, bRect) => {
  const cCoords = positions.cCoords;
  const attachment = cCoords.attachment;
  if (attachment.vertical === 'middle') {
    if (attachment.horizontal === 'right') {
      return cCoords.x >= bRect.left;
    } else if (attachment.horizontal === 'left') {
      return cCoords.x + cRect.width <= bRect.right;
    }
    return true;
  } else if (attachment.vertical === 'top') {
    return cCoords.y + cRect.height <= bRect.bottom;
  }
  return cCoords.y >= bRect.top;
};

const getTargetCoords = (rect, attachment, offset) => {
  const tCoords = {};
  if (attachment.vertical === 'middle') {
    tCoords.y = rect.top + (rect.height / 2);
  } else if (attachment.vertical === 'bottom') {
    tCoords.y = rect.top + rect.height;
  } else {
    tCoords.y = rect.top;
  }

  if (attachment.horizontal === 'center') {
    tCoords.x = rect.left + (rect.width / 2);
  } else if (attachment.horizontal === 'right') {
    tCoords.x = rect.left + rect.width;
  } else {
    tCoords.x = rect.left;
  }
  return { x: tCoords.x + offset.horizontal, y: tCoords.y + offset.vertical, attachment, offset };
};

const mirrorTargetCoords = (tRect, tAttachment, tOffset, cAttachment) => {
  const mOffset = mirrorOffset(tOffset, tAttachment);
  let mAttachment = tAttachment;
  if (cAttachment.vertical === tAttachment.vertical || (cAttachment.vertical !== 'middle' &&  tAttachment.vertical !== 'middle')) {
    mAttachment = mirrorAttachment(tAttachment);
  }
  return getTargetCoords(tRect, mAttachment, mOffset);
};

const getBasicPositions = (rect, attachment, offset, tCoords, margin) => {
  const cCoords = {};
  if (attachment.vertical === 'middle') {
    if (attachment.horizontal === 'center') {
      cCoords.x = tCoords.x - (rect.width / 2);
    } else if (attachment.horizontal === 'right') {
      cCoords.x = tCoords.x - rect.width - margin;
    } else {
      cCoords.x = tCoords.x + margin;
    }

    cCoords.y = tCoords.y - (rect.height / 2);
  } else {
    if (attachment.horizontal === 'center') {
      cCoords.x = tCoords.x - (rect.width / 2);
    } else if (attachment.horizontal === 'right') {
      cCoords.x = tCoords.x - rect.width;
    } else {
      cCoords.x = tCoords.x;
    }

    if (attachment.vertical === 'bottom') {
      cCoords.y = tCoords.y - rect.height - margin;
    } else {
      cCoords.y = tCoords.y + margin;
    }
  }

  return {
    cCoords: {
      x: cCoords.x + offset.horizontal,
      y: cCoords.y + offset.vertical,
      attachment,
      offset,
    },
    tCoords,
  };
};

const getRotatedPositions = (positions, cRect, bRect, tRect, margin, behavior) => {
  if (isValidPositions(positions, cRect, bRect)) {
    return positions; // default valid
  }

  if (behavior !== 'none') {
    let newOffset = mirrorOffset(positions.cCoords.offset, positions.cCoords.attachment);
    let newAttachment = mirrorAttachment(positions.cCoords.attachment);
    let newTCoords = mirrorTargetCoords(tRect, positions.tCoords.attachment, positions.tCoords.offset, positions.cCoords.attachment);
    let newPositions = getBasicPositions(cRect, newAttachment, newOffset, newTCoords, margin);

    if (isValidPositions(newPositions, cRect, bRect)) {
      return newPositions; // 180 degree valid
    }

    if (behavior === 'auto') {
      newOffset = { vertical: 0, horizontal: 0 };
      newAttachment = rotateContentAttachment(positions.cCoords.attachment, '90');
      newTCoords = getTargetCoords(tRect, mirrorAttachment(newAttachment), newOffset);
      newPositions = getBasicPositions(cRect, newAttachment, newOffset, newTCoords, margin);

      if (isValidPositions(newPositions, cRect, bRect)) {
        return newPositions; // 90degree valid
      }

      newAttachment = rotateContentAttachment(positions.cCoords.attachment, '-90');
      newTCoords = getTargetCoords(tRect, mirrorAttachment(newAttachment), newOffset);
      newPositions = getBasicPositions(cRect, newAttachment, newOffset, newTCoords, margin);

      if (isValidPositions(newPositions, cRect, bRect)) {
        return newPositions; // -90degree valid
      }
    }
  }

  return positions;
};

const getBoundedPositions = (positions, cRect, bRect) => {
  const cCoords = {};
  let bounded = false;

  // Bounds Checks Horizontal
  if (bRect.left >= positions.cCoords.x) {
    cCoords.x = bRect.left;
  } else if (bRect.right <= positions.cCoords.x + cRect.width) {
    cCoords.x = bRect.right - cRect.width;
  } else {
    cCoords.x = positions.cCoords.x;
  }

  // Bounds Checks Vertical
  if (bRect.top >= positions.cCoords.y) {
    cCoords.y = bRect.top;
    bounded = true;
  } else if (bRect.bottom <= positions.cCoords.y + cRect.height) {
    cCoords.y = bRect.bottom - cRect.height;
    bounded = true;
  } else {
    cCoords.y = positions.cCoords.y;
  }

  return {
    bounded,
    cCoords: {
      x: cCoords.x,
      y: cCoords.y,
      attachment: positions.cCoords.cAttachment,
      offset: positions.cCoords.cOffset,
    },
    tCoords: positions.tCoords,
  };
};

const positionStyleFromBounds = (boundingRect, targetRect, contentRect, cOffset, tOffset, cAttachment, tAttachment, margin, behavior) => {
  const tCoords = getTargetCoords(targetRect, tAttachment, tOffset);
  let positions = getBasicPositions(contentRect, cAttachment, cOffset, tCoords, margin);
  positions = getRotatedPositions(positions, contentRect, boundingRect, targetRect, margin, behavior);
  positions = getBoundedPositions(positions, contentRect, boundingRect);

  const result = {
    style: {
      position: 'absolute',
      left: `${positions.cCoords.x + pageXOffset}px`,
      top: `${positions.cCoords.y + pageYOffset}px`,
    },
    positions,
  };

  // Account for mobile zoom, this plays havoc with page offsets, so adjusting to fixed positioning.
  if (positions.bounded || document.body.clientWidth / window.innerWidth > 1.0) {
    result.style = {
      position: 'fixed',
      left: `${positions.cCoords.x}px`,
      top: `${positions.cCoords.y}px`,
    };
  }
  return result;
};

export default {
  getScrollParents,
  getBounds,
  getBoundingRect,
  mirrorAttachment,
  switchAttachmentToRTL,
  switchOffsetToRTL,
  parseStringPair,
  parseOffset,
  positionStyleFromBounds,
};
