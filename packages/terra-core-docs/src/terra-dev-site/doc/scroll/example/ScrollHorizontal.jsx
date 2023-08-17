import React from 'react';
import Scroll from 'terra-scroll';
import Button from 'terra-button';
import classNames from 'classnames/bind';
import InputField from 'terra-form-input/lib/InputField';
import styles from './ScrollCommon.module.scss';

const cx = classNames.bind(styles);

export default () => (
  <div>
    <p>Overflow-X Container</p>
    <div className={cx('overflow-wrapper')}>
      <Scroll tabIndex="0">
        <p className={cx('paragraph-x-wrapper')}>
          Entering patient details is a crucial process in healthcare facilities that involves capturing and documenting relevant information about
          individuals seeking medical care. Patient details need to be regularly updated to ensure accuracy and relevancy. This may involve periodic
          verification of personal information, updating medical history, and making necessary changes to insurance or contact details.
        </p>
        <div className={cx('container-x-wrapper')}>
          <InputField
            inputId="input-field"
            label="Enter Patient Name"
            type="text"
          />
        </div>
        <div className={cx('container-x-wrapper')}>
          <Button text="Submit" />
        </div>
      </Scroll>
    </div>
  </div>
);
