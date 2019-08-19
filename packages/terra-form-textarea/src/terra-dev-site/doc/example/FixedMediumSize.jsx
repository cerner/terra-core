import React from 'react';
import Field from 'terra-form-field';
import Textarea from 'terra-form-textarea';
import classNames from 'classnames/bind';
import styles from './FormTextareaDocCommon.module.scss';

const cx = classNames.bind(styles);

const FixedMediumSizeExample = () => (
  <Field label="Fixed Textarea - Medium Size" htmlFor="medium">
    <Textarea
      size="medium"
      className={cx('textarea')}
      id="medium"
    />
  </Field>
);

export default FixedMediumSizeExample;
