/**
 * Checks if attachement is 'top' or 'bottom'.
 *
 * @ param {Object} attachement - The vertical and horizonal hookshot attachments.
 */
const isVerticalAttachment = attachment => (attachment.vertical !== 'middle');

/**
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
/**
 * Checks if the arrow offset fits within both the left and right bounds of the target.
 *
 * @ param {Object} targetBounds -  The target element's size and position relative to the viewport.
 * @ param {Object} contentBounds - The content element's size and position relative to the viewport.
 * @ param {number} arrowOffset - Half the base of the arrow.
 * @ param {number} cornerOffset - The rounded corner size of the content.
 */

const doesArrowFitVertical = (targetBounds, contentBounds, arrowOffset, cornerOffset) => (contentBounds.top + contentBounds.height) - arrowOffset - cornerOffset >= targetBounds.top && contentBounds.top + arrowOffset + cornerOffset <= targetBounds.top + targetBounds.height;
/**
 * Checks if the arrow offset fits within both the top and bottom bounds of the target.
 *
 * @ param {Object} targetBounds -  The target element's size and position relative to the viewport.
 * @ param {Object} contentBounds - The content element's size and position relative to the viewport.
 * @ param {number} arrowOffset - Half the base of the arrow.
 * @ param {number} cornerOffset - The rounded corner size of the content.
 */

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
 * This method calculates the arrow position based on the content and target's relative positions.
 *
 * @ param {Object} targetBounds -  The target element's size and position relative to the viewport.
 * @ param {Object} contentBounds - The content element's size and position relative to the viewport.
 * @ param {number} arrowOffset - Half the base of the arrow.
 * @ param {number} cornerOffset - The rounded corner size of the content.
 * @ param {Object} attachement - The vertical and horizonal hookshot attachments of the content.
 */
const arrowPositionFromBounds = (targetBounds, contentBounds, arrowOffset, cornerOffset, attachment) => {
  if (contentBounds.top + contentBounds.height <= targetBounds.top) {
  // If content is fully above the target, try to attach arrow on the bottom
    if (doesArrowFitHorizontal(targetBounds, contentBounds, arrowOffset, cornerOffset)) {
      return 'bottom';
    }
  } else if (contentBounds.left + contentBounds.width <= targetBounds.left) {
    // If content is fully to the left of the target, try to attach arrow on the right
    if (doesArrowFitVertical(targetBounds, contentBounds, arrowOffset, cornerOffset)) {
      return 'right';
    }
  } else if (contentBounds.top >= targetBounds.top + targetBounds.height) {
    // If content is fully below the target, try to attach arrow on the top
    if (doesArrowFitHorizontal(targetBounds, contentBounds, arrowOffset, cornerOffset)) {
      return 'top';
    }
  } else if (contentBounds.left >= targetBounds.left + targetBounds.width) {
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
