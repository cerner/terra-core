import React from 'react';
import classNames from 'classnames/bind';
import ProfileImage from 'terra-profile-image';
import exampleProfileImage from '../assets/150x150.jpg';
import styles from '../../../test/profile-image/ProfileImageCommon.module.scss';

const cx = classNames.bind(styles);

const ProfileImageDefault = () => (
  <div>
    <ProfileImage alt="profile image for Martin Moon, photograph from space of rising star over a planet's silhouette" src={exampleProfileImage} width="75" height="75" aria-describedby="caption-example-1" />
    <span id="caption-example-1" className={cx('add-left-margin')}>Successful Image Source</span>
  </div>
);

export default ProfileImageDefault;
