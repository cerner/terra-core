import React, { PropTypes } from 'react';
import classNames from 'classnames';
import 'terra-base/lib/baseStyles';

// eslint-disable-next-line import/no-unresolved, import/no-webpack-loader-syntax
import './Icon.scss';

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
  attributes.className = classNames(
    'terra-Icon',
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

  return <svg {...attributes}>{children}</svg>;
};

IconBase.propTypes = propTypes;
IconBase.defaultProps = defaultProps;

export default IconBase;
