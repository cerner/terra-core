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

/**
 * This function returns the size of an element and its position relative to the viewport. It takes into account parent <frame> offsets
 * if the element lies within a nested document (<frame> or <iframe>-like).
 *
 * @ param {htmlELement} node - The html reference to use to retrieve it's bounding rect values.
 */
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

/**
 * This function returns the list of parent elements capable of scrolling until a fixed element or document is found.
 *
 * @ param {htmlELement} element - The html reference to use to retrieve the parent nodes.
 */
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
      if (position !== 'absolute' || ['relative', 'absolute', 'fixed', 'static'].indexOf(style.position) >= 0) {
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

/**
 * This function returns the bounds of an element.
 *
 * @ param {htmlELement} element - The html reference to use to retrieve it's bounds.
 */
const getBounds = (element) => {
  let doc = document;
  let currentElement = document.documentElement;

  if (element !== document) {
    doc = element.ownerDocument;
    currentElement = element;
  }

  const docEl = doc.documentElement;
  const box = getActualBoundingClientRect(currentElement);

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

  // round origin
  box.top = Math.round(box.top);
  box.right = Math.round(box.right);
  box.bottom = Math.round(box.bottom);
  box.left = Math.round(box.left);

  return box;
};

/**
 * This function returns the size of an element. It takes into account scroll offsets and border widths applied.
 *
 * @ param {htmlELement/string} boundingElement - The value used to determine the size of bounding element.
 */
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
    const window = boundingElement.ownerDocument.defaultView;

    rect.left += window.pageXOffset;
    rect.top += window.pageYOffset;
    rect.right += window.pageXOffset;
    rect.bottom += window.pageYOffset;
  }

  BOUNDS_FORMAT.forEach((side) => {
    const subSide = side[0].toUpperCase() + side.substr(1);
    if (subSide === 'Top' || subSide === 'Left') {
      rect[side] += parseFloat(style[`border${subSide}Width`]);
    } else {
      rect[side] -= parseFloat(style[`border${subSide}Width`]);
    }
  });

  // round origin
  rect.top = Math.round(rect.top);
  rect.right = Math.round(rect.right);
  rect.bottom = Math.round(rect.bottom);
  rect.left = Math.round(rect.left);

  return rect;
};

/**
 * This function returns the attachment object, adjusted for RTL conversion.
 *
 * @ param {Object} attachment - The vertical and horizonal hookshot attachments.
 */
const switchAttachmentToRTL = attachment => ({ vertical: attachment.vertical, horizontal: MIRROR_LR[attachment.horizontal] });

/**
 * This function returns the offset object, adjusted for RTL conversion.
 *
 * @ param {Object} offset - The vertical and horizonal offset values.
 */
const switchOffsetToRTL = offset => ({ vertical: offset.vertical, horizontal: -offset.horizontal });

/**
 * This function splits a given attachment into an object representing the corresponding vertical and horizontal values.
 *
 * @ param {string} attachment - The vertical-horizontal attachment value to split.
 */
const parseAttachment = (attachment) => {
  if (!attachment) {
    return { vertical: '', horizontal: '' };
  }
  const [vertical, horizontal] = attachment.split(' ');
  return { vertical, horizontal };
};

/**
 * This function splits a given offset string into an object representing the corresponding vertical and horizontal offset values.
 *
 * @ param {string} value - The vertical-horizontal offset value to split.
 */
const parseOffset = (value) => {
  if (!value) {
    return { vertical: 0, horizontal: 0 };
  }

  const pair = parseAttachment(value);
  return { vertical: Number.parseFloat(pair.vertical), horizontal: Number.parseFloat(pair.horizontal) };
};

/**
 * This function returns an attachment object containing the mirrored attachment values.
 *
 * @ param {Object} attachment - The vertical and horizonal hookshot attachments.
 */
const mirrorAttachment = (attachment) => {
  if (attachment.vertical !== 'middle') {
    return { vertical: MIRROR_TB[attachment.vertical], horizontal: attachment.horizontal };
  }
  return { vertical: attachment.vertical, horizontal: MIRROR_LR[attachment.horizontal] };
};

/**
 * This function returns an offset object containing the mirrored offset values.
 *
 * @ param {Object} offset - The vertical and horizonal offset values.
 * @ param {Object} attachment - The vertical and horizonal hookshot attachments.
 */
const mirrorOffset = (offset, attachment) => {
  if (attachment.vertical !== 'middle') {
    return { vertical: -offset.vertical, horizontal: offset.horizontal };
  }
  return { vertical: offset.vertical, horizontal: -offset.horizontal };
};

/**
 * This function returns an attachment object containing the rotated attachment values given an angle value.
 *
 * @ param {Object} attachment - The vertical and horizonal hookshot attachments.
 * @ param {string} angle - Representation of the angle to rotate the attachment to.
 */
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

/**
 * This function returns whether or not there is available space to place the content given the provided bounds and positions of
 * the content and bounding elements.
 *
 * @ param {Object} positions - The positional data of the content and target to evaluate.
 * @ param {Object} cRect - The content rectangle.
 * @ param {Object} bRect - The bounding rectangle.
 */
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

/**
 * This function returns the screen coordinates, attchment values and offset values for the target.
 *
 * @ param {Object} rect - The target rectangle.
 * @ param {Object} attachment - The vertical and horizonal hookshot attachments of the target.
 * @ param {Object} offset - The vertical and horizonal offset values of the target.
 */
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

  return {
    x: tCoords.x + offset.horizontal,
    y: tCoords.y + offset.vertical,
    attachment,
    offset,
  };
};

/**
 * This function returns screen coordinates, attchment values and offset values of the target if mirrored.
 *
 * @ param {Object} tRect - The target rectangle.
 * @ param {Object} tAttachment - The vertical and horizonal hookshot attachments of the target.
 * @ param {Object} tOffset - The vertical and horizonal offset values of the target.
 * @ param {Object} cAttachment - The vertical and horizonal hookshot attachments of the content.
 */
const mirrorTargetCoords = (tRect, tAttachment, tOffset, cAttachment) => {
  const mOffset = mirrorOffset(tOffset, tAttachment);
  let mAttachment = tAttachment;

  if (cAttachment.vertical === tAttachment.vertical || (cAttachment.vertical !== 'middle' && tAttachment.vertical !== 'middle')) {
    mAttachment = mirrorAttachment(tAttachment);
  }

  return getTargetCoords(tRect, mAttachment, mOffset);
};

/**
 * This function returns the relative positional data of the content and target. Positional data includes
 * the screen coordinates, attchment values and offset values.
 *
 * @ param {Object} rect - The content rectangle.
 * @ param {Object} attachment - The vertical and horizonal hookshot attachments of the content.
 * @ param {Object} offset - The vertical and horizonal offset values of the content.
 * @ param {Object} tCoords - The positional data of the target.
 * @ param {number} margin - The px value of the attachmentMargin.
 */
const getRelativePositions = (rect, attachment, offset, tCoords, margin) => {
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

/**
 * This function attempts to rotate the content element given the attachmnt behavior and returns the corresponding positional data.
 * Positional data includes the screen coordinates, attchment values and offset values.
 *
 * @ param {Object} positions - The relative positional data of the content and target to evaluate.
 * @ param {Object} cRect - The content rectangle.
 * @ param {Object} bRect - The bounding rectangle.
 * @ param {Object} tRect - The target rectangle.
 * @ param {number} margin - The px value of the attachmentMargin.
 * @ param {string} behavior - The attachemnt behavior which indicates the available content rotations.
 */
const getRotatedPositions = (positions, cRect, bRect, tRect, margin, behavior) => {
  if (behavior !== 'none') {
    // Attempt to flip content 180 degrees
    let newOffset = mirrorOffset(positions.cCoords.offset, positions.cCoords.attachment);
    let newAttachment = mirrorAttachment(positions.cCoords.attachment);
    let newTCoords = mirrorTargetCoords(tRect, positions.tCoords.attachment, positions.tCoords.offset, positions.cCoords.attachment);
    let newPositions = getRelativePositions(cRect, newAttachment, newOffset, newTCoords, margin);

    if (isValidPositions(newPositions, cRect, bRect)) {
      return newPositions; // 180 degree rotation is valid
    }

    if (behavior === 'auto') {
      newOffset = { vertical: 0, horizontal: 0 };

      // Attempt to flip content 90 degrees
      newAttachment = rotateContentAttachment(positions.cCoords.attachment, '90');
      newTCoords = getTargetCoords(tRect, mirrorAttachment(newAttachment), newOffset);
      newPositions = getRelativePositions(cRect, newAttachment, newOffset, newTCoords, margin);

      if (isValidPositions(newPositions, cRect, bRect)) {
        return newPositions; // 90 degree rotation is valid
      }

      // Attempt to flip content -90 degrees
      newAttachment = rotateContentAttachment(positions.cCoords.attachment, '-90');
      newTCoords = getTargetCoords(tRect, mirrorAttachment(newAttachment), newOffset);
      newPositions = getRelativePositions(cRect, newAttachment, newOffset, newTCoords, margin);

      if (isValidPositions(newPositions, cRect, bRect)) {
        return newPositions; // -90 degree rotation is valid
      }
    }
  }

  return positions;
};

/**
 * This function adjusts the contents positional data to ensure it fits for bounding rectangle. Returns weather or
 * not the content was bounded and the positional data of the content and target to evaluate. Positional data includes
 * the screen coordinates, attchment values and offset values.
 *
 * @ param {Object} positions - The positional data of the content and target to evaluate.
 * @ param {Object} cRect - The content rectangle.
 * @ param {Object} bRect - The bounding rectangle.
 */
const getBoundedPositions = (positions, cRect, bRect) => {
  const cCoords = {};
  let bounded = false;

  // Checks Horizontal Bounds
  if (bRect.left >= positions.cCoords.x) {
    cCoords.x = bRect.left;
  } else if (bRect.right <= positions.cCoords.x + cRect.width) {
    cCoords.x = bRect.right - cRect.width;
  } else {
    cCoords.x = positions.cCoords.x;
  }

  // Checks Vertical Bounds
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

/**
 * The function returns the style and positional data the hookshot content and target. Positional data includes
 * the screen coordinates, attchment values and offset values.
 *
 * @ param {Object} boundingRect - The bounding rectangle.
 * @ param {Object} targetRect - The target rectangle.
 * @ param {Object} contentRect - The content rectangle.
 * @ param {Object} cOffset - The vertical and horizonal offset values of the content.
 * @ param {Object} tOffset - The vertical and horizonal offset values of the target.
 * @ param {Object} cAttachment - The vertical and horizonal hookshot attachments of the content.
 * @ param {Object} tAttachment - The vertical and horizonal hookshot attachments of the target.
 * @ param {number} margin - The px value of the attachmentMargin.
 * @ param {string} behavior - The attachemnt behavior which indicates the available content rotations.
 */
const positionStyleFromBounds = (boundingRect, targetRect, contentRect, cOffset, tOffset, cAttachment, tAttachment, margin, behavior) => {
  const tCoords = getTargetCoords(targetRect, tAttachment, tOffset);

  // Get relative content and target positions
  let positions = getRelativePositions(contentRect, cAttachment, cOffset, tCoords, margin);

  if (!isValidPositions(positions, contentRect, boundingRect)) {
    // Try to rotated the content to fit
    positions = getRotatedPositions(positions, contentRect, boundingRect, targetRect, margin, behavior);
  }

  // Get bounded content and target positions
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
  parseAttachment,
  parseOffset,
  positionStyleFromBounds,
};
