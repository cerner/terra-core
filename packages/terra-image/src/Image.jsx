import React, { PropTypes } from 'react';
import classNames from 'classnames';
import 'terra-base/lib/baseStyles';
import './Image.scss';

const propTypes = {
  /**
   * The source for the image which will be displayed.
   */
  src: PropTypes.string.isRequired,
  /**
   * Sets the style of the image from the following values; `default`, `rounded`, `circle`, `thumbnail`.
   */
  variant: PropTypes.oneOf(['default', 'rounded', 'circle', 'thumbnail']),
  /**
   * Sets the fluid behavior of the image, which is `nonfluid` by default.
   */
  isFluid: PropTypes.bool,
  /**
   * The text content that specifies an alternative text for an image.
   */
  alt: PropTypes.string.isRequired,
  /**
   * Sets the height of the image.
   */
  height: PropTypes.string,
  /**
   * Sets the width of the image.
   */
  width: PropTypes.string,
};

const defaultProps = {
  variant: 'default',
  isFluid: false,
  alt: ' ',
};

const Image = ({
  src,
  variant,
  isFluid,
  alt,
  height,
  width,
  ...customProps
}) => {
  const classes = classNames([
    'terra-Image',
    { [`terra-Image--${variant}`]: variant },
    { 'terra-Image--fluid': isFluid },
    customProps.className,
  ]);

  return (
    <img
      src={src}
      alt={alt}
      height={height}
      width={width}
      {...customProps}
      className={classes}
    />);
};


Image.propTypes = propTypes;
Image.defaultProps = defaultProps;

export default Image;
