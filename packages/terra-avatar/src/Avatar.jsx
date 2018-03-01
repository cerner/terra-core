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
   * The image to display.
   */
  image: PropTypes.string,
  /**
   * The initials to display. Can be two or three characters, otherwise a fallback icon displays.
   */
  initials: PropTypes.string,
  /**
   * The avatar variant. One of `AvatarVariants.FACILITY`, `AvatarVariants.USER`.
   */
  variant: PropTypes.oneOf([AvatarVariants.FACILITY, AvatarVariants.USER]),
};

const defaultProps = {
  variant: AvatarVariants.USER,
};

const propsWarningMsg = 'Only one of the props: [image, initials] should be supplied.';

const Avatar = ({
  alt,
  image,
  initials,
  variant,
  ...customProps
  }) => {
  // Checks to run when not in production
  if (process.env.NODE_ENV !== 'production') {
    if (image && initials) {
      // eslint-disable-next-line
      console.warn(propsWarningMsg);
    }
  }

  const attributes = Object.assign({}, customProps);

  const avatarClassNames = cx([
    'avatar',
    attributes.className,
  ]);

  const avatarTextClassNames = cx([
    { 'avatar-text-small': initials !== undefined && initials.length === 3 },
    { 'avatar-text-large': initials !== undefined && initials.length === 2 },
  ]);

  const icon = (
    <div className={cx('avatar-icon')}>
      <svg className={cx(variant)} />
    </div>
  );

  let avatarContent;
  if (image) {
    avatarContent = <TerraImage className={cx('avatar-image')} src={image} placeholder={icon} alt={alt} />;
  } else if (initials && (initials.length === 2 || initials.length === 3)) {
    avatarContent = <text className={avatarTextClassNames}>{initials.toUpperCase()}</text>;
  } else {
    avatarContent = icon;
  }

  return (
    <circle aria-label="Avatar" {...attributes} className={avatarClassNames} >
      {avatarContent}
    </circle>
  );
};

Avatar.propTypes = propTypes;
Avatar.defaultProps = defaultProps;

export default Avatar;
