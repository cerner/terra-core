import React from 'react';
import classNames from 'classnames/bind';
import Textarea from '../../../Textarea';
import styles from './common/Textarea.test.module.scss';

const cx = classNames.bind(styles);

const textarea = () => (
  <div className={cx('content-wrapper')}>
      <Textarea
        name="job_experience"
        defaultValue=""
        required
        ariaLabel="label"
      />
  </div>
);

export default textarea;
