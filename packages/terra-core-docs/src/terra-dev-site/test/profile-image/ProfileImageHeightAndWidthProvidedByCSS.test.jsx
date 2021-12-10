import React from 'react';
import classNames from 'classnames/bind';
import ProfileImage from 'terra-profile-image';
import styles from './ProfileImageCommon.module.scss';
import exampleProfileImage from '../../doc/profile-image/assets/150x150.jpg';

const cx = classNames.bind(styles);

const ProfileImageHeightAndWidthProvidedByCSS = () => (
  <div>
    <ProfileImage className={cx('test-style-size')} alt="this image uses css size instead, valid image" src={exampleProfileImage} />
    <ProfileImage className={cx(['test-style-size', 'add-left-margin'])} alt="this image uses css size instead, invalid image" src="invalid.jpg" />
  </div>
);

export default ProfileImageHeightAndWidthProvidedByCSS;
