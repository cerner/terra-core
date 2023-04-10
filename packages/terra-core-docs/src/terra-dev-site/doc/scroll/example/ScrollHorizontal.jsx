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
          Cerner cardiovascular solutions are embedded within the EHR, allowing for a holistic patient record that includes: diagnostic activities, therapeutic interventions and follow-up regimens. Electrocardiogram (ECG) objects are digitized and accessed within the EHR providing physicians in your cardiology department the ability to receive and present ECG data in mere seconds after it is acquired. This eliminates the necessity for a separate ECG information system.
        </p>
      </Scroll>
    </div>
  </div>
);
