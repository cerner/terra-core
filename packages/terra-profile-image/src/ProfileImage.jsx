import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import TerraImage from 'terra-image';
import styles from './ProfileImage.module.scss';

const cx = classNamesBind.bind(styles);

/* eslint react/no-unused-prop-types: [0] */
const propTypes = {
  /**
   * The source for the image which will be displayed.
   */
  src: PropTypes.string,
  /**
   * The text content that specifies an alternative text for an image.
   */
  alt: PropTypes.string,
  /**
  * Sets the `object-fit` style of the image from the following values: `cover`, `contain`, `scale-down`, `none`.
  * ![IMPORTANT](https://badgen.net/badge/UX/Design-Standards/blue) Anywhere the terra-profile-image is used to show images of People, _only_ `cover` and `contain` are acceptable.
  */
  fit: PropTypes.oneOf(['cover', 'scale-down', 'contain', 'none']),
  /**
   * Sets the height of the image. Note: always define the width and height of the image as number value in pixels, e.g. `height="75"` for "75px".
   */
  height: PropTypes.string,
  /**
   * Sets the width of the image. Note: always define the width and height of the image as number value in pixels, e.g. `width="75"` for "75px".
   */
  width: PropTypes.string,
  /**
   * Sets the style of the image from the following values; `default`, `rounded`, `circle`, `thumbnail`.
   */
  variant: PropTypes.oneOf(['default', 'rounded', 'circle', 'thumbnail']),
  /**
   * Function to be executed when the profile image load is successful.
   */
  onLoad: PropTypes.func,
  /**
   * Function to be executed when the profile image load errors.
   */
  onError: PropTypes.func,
};

const defaultProps = {
  fit: 'cover',
  height: '75',
  width: '75',
  variant: 'default',
};

const isOnlyNumbers = toTest => !(/\D/).test(toTest);

const ProfileImage = (props) => {
  const theme = React.useContext(ThemeContext);

  // Terra-Image uses a height and width attribute using only numbers, the placeholder as a span needs CSS in 'px'
  const placeholderHeight = isOnlyNumbers(props.height) ? `${props.height}px` : props.height;
  const placeholderWidth = isOnlyNumbers(props.width) ? `${props.width}px` : props.width;

  const PlaceholderClassNames = classNames(
    cx([
      'profile-image',
      'placeholder',
      props.fit,
      props.variant,
      theme.className,
    ]),
    props.className,
  );

  const ProfileImageClassNames = classNames(
    cx([
      'profile-image',
      theme.className,
    ]),
    props.className,
  );

  /* eslint-disable react/forbid-dom-props */
  const ProfileImagePlaceholder = (
    <span
      {...props}
      role="img"
      aria-label={props.alt}
      style={{ height: placeholderHeight, width: placeholderWidth }}
      className={[PlaceholderClassNames]}
    />
  );
  /* eslint-enable react/forbid-dom-props */

  if (props.src) {
    return (<TerraImage {...props} placeholder={ProfileImagePlaceholder} className={ProfileImageClassNames} />);
  }
  return ProfileImagePlaceholder;
};

ProfileImage.propTypes = propTypes;
ProfileImage.defaultProps = defaultProps;

export default ProfileImage;
