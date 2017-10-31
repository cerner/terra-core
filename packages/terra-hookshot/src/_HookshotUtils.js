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
  box.height = Math.round(box.height);
  box.width = Math.round(box.width);

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

  // Account for any parent Frames scroll offset
  if (boundingElement.ownerDocument !== document) {
    const parentView = boundingElement.ownerDocument.defaultView;

    rect.left += parentView.pageXOffset;
    rect.top += parentView.pageYOffset;
    rect.right += parentView.pageXOffset;
    rect.bottom += parentView.pageYOffset;
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
 * @ param {bool} isRTL - Whether or not the page is using RTL.
 */
const getDirectionalAttachment = (attachment, isRTL) => {
  if (attachment.horizontal === 'start') {
    return { vertical: attachment.vertical, horizontal: (isRTL ? 'right' : 'left') };
  } else if (attachment.horizontal === 'end') {
    return { vertical: attachment.vertical, horizontal: (isRTL ? 'left' : 'right') };
  }
  return attachment;
};

/**
 * This function returns the offset object, adjusted for RTL conversion.
 *
 * @ param {Object} offset - The vertical and horizonal offset values.
 * @ param {bool} isRTL - Whether or not the page is using RTL.
 */
const getDirectionalOffset = (offset, isRTL) => {
  if (isRTL) {
    return { vertical: offset.vertical, horizontal: -offset.horizontal };
  }
  return offset;
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
 * @ param {Object} boundingRect - The bounding rectangle.
 */
const isValidPositions = (positions, boundingRect) => {
  const content = positions.content;
  const attachment = content.attachment;
  const contentRect = content.rect;

  if (attachment.vertical === 'middle') {
    if (attachment.horizontal === 'right') {
      return content.x >= boundingRect.left;
    } else if (attachment.horizontal === 'left') {
      return content.x + contentRect.width <= boundingRect.right;
    }
    return true;
  } else if (attachment.vertical === 'top') {
    return content.y + contentRect.height <= boundingRect.bottom;
  }

  return content.y >= boundingRect.top;
};

/**
 * This function returns the screen coordinates, attachment values and offset values for the target.
 *
 * @ param {Object} target - The target x/y coords, rectangle, offset, and attachment.
 */
const getTargetPosition = (target) => {
  const targetCoords = {};
  const targetTop = target.rect.top;
  const targetHeight = target.rect.height;
  const targetLeft = target.rect.left;
  const targetWidth = target.rect.width;

  if (target.attachment.vertical === 'middle') {
    targetCoords.y = targetTop + (targetHeight / 2);
  } else if (target.attachment.vertical === 'bottom') {
    targetCoords.y = targetTop + targetHeight;
  } else {
    targetCoords.y = targetTop;
  }

  if (target.attachment.horizontal === 'center') {
    targetCoords.x = targetLeft + (targetWidth / 2);
  } else if (target.attachment.horizontal === 'right') {
    targetCoords.x = targetLeft + targetWidth;
  } else {
    targetCoords.x = targetLeft;
  }

  return {
    x: targetCoords.x + target.offset.horizontal,
    y: targetCoords.y + target.offset.vertical,
    attachment: target.attachment,
    offset: target.offset,
    rect: target.rect,
  };
};

/**
 * This function returns screen coordinates, attchment values and offset values of the target if mirrored.
 *
 * @ param {Object} target - The target x/y coords, rectangle, offset, and attachment.
 * @ param {Object} contentAttachment - The vertical and horizonal hookshot attachments of the content.
 */
const mirrorTargetPosition = (target, contentAttachment) => {
  const mirroredTarget = {
    rect: target.rect,
    attachment: target.attachment,
    offset: mirrorOffset(target.offset, target.attachment),
  };

  if (contentAttachment.vertical === target.attachment.vertical || (contentAttachment.vertical !== 'middle' && target.attachment.vertical !== 'middle')) {
    mirroredTarget.attachment = mirrorAttachment(target.attachment);
  }

  return getTargetPosition(mirroredTarget);
};

/**
 * This function returns the relative positional data of the content and target. Positional data includes
 * the screen coordinates, attchment values and offset values.
 *
 * @ param {Object} content - The content x/y coords, rectangle, offset, and attachment.
 * @ param {Object} target - The target x/y coords, rectangle, offset, and attachment.
 * @ param {number} margin - The px value of the attachmentMargin.
 */
const getRelativePositions = (content, target, margin) => {
  const contentCoords = {};
  const contentHeight = content.rect.height;
  const contentWidth = content.rect.width;

  if (content.attachment.vertical === 'middle') {
    if (content.attachment.horizontal === 'center') {
      contentCoords.x = target.x - (contentWidth / 2);
    } else if (content.attachment.horizontal === 'right') {
      contentCoords.x = target.x - contentWidth - margin;
    } else {
      contentCoords.x = target.x + margin;
    }

    contentCoords.y = target.y - (contentHeight / 2);
  } else {
    if (content.attachment.horizontal === 'center') {
      contentCoords.x = target.x - (contentWidth / 2);
    } else if (content.attachment.horizontal === 'right') {
      contentCoords.x = target.x - contentWidth;
    } else {
      contentCoords.x = target.x;
    }

    if (content.attachment.vertical === 'bottom') {
      contentCoords.y = target.y - contentHeight - margin;
    } else {
      contentCoords.y = target.y + margin;
    }
  }

  return {
    content: {
      x: contentCoords.x + content.offset.horizontal,
      y: contentCoords.y + content.offset.vertical,
      attachment: content.attachment,
      offset: content.offset,
      rect: content.rect,
    },
    target,
  };
};

/**
 * This function attempts to flip the positions given the attachmnt behavior and returns the corresponding positional data.
 * Positional data includes the screen coordinates, attachment values and offset values.
 *
 * @ param {Object} positions - The relative positional data of the content and target to evaluate.
 * @ param {number} margin - The px value of the attachmentMargin.
 */
const getMirroredPositions = (positions, margin) => {
  const newContent = {
    offset: mirrorOffset(positions.content.offset, positions.content.attachment),
    attachment: mirrorAttachment(positions.content.attachment),
    rect: positions.content.rect,
  };

  return getRelativePositions(newContent, mirrorTargetPosition(positions.target, positions.content.attachment), margin);
};

/**
 * This function attempts to rotate the positions given the attachmnt behavior and returns the corresponding positional data.
 * Positional data includes the screen coordinates, attachment values and offset values.
 *
 * @ param {Object} positions - The relative positional data of the content and target to evaluate.
 * @ param {number} margin - The px value of the attachmentMargin.
 * @ param {string} rotation - The rotational angle to attach.
 */
const getRotatedPositions = (positions, margin, rotation) => {
  const newContent = {
    offset: { vertical: 0, horizontal: 0 },
    attachment: rotateContentAttachment(positions.content.attachment, rotation),
    rect: positions.content.rect,
  };
  const newTarget = {
    offset: { vertical: 0, horizontal: 0 },
    attachment: mirrorAttachment(newContent.attachment),
    rect: positions.target.rect,
  };

  return getRelativePositions(newContent, getTargetPosition(newTarget), margin);
};

/**
 * This function attempts to rotate the content element given the attachmnt behavior and returns the corresponding positional data.
 * Positional data includes the screen coordinates, attchment values and offset values.
 *
 * @ param {Object} positions - The relative positional data of the content and target to evaluate.
 * @ param {Object} boundingRect - The bounding rectangle.
 * @ param {number} margin - The px value of the attachmentMargin.
 * @ param {string} behavior - The attachemnt behavior which indicates the available content rotations.
 */
const getAlternatePositions = (positions, boundingRect, margin, behavior) => {
  if (behavior !== 'none') {
    // Attempt to flip content 180 degrees
    let newPositions = getMirroredPositions(positions, margin);
    if (isValidPositions(newPositions, boundingRect)) {
      return newPositions; // 180 degree rotation is valid
    }

    if (behavior === 'auto') {
      // Attempt to flip content 90 degrees
      newPositions = getRotatedPositions(positions, margin, '90');
      if (isValidPositions(newPositions, boundingRect)) {
        return newPositions; // 90 degree rotation is valid
      }

      // Attempt to flip content -90 degrees
      newPositions = getRotatedPositions(positions, margin, '-90');
      if (isValidPositions(newPositions, boundingRect)) {
        return newPositions; // -90 degree rotation is valid
      }
    }
  }

  // No alternate positions found, return original value
  return positions;
};

/**
 * This function adjusts the contents positional data to ensure it fits for bounding rectangle. Returns weather or
 * not the content was bounded and the positional data of the content and target to evaluate. Positional data includes
 * the screen coordinates, attchment values and offset values.
 *
 * @ param {Object} positions - The positional data of the content and target to evaluate.
 * @ param {Object} boundingRect - The bounding rectangle.
 */
const getBoundedPositions = (positions, boundingRect) => {
  const contentCoords = {};
  const contentRect = positions.content.rect;
  const contentX = positions.content.x;
  const contentY = positions.content.y;

  // Checks Horizontal Bounds
  if (boundingRect.left >= contentX) {
    contentCoords.x = boundingRect.left;
  } else if (boundingRect.right <= contentX + contentRect.width) {
    contentCoords.x = boundingRect.right - contentRect.width;
  } else {
    contentCoords.x = contentX;
  }

  // Checks Vertical Bounds
  if (boundingRect.top >= contentY) {
    contentCoords.y = boundingRect.top;
  } else if (boundingRect.bottom <= contentY + contentRect.height) {
    contentCoords.y = boundingRect.bottom - contentRect.height;
  } else {
    contentCoords.y = contentY;
  }

  return {
    content: {
      x: contentCoords.x,
      y: contentCoords.y,
      attachment: positions.content.cAttachment,
      offset: positions.content.cOffset,
      rect: contentRect,
    },
    target: positions.target,
  };
};

/**
 * The function returns the style and positional data the hookshot content and target. Positional data includes
 * the screen coordinates, attchment values and offset values.
 *
 * @ param {Object} boundingRect - The bounding rectangle.
 * @ param {Object} content - The content x/y coords, rectangle, offset, and attachment.
 * @ param {Object} target - The target x/y coords, rectangle, offset, and attachment.
 * @ param {number} margin - The px value of the attachmentMargin.
 * @ param {string} behavior - The attachemnt behavior which indicates the available content rotations.
 */
const positionStyleFromBounds = (boundingRect, content, target, margin, behavior) => {
  const targetPosition = getTargetPosition(target);

  // Get relative content and target positions
  let positions = getRelativePositions(content, targetPosition, margin);

  if (!isValidPositions(positions, boundingRect)) {
    // Try to find valid alternative positions
    positions = getAlternatePositions(positions, boundingRect, margin, behavior);
  }

  // Get bounded content and target positions
  positions = getBoundedPositions(positions, boundingRect);

  return {
    style: {
      position: 'absolute',
      left: `${Math.round(positions.content.x + pageXOffset)}px`,
      top: `${Math.round(positions.content.y + pageYOffset)}px`,
    },
    positions,
  };
};

export default {
  getScrollParents,
  getBounds,
  getBoundingRect,
  mirrorAttachment,
  getDirectionalAttachment,
  getDirectionalOffset,
  positionStyleFromBounds,
};
