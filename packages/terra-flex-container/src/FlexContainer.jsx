import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import styles from './FlexContainer.scss';

const cx = classNames.bind(styles);

const propTypes = {
  alignContent: PropTypes.oneOf([
    'center',
    'flex-end',
    'flex-start',
    'space-around',
    'space-between',
    'stretch',
  ]),
  alignItems: PropTypes.oneOf(['baseline', 'center', 'flex-end', 'flex-start', 'stretch']),
  alignSelf: PropTypes.oneOf(['baseline', 'center', 'flex-end', 'flex-start', 'stretch']),
  children: PropTypes.node,
  display: PropTypes.oneOf(['flex', 'inline-flex']),
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
  flex: PropTypes.string,
  flexBasis: PropTypes.string,
  flexDirection: PropTypes.oneOf(['column-reverse', 'column', 'row-reverse', 'row']),
  flexGrow: PropTypes.number,
  flexShrink: PropTypes.number,
  flexWrap: PropTypes.oneOf(['nowrap', 'wrap-reverse', 'wrap']),
  height: PropTypes.string,
  inline: PropTypes.bool,
  justifyContent: PropTypes.oneOf([
    'center',
    'flex-end',
    'flex-start',
    'space-around',
    'space-between',
  ]),
  margin: PropTypes.string,
  marginBottom: PropTypes.string,
  marginLeft: PropTypes.string,
  marginRight: PropTypes.string,
  marginTop: PropTypes.string,
  maxHeight: PropTypes.string,
  maxWidth: PropTypes.string,
  minHeight: PropTypes.string,
  minWidth: PropTypes.string,
  order: PropTypes.number,
  padding: PropTypes.string,
  paddingBottom: PropTypes.string,
  paddingLeft: PropTypes.string,
  paddingRight: PropTypes.string,
  paddingTop: PropTypes.string,
  width: PropTypes.string,
};

defaultProps = {
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
  margin,
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
  maxHeight,
  maxWidth,
  minHeight,
  minWidth,
  order,
  padding,
  paddingBottom,
  paddingLeft,
  paddingRight,
  paddingTop,
  width,
  ...props
}) => {
  const flexClassNames = cx([
    'flex-container',
    props.className,
  ]);
  props.className = flexClassNames;

  props['align-content'] = (props.alignContent) ? props.alignContent : '';
  props['align-self'] = (props.alignSelf) ? props.alignSelf : '';
  props['align-items'] = (props.alignItems) ? props.alignItems : '';
  props['display'] = (props.display) ? props.display : '';
  props['flex'] = (props.flex) ? props.flex : '';
  props['flex-basis'] = (props.flexBasis) ? props.flexBasis : '';
  props['flex-direction'] = (props.flexDirection) ? props.flexDirection : '';
  props['flex-grow'] = (props.flexGrow) ? props.flexGrow : '';
  props['flex-shrink'] = (props.flexShrink) ? props.flexShrink : '';
  props['flex-wrap'] = (props.flexWrap) ? props.flexWrap : '';
  props['height'] = (props.height) ? props.height : '';
  props['justify-content'] = (props.justifyContent) ? props.justifyContent : '';
  props['margin'] = (props.margin) ? props.margin : '';
  props['margin-bottom'] = (props.marginBottom) ? props.marginBottom : '';
  props['margin-left'] = (props.marginLeft) ? props.marginLeft : '';
  props['margin-right'] = (props.marginRight) ? props.marginRight : '';
  props['margin-top'] = (props.marginTop) ? props.marginTop : '';
  props['max-height'] = (props.maxHeight) ? props.maxHeight : '';
  props['min-height'] = (props.minHeight) ? props.minHeight : '';
  props['min-width'] = (props.minWidth) ? props.minWidth : '';
  props['order'] = (props.order) ? props.order : '';
  props['padding'] = (props.padding) ? props.padding : '';
  props['padding-bottom'] = (props.paddingBottom) ? props.paddingBottom : '';
  props['padding-left'] = (props.paddingLeft) ? props.paddingLeft : '';
  props['padding-right'] = (props.paddingRight) ? props.paddingRight : '';
  props['padding-top'] = (props.paddingTop) ? props.paddingTop : '';
  props['width'] = (props.width) ? props.width : '';

  return React.createElement(element, props, children);
});

FlexContainer.propTypes = propTypes;
FlexContainer.defaultProps = defaultProps;

export default FlexContainer;
