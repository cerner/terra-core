import React from 'react';
import classNames from 'classnames/bind';
import Arrange from 'terra-arrange';
import { alignExampleDiv, textWithBlueBorder } from '../common/examplesetup';
import styles from './ArrangeExamples.module.scss';

const cx = classNames.bind(styles);

const ArrangeAlignFill = () => (
  <div>
    <h3>Align Fill - Default</h3>
    <Arrange
      className={cx('arrange')}
      fitStart={alignExampleDiv}
      fill={textWithBlueBorder}
      fitEnd={alignExampleDiv}
    />
    <br />
    <hr />
    <h3>Align Fill - Center</h3>
    <Arrange
      alignFill="center"
      className={cx('arrange')}
      fitStart={alignExampleDiv}
      fill={textWithBlueBorder}
      fitEnd={alignExampleDiv}
    />
    <br />
    <hr />
    <h3>Align Fill - Bottom</h3>
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
