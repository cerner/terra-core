import React from 'react';
import classNames from 'classnames/bind';

import Spacer from '../../../Spacer';
import styles from './SpacerTest.module.scss';

const cx = classNames.bind(styles);

export default () => (
  <div>
    <h3>Background color added for context.</h3>
    <div className={cx(['spacing-demo', 'spacer-demo-margin'])}>
      <Spacer id="spacer"><div className={cx('spacer-content-wrapper')}>Test Component</div></Spacer>
    </div>
  </div>
);
