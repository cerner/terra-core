import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import memoize from 'memoize-one';
import 'terra-base/lib/baseStyles';
import Utils from '../common/AvatarUtils';
import styles from '../common/Avatar.module.scss';

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
   * Overrides the default height.
   */
  height: PropTypes.string,
  /**
   * The image to display.
   */
  image: PropTypes.string,
  /**
   * Whether to hide avatar from the accessiblity API.
   */
  isAriaHidden: PropTypes.bool,
  /**
   * Overrides the default width.
   */
  width: PropTypes.string,
};

const defaultProps = {
  color: 'auto',
  hashValue: undefined,
  height: undefined,
  image: undefined,
  isAriaHidden: false,
  width: undefined,
};

const ImageComponent = memoize(Utils.generateImage);

const Facility = ({
  alt,
  color,
  hashValue,
  height,
  image,
  isAriaHidden,
  width,
  ...customProps
}) => {
  let colorVariant;
  let facilityContent;
  if (image) {
    colorVariant = '';
    facilityContent = ImageComponent(image, alt, isAriaHidden, Utils.AVATAR_VARIANTS.FACILITY);
  } else {
    colorVariant = Utils.setColor(alt, color, hashValue);
    facilityContent = Utils.generateImagePlaceholder(alt, isAriaHidden, Utils.AVATAR_VARIANTS.FACILITY);
  }

  const attributes = Object.assign({}, customProps);
  const facilityClassNames = cx([
    'avatar',
    `${colorVariant}`,
    attributes.className,
  ]);

  return (
    <div {...attributes} className={facilityClassNames} style={{ height, width }}>
      {facilityContent}
    </div>
  );
};

Facility.propTypes = propTypes;
Facility.defaultProps = defaultProps;

export default Facility;
