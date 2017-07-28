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

const parseStringPair = (value) => {
  const [vertical, horizontal] = value.split(' ');
  return { vertical, horizontal };
};

const isVerticalAttachment = attachment => (attachment.vertical !== 'middle');

const primaryArrowPosition = attachment => (isVerticalAttachment(attachment) ? attachment.vertical : attachment.horizontal);

const primaryMarginStyle = (attachment, margin) => {
  if (isVerticalAttachment(attachment)) {
    return attachment.vertical === 'top' ? { margin: `${margin}px 0 0 0` } : { margin: `0 0 ${margin}px 0` };
  }
  return attachment.horizontal === 'left' ? { margin: `0 0 0 ${margin}px` } : { margin: `0 ${margin}px 0 0` };
};

const switchAttachmentToRTL = (attachment) => {
  const parsedValue = parseStringPair(attachment);
  return `${parsedValue.vertical} ${MIRROR_LR[parsedValue.horizontal]}`;
};

const mirrorAttachment = (attachment) => {
  const parsedValue = parseStringPair(attachment);
  let horizontal = parsedValue.horizontal;
  let vertical = parsedValue.vertical;

  if (isVerticalAttachment(parsedValue)) {
    vertical = MIRROR_TB[parsedValue.vertical];
  } else {
    horizontal = MIRROR_LR[parsedValue.horizontal];
  }

  return `${vertical} ${horizontal}`;
};

/**
 * This method calculates a positional offset to be applied if the target is smaller than the arrow.
 */
const getContentOffset = (attachment, targetNode, arrowOffset, cornerOffset) => {
  const offset = { vertical: 0, horizontal: 0 };
  if (targetNode) {
    if (isVerticalAttachment(attachment) && targetNode.clientWidth <= (arrowOffset * 2) + cornerOffset) {
      if (attachment.horizontal === 'left') {
        offset.horizontal = (arrowOffset + cornerOffset) - (targetNode.clientWidth / 2);
      } else if (attachment.horizontal === 'right') {
        offset.horizontal = -((arrowOffset + cornerOffset) - (targetNode.clientWidth / 2));
      }
    }
  }
  return offset;
};

/**
 * This method calculates the arrow position based on the content and targets relative position.
 */
const arrowPositionFromBounds = (targetBounds, contentBounds, isVertical, arrowOffset, cornerOffset) => {
  if (isVertical) {
    if ((contentBounds.left + contentBounds.width) - arrowOffset - cornerOffset >= targetBounds.left && contentBounds.left + arrowOffset + cornerOffset <= targetBounds.left + targetBounds.width) {
      if (targetBounds.top < contentBounds.top) {
        return 'top';
      } else if (targetBounds.bottom < contentBounds.bottom) {
        return 'bottom';
      }
    }
  } else if ((contentBounds.top + contentBounds.height) - arrowOffset - cornerOffset >= targetBounds.top && contentBounds.top + arrowOffset + cornerOffset <= targetBounds.top + targetBounds.height) {
    if (targetBounds.left < contentBounds.left) {
      return 'left';
    } else if (targetBounds.right < contentBounds.right) {
      return 'right';
    }
  }
  return undefined;
};

/**
 * This method caculates the value to be applied to the left position of the popup arrow.
 */
const leftOffset = (targetBounds, contentBounds, arrowOffset, cornerOffset, contentOffset, attachment) => {
  let offset;
  if (contentOffset.horizontal !== 0 || attachment.horizontal === 'center') {
    offset = (targetBounds.left - contentBounds.left) + arrowOffset + (targetBounds.width / 2);
  } else if (attachment.horizontal === 'right') {
    offset = (targetBounds.left - contentBounds.left) + (targetBounds.width - cornerOffset);
  } else {
    offset = (targetBounds.left - contentBounds.left) + (2 * arrowOffset) + cornerOffset;
  }

  if (offset < 2 * arrowOffset) {
    offset = (2 * arrowOffset) + cornerOffset;
  } else if (offset > contentBounds.width) {
    offset = contentBounds.width - cornerOffset;
  }
  return `${offset}px`;
};

/**
 * This method caculates the value to be applied to the top position of the popup arrow.
 */
const topOffset = (targetBounds, contentBounds, arrowOffset, cornerOffset) => {
  let offset = (targetBounds.top - contentBounds.top) + arrowOffset + (targetBounds.height / 2);
  if (offset < (2 * arrowOffset) + cornerOffset) {
    offset = (2 * arrowOffset) + cornerOffset;
  } else if (offset > contentBounds.height - cornerOffset) {
    offset = contentBounds.height - cornerOffset;
  }
  return (`${offset}px`);
};

const PopupUtils = {
  parseStringPair,
  isVerticalAttachment,
  primaryArrowPosition,
  primaryMarginStyle,
  switchAttachmentToRTL,
  mirrorAttachment,
  getContentOffset,
  arrowPositionFromBounds,
  leftOffset,
  topOffset,
};

export default PopupUtils;
