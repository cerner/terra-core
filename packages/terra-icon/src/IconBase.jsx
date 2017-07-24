import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';

// eslint-disable-next-line import/no-unresolved, import/no-webpack-loader-syntax
import styles from './Icon.scss';

const cx = classNames.bind(styles);

const propTypes = {
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
   * String that labels the current element. If 'aria-label' is present,
   * role is set to 'img' and aria-hidden is removed.
   */
  ariaLabel: PropTypes.string,
  /**
   * Focusable attribute. IE 10/11 are focusable without this attribute.
   */
  focusable: PropTypes.bool,
};

const defaultProps = {
  isBidi: false,
  isSpin: false,
  children: null,
  height: '1em',
  width: '1em',
  ariaLabel: null,
  focusable: false,
};

const IconBase = ({
  isBidi,
  isSpin,
  children,
  height,
  width,
  ariaLabel,
  focusable,
  ...customProps
  }) => {
  const attributes = Object.assign({}, customProps);

  // append to existing classNames
  const classes = cx(
    'icon',
    { 'is-bidi': isBidi },
    { 'is-spin': isSpin },
    attributes.className,
  );

  // aria-label is present, remove aria-hidden, set role to img
  if (ariaLabel) {
    attributes['aria-label'] = ariaLabel;
    attributes.role = 'img';
    attributes['aria-hidden'] = null;
  } else {
    attributes['aria-hidden'] = 'true';
  }

  attributes.height = height;
  attributes.width = width;
  attributes.focusable = focusable;

  return <svg {...attributes} className={classes}>{children}</svg>;
};

IconBase.propTypes = propTypes;
IconBase.defaultProps = defaultProps;

export default IconBase;
