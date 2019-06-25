import React from 'react';
import classNames from 'classnames/bind';
import Field from '../../../Field';
import styles from './FormFieldTestCommon.module.scss';

const cx = classNames.bind(styles);

const FieldHelpText = () => (
  <div>
    <h3>Field - Help Text</h3>
    <Field
      id="help-text"
      className={cx('form-field')}
      label="Field Label"
      isLabelHidden
      help="Help Message"
    >
      <div className={cx('field-content')}>Control Placeholder</div>
    </Field>
  </div>
);

export default FieldHelpText;
