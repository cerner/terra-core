import React from 'react';
import classNames from 'classnames/bind';
import Field from '../../../Field';
import styles from './FormFieldTestCommon.module.scss';

const cx = classNames.bind(styles);

const FieldLabelErrorHelpText = () => (
  <div>
    <h3>Field - Label + In Error + Help Text</h3>
    <Field
      id="optional-invalid"
      className={cx('form-field')}
      label="Field Label"
      help="Help Message"
      error="Error Message"
      isInvalid
    >
      <div className={cx('field-content')}>Control Placeholder</div>
    </Field>
  </div>
);

export default FieldLabelErrorHelpText;
