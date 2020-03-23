import React from 'react';
import Arrange from 'terra-arrange';
import Heading from 'terra-heading';
import classNames from 'classnames/bind';
import styles from './HeadingDocCommon.module.scss';

const cx = classNames.bind(styles);

const HeadingLevels = () => (
  <div>
    <Arrange
      align="center"
      fitStart={<span className={cx('fitstart-content')}>h1</span>}
      fill={(
        <div className={cx('heading-wrapper')}>
          <Heading level={1}>
Level 1 Heading
            <span className={cx('heading-content')}>32px (2.286rem)</span>
          </Heading>
        </div>
)}
    />
    <Arrange
      align="center"
      fitStart={<span className={cx('fitstart-content')}>h2</span>}
      fill={(
        <div className={cx('heading-wrapper')}>
          <Heading level={2}>
Level 2 Heading
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
          <Heading level={3}>
Level 3 Heading
            <span className={cx('heading-content')}>20px (1.429rem)</span>
          </Heading>
        </div>
)}
    />
    <Arrange
      align="center"
      fitStart={<span className={cx('fitstart-content')}>h4</span>}
      fill={(
        <div className={cx('heading-wrapper')}>
          <Heading level={4}>
Level 4 Heading
            <span className={cx('heading-content')}>18px (1.286rem)</span>
          </Heading>
        </div>
)}
    />
    <Arrange
      align="center"
      fitStart={<span className={cx('fitstart-content')}>h5</span>}
      fill={(
        <div className={cx('heading-wrapper')}>
          <Heading level={5}>
Level 5 Heading
            <span className={cx('heading-content')}>16px (1.143rem)</span>
          </Heading>
        </div>
)}
    />
    <Arrange
      align="center"
      fitStart={<span className={cx('fitstart-content')}>h6</span>}
      fill={(
        <div className={cx('heading-wrapper')}>
          <Heading level={6}>
Level 6 Heading
            <span className={cx('heading-content')}>14px (1rem)</span>
          </Heading>
        </div>
)}
    />
  </div>
);

export default HeadingLevels;
