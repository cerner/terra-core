import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import TerraImage from 'terra-image';
import styles from './ProfileImage.module.scss';

const cx = classNames.bind(styles);

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
   * Sets the height of the image.
   */
  height: PropTypes.string,
  /**
   * Sets the width of the image.
   */
  width: PropTypes.string,
  /**
   * Function to be executed when the profile image load is successful.
   */
  onLoad: PropTypes.func,
  /**
   * Function to be executed when the profile image load errors.
   */
  onError: PropTypes.func,
};

const isOnlyNumbers = toTest => !(/\D/).test(toTest);

const ProfileImage = (props) => {
  // img tags assume a height attribute of only numbers is in px but CSS does not
  const fixedHeight = isOnlyNumbers(props.height) ? `${props.height}px` : props.height;
  const fixedWidth = isOnlyNumbers(props.width) ? `${props.width}px` : props.width;

  /* eslint-disable react/forbid-dom-props */
  const placeholderImage = (
    <span
      className={cx('placeholder-images')}
      title={props.alt}
      style={{ height: fixedHeight, width: fixedWidth }}
    />
  );
  /* eslint-enable react/forbid-dom-props */

  if (props.src) {
    return (<div><TerraImage placeholder={placeholderImage} fit="cover" {...props} /></div>);
  }
  return placeholderImage;
};

ProfileImage.propTypes = propTypes;

export default ProfileImage;
