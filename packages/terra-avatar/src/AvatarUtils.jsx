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

const ColorVariants = ['one', 'two', 'three', 'four', 'five', 'six',
  'seven', 'eight', 'nine', 'ten'];

/**
 * Generates a hash, based on a given string s.
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
    // Convert to 32bit integer
    hash &= hash;
  }

  // Always return positive hash
  return Math.abs(hash);
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
 * Returns a color variant based on the following precedence:
 *   1. `color`
 *   2. Hash `hashValue` to generate color variant.
 *   3. Hash `alt`  to generate color variant.
 * @param {*} hashValue
 * @param {*} color
 * @param {*} alt
 */
const setColor = (alt, color, hashValue) => {
  let colorVariant = null;
  if (color !== 'auto') {
    colorVariant = color;
  } else if (hashValue) {
    colorVariant = getColorVariant(hashValue);
  } else {
    colorVariant = getColorVariant(alt);
  }

  return colorVariant;
};

/**
 * Render placeholder.
 * @param {*} alt
 * @param {*} isAriaHidden
 * @param {*} variant
 */
const generateImagePlaceholder = (alt, isAriaHidden, variant) => {
  const avatarIconClassNames = cx(['avatar-icon', variant]);

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

  return <TerraImage className={cx('avatar-image')} src={image} placeholder={icon} alt={alt} />;
};

const Utils = {
  AvatarVariants,
  ColorVariants,
  calculateHash,
  getColorVariant,
  setColor,
  generateImagePlaceholder,
  generateImage,
};

export default Utils;
