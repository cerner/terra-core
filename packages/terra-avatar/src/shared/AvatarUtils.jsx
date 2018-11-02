import React from 'react';
import classNames from 'classnames/bind';
import TerraImage from 'terra-image';
import styles from './Avatar.module.scss';

const cx = classNames.bind(styles);

const AvatarVariants = {
  USER: 'user',
  FACILITY: 'facility',
  MULTIUSER: 'multi-user',
};

const ColorVariants = [
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
 * @param {*} s
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
 * @param {*} hashValue
 */
const getColorVariant = (hashValue) => {
  const hash = calculateHash(hashValue);
  const size = ColorVariants.length - 1;
  const index = hash % size;
  return ColorVariants[index];
};

/**
 * Render placeholder.
 * @param {*} alt
 * @param {*} isAriaHidden
 * @param {*} variant
 */
const generateImagePlaceholder = (alt, isAriaHidden, variant) => {
  const avatarIconClassNames = cx(['icon', variant]);

  return <span className={avatarIconClassNames} role="img" aria-label={alt} alt={alt} aria-hidden={isAriaHidden} />;
};

/**
 * Render image with placeholder.
 * @param {*} image
 * @param {*} alt
 * @param {*} isAriaHidden
 * @param {*} variant
 */
const generateImage = (image, alt, isAriaHidden, variant) => {
  const icon = generateImagePlaceholder(alt, isAriaHidden, variant);

  return <TerraImage className={cx('image')} src={image} placeholder={icon} alt={alt} />;
};


/**
 * Returns true if the given color exists within `ColorVariants`.
 * @param {*} color
 */
const validateColor = (color) => {
  if (!color) {
    return false;
  }
  console.log(`Color: ${color}`);

  for (let i = 0; i < ColorVariants.length; i += i) {
    if (color === ColorVariants[i]) {
      console.log('Return true');
      return true;
    }
  }
  return false;
};

/**
 * Returns a color variant based on the following precedence:
 *   1. `color`
 *   2. Hash `hashValue` to generate color variant.
 *   3. Hash `alt`  to generate color variant. This is the fallback.
 * @param {*} hashValue
 * @param {*} color
 * @param {*} alt
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

const Utils = {
  AvatarVariants,
  ColorVariants,
  calculateHash,
  getColorVariant,
  generateImagePlaceholder,
  generateImage,
  validateColor,
  setColor,
};

export default Utils;
