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
   * The initials to display.
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

export const propsErrorMsg = 'Only one of the props: [image, initials] should be supplied.';

const Avatar = ({
  alt,
  image,
  initials,
  variant,
  ...customProps
  }) => {
  if (image && initials) {
    throw new Error(propsErrorMsg);
  }

  const attributes = Object.assign({}, customProps);

  const AvatarClassNames = cx([
    'avatar',
    attributes.className,
  ]);

  const AvatarTextClassNames = cx([
    'avatar-text',
    { 'avatar-text-small': initials !== undefined && initials.length === 3 },
    { 'avatar-text-large': initials !== undefined && initials.length === 2 },
  ]);

  const icon = (
    <div className={cx('avatar-icon')}>
      <svg className={cx(variant)} />
    </div>
  );

  const AvatarContent = () => {
    let avatarContent = null;
    if (image) {
      avatarContent = <TerraImage src={image} placeholder={icon} alt={alt} />;
    } else if (initials && (initials.length === 2 || initials.length === 3)) {
      avatarContent = <text className={AvatarTextClassNames}>{initials.toUpperCase()}</text>;
    } else {
      avatarContent = icon;
    }
    return (
      <circle aria-label="Avatar" {...attributes} className={AvatarClassNames} >
        {avatarContent}
      </circle>
    );
  };

  return <AvatarContent />;
};

Avatar.propTypes = propTypes;
Avatar.defaultProps = defaultProps;

export default Avatar;
