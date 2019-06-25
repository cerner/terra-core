import React from 'react';
import classNames from 'classnames/bind';
import Field from '../../../Field';
import styles from './FormFieldTestCommon.module.scss';

const cx = classNames.bind(styles);

const FieldExamples = () => (
  <div className={cx('field-wrapper')}>
    <Field
      id="field"
      className={cx('form-field')}
      label="Field Label Field Label Field Label Field Label Field Label Field Label Field Label Field Label"
      help="Help Message Help Message Help Message Help Message Help Message Help Message Help Message Help Message"
      error="Error Message Error Message Error Message Error Message Error Message Error Message Error Message"
      isInvalid
    >
      <div className={cx('field-content')}>Control Placeholder</div>
    </Field>
  </div>
);

export default FieldExamples;
