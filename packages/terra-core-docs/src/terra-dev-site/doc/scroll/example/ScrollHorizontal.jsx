import React from 'react';
import Scroll from 'terra-scroll';
import Button from 'terra-button';
import classNames from 'classnames/bind';
import { InputField } from 'terra-form-input';
import styles from './ScrollCommon.module.scss';

const cx = classNames.bind(styles);

export default () => (
  <div>
    <p>Overflow-X Container</p>
    <div className={cx('overflow-y-wrapper')}>
      <Scroll tabIndex="0">
        <p className={cx('paragraph-x-wrapper')}>
          Entering patient details is a crucial process in healthcare facilities that involves capturing and documenting relevant information about individuals seeking medical care. Patient details need to be regularly updated to ensure accuracy and relevancy. This may involve periodic verification of personal information, updating medical history, and making necessary changes to insurance or contact details. Hospitals may request patients to review and confirm their information during subsequent visits or at designated intervals. Accurate and comprehensive patient details play a vital role in providing effective healthcare. They serve as a foundation for medical assessments, treatment planning, and continuity of care, enabling healthcare providers to deliver personalised and efficient services to patients.Begin filling out the form by entering your personal information. This usually includes your full name, contact details (such as phone number and email address), and residential address. It is crucial to provide accurate contact information as it will be used for communication and verification purposes.
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
