import React from 'react';
import classNames from 'classnames/bind';
import ProfileImage from '../../../ProfileImage';
import styles from './ProfileImageCommon.module.scss';
import exampleProfileImage from '../../assets/150x150.jpg';

const cx = classNames.bind(styles);

const ProfileImageDefault = () => (
  <div>
    <h2>Profile Image height and width are provided by CSS</h2>
    <ProfileImage className={cx('test-style-size')} alt="use css size instead" src={exampleProfileImage} />
    <ProfileImage className={cx('test-style-size')} alt="use css size instead" src="invalid.jpg" />
  </div>
);

export default ProfileImageDefault;
