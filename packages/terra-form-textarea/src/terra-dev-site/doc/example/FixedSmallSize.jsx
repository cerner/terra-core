import React from 'react';
import Field from 'terra-form-field';
import Textarea from 'terra-form-textarea';
import classNames from 'classnames/bind';
import styles from './FormTextareaDocCommon.module.scss';

const cx = classNames.bind(styles);

const FixedSmallSizeExample = () => (
  <Field label="Fixed Textarea - Small Size" htmlFor="small">
    <Textarea
      size="small"
      className={cx('textarea')}
      id="small"
    />
  </Field>
);

export default FixedSmallSizeExample;
