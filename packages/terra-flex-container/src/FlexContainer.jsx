import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import styles from './FlexContainer.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Aligns the container's lines within when there is extra space in the cross-axis.
   */
  alignContent: PropTypes.oneOf([
    'center',
    'flex-end',
    'flex-start',
    'space-around',
    'space-between',
    'stretch',
  ]),
  /**
   * Defines the default behavior for how flex items are laid out along the cross axis on the current line.
   */
  alignItems: PropTypes.oneOf([
    'baseline',
    'center',
    'flex-end',
    'flex-start',
    'stretch'
  ]),
  /**
   * Allows the default alignment to be overridden for individual flex items.
   */
  alignSelf: PropTypes.oneOf([
    'baseline',
    'center',
    'flex-end',
    'flex-start',
    'stretch'
  ]),
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
  element: PropTypes.oneOf([
    'article',
    'aside',
    'div',
    'figure',
    'footer',
    'header',
    'main',
    'nav',
    'section',
  ]),
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
  justifyContent: PropTypes.oneOf([
    'center',
    'flex-end',
    'flex-start',
    'space-around',
    'space-between',
  ]),
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

const FlexContainer = styled(({
  alignContent,
  alignItems,
  alignSelf,
  children,
  display,
  element,
  flex,
  flexBasis,
  flexDirection,
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
  ...customProps
}) => React.createElement(element, { ...customProps, className: cx('flex-container', customProps.className) }, children))`
  ${customProps => (customProps.alignContent ? `align-content: ${customProps.alignContent};` : '')}
  ${customProps => (customProps.alignSelf ? `align-self: ${customProps.alignSelf};` : '')}
  ${customProps => (customProps.alignItems ? `align-items: ${customProps.alignItems};` : '')}
  ${customProps => (customProps.display ? `display: ${customProps.display};` : '')}
  ${customProps => (customProps.flex ? `flex: ${customProps.flex};` : '')}
  ${customProps => (customProps.flexBasis ? `flex-basis: ${customProps.flexBasis};` : '')}
  ${customProps => (customProps.flexDirection ? `flex-direction: ${customProps.flexDirection};` : '')}
  ${customProps => (customProps.flexGrow ? `flex-grow: ${customProps.flexGrow};` : '')}
  ${customProps => (customProps.flexShrink ? `flex-shrink: ${customProps.flexShrink};` : '')}
  ${customProps => (customProps.flexWrap ? `flex-wrap: ${customProps.flexWrap};` : '')}
  ${customProps => (customProps.height ? `height: ${customProps.height};` : '')}
  ${customProps => (customProps.justifyContent ? `justify-content: ${customProps.justifyContent};` : '')}
  ${customProps => (customProps.maxHeight ? `max-height: ${customProps.maxHeight};` : '')}
  ${customProps => (customProps.maxWidth ? `max-width: ${customProps.maxWidth};` : '')}
  ${customProps => (customProps.minHeight ? `min-height: ${customProps.minHeight};` : '')}
  ${customProps => (customProps.minWidth ? `min-width: ${customProps.minWidth};` : '')}
  ${customProps => (customProps.order ? `order: ${customProps.order};` : '')}
  ${customProps => (customProps.width ? `width: ${customProps.width};` : '')}
`;

FlexContainer.propTypes = propTypes;
FlexContainer.defaultProps = defaultProps;

export default FlexContainer;
