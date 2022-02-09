import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';

// eslint-disable-next-line import/no-unresolved, import/no-webpack-loader-syntax
import styles from './Icon.module.scss';

const cx = classNamesBind.bind(styles);

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
  focusable: PropTypes.string,

  /**
   * Is the icon decorative? Is false by default.
   */
  isDecorative: PropTypes.bool,

  /**
   * Is the icon decorative? Is false by default.
   */
     svgSrc: PropTypes.string

};

const defaultProps = {
  isBidi: false,
  isSpin: false,
  children: null,
  height: '1em',
  width: '1em',
  ariaLabel: null,
  focusable: 'false',
};

const IconBase = ({
  isBidi,
  isSpin,
  children,
  height,
  width,
  ariaLabel,
  focusable,
  isDecorative,
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

  if (isDecorative) {
    attributes.role = 'presentation';
    attributes.alt = null;
     
    // return <svg {...attributes} className={classes}>{children}</svg>;
    return <img {...attributes} className={classes} src={svgSrc}></img>;
  }

  // aria-label is present, remove aria-hidden, set role to img
  if (ariaLabel) {
    attributes['aria-label'] = ariaLabel;
    attributes.role = 'img';
    attributes['aria-hidden'] = null;
  } else {
    attributes['aria-hidden'] = 'true';
  }

  if(ariaLabel == undefined){
    throw new Error ("ariaLabel must be defined");
  }

  // return <svg {...attributes} className={classes}>{children}</svg>;
  return <img {...attributes} className={classes} src={svgSrc}></img>;

};

IconBase.propTypes = propTypes;
IconBase.defaultProps = defaultProps;

export default IconBase;
