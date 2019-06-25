import React from 'react';
import classNames from 'classnames/bind';
import Field from '../../../Field';
import styles from './FormFieldTestCommon.module.scss';

const cx = classNames.bind(styles);

const FieldLabelOptional = () => (
  <div>
    <h3>Field - Label + Optional</h3>
    <Field
      id="label-optional"
      className={cx('form-field')}
      label="Field Label"
      showOptional
    >
      <div className={cx('field-content')}>Control Placeholder</div>
    </Field>
  </div>
);

export default FieldLabelOptional;
