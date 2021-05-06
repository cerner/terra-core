import React from 'react';
import classNames from 'classnames/bind';
import ProfileImage from '../../../ProfileImage';
import exampleProfileImage from '../../assets/150x150.jpg';
import styles from './ProfileImageCommon.module.scss';

const cx = classNames.bind(styles);

const ProfileImageDefault = () => (
  <div>
    <h2>Profile Image With User Provided Styles</h2>
    <ProfileImage width="75" height="75" className={cx('test-style-border')} alt="adds css style" src={exampleProfileImage} />
    <ProfileImage width="75" height="75" className={cx('test-style-border')} alt="adds css style" src="invalid.jpg" />
  </div>
);

export default ProfileImageDefault;
