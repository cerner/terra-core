import React from 'react';
import Field from 'terra-form-field';
import Textarea from 'terra-form-textarea';
import classNames from 'classnames/bind';
import styles from './FormTextareaDocCommon.module.scss';

const cx = classNames.bind(styles);

const FixedLargeSizeExample = () => (
  <Field label="Fixed Textarea - Large Size" htmlFor="large">
    <Textarea
      size="large"
      className={cx('textarea')}
      id="large"
    />
  </Field>
);

export default FixedLargeSizeExample;
