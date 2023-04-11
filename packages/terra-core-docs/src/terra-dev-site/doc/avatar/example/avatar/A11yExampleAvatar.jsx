import React from 'react';
import classNamesBind from 'classnames/bind';
import Card from 'terra-card';
import Avatar from 'terra-avatar';
import exampleAvatarImage from '../../../demographics-banner/assets/demographicsCat.jpg';
import styles from '../common/A11yExamples.module.scss';

const cx = classNamesBind.bind(styles);

const A11yExampleAvatar = () => (
  <Card classNames={cx('card')}>
    <Card.Body>
      <Avatar image={exampleAvatarImage} initials="JS" alt="Avatar" size="1.5em" />
    </Card.Body>
  </Card>
);

export default A11yExampleAvatar;
