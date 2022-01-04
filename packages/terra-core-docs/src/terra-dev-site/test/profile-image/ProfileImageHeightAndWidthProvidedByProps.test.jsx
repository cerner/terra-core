import React from 'react';
import classNames from 'classnames/bind';
import ProfileImage from 'terra-profile-image';
import styles from './ProfileImageCommon.module.scss';
import exampleProfileImage from '../../doc/profile-image/assets/150x150.jpg';

const cx = classNames.bind(styles);

const ProfileImageHeightAndWidthProvidedByProps = () => (
  <div>
    <ProfileImage width="75" height="150" alt="this image uses prop sizes, valid image" src={exampleProfileImage} />
    <ProfileImage width="75" height="150" className={cx('add-left-margin')} alt="this image uses prop sizes, invalid image" src="invalid.jpg" />
  </div>
);

export default ProfileImageHeightAndWidthProvidedByProps;
