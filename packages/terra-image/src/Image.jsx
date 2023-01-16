import React from 'react';
import PropTypes from 'prop-types';
import { ImageVariant, FitTypes } from './_BaseImage';
import InformativeImage from './_InformativeImage';
import DecorativeImage from './_DecorativeImage';

const propTypes = {
  /**
   * The source string for the image which will be loaded and displayed.
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
   * ![IMPORTANT](https://badgen.net/badge/UX/Accessibility/blue)
   * The text content that specifies an alternative text for an image.
   * `alt` prop helps to provide meaningfull context for images and should be used for creating informative images. For decorative images `alt` prop can be ignored.
   */
  alt: PropTypes.string,
  /**
   * A React element which will be displayed during loading and in case of src load failure.
   */
  placeholder: PropTypes.element,
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
  /**
  * Sets the `object-fit` style of the image from the following values; `cover`, `contain`, `fill`, `scale-down`, `none`.
  */
  fit: PropTypes.oneOf(['cover', 'scale-down', 'fill', 'contain', 'none']),
};

const Image = (props) => {
  if (props.alt !== undefined) {
    return <InformativeImage {...props} />;
  }

  return <DecorativeImage {...props} />;
};

Image.propTypes = propTypes;

export default Image;
export { ImageVariant, FitTypes };
