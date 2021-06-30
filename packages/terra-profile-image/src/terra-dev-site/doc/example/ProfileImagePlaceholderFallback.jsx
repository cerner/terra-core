import React from 'react';
import classNames from 'classnames/bind';
import ProfileImage from 'terra-profile-image';
import styles from '../../test/profile-image/ProfileImageCommon.module.scss';

const cx = classNames.bind(styles);

const ProfileImagePlaceholderFallback = () => (
  <div>
    <ProfileImage alt="profile image for Martin Moon, image failed to load" src="invalid.jpg" width="75" height="75" aria-describedby="example2caption" />
    <span id="example1caption" className={cx('add-left-margin')}>Failed or Invalid Image Source</span>
    <br />
    <br />
    <ProfileImage alt="no photo provided" aria-describedby="example3caption" />
    <span id="example3caption" className={cx('add-left-margin')}>No Provided Image Source</span>
  </div>
);

export default ProfileImagePlaceholderFallback;
