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

const IconBase = ({
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
  attributes.role = 'presentation';

  return <svg {...attributes} className={classes}>{children}</svg>;
};

IconBase.propTypes = propTypes;
IconBase.defaultProps = defaultProps;

export default IconBase;
