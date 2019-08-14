import React from 'react';
import classNames from 'classnames/bind';
/* eslint-disable import/no-extraneous-dependencies */
import Arrange from 'terra-arrange';
import { alignExampleDiv, alignExampleDivBlue, simpleText } from '../common/examplesetup';
import styles from './ArrangeExamples.module.scss';

const cx = classNames.bind(styles);

const ArrangeAlignFitStart = () => (
  <div>
    <h3>Align FitStart - Default</h3>
    <Arrange
      className={cx('arrange')}
      fitStart={alignExampleDivBlue}
      fill={simpleText}
      fitEnd={alignExampleDiv}
    />
    <br />
    <hr />
    <h3>Align FitStart - Center</h3>
    <Arrange
      alignFitStart="center"
      className={cx('arrange')}
      fitStart={alignExampleDivBlue}
      fill={simpleText}
      fitEnd={alignExampleDiv}
    />
    <br />
    <hr />
    <h3>Align FitStart - Bottom</h3>
    <Arrange
      alignFitStart="bottom"
      className={cx('arrange')}
      fitStart={alignExampleDivBlue}
      fill={simpleText}
      fitEnd={alignExampleDiv}
    />
  </div>
);

export default ArrangeAlignFitStart;
