/**
 * Checks if attachement is 'top' or 'bottom'.
 *
 * @ param {Object} attachement - The vertical and horizonal hookshot attachments.
 */
const isVerticalAttachment = attachment => (attachment.vertical !== 'middle');

/**
 * Calculates the bottom position of the element.
 *
 * @ param {Object} bounds - The element's size and position relative to the viewport.
 */
const calculateBottomPosition = bounds => (bounds.top + bounds.height);

/**
 * Calculates the right position of the element.
 *
 * @ param {Object} bounds - The element's size and position relative to the viewport.
 */
const calculateRightPosition = bounds => (bounds.left + bounds.width);

/**
 * This method calculates the horizontal offset to be applied to the arrow, if the target is smaller than the arrow
 * and the attachment is 'top' or 'bottom'.
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
        if (cAttachment.horizontal === 'left') {
          offset.horizontal = -segment;
        } else if (cAttachment.horizontal === 'right') {
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

/**
 * Checks if the arrow offset fits within both the left and right bounds of the target.
 *
 * @ param {Object} targetBounds -  The target element's size and position relative to the viewport.
 * @ param {Object} contentBounds - The content element's size and position relative to the viewport.
 * @ param {number} arrowOffset - Half the base of the arrow.
 * @ param {number} cornerOffset - The rounded corner size of the content.
 */
const doesArrowFitHorizontal = (targetBounds, contentBounds, arrowOffset, cornerOffset) => {
  const fitsLeftBound = calculateRightPosition(contentBounds) - arrowOffset - cornerOffset >= targetBounds.left;
  const fitsRightBound = contentBounds.left + arrowOffset + cornerOffset <= calculateRightPosition(targetBounds);

  return fitsLeftBound && fitsRightBound;
};

/**
 * Checks if the arrow offset fits within both the top and bottom bounds of the target.
 *
 * @ param {Object} targetBounds -  The target element's size and position relative to the viewport.
 * @ param {Object} contentBounds - The content element's size and position relative to the viewport.
 * @ param {number} arrowOffset - Half the base of the arrow.
 * @ param {number} cornerOffset - The rounded corner size of the content.
 */
const doesArrowFitVertical = (targetBounds, contentBounds, arrowOffset, cornerOffset) => {
  const fitsTopBound = calculateBottomPosition(contentBounds) - arrowOffset - cornerOffset >= targetBounds.top;
  const fitsBottomBound = contentBounds.top + arrowOffset + cornerOffset <= calculateBottomPosition(targetBounds);

  return fitsTopBound && fitsBottomBound;
};

/**
*
*
* @ param {Object} targetBounds -  The target element's size and position relative to the viewport.
* @ param {Object} contentBounds - The content element's size and position relative to the viewport.
* @ param {number} arrowOffset - Half the base of the arrow.
* @ param {number} cornerOffset - The rounded corner size of the content.
* @ param {Object} attachement - The vertical and horizonal hookshot attachments of the content.
*/
const getSecondaryArrowPosition = (targetBounds, contentBounds, arrowOffset, cornerOffset, attachment) => {
  const overlaps = {};
  overlaps.right = calculateRightPosition(contentBounds) >= targetBounds.left && calculateRightPosition(contentBounds) <= calculateRightPosition(targetBounds) - arrowOffset;
  overlaps.bottom = calculateBottomPosition(contentBounds) >= targetBounds.top && calculateBottomPosition(contentBounds) <= calculateBottomPosition(targetBounds) - arrowOffset;
  overlaps.left = contentBounds.left >= targetBounds.left + arrowOffset && contentBounds.left <= calculateRightPosition(targetBounds);
  overlaps.top = contentBounds.top >= targetBounds.top + arrowOffset && contentBounds.top <= calculateBottomPosition(targetBounds);

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
 * This method calculates the arrow position based on the content and target's relative positions.
 *
 * @ param {Object} targetBounds -  The target element's size and position relative to the viewport.
 * @ param {Object} contentBounds - The content element's size and position relative to the viewport.
 * @ param {number} arrowOffset - Half the base of the arrow.
 * @ param {number} cornerOffset - The rounded corner size of the content.
 * @ param {Object} attachement - The vertical and horizonal hookshot attachments of the content.
 */
const arrowPositionFromBounds = (targetBounds, contentBounds, arrowOffset, cornerOffset, attachment) => {
  // If content is fully above the target, try to attach arrow on the bottom
  if (calculateBottomPosition(contentBounds) <= targetBounds.top) {
    if (doesArrowFitHorizontal(targetBounds, contentBounds, arrowOffset, cornerOffset)) {
      return 'bottom';
    }
  } else if (calculateRightPosition(contentBounds) <= targetBounds.left) {
    // If content is fully to the left of the target, try to attach arrow on the right
    if (doesArrowFitVertical(targetBounds, contentBounds, arrowOffset, cornerOffset)) {
      return 'right';
    }
  } else if (contentBounds.top >= calculateBottomPosition(targetBounds)) {
    // If content is fully below the target, try to attach arrow on the top
    if (doesArrowFitHorizontal(targetBounds, contentBounds, arrowOffset, cornerOffset)) {
      return 'top';
    }
  } else if (contentBounds.left >= calculateRightPosition(targetBounds)) {
    // If content is fully to the right of the target, try to attach arrow on the left
    if (doesArrowFitVertical(targetBounds, contentBounds, arrowOffset, cornerOffset)) {
      return 'left';
    }
  }

  // If arrow attachement did not fit, try the secondary position
  return getSecondaryArrowPosition(targetBounds, contentBounds, arrowOffset, cornerOffset, attachment);
};

/**
 * This method caculates the horizonal offset value to be applied to the left position of the popup arrow.
 *
 * @ param {Object} targetBounds -  The target element's size and position relative to the viewport.
 * @ param {Object} contentBounds - The content element's size and position relative to the viewport.
 * @ param {number} arrowOffset - Half the base of the arrow.
 * @ param {number} cornerOffset - The rounded corner size of the content.
 * @ param {Object} tAttachement - The vertical and horizonal hookshot attachments of the target.
 * @ param {Object} tOffset - The vertical and horizonal offsets of the target.
 */
const leftOffset = (targetBounds, contentBounds, arrowOffset, cornerOffset, tAttachment, tOffset) => {
  let offset = (targetBounds.left - contentBounds.left) + arrowOffset + tOffset.horizontal;
  if (tAttachment.horizontal === 'center') {
    offset += (targetBounds.width / 2);
  } else if (tAttachment.horizontal === 'right') {
    offset += targetBounds.width;
  }

  // Check that the offset places the arrow within the contents width
  if (offset < (2 * arrowOffset) + cornerOffset) {
    // Offset is too far left
    offset = (2 * arrowOffset) + cornerOffset;
  } else if (offset > contentBounds.width - cornerOffset) {
    // Offset is too far right
    offset = contentBounds.width - cornerOffset;
  }
  return `${offset}px`;
};

/**
 * This method caculates the vertial offset value to be applied to the top position of the popup arrow.
 *
 * @ param {Object} targetBounds -  The target element's size and position relative to the viewport.
 * @ param {Object} contentBounds - The content element's size and position relative to the viewport.
 * @ param {number} arrowOffset - Half the base of the arrow.
 * @ param {number} cornerOffset - The rounded corner size of the content.
 * @ param {Object} tAttachement - The vertical and horizonal hookshot attachments of the target.
 * @ param {Object} tOffset - The vertical and horizonal offsets of the target.
 */
const topOffset = (targetBounds, contentBounds, arrowOffset, cornerOffset, tAttachment, tOffset) => {
  let offset = (targetBounds.top - contentBounds.top) + arrowOffset + tOffset.vertical;
  if (tAttachment.vertical === 'middle') {
    offset += (targetBounds.height / 2);
  } else if (tAttachment.vertical === 'bottom') {
    offset += targetBounds.height;
  }

  // Check that the offset places the arrow within the contents height
  if (offset < (2 * arrowOffset) + cornerOffset) {
    // Offset is too far above
    offset = (2 * arrowOffset) + cornerOffset;
  } else if (offset > contentBounds.height - cornerOffset) {
    // Offset is too far below
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
