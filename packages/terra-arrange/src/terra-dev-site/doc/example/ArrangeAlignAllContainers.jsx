import React from 'react';
import classNames from 'classnames/bind';
/* eslint-disable import/no-extraneous-dependencies */
import Arrange from 'terra-arrange/lib/Arrange';
import { alignStartExampleDiv, alignEndExampleDiv, textWithBlueBorder } from '../common/examplesetup';
import styles from './ArrangeExamples.module.scss';

const cx = classNames.bind(styles);

const ArrangeAlignAllContainers = () => (
  <div>
    <h4>Align - Stretch</h4>
    <Arrange
      align="stretch"
      className={cx('arrange')}
      fitStart={alignStartExampleDiv}
      fill={textWithBlueBorder}
      fitEnd={alignEndExampleDiv}
    />
    <br />
    <hr />
    <h4>Align - Center</h4>
    <Arrange
      align="center"
      className={cx('arrange')}
      fitStart={alignStartExampleDiv}
      fill={textWithBlueBorder}
      fitEnd={alignEndExampleDiv}
    />
    <br />
    <hr />
    <h4>Align - Bottom</h4>
    <Arrange
      align="bottom"
      className={cx('arrange')}
      fitStart={alignStartExampleDiv}
      fill={textWithBlueBorder}
      fitEnd={alignEndExampleDiv}
    />
  </div>
);

export default ArrangeAlignAllContainers;
