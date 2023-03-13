import React from 'react';
import Arrange from 'terra-arrange';
import Heading from 'terra-heading';
import classNames from 'classnames/bind';
import styles from './HeadingDocCommon.module.scss';
import { Notice } from '@cerner/terra-docs';

const cx = classNames.bind(styles);

const HeadingExamples = () => (
  <div>
    <Notice variant="important" ariaLevel="5">

      <Arrange
      align="center"
      fill={(
        <div className={cx('heading-wrapper')}>
          <Heading level={1}>
          Allergies Hospitals Locations
          </Heading>
        </div>
)}
    />
    <Arrange
      align="center"
      fill={(
        <div className={cx('heading-wrapper')}>
          <Heading level={2}>
            Kansas,MO
          </Heading>
        </div>
)}
    />
    <Arrange
      align="center"
      fill={(
        <div className={cx('heading-wrapper')}>
          <Heading level={3}>
            Riverport Campus, MO
          </Heading>
        </div>
)}
    />
    <Arrange
      align="center"
      fill={(
        <div className={cx('heading-wrapper')}>
          <Heading level={4}>
            Innovations Campus, MO
          </Heading>
        </div>
)}
    />
    <Arrange
      align="center"
      fill={(
        <div className={cx('heading-wrapper')}>
          <Heading level={5}>
            Realization Campus, MO
          </Heading>
        </div>
)}
    />
    <Arrange
      align="center"
      fill={(
        <div className={cx('heading-wrapper')}>
          <Heading level={6}>
            Kansas HQ,MO
          </Heading>
        </div>
)}
    />
    </Notice>
  </div>
);

export default HeadingExamples;
