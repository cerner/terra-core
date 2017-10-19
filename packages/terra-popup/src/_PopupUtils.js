/**
 * Map of horizontalvalues from terra-popup API to terra-hooshot
 */
const HORIZONTAL_HOOKSHOT_MAP = {
  center: 'center',
  left: 'start',
  right: 'end',
};

const MIRROR_LR = {
  center: 'center',
  start: 'end',
  end: 'start',
};

const MIRROR_TB = {
  middle: 'middle',
  top: 'bottom',
  bottom: 'top',
};

/**
 * Checks if attachement is 'top' or 'bottom'.
 *
 * @ param {Object} attachement - The vertical and horizonal hookshot attachments.
 */
const isVerticalAttachment = attachment => (attachment.vertical !== 'middle');

/**
 * Calculates the bottom position of the element.
 *
 * @ param {Object} rect - The element's size and position relative to the viewport.
 */
const calculateBottomPosition = rect => (rect.top + rect.height);

/**
 * Calculates the right position of the element.
 *
 * @ param {Object} rect - The element's size and position relative to the viewport.
 */
const calculateRightPosition = rect => (rect.left + rect.width);

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
  return { vertical, horizontal: HORIZONTAL_HOOKSHOT_MAP[horizontal] };
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
 * This method calculates the horizontal offset to be applied to the content. Considers if the target's
 * horizontal attachment is different than the contents attachment or the target's width is smaller than
 * the arrow's position.
 *
 * @ param {Object} cAttachment - The vertical and horizonal hookshot attachments of the content.
 * @ param {Object} tAttachment - The vertical and horizonal hookshot attachments of the target.
 * @ param {func} targetNode - The target element for the popup to anchor to.
 * @ param {number} arrowOffset - Half the base of the arrow.
 * @ param {number} cornerOffset - The rounded corner size of the content.
 */
const getContentOffset = (cAttachment, tAttachment, targetNode, arrowOffset, cornerOffset) => {
  const offset = { vertical: 0, horizontal: 0 };

  if (targetNode) {
    const segment = arrowOffset + cornerOffset;
    if (isVerticalAttachment(cAttachment)) {
      if (cAttachment.horizontal !== tAttachment.horizontal) {
        // If the target and content attachement are different, apply the offset
        if (cAttachment.horizontal === 'start') {
          offset.horizontal = -segment;
        } else if (cAttachment.horizontal === 'end') {
          offset.horizontal = segment;
        }
      } else if (targetNode.clientWidth < segment) {
        // If the target size is smaller than the arrow position
        if (cAttachment.horizontal === 'start') {
          offset.horizontal = -segment;
        } else if (cAttachment.horizontal === 'end') {
          offset.horizontal = segment;
        }
      }
    }
  }
  return offset;
};

/**
 * Checks if the arrow offset fits within both the left and right bounds of the target.
 *
 * @ param {Object} contentRect - The content element's size and position relative to the viewport.
 * @ param {Object} targetRect -  The target element's size and position relative to the viewport.
 * @ param {number} arrowOffset - Half the base of the arrow.
 * @ param {number} cornerOffset - The rounded corner size of the content.
 */
const doesArrowFitHorizontal = (contentRect, targetRect, arrowOffset, cornerOffset) => {
  const fitsLeftBound = calculateRightPosition(contentRect) - arrowOffset - cornerOffset >= targetRect.left;
  const fitsRightBound = contentRect.left + arrowOffset + cornerOffset <= calculateRightPosition(targetRect);

  return fitsLeftBound && fitsRightBound;
};

/**
 * Checks if the arrow offset fits within both the top and bottom bounds of the target.
 *
 * @ param {Object} contentRect - The content element's size and position relative to the viewport.
 * @ param {Object} targetRect -  The target element's size and position relative to the viewport.
 * @ param {number} arrowOffset - Half the base of the arrow.
 * @ param {number} cornerOffset - The rounded corner size of the content.
 */
const doesArrowFitVertical = (contentRect, targetRect, arrowOffset, cornerOffset) => {
  const fitsTopBound = calculateBottomPosition(contentRect) - arrowOffset - cornerOffset >= targetRect.top;
  const fitsBottomBound = contentRect.top + arrowOffset + cornerOffset <= calculateBottomPosition(targetRect);

  return fitsTopBound && fitsBottomBound;
};

/**
 * Manually calculates the arrow position as a fallback when primary positioning fails.
 *
 * @ param {Object} contentPosition - The content x/y coords, rectangle, offset, and attachment.
 * @ param {Object} targetPosition - The target x/y coords, rectangle, offset, and attachment.
 * @ param {number} arrowOffset - Half the base of the arrow.
 * @ param {number} cornerOffset - The rounded corner size of the content.
 */
const getSecondaryArrowPosition = (contentPosition, targetPosition, arrowOffset, cornerOffset) => {
  const contentRect = contentPosition.rect;
  const targetRect = targetPosition.rect;
  const contentAttachment = contentPosition.attachment;

  const overlaps = {};
  overlaps.right = calculateRightPosition(contentRect) >= targetRect.left && calculateRightPosition(contentRect) <= calculateRightPosition(targetRect) - arrowOffset;
  overlaps.bottom = calculateBottomPosition(contentRect) >= targetRect.top && calculateBottomPosition(contentRect) <= calculateBottomPosition(targetRect) - arrowOffset;
  overlaps.left = contentRect.left >= targetRect.left + arrowOffset && contentRect.left <= calculateRightPosition(targetRect);
  overlaps.top = contentRect.top >= targetRect.top + arrowOffset && contentRect.top <= calculateBottomPosition(targetRect);

  const positions = [];
  if (overlaps.right || overlaps.left) {
    if (doesArrowFitVertical(contentRect, targetRect, arrowOffset, cornerOffset)) {
      if (overlaps.left) { positions.push('left'); }
      if (overlaps.right) { positions.push('right'); }
    }
  }

  if (overlaps.bottom || overlaps.top) {
    if (doesArrowFitHorizontal(contentRect, targetRect, arrowOffset, cornerOffset)) {
      if (overlaps.top) { positions.push('top'); }
      if (overlaps.bottom) { positions.push('bottom'); }
    }
  }

  if (positions.length > 1) {
    if (contentAttachment.vertical === 'middle' && positions.indexOf(contentAttachment.horizontal) >= 0) {
      return contentAttachment.horizontal;
    } else if (positions.indexOf(contentAttachment.vertical) >= 0) {
      return contentAttachment.vertical;
    }
  }
  return positions[0];
};

/**
 * This method calculates the arrow position based on the content and target's relative positions.
 *
 * @ param {Object} contentPosition - The content x/y coords, rectangle, offset, and attachment.
 * @ param {Object} targetPosition - The target x/y coords, rectangle, offset, and attachment.
 * @ param {number} arrowOffset - Half the base of the arrow.
 * @ param {number} cornerOffset - The rounded corner size of the content.
 */
const getArrowPosition = (contentPosition, targetPosition, arrowOffset, cornerOffset) => {
  const contentRect = contentPosition.rect;
  const targetRect = targetPosition.rect;

  // If content is fully above the target, try to attach arrow on the bottom
  if (calculateBottomPosition(contentRect) <= targetRect.top) {
    if (doesArrowFitHorizontal(contentRect, targetRect, arrowOffset, cornerOffset)) {
      return 'bottom';
    }
  } else if (calculateRightPosition(contentRect) <= targetRect.left) {
    // If content is fully to the left of the target, try to attach arrow on the right
    if (doesArrowFitVertical(contentRect, targetRect, arrowOffset, cornerOffset)) {
      return 'right';
    }
  } else if (contentRect.top >= calculateBottomPosition(targetRect)) {
    // If content is fully below the target, try to attach arrow on the top
    if (doesArrowFitHorizontal(contentRect, targetRect, arrowOffset, cornerOffset)) {
      return 'top';
    }
  } else if (contentRect.left >= calculateRightPosition(targetRect)) {
    // If content is fully to the right of the target, try to attach arrow on the left
    if (doesArrowFitVertical(contentRect, targetRect, arrowOffset, cornerOffset)) {
      return 'left';
    }
  }

  // If arrow attachement did not fit, try the secondary position
  return getSecondaryArrowPosition(contentPosition, targetPosition, arrowOffset, cornerOffset);
};

/**
 * This method caculates the horizonal offset value to be applied to the left position of the popup arrow.
 *
 * @ param {Object} contentPosition - The content x/y coords, rectangle, offset, and attachment.
 * @ param {Object} targetPosition - The target x/y coords, rectangle, offset, and attachment.
 * @ param {number} arrowOffset - Half the base of the arrow.
 * @ param {number} cornerOffset - The rounded corner size of the content.
 */
const leftOffset = (contentPosition, targetPosition, arrowOffset, cornerOffset) => {
  const contentRect = contentPosition.rect;
  const targetRect = targetPosition.rect;
  const targetAttachmet = targetPosition.attachment;

  let offset = (targetRect.left - contentRect.left) + arrowOffset + targetPosition.offset.horizontal;
  if (targetAttachmet.horizontal === 'center') {
    offset += (targetRect.width / 2);
  } else if (targetAttachmet.horizontal === 'right') {
    offset += targetRect.width;
  }

  // Check that the offset places the arrow within the contents width
  if (offset < (2 * arrowOffset) + cornerOffset) {
    // Offset is too far left
    offset = (2 * arrowOffset) + cornerOffset;
  } else if (offset > contentRect.width - cornerOffset) {
    // Offset is too far right
    offset = contentRect.width - cornerOffset;
  }
  return `${offset}px`;
};

/**
 * This method caculates the vertial offset value to be applied to the top position of the popup arrow.
 *
 * @ param {Object} contentPosition - The content x/y coords, rectangle, offset, and attachment.
 * @ param {Object} targetPosition - The target x/y coords, rectangle, offset, and attachment.
 * @ param {number} arrowOffset - Half the base of the arrow.
 * @ param {number} cornerOffset - The rounded corner size of the content.
 */
const topOffset = (contentPosition, targetPosition, arrowOffset, cornerOffset) => {
  const contentRect = contentPosition.rect;
  const targetRect = targetPosition.rect;
  const targetAttachmet = targetPosition.attachment;

  let offset = (targetRect.top - contentRect.top) + arrowOffset + targetPosition.offset.vertical;
  if (targetAttachmet.vertical === 'middle') {
    offset += (targetRect.height / 2);
  } else if (targetAttachmet.vertical === 'bottom') {
    offset += targetRect.height;
  }

  // Check that the offset places the arrow within the contents height
  if (offset < (2 * arrowOffset) + cornerOffset) {
    // Offset is too far above
    offset = (2 * arrowOffset) + cornerOffset;
  } else if (offset > contentRect.height - cornerOffset) {
    // Offset is too far below
    offset = contentRect.height - cornerOffset;
  }
  return (`${offset}px`);
};

const PopupUtils = {
  isVerticalAttachment,
  getContentOffset,
  getArrowPosition,
  leftOffset,
  mirrorAttachment,
  parseAttachment,
  topOffset,
};

export default PopupUtils;
