import React from 'react';
import classNamesBind from 'classnames/bind';
import Card from 'terra-card';
import Avatar from 'terra-avatar';
import styles from '../common/A11yExamples.module.scss';

const cx = classNamesBind.bind(styles);

const A11yExampleAvatar = () => (
  <Card classNames={cx('card')}>
    <Card.Body>
      <Avatar initials="JD" alt="" size="1.5em" isAriaHidden />
      <span className={cx('add-left-margin')}>
        Avatar used for decorative purpose has isAriaHidden prop set.
      </span>
    </Card.Body>
  </Card>
);

export default A11yExampleAvatar;
