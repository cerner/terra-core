import React from 'react';
import Scroll from 'terra-scroll';
import classNames from 'classnames/bind';
import styles from './ScrollCommon.module.scss';

const cx = classNames.bind(styles);

export default () => (
  <div>
    <p>Overflow-X Container</p>
    <div className={cx('overflow-wrapper')}>
      <Scroll>
        <p className={cx('paragraph-x-wrapper')}>
          With a focus on enhanced productivity across ambulatory practices, Cerner Ambulatory is designed to help advance clinical and operational efficiencies throughout the continuum of care. We’ve designed our products with an ambulatory-first focus where operations and workflows are streamlined through integration across venues. Cerner Ambulatory offers simplified workflows across venues through integrated products and embedded collaborative content.
        </p>
      </Scroll>
    </div>
  </div>
);
