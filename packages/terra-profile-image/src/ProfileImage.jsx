import React from 'react';
import PropTypes from 'prop-types';
import 'terra-base/lib/baseStyles';
import TerraImage from 'terra-image';
import avatarImage from './avatar.svg';

/* eslint react/no-unused-prop-types: [0] */
const propTypes = {
  /**
   * The source for the image which will be displayed.
   */
  src: PropTypes.string.isRequired,
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

const ProfileImage = (props) => {
  const placeholderImage = (
    <img
      src={avatarImage}
      alt={props.alt}
      height={props.height}
      width={props.width}
    />
  );
  return <div><TerraImage placeholder={placeholderImage} {...props} /></div>;
};

ProfileImage.propTypes = propTypes;

export default ProfileImage;
