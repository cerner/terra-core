import React from 'react';
import classNames from 'classnames/bind';
/* eslint-disable import/no-extraneous-dependencies */
import Arrange from 'terra-arrange/lib/Arrange';
import { alignExampleDiv, textWithBlueBorder } from '../common/examplesetup';
import styles from './ArrangeExamples.module.scss';

const cx = classNames.bind(styles);

const ArrangeAlignFill = () => (
  <div>
    <h4>Align Fill - Stretch</h4>
    <Arrange
      alignFill="stretch"
      className={cx('arrange')}
      fitStart={alignExampleDiv}
      fill={textWithBlueBorder}
      fitEnd={alignExampleDiv}
    />
    <br />
    <hr />
    <h4>Align Fill - Center</h4>
    <Arrange
      alignFill="center"
      className={cx('arrange')}
      fitStart={alignExampleDiv}
      fill={textWithBlueBorder}
      fitEnd={alignExampleDiv}
    />
    <br />
    <hr />
    <h4>Align Fill - Bottom</h4>
    <Arrange
      alignFill="bottom"
      className={cx('arrange')}
      fitStart={alignExampleDiv}
      fill={textWithBlueBorder}
      fitEnd={alignExampleDiv}
    />
  </div>
);

export default ArrangeAlignFill;
