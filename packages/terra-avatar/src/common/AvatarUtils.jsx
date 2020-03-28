import React from 'react';
import classNames from 'classnames/bind';
import TerraImage from 'terra-image';
import styles from './Avatar.module.scss';

const cx = classNames.bind(styles);

const AVATAR_VARIANTS = {
  USER: 'user',
  FACILITY: 'facility',
  GENERIC: 'generic',
};

const COLOR_VARIANTS = [
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten',
];

/**
 * Generates a hash, based on a given string s.
 * https://werxltd.com/wp/2010/05/13/javascript-implementation-of-javas-string-hashcode-method/
 */
const calculateHash = (s) => {
  let hash = 0;
  let char;

  if (s.trim().length === 0) {
    return hash;
  }

  /* eslint-disable no-bitwise */
  for (let i = 0; i < s.length; i += 1) {
    char = s.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash &= hash; // Convert to 32bit integer
  }
  /* eslint-enable no-bitwise */

  return Math.abs(hash); // Always return positive hash
};

/**
 *  Returns a color variant based on a given hashValue.
 */
const getColorVariant = (hashValue) => {
  const hash = calculateHash(hashValue);
  const size = COLOR_VARIANTS.length - 1;
  const index = hash % size;
  return COLOR_VARIANTS[index];
};

/**
 * Render placeholder.
 */
const generateImagePlaceholder = (avatarParams) => {
  const {
    alt, variant, isAriaHidden,
  } = avatarParams;
  const avatarIconClassNames = cx(['icon', variant]);
  return <span className={avatarIconClassNames} role="img" aria-label={alt} alt={alt} aria-hidden={isAriaHidden} />;
};

/**
 * Render placeholder.
 */
const generateInitials = (avatarParams) => {
  const {
    alt, initials, isAriaHidden,
  } = avatarParams;
  const avatarTextClassNames = cx('initials');
  return <span className={avatarTextClassNames} role="img" alt={alt} aria-label={alt} aria-hidden={isAriaHidden}>{initials.toUpperCase()}</span>;
};

/**
 * Render image with placeholder.
 */
const generateImage = (avatarParams) => {
  const {
    alt, image, variant, handleFallback,
  } = avatarParams;
  const icon = (variant === AVATAR_VARIANTS.USER) ? generateInitials(avatarParams) : generateImagePlaceholder(avatarParams);
  return <TerraImage className={cx('image')} src={image} placeholder={icon} alt={alt} onError={handleFallback} fit="cover" />;
};

/**
 * Returns true if the given color exists within `COLOR_VARIANTS`.
 */
const validateColor = (color) => {
  if (!color) {
    return false;
  }

  return COLOR_VARIANTS.includes(color); // will return true if color is an item in the COLOR_VARIANTS array.
};

/**
 * Returns a color variant based on the following precedence:
 *   1. `color`
 *   2. Hash `hashValue` to generate color variant.
 *   3. Hash `alt`  to generate color variant. This is the fallback.
 */
const setColor = (alt, color, hashValue) => {
  if (color === 'neutral' || (color !== 'auto' && validateColor(color))) {
    return color;
  }

  if (hashValue) {
    return getColorVariant(hashValue);
  }

  return getColorVariant(alt);
};

export {
  AVATAR_VARIANTS,
  COLOR_VARIANTS,
  calculateHash,
  getColorVariant,
  generateImagePlaceholder,
  generateImage,
  generateInitials,
  validateColor,
  setColor,
};
