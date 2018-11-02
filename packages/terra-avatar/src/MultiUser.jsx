import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import Utils from './shared/AvatarUtils';
import styles from './shared/Avatar.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Specifies the alternative text for the image.
   */
  alt: PropTypes.string.isRequired,
  /**
   * Sets the background color. Defaults to `auto`. Color variants are theme specific.
   * Accepted values: `'auto'`, `'neutral'`, `'one'`, `'two'`, `'three'`, `'four'`, `'five'`, `'six'`, `'seven'`, `'eight'`, `'nine'`, `'ten'`.
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
  isAriaHidden: false,
  width: undefined,
};

const MultiUser = ({
  alt,
  color,
  hashValue,
  height,
  isAriaHidden,
  width,
  ...customProps
}) => {
  const colorVariant = Utils.setColor(alt, color, hashValue);
  const attributes = Object.assign({}, customProps);
  const multiUserClassNames = cx([
    'avatar',
    `${colorVariant}`,
    attributes.className,
  ]);

  const multiUserIconClassNames = cx(['icon', Utils.AvatarVariants.MULTIUSER]);
  const multiUserContent = <span className={multiUserIconClassNames} role="img" aria-label={alt} alt={alt} aria-hidden={isAriaHidden} />;

  return (
    <div {...attributes} className={multiUserClassNames} style={{ width, height }}>
      {multiUserContent}
    </div>
  );
};

MultiUser.propTypes = propTypes;
MultiUser.defaultProps = defaultProps;

export default MultiUser;
