import React from 'react';
import classNames from 'classnames/bind';
import Field from '../../../Field';
import styles from './FormFieldTestCommon.module.scss';

const cx = classNames.bind(styles);

const FieldHiddenLabel = () => (
  <div>
    <h3>Field - Hidden Label</h3>
    <Field
      id="label-hidden"
      className={cx('form-field')}
      label="Field Label"
      isLabelHidden
    >
      <div className={cx('field-content')}>Control Placeholder</div>
    </Field>
  </div>
);

export default FieldHiddenLabel;
