import React from 'react';
import classNames from 'classnames/bind';
import Arrange from 'terra-arrange/lib/Arrange';
import { alignExampleDiv, ArrangeWrapper, simpleText } from '../common/examplesetup';
import styles from './ArrangeExamples.module.scss';

const cx = classNames.bind(styles);

const ArrangeAlignAllContainers = () => (
  <div>
    <h4>Align - Stretch</h4>
    <ArrangeWrapper>
      <Arrange
        fitStart={alignExampleDiv}
        fill={simpleText}
        fitEnd={alignExampleDiv}
        align="stretch"
        style={{ height: '100%' }}
      />
    </ArrangeWrapper>
    <br />
    <div className={cx('divider')} />
    <h4>Align - Center</h4>
    <ArrangeWrapper>
      <Arrange
        fitStart={alignExampleDiv}
        fill={simpleText}
        fitEnd={alignExampleDiv}
        align="center"
        style={{ height: '100%' }}
      />
    </ArrangeWrapper>
    <br />
    <div className={cx('divider')} />
    <h4>Align - Bottom</h4>
    <ArrangeWrapper>
      <Arrange
        fitStart={alignExampleDiv}
        fill={simpleText}
        fitEnd={alignExampleDiv}
        align="bottom"
        style={{ height: '100%' }}
      />
    </ArrangeWrapper>
  </div>
);

export default ArrangeAlignAllContainers;
