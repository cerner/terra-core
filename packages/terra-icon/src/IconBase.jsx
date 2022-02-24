import React from 'react';
import PropTypes, { string } from 'prop-types';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import { Buffer } from 'buffer';
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
   * Source for the svg file
   */
   svgSource: PropTypes.string

};

const defaultProps = {
  isBidi: false,
  isSpin: false,
  children: null,
  height: '30em',
  width: '30em',
  ariaLabel: null,
  focusable: 'false',
  isDecorative: false
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
  svgSource,
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

  // aria-label is present, remove aria-hidden, set role to img
  if (ariaLabel) {
    attributes['aria-label'] = ariaLabel;
    attributes.role = 'img';
    attributes['aria-hidden'] = null;
  } else {
    attributes['aria-hidden'] = 'true';
  }


  let svgsrc = '';

  if (typeof svgSource === 'string' || svgSource instanceof String) {
    const b64 = Buffer.from(svgSource, 'utf-8').toString('base64');
    svgsrc = `data:image/svg+xml;base64, ${b64}`;
  }

  return (<img {...attributes} className={classes} src={svgsrc}></img>);
};

IconBase.propTypes = propTypes;
IconBase.defaultProps = defaultProps;

export default IconBase;
