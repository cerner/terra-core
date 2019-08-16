import React from 'react';
import Arrange from 'terra-arrange';
import Heading from 'terra-heading';
import classNames from 'classnames/bind';
import styles from './HeadingDocCommon.module.scss';

const cx = classNames.bind(styles);

const HeadingSizes = () => (
  <div>
    <Arrange
      align="center"
      fitStart={<span className={cx('fitstart-content')}>h3</span>}
      fill={(
        <div className={cx('heading-wrapper')}>
          <Heading level={3} size="huge">
Huge
            <span className={cx('heading-content')}>32px (2.286rem)</span>
          </Heading>
        </div>
)}
    />
    <Arrange
      align="center"
      fitStart={<span className={cx('fitstart-content')}>h3</span>}
      fill={(
        <div className={cx('heading-wrapper')}>
          <Heading level={3} size="large">
Large
            <span className={cx('heading-content')}>24px (1.714rem)</span>
          </Heading>
        </div>
)}
    />
    <Arrange
      align="center"
      fitStart={<span className={cx('fitstart-content')}>h3</span>}
      fill={(
        <div className={cx('heading-wrapper')}>
          <Heading level={3} size="medium">
Medium
            <span className={cx('heading-content')}>20px (1.429rem)</span>
          </Heading>
        </div>
)}
    />
    <Arrange
      align="center"
      fitStart={<span className={cx('fitstart-content')}>h3</span>}
      fill={(
        <div className={cx('heading-wrapper')}>
          <Heading level={3} size="small">
Small
            <span className={cx('heading-content')}>18px (1.286rem)</span>
          </Heading>
        </div>
)}
    />
    <Arrange
      align="center"
      fitStart={<span className={cx('fitstart-content')}>h3</span>}
      fill={(
        <div className={cx('heading-wrapper')}>
          <Heading level={3} size="tiny">
Tiny
            <span className={cx('heading-content')}>16px (1.143rem)</span>
          </Heading>
        </div>
)}
    />
    <Arrange
      align="center"
      fitStart={<span className={cx('fitstart-content')}>h3</span>}
      fill={(
        <div className={cx('heading-wrapper')}>
          <Heading level={3} size="mini">
Mini
            <span className={cx('heading-content')}>14px (1rem)</span>
          </Heading>
        </div>
)}
    />
  </div>
);

export default HeadingSizes;
