/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Star from 'terra-icon/lib/icon/IconFeaturedOutlineYellow';
import EmptyStar from 'terra-icon/lib/icon/IconFeaturedOutline';
import VisuallyHiddenText from 'terra-visually-hidden-text';
import classNames from 'classnames/bind';
import styles from './Example.scss';

const cx = classNames.bind(styles);

const A11yGroupInteractive = () => (
  <p>
    Rating:&nbsp;
    <VisuallyHiddenText text="Four out of five stars" />
    <a href="#" className={cx('rating')}>
      <Star a11yLabel="Rate one star" />
    </a>
    <a href="#" className={cx('rating')}>
      <Star a11yLabel="Rate two stars" />
    </a>
    <a href="#" className={cx('rating')}>
      <Star a11yLabel="Rate three stars" />
    </a>
    <a href="#" className={cx('rating')}>
      <Star a11yLabel="Rate four stars" />
    </a>
    <a href="#" className={cx('rating')}>
      <EmptyStar a11yLabel="Rate five stars" />
    </a>
  </p>
);

export default A11yGroupInteractive;
