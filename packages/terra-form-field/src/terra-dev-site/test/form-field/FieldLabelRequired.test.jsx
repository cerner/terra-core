import React from 'react';
import classNames from 'classnames/bind';
import Field from '../../../Field';
import styles from './FormFieldTestCommon.module.scss';

const cx = classNames.bind(styles);

const FieldLabelRequired = () => (
  <div>
    <h3>Field - Label + Required</h3>
    <Field
      id="label-required"
      className={cx('form-field')}
      label="Field Label"
      required
    >
      <div className={cx('field-content')}>Control Placeholder</div>
    </Field>
  </div>
);

export default FieldLabelRequired;
