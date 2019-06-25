import React from 'react';
import classNames from 'classnames/bind';
import Field from '../../../Field';
import styles from './FormFieldTestCommon.module.scss';

const cx = classNames.bind(styles);

const FieldLabel = () => (
  <div>
    <h3>Field - Label</h3>
    <Field
      id="label"
      className={cx('form-field')}
      label="Field Label"
    >
      <div className={cx('field-content')}>Control Placeholder</div>
    </Field>
  </div>
);

export default FieldLabel;
