import React from 'react';
import classNames from 'classnames/bind';
import Field from '../../../Field';
import styles from './FormFieldTestCommon.module.scss';

const cx = classNames.bind(styles);

const DefaultField = () => (
  <div>
    <h3>Default Field</h3>
    <Field
      label="Field Label"
      help="This is a standard, non-required field."
      error="Error Message"
    >
      <div className={cx('field-content')}>Control Placeholder</div>
    </Field>
    <Field
      label="Field Label"
      help="This is a standard, non-required field."
      error="Error Message"
    >
      <div className={cx('field-content')}>Control Placeholder</div>
    </Field>
  </div>
);

export default DefaultField;
