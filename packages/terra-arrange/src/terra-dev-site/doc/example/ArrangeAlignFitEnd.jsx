import React from 'react';
import classNames from 'classnames/bind';
/* eslint-disable import/no-extraneous-dependencies */
import Arrange from 'terra-arrange/lib/Arrange';
import { alignExampleDivBlue, alignExampleDiv, simpleText } from '../common/examplesetup';
import styles from './ArrangeExamples.module.scss';

const cx = classNames.bind(styles);

const ArrangeAlignFitStart = () => (
  <div>
    <h4>Align FitEnd - Default</h4>
    <Arrange
      alignFitEnd="default"
      className={cx('arrange')}
      fitStart={alignExampleDiv}
      fill={simpleText}
      fitEnd={alignExampleDivBlue}
    />
    <br />
    <hr />
    <h4>Align FitEnd - Center</h4>
    <Arrange
      alignFitEnd="center"
      className={cx('arrange')}
      fitStart={alignExampleDiv}
      fill={simpleText}
      fitEnd={alignExampleDivBlue}
    />
    <br />
    <hr />
    <h4>Align FitEnd - Bottom</h4>
    <Arrange
      alignFitEnd="bottom"
      className={cx('arrange')}
      fitStart={alignExampleDiv}
      fill={simpleText}
      fitEnd={alignExampleDivBlue}
    />
  </div>
);

export default ArrangeAlignFitStart;
