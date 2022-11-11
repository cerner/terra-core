import React from 'react';
import classNames from 'classnames/bind';
import Card from 'terra-card';
import ProfileImage from 'terra-profile-image';
import exampleProfileImage from '../assets/150x150.jpg';
import styles from '../../../test/profile-image/ProfileImageCommon.module.scss';

const cx = classNames.bind(styles);

const ProfileImageExamples = () => (
  <div>
    <Card>
      <Card.Body>
        <ProfileImage alt="" width="75" height="75" aria-describedby="caption-example-1" />
        <span id="caption-example-1" className={cx('add-left-margin')}>Decorative Profile Image Source</span>
      </Card.Body>
    </Card>
    <Card>
      <Card.Body>
        <ProfileImage alt="profile image for Martin Moon, photograph from space of rising star over a planet's silhouette" src={exampleProfileImage} aria-describedby="caption-example-2" />
        <span id="caption-example-2" className={cx('add-left-margin')}>Meaningful Profile Image Source</span>
      </Card.Body>
    </Card>
  </div>
);

export default ProfileImageExamples;
