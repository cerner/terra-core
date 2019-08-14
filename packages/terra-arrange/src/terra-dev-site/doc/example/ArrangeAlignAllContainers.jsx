import React from 'react';
import classNames from 'classnames/bind';
/* eslint-disable import/no-extraneous-dependencies */
import Arrange from 'terra-arrange';
import { alignExampleDivBlue, textWithBlueBorder } from '../common/examplesetup';
import styles from './ArrangeExamples.module.scss';

const cx = classNames.bind(styles);

const ArrangeAlignAllContainers = () => (
  <div>
    <h3>Align - Default</h3>
    <Arrange
      className={cx('arrange')}
      fitStart={alignExampleDivBlue}
      fill={textWithBlueBorder}
      fitEnd={alignExampleDivBlue}
    />
    <br />
    <hr />
    <h3>Align - Center</h3>
    <Arrange
      align="center"
      className={cx('arrange')}
      fitStart={alignExampleDivBlue}
      fill={textWithBlueBorder}
      fitEnd={alignExampleDivBlue}
    />
    <br />
    <hr />
    <h3>Align - Bottom</h3>
    <Arrange
      align="bottom"
      className={cx('arrange')}
      fitStart={alignExampleDivBlue}
      fill={textWithBlueBorder}
      fitEnd={alignExampleDivBlue}
    />
  </div>
);

export default ArrangeAlignAllContainers;
