import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from '../common/Avatar.module.scss';
import { setColor } from '../common/AvatarUtils';

const cx = classNames.bind(styles);

const GENERIC_VARIANTS = {
  SINGLE_USER: 'single-user',
  SHARED_USER: 'shared-user',
  PROVIDER: 'provider',
};

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
   * Whether to hide avatar from the accessibility tree.
   */
  isAriaHidden: PropTypes.bool,
  /**
   * Overrides the default size.
   */
  size: PropTypes.string,
  /**
   * Sets the Generic Avatar type to One of the following variants `single-user`, `shared-user`, or `provider`.
   */
  variant: PropTypes.oneOf([GENERIC_VARIANTS.SINGLE_USER, GENERIC_VARIANTS.SHARED_USER, GENERIC_VARIANTS.PROVIDER]),
};

const defaultProps = {
  color: 'auto',
  hashValue: undefined,
  isAriaHidden: false,
  size: undefined,
  variant: GENERIC_VARIANTS.SINGLE_USER,
};

const Generic = ({
  alt,
  color,
  hashValue,
  isAriaHidden,
  size,
  variant,
  ...customProps
}) => {
  const colorVariant = setColor(alt, color, hashValue);
  const attributes = { ...customProps };
  const customStyles = size ? ({ fontSize: size, ...attributes.style }) : attributes.style;
  const GenericUserClassNames = cx([
    'avatar',
    `${colorVariant}`,
    attributes.className,
  ]);

  let genericIconClassNames = cx(['icon', 'user']);

  if (variant === GENERIC_VARIANTS.SHARED_USER) {
    genericIconClassNames = cx(['icon', GENERIC_VARIANTS.SHARED_USER]);
  } else if (variant === GENERIC_VARIANTS.PROVIDER) {
    genericIconClassNames = cx(['icon', GENERIC_VARIANTS.PROVIDER]);
  }

  /* eslint-disable react/forbid-dom-props */
  return (
    <div {...attributes} className={GenericUserClassNames} style={customStyles}>
      <span className={genericIconClassNames} role="img" aria-label={alt} alt={alt} aria-hidden={isAriaHidden} />
    </div>
  );
  /* eslint-enable react/forbid-dom-props */
};

Generic.propTypes = propTypes;
Generic.defaultProps = defaultProps;

export default Generic;
export { GENERIC_VARIANTS };
