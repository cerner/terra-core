const isVerticalAttachment = attachment => (attachment.vertical !== 'middle');

/**
 * This method calculates a positional offset to be applied if the target is smaller than the arrow.
 */
const getContentOffset = (cAttachment, tAttachment, targetNode, arrowOffset, cornerOffset) => {
  const offset = { vertical: 0, horizontal: 0 };

  if (targetNode) {
    const segment = arrowOffset + cornerOffset;
    if (isVerticalAttachment(cAttachment)) {
      if (cAttachment.horizontal !== tAttachment.horizontal) {
        if (cAttachment.horizontal === 'left') {
          offset.horizontal = -segment;
        } if (cAttachment.horizontal === 'right') {
          offset.horizontal = segment;
        }
      } else if (targetNode.clientWidth < segment) {
        if (cAttachment.horizontal === 'left') {
          offset.horizontal = segment;
        } else if (cAttachment.horizontal === 'right') {
          offset.horizontal = -segment;
        }
      }
    }
  }
  return `${offset.vertical} ${offset.horizontal}`;
};

const doesArrowFitHorizontal = (targetBounds, contentBounds, arrowOffset, cornerOffset) => (contentBounds.left + contentBounds.width) - arrowOffset - cornerOffset >= targetBounds.left && contentBounds.left + arrowOffset + cornerOffset <= targetBounds.left + targetBounds.width;

const doesArrowFitVertical = (targetBounds, contentBounds, arrowOffset, cornerOffset) => (contentBounds.top + contentBounds.height) - arrowOffset - cornerOffset >= targetBounds.top && contentBounds.top + arrowOffset + cornerOffset <= targetBounds.top + targetBounds.height;

const getSecondaryArrowPosition = (targetBounds, contentBounds, arrowOffset, cornerOffset, attachment) => {
  const overlaps = {};
  overlaps.right = contentBounds.left + contentBounds.width >= targetBounds.left && contentBounds.left + contentBounds.width <= (targetBounds.left + targetBounds.width) - arrowOffset;
  overlaps.bottom = contentBounds.top + contentBounds.height >= targetBounds.top && contentBounds.top + contentBounds.height <= (targetBounds.top + targetBounds.height) - arrowOffset;
  overlaps.left = contentBounds.left >= targetBounds.left + arrowOffset && contentBounds.left <= targetBounds.left + targetBounds.width;
  overlaps.top = contentBounds.top >= targetBounds.top + arrowOffset && contentBounds.top <= targetBounds.top + targetBounds.height;

  const positions = [];
  if (overlaps.right || overlaps.left) {
    if (doesArrowFitVertical(targetBounds, contentBounds, arrowOffset, cornerOffset)) {
      if (overlaps.left) { positions.push('left'); }
      if (overlaps.right) { positions.push('right'); }
    }
  }

  if (overlaps.bottom || overlaps.top) {
    if (doesArrowFitHorizontal(targetBounds, contentBounds, arrowOffset, cornerOffset)) {
      if (overlaps.top) { positions.push('top'); }
      if (overlaps.bottom) { positions.push('bottom'); }
    }
  }

  if (positions.length > 1) {
    if (attachment.vertical === 'middle' && positions.indexOf(attachment.horizontal) >= 0) {
      return attachment.horizontal;
    } else if (positions.indexOf(attachment.vertical) >= 0) {
      return attachment.vertical;
    }
  }
  return positions[0];
};

/**
 * This method calculates the arrow position based on the content and targets relative position.
 */
const arrowPositionFromBounds = (targetBounds, contentBounds, arrowOffset, cornerOffset, attachment) => {
  if (contentBounds.top + contentBounds.height <= targetBounds.top) {
    // fully above
    if (doesArrowFitHorizontal(targetBounds, contentBounds, arrowOffset, cornerOffset)) {
      return 'bottom';
    }
  } else if (contentBounds.left + contentBounds.width <= targetBounds.left) {
    // fully left
    if (doesArrowFitVertical(targetBounds, contentBounds, arrowOffset, cornerOffset)) {
      return 'right';
    }
  } else if (contentBounds.top >= targetBounds.top + targetBounds.height) {
    // fully below
    if (doesArrowFitHorizontal(targetBounds, contentBounds, arrowOffset, cornerOffset)) {
      return 'top';
    }
  } else if (contentBounds.left >= targetBounds.left + targetBounds.width) {
    // fully right
    if (doesArrowFitVertical(targetBounds, contentBounds, arrowOffset, cornerOffset)) {
      return 'left';
    }
  }
  return getSecondaryArrowPosition(targetBounds, contentBounds, arrowOffset, cornerOffset, attachment);
};

/**
 * This method caculates the value to be applied to the left position of the popup arrow.
 */
const leftOffset = (targetBounds, contentBounds, arrowOffset, cornerOffset, tAttachment, tOffset) => {
  let offset = (targetBounds.left - contentBounds.left) + arrowOffset + tOffset.horizontal;
  if (tAttachment.horizontal === 'center') {
    offset += (targetBounds.width / 2);
  } else if (tAttachment.horizontal === 'right') {
    offset += targetBounds.width;
  }

  if (offset < (2 * arrowOffset) + cornerOffset) {
    offset = (2 * arrowOffset) + cornerOffset;
  } else if (offset > contentBounds.width - cornerOffset) {
    offset = contentBounds.width - cornerOffset;
  }
  return `${offset}px`;
};

/**
 * This method caculates the value to be applied to the top position of the popup arrow.
 */
const topOffset = (targetBounds, contentBounds, arrowOffset, cornerOffset, tAttachment, tOffset) => {
  let offset = (targetBounds.top - contentBounds.top) + arrowOffset + tOffset.vertical;
  if (tAttachment.vertical === 'middle') {
    offset += (targetBounds.height / 2);
  } else if (tAttachment.vertical === 'bottom') {
    offset += targetBounds.height;
  }

  if (offset < (2 * arrowOffset) + cornerOffset) {
    offset = (2 * arrowOffset) + cornerOffset;
  } else if (offset > contentBounds.height - cornerOffset) {
    offset = contentBounds.height - cornerOffset;
  }
  return (`${offset}px`);
};

const PopupUtils = {
  isVerticalAttachment,
  getContentOffset,
  arrowPositionFromBounds,
  leftOffset,
  topOffset,
};

export default PopupUtils;
