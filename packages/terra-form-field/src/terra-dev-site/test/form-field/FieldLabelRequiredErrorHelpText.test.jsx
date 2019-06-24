import React from 'react';
import classNames from 'classnames/bind';
import Field from '../../../Field';
import styles from './FormFieldTestCommon.module.scss';

const cx = classNames.bind(styles);

const FieldLabelRequiredErrorHelpText = () => (
  <div>
    <h3>Field -  Label + Required + In Error + Help Text</h3>
    <Field
      id="required-invalid"
      className={cx('form-field')}
      label="Field Label"
      help="Help Message"
      error="Error Message"
      isInvalid
      required
    >
      <div className={cx('field-content')}>Control Placeholder</div>
    </Field>
  </div>
);

export default FieldLabelRequiredErrorHelpText;
