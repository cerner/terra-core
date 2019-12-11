/**
 * This test file is intended to test that the responsive element does not update if the
 * parent has a fixed size that never changes.
 */

import React from 'react';
import classNames from 'classnames/bind';
import ResponsiveElement from 'terra-responsive-element';
import styles from './FixedSize.module.scss';

const cx = classNames.bind(styles);

const FixedSize = () => (
  <div id="fixed-target">
    {/* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */}
    <div tabIndex="0" className={cx('responsive-element-wrapper')}>
      <ResponsiveElement
        tiny={<div>Tiny</div>}
        small={<div>Small</div>}
        medium={<div>Medium</div>}
        large={<div>Large</div>}
        huge={<div>Huge</div>}
        enormous={<div>Enormous</div>}
      />
    </div>
  </div>
);

export default FixedSize;
