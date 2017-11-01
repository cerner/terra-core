import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import 'terra-base/lib/baseStyles';

const alignContentTypes = ['center', 'flex-end', 'flex-start', 'space-around', 'space-between', 'stretch'];
const alignTypes = ['baseline', 'center', 'flex-end', 'flex-start', 'stretch'];
const elementTypes = ['article', 'aside', 'div', 'figure', 'footer', 'header', 'main', 'nav', 'section'];
const justifyContentTypes = ['center', 'flex-end', 'flex-start', 'space-around', 'space-between'];

const propTypes = {
  /**
   * Aligns the container's lines within when there is extra space in the cross-axis.
   */
  alignContent: PropTypes.oneOf(alignContentTypes),
  /**
   * Defines the default behavior for how flex items are laid out along the cross axis on the current line.
   */
  alignItems: PropTypes.oneOf(alignTypes),
  /**
   * Allows the default alignment to be overridden for individual flex items.
   */
  alignSelf: PropTypes.oneOf(alignTypes),
  /**
   * Child nodes to be displayed in the container.
   */
  children: PropTypes.node,
  /**
   * Enables flex context for all its direct children either inline or block.
   */
  display: PropTypes.oneOf(['flex', 'inline-flex']),
  /**
   * Indicates what type of element the flex container can be.
   */
  element: PropTypes.oneOf(elementTypes),
  /**
   * Shorthand for flex-grow, flex-shrink and flex-basis combined.
   */
  flex: PropTypes.string,
  /**
   * Defines the default size of an element before the remaining space is distributed.
   */
  flexBasis: PropTypes.string,
  /**
   * Defines the direction flex items are placed in the container.
   */
  flexDirection: PropTypes.oneOf(['column', 'column-reverse', 'row', 'row-reverse']),
  /**
   * This is a shorthand flex-direction and flex-wrap properties, which together define the flex container's main and cross axes.
   */
  flexFlow: PropTypes.string,
  /**
   * Defines the ability for a flex item to grow if necessary.
   */
  flexGrow: PropTypes.number,
  /**
   * Defines the ability for a flex item to shrink if necessary.
   */
  flexShrink: PropTypes.number,
  /**
   * Allow the items to wrap as needed.
   */
  flexWrap: PropTypes.oneOf(['nowrap', 'wrap-reverse', 'wrap']),
  /**
   * Defines the height of the container.
   */
  height: PropTypes.string,
  /**
   * Defines the alignment along the main axis.
   */
  justifyContent: PropTypes.oneOf(justifyContentTypes),
  /**
   * Defines the maximum height for the container.
   */
  maxHeight: PropTypes.string,
  /**
   * Defines the maximum width for the container.
   */
  maxWidth: PropTypes.string,
  /**
   * Defines the minimum height for the container.
   */
  minHeight: PropTypes.string,
  /**
   * Defines the minimum width for the container.
   */
  minWidth: PropTypes.string,
  /**
   * Controls the order in which items appear in the container.
   */
  order: PropTypes.number,
  /**
   * Defines the width for the container.
   */
  width: PropTypes.string,
};

const defaultProps = {
  display: 'flex',
  element: 'div',
};

const FlexBox = ({
  alignContent,
  alignItems,
  alignSelf,
  children,
  display,
  element,
  flex,
  flexBasis,
  flexDirection,
  flexFlow,
  flexGrow,
  flexShrink,
  flexWrap,
  height,
  justifyContent,
  maxHeight,
  maxWidth,
  minHeight,
  minWidth,
  order,
  width,
  ...props
}) => {
  const customProps = props;
  if (!customProps.style) { customProps.style = {}; }
  if (alignContent) { customProps.style.alignContent = alignContent; }
  if (alignItems) { customProps.style.alignItems = alignItems; }
  if (alignSelf) { customProps.style.alignSelf = alignSelf; }
  if (display) { customProps.style.display = display; }
  if (flex) { customProps.style.flex = flex; }
  if (flexBasis) { customProps.style.flexBasis = flexBasis; }
  if (flexDirection) { customProps.style.flexDirection = flexDirection; }
  if (flexFlow) { customProps.style.flexFlow = flexFlow; }
  if (flexGrow !== undefined) { customProps.style.flexGrow = flexGrow; }
  if (flexShrink !== undefined) { customProps.style.flexShrink = flexShrink; }
  if (flexWrap) { customProps.style.flexWrap = flexWrap; }
  if (height) { customProps.style.height = height; }
  if (justifyContent) { customProps.style.justifyContent = justifyContent; }
  if (maxHeight) { customProps.style.maxHeight = maxHeight; }
  if (maxWidth) { customProps.style.maxWidth = maxWidth; }
  if (minHeight) { customProps.style.minHeight = minHeight; }
  if (minWidth) { customProps.style.minWidth = minWidth; }
  if (order !== undefined) { customProps.style.order = order; }
  if (width) { customProps.style.width = width; }

  return React.createElement(element, { ...customProps, className: classNames('terra-flex-box', customProps.className) }, children);
};

FlexBox.propTypes = propTypes;
FlexBox.defaultProps = defaultProps;

export default FlexBox;
