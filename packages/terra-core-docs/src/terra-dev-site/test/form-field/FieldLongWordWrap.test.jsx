import React from 'react';
import classNames from 'classnames/bind';
import Field from 'terra-form-field';
import styles from './FormFieldTestCommon.module.scss';

const cx = classNames.bind(styles);

const FieldLongWordWrap = () => (
  <div className={cx('field-wrapper')}>
    <Field
      id="field"
      className={cx('form-field')}
      label="LongFieldLongFieldLongFieldLongFieldLongFieldLongFieldLongField"
      help="HelpMessageHelpMessageHelpMessageHelpMessageHelpMessage"
      error="ErrorMessageErrorMessageErrorMessageErrorMessageErrorMessage"
      isInvalid
    >
      <div className={cx('field-content')}>ControlPlaceholderControlPlaceholderControlPlaceholder</div>
    </Field>
  </div>
);

export default FieldLongWordWrap;
