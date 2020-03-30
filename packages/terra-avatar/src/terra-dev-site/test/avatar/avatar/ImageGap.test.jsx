import React from 'react';
import classNames from 'classnames/bind';
import Avatar, { Facility } from '../../../../index';
import exampleAvatarImage from '../../../assets/150x150.jpg';
import styles from './ImageGap.test.scss';

const cx = classNames.bind(styles);

export default () => (
  <div>
    <div className={cx('avatar-wrapper')}>
      <Avatar id="image-avatar" image={exampleAvatarImage} alt="placeholder" initials="JS" />
    </div>
    <div className={cx('avatar-wrapper')}>
      <Facility id="facility-avatar" alt="facility" />
    </div>
  </div>
);
