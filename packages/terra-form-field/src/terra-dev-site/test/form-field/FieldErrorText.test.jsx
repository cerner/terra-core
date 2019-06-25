import React from 'react';
import classNames from 'classnames/bind';
import Field from '../../../Field';
import styles from './FormFieldTestCommon.module.scss';

const cx = classNames.bind(styles);

const FieldErrorText = () => (
  <div>
    <h3>Field - Error Text</h3>
    <Field
      id="error-text"
      className={cx('form-field')}
      label="Field Label"
      isLabelHidden
      error="Error Message"
      isInvalid
    >
      <div className={cx('field-content')}>Control Placeholder</div>
    </Field>
  </div>
);

export default FieldErrorText;
