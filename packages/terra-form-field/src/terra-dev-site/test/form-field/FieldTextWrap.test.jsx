import React from 'react';
import classNames from 'classnames/bind';
import Field, { LABEL_ALIGNMENT } from '../../../Field';
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
      legend="legend text legend text legend text legend text legend text legend text legend text legend text"
      isInvalid
    >
      <div className={cx('field-content')}>Control Placeholder</div>
    </Field>
    <Field
      id="LeftLabelfield"
      className={cx('form-field')}
      label="Field Label Field Label Field Label Field Label Field Label Field Label Field Label Field Label"
      help="Help Message Help Message Help Message Help Message Help Message Help Message Help Message Help Message"
      error="Error Message Error Message Error Message Error Message Error Message Error Message Error Message"
      legend="legend text legend text legend text legend text legend text legend text legend text legend text"
      isInvalid
      alignLabel={LABEL_ALIGNMENT.LEFT}
    >
      <div className={cx('field-content')}>Control Placeholder</div>
    </Field>
  </div>
);

export default FieldExamples;
