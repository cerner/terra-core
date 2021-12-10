import React from 'react';
import classNames from 'classnames/bind';
import ProfileImage from 'terra-profile-image';
import exampleProfileImage from '../../doc/profile-image/assets/150x150.jpg';
import styles from './ProfileImageCommon.module.scss';

const cx = classNames.bind(styles);

const ProfileImageWithUserProvidedStyles = () => (
  <div>
    <ProfileImage width="95" height="95" className={cx('test-style-border')} alt="adding additional css style, valid image" src={exampleProfileImage} />
    <ProfileImage width="95" height="95" className={cx(['test-style-border', 'add-left-margin'])} alt="adding additional css style, invalid image" src="invalid.jpg" />
  </div>
);

export default ProfileImageWithUserProvidedStyles;
