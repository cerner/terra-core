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
   * One or two letters to display.
   */
  initials: PropTypes.string,
  /**
   * Whether to hide avatar from the accessiblity tree.
   */
  isAriaHidden: PropTypes.bool,
  /**
   * Whether the person is deceased. Overrides any color variant.
   */
  isDeceased: PropTypes.bool,
  /**
   * Overrides the default size.
   */
  size: PropTypes.string,
};

const defaultProps = {
  color: 'auto',
  hashValue: undefined,
  image: undefined,
  initials: undefined,
  isAriaHidden: false,
  isDeceased: false,
  size: undefined,
};

const ImageComponent = memoize(generateImage);

const Avatar = ({
  alt,
  color,
  hashValue,
  image,
  initials,
  isAriaHidden,
  isDeceased,
  size,
  ...customProps
}) => {
  let colorVariant;
  let avatarContent;
  if (image) {
    colorVariant = '';
    avatarContent = ImageComponent(image, alt, isAriaHidden, AVATAR_VARIANTS.USER);
  } else if (initials && (initials.length === 1 || initials.length === 2)) {
    colorVariant = setColor(alt, color, hashValue);
    const avatarTextClassNames = cx('initials');
    avatarContent = <span className={avatarTextClassNames} alt={alt} aria-label={alt} aria-hidden={isAriaHidden}>{initials.toUpperCase()}</span>;
  } else {
    colorVariant = setColor(alt, color, hashValue);
    avatarContent = generateImagePlaceholder(alt, isAriaHidden, AVATAR_VARIANTS.USER);
  }

  const attributes = { ...customProps };
  const avatarClassNames = cx([
    'avatar',
    `${colorVariant}`,
    { image: Boolean(image) },
    { 'is-deceased': isDeceased },
    attributes.className,
  ]);

  return (
    <div {...attributes} className={avatarClassNames} style={{ fontSize: size }}>
      {avatarContent}
    </div>
  );
};

Avatar.propTypes = propTypes;
Avatar.defaultProps = defaultProps;

export default Avatar;
