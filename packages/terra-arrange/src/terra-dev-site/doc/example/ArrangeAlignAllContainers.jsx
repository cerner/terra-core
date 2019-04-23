import React from 'react';
import classNames from 'classnames/bind';
/* eslint-disable import/no-extraneous-dependencies */
import Arrange from 'terra-arrange/lib/Arrange';
import { alignExampleDivBlue, textWithBlueBorder } from '../common/examplesetup';
import styles from './ArrangeExamples.module.scss';

const cx = classNames.bind(styles);

const ArrangeAlignAllContainers = () => (
  <div>
    <h4>Align - Default</h4>
    <Arrange
      align="default"
      className={cx('arrange')}
      fitStart={alignExampleDivBlue}
      fill={textWithBlueBorder}
      fitEnd={alignExampleDivBlue}
    />
    <br />
    <hr />
    <h4>Align - Center</h4>
    <Arrange
      align="center"
      className={cx('arrange')}
      fitStart={alignExampleDivBlue}
      fill={textWithBlueBorder}
      fitEnd={alignExampleDivBlue}
    />
    <br />
    <hr />
    <h4>Align - Bottom</h4>
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
