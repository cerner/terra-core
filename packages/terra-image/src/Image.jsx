import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import styles from './Image.scss';

const cx = classNames.bind(styles);

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
  /**
   * Function to be executed when the image load is successful.
   */
  onLoad: PropTypes.func,
  /**
   * Function to be executed when the image load errors.
   */
  onError: PropTypes.func,
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
  onLoad,
  onError,
  ...customProps
}) => {
  const classes = cx([
    'image',
    variant,
    { fluid: isFluid },
    customProps.className,
  ]);

  return (
    <img
      src={src}
      alt={alt}
      height={height}
      width={width}
      onLoad={onLoad}
      onError={onError}
      {...customProps}
      className={classes}
    />);
};

Image.propTypes = propTypes;
Image.defaultProps = defaultProps;

export default Image;
