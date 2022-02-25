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
  * Source for the svg file
  */
  svgSource: PropTypes.string,
  /**
  * Is the icon decorative? Is false by default.
  */
  encoding: PropTypes.string,
  /**
  * Is the icon decorative? Is false by default.
  */
  imageType: PropTypes.string,
  /**
   * Should the svg mirror when dir="rtl".
   */
  isBidi: PropTypes.bool,
  /**
   * Should the SVG rotate.
   */
  isSpin: PropTypes.bool,
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
  encoding: 'none',
  imageType: 'informative',
  isBidi: false,
  isSpin: false,
  height: '30em',
  width: '30em',
  focusable: 'false'
};

const IconBase = ({
  svgSource,
  encoding,
  imageType,
  isBidi,
  isSpin,
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

  // aria-label is present, remove aria-hidden, set role to img
  // if (ariaLabel) {
  //   attributes['aria-label'] = ariaLabel;
  //   attributes.role = 'img';
  //   attributes['aria-hidden'] = null;
  // } else {
  //   attributes['aria-hidden'] = 'true';
  // }

  let svgsrc = '';

  if (typeof svgSource === 'string' || svgSource instanceof String) {
    switch (encoding) {
      case 'utf8':
      case 'utf-8':
        const svgsrc_64 = Buffer.from(svgSource, 'utf-8').toString('base64');
        svgsrc = `data:image/svg+xml;base64, ${svgsrc_64}`;
        break;

      case 'base64':
        svgsrc = `data:image/svg+xml;base64, ${svgSource}`;
        break;

      case 'none':
      default:
        svgsrc = svgSource;
        break;
    }
  }

  if(imageType === 'decorative'){
    attributes.alt = '';
    attributes.role = 'presentation';
  } else {
    attributes.role = null;


    if(attributes.alt === undefined || attributes.alt === ''){
      attributes.alt = 'icon';
    }
  }

  return <img {...attributes} className={classes} src={svgsrc} ></img>;
};

IconBase.propTypes = propTypes;
IconBase.defaultProps = defaultProps;

export default IconBase;
