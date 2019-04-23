import React from 'react';
import classNames from 'classnames/bind';
/* eslint-disable import/no-extraneous-dependencies */
import Arrange from 'terra-arrange/lib/Arrange';
import { alignExampleDiv, alignExampleDivBlue, simpleText } from '../common/examplesetup';
import styles from './ArrangeExamples.module.scss';

const cx = classNames.bind(styles);

const ArrangeAlignFitStart = () => (
  <div>
    <h4>Align FitStart - Stretch</h4>
    <Arrange
      alignFitStart="stretch"
      className={cx('arrange')}
      fitStart={alignExampleDivBlue}
      fill={simpleText}
      fitEnd={alignExampleDiv}
    />
    <br />
    <hr />
    <h4>Align FitStart - Center</h4>
    <Arrange
      alignFitStart="center"
      className={cx('arrange')}
      fitStart={alignExampleDivBlue}
      fill={simpleText}
      fitEnd={alignExampleDiv}
    />
    <br />
    <hr />
    <h4>Align FitStart - Bottom</h4>
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
