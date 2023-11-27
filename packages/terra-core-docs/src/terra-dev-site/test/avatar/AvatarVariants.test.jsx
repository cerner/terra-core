import React from 'react';

import classNames from 'classnames/bind';
import Avatar, { Facility, Generic } from 'terra-avatar';

import styles from './avatar/ImageGap.test.scss';

import exampleAvatarImage from '../../doc/avatar/assets/150x150.jpg';
import exampleAvatarImageShortWide from '../../doc/avatar/assets/200x133.jpg';
import exampleAvatarImageTallNarrow from '../../doc/avatar/assets/170x251.jpg';


const cx = classNames.bind(styles);

export default () => (
  <div id="avatar-variants">
    <h4>Basic image avatar</h4>
    <Avatar image={exampleAvatarImage} alt="User" id="image-avatar1" initials="JS" />

    <h4>Avatar with short & wide image</h4>
    <Avatar image={exampleAvatarImageShortWide} alt="User" id="image-avatar2" initials="JS" />

    <h4>Avatar with tall & narrow image</h4>
    <Avatar image={exampleAvatarImageTallNarrow} alt="User" id="image-avatar3" initials="JS" />

    <h4>one initial avatar</h4>
    <Avatar id="one-initial-avatar" initials="J" alt="John" />

    <h4>two initials avatar</h4>
    <Avatar id="two-initials-avatar" initials="JSS" alt="Joe S Shane" color="two" />

    <h4>Avatar image gap test</h4>
    <div>
      <div className={cx('avatar-wrapper')}>
        <Avatar id="image-avatar" image={exampleAvatarImage} alt="placeholder" initials="JS" />
      </div>
      <div className={cx('avatar-wrapper')}>
        <Facility id="facility-avatar" alt="facility" />
      </div>
    </div>

    <h4>Invalid Image Avatar With Initials</h4>
    <Avatar image="invalid-image-url" initials="JD" alt="John Doe" id="invalid-image-avatar" />

    <h4>Is deceased avatar with initials</h4>
    <Avatar id="is-deceased-avatar" alt="user" isDeceased initials="JS" />

    <h4>Is deceased image with avatar</h4>
    <Avatar id="is-deceased-image-avatar" alt="user" image={exampleAvatarImage} isDeceased initials="JS" />

    <h4>Default Facility</h4>
    <Facility id="default-facility" alt="facility" color="three" />

    <h4>Image facility</h4>
    <Facility id="image-facility" image={exampleAvatarImage} alt="facility" />

    <h4>Invalid image facility</h4>
    <Facility image="invalid-image-url" alt="Facility" id="invalid-image-facility" />

    <h4>Generic Provider</h4>
    <Generic variant="provider" id="provider" alt="provider" color="seven" />

    <h4>Generic Shared User</h4>
    <Generic id="shared-user" variant="shared-user" alt="shared user" color="eight" />

    <h4>Generic Single User</h4>
    <Generic id="single-user" alt="single user" color="four" />
  </div>
);
