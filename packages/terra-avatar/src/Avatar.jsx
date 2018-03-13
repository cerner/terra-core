import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import TerraImage from 'terra-image';
import styles from './Avatar.scss';

const cx = classNames.bind(styles);

const AvatarVariants = {
  FACILITY: 'facility',
  USER: 'user',
};

const propTypes = {
  /**
   * The text content that specifies the alternative text for the image.
   */
  alt: PropTypes.string,
  /**
   * The text content of the aria-label for accessibility.
   */
  ariaLabel: PropTypes.string,
  /**
   * The image to display.
   */
  image: PropTypes.string,
  /**
   * Two or three letters to display.
   */
  initials: PropTypes.string,
  /**
   * The avatar variant. One of `AvatarVariants.FACILITY`, `AvatarVariants.USER`.
   */
  variant: PropTypes.oneOf([...Object.values(AvatarVariants)]),
};

const defaultProps = {
  alt: undefined,
  ariaLabel: undefined,
  image: undefined,
  initials: undefined,
  variant: AvatarVariants.USER,
};

const Avatar = ({
  alt,
  ariaLabel,
  image,
  initials,
  variant,
  ...customProps
  }) => {
  // Checks to run when not in production
  if (process.env.NODE_ENV !== 'production') {
    if (image && initials) {
      // eslint-disable-next-line
      console.warn('Only one of the props: [image, initials] should be supplied.');
    }
  }

  const attributes = Object.assign({}, customProps);

  const avatarClassNames = cx([
    'avatar',
    attributes.className,
  ]);

  const avatarIconClassNames = cx([
    'avatar-icon',
    variant,
  ]);

  const avatarTextClassNames = cx([
    { 'avatar-text-small': initials && initials.length === 3 },
    { 'avatar-text-large': initials && initials.length === 2 },
  ]);

  const icon = <span className={avatarIconClassNames} />;

  let avatarContent;
  if (image) {
    avatarContent = <TerraImage className={cx('avatar-image')} src={image} placeholder={icon} alt={alt} />;
  } else if (initials && (initials.length === 2 || initials.length === 3)) {
    avatarContent = <span className={avatarTextClassNames}>{initials.toUpperCase()}</span>;
  } else {
    avatarContent = icon;
  }

  return (
    <div {...attributes} aria-label={ariaLabel} className={avatarClassNames}>
      {avatarContent}
    </div>
  );
};

Avatar.propTypes = propTypes;
Avatar.defaultProps = defaultProps;

export default Avatar;
export { AvatarVariants };
