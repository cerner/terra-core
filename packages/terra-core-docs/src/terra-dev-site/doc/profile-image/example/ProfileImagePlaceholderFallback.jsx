import React from 'react';
import classNames from 'classnames/bind';
import ProfileImage from 'terra-profile-image';
import styles from '../../../test/profile-image/ProfileImageCommon.module.scss';

const cx = classNames.bind(styles);

const ProfileImagePlaceholderFallback = () => (
  <div>
    <ProfileImage alt="profile image for Martin Moon, image failed to load" src="invalid.jpg" width="75" height="75" aria-describedby="caption-example-2" />
    <span id="caption-example-2" className={cx('add-left-margin')}>Failed or Invalid Image Source</span>
    <br />
    <br />
    <ProfileImage alt="no photo provided" aria-describedby="caption-example-3" />
    <span id="caption-example-3" className={cx('add-left-margin')}>No Provided Image Source</span>
  </div>
);

export default ProfileImagePlaceholderFallback;
