import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import memoize from 'memoize-one';
import 'terra-base/lib/baseStyles';
import styles from '../common/Avatar.module.scss';
import {
  AVATAR_VARIANTS, generateImagePlaceholder, generateImage, setColor,
} from '../common/AvatarUtils';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Specifies the alternative text for the image.
   */
  alt: PropTypes.string.isRequired,
  /**
   * Sets the background color. Defaults to `auto`. Accepted color variants are theme specific.
   * One of: `'auto'`, `'neutral'`, `'one'`, `'two'`, `'three'`, `'four'`, `'five'`, `'six'`, `'seven'`, `'eight'`, `'nine'`, `'ten'`.
   */
  color: PropTypes.oneOf(['auto', 'neutral', 'one', 'two', 'three', 'four',
    'five', 'six', 'seven', 'eight', 'nine', 'ten']),
  /**
   * Value used for the hash function when color is set to `auto`. If not provided, hash function utilizes alt.
   */
  hashValue: PropTypes.string,
  /**
   * The image to display.
   */
  image: PropTypes.string,
  /**
   * Whether to hide avatar from the accessiblity tree.
   */
  isAriaHidden: PropTypes.bool,
  /**
   * Overrides the default width.
   */
  size: PropTypes.string,
};

const defaultProps = {
  color: 'auto',
  hashValue: undefined,
  image: undefined,
  isAriaHidden: false,
  size: undefined,
};

const ImageComponent = memoize(generateImage);

const Facility = ({
  alt,
  color,
  hashValue,
  image,
  isAriaHidden,
  size,
  ...customProps
}) => {
  let colorVariant;
  let facilityContent;
  if (image) {
    colorVariant = '';
    facilityContent = ImageComponent(image, alt, isAriaHidden, AVATAR_VARIANTS.FACILITY);
  } else {
    colorVariant = setColor(alt, color, hashValue);
    facilityContent = generateImagePlaceholder(alt, isAriaHidden, AVATAR_VARIANTS.FACILITY);
  }

  const attributes = { ...customProps };
  const customStyles = size ? Object.assign({ fontSize: size }, attributes.style) : attributes.style;
  const facilityClassNames = cx([
    'avatar',
    `${colorVariant}`,
    attributes.className,
  ]);

  return (
    <div {...attributes} className={facilityClassNames} style={customStyles}>
      {facilityContent}
    </div>
  );
};

Facility.propTypes = propTypes;
Facility.defaultProps = defaultProps;

export default Facility;
