import React from 'react';
import Field from 'terra-form-field';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Textarea from 'terra-form-textarea/lib/Textarea';
import classNames from 'classnames/bind';
import styles from './FormTextareaDocCommon.scss';

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
