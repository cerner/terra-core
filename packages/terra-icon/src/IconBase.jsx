import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';

// eslint-disable-next-line import/no-unresolved, import/no-webpack-loader-syntax
import styles from './Icon.module.scss';

const cx = classNamesBind.bind(styles);

const propTypes = {
  /**
  * String that labels the current element. 
  */
  a11yLabel: PropTypes.string.isRequired,
  /**
   * Should the svg mirror when dir="rtl".
   */
  isBidi: PropTypes.bool,
  /**
   * Should the SVG rotate.
   */
  isSpin: PropTypes.bool,
  /**
   * Child nodes.
   */
  children: PropTypes.node,
  /**
   * Height of SVG.
   */
  height: PropTypes.string,
  /**
   * Width of SVG.
   */
  width: PropTypes.string,
  /**
   * Focusable attribute. IE 10/11 are focusable without this attribute.
   */
  focusable: PropTypes.string,
};

const defaultProps = {
  isBidi: false,
  isSpin: false,
  children: null,
  height: '1em',
  width: '1em',
  focusable: 'false',
};

// Returns a SVG representing the icon. Is utilized as: <Iconbase  {..props} ><svg children></IconBase>
// Note: while an img is the ideal recommended approach by accessibility guidelines, 
// IconBase returns a svg so that non-static icons can be themable by using the CSS color property. 

const IconBase = ({
  a11yLabel,
  isBidi,
  isSpin,
  children,
  height,
  width,
  focusable,
  ...customProps
}) => {
  const attributes = { ...customProps };

  // append to existing classNames
  const classes = classNames(
    cx(
      'tui-Icon',
      'icon',
      { 'is-bidi': isBidi },
      { 'is-spin': isSpin },
    ),
    attributes.className,
  );

  attributes.height = height;
  attributes.width = width;
  attributes.focusable = focusable;
  
  const svgA11yLabel = React.createElement('title', {}, a11yLabel);
  const svgChildren = new Array(svgA11yLabel).concat(children);

  return <svg {...attributes} className={classes}>{svgChildren}</svg>;
};

IconBase.propTypes = propTypes;
IconBase.defaultProps = defaultProps;

export default IconBase;
