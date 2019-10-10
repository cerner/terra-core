import React from 'react';
import classNames from 'classnames/bind';
import Field, { LABEL_ALIGNMENT } from '../../../Field';
import styles from './FormFieldTestCommon.module.scss';

const cx = classNames.bind(styles);

const LeftAlignedLabel = () => (
  <div>
    <h3>Left Aligned Label Field</h3>
    <Field
      label="Field Label With Legend"
      alignLabel={LABEL_ALIGNMENT.LEFT}
      legend="Legend Text goes here"
      className={cx('form-field')}
    >
      <div className={cx('field-content')}>Control Placeholder</div>
    </Field>
    <Field
      label="Field Label With Hidden Legend"
      help="This is a standard, non-required field."
      error="Error Message"
      alignLabel={LABEL_ALIGNMENT.LEFT}
      legend="Legend Text goes here"
      isLegendHidden
      className={cx('form-field')}
    >
      <div className={cx('field-content')}>Control Placeholder</div>
    </Field>
    <Field
      id="label-optional"
      className={cx('form-field')}
      label="Field Label Optional"
      showOptional
      alignLabel={LABEL_ALIGNMENT.LEFT}
    >
      <div className={cx('field-content')}>Control Placeholder</div>
    </Field>
    <Field
      id="label-required"
      className={cx('form-field')}
      label="Field Label Required"
      help="This is a standard, non-required field."
      error="Error Message"
      legend="Legend Text goes here"
      isInvalid
      required
      alignLabel={LABEL_ALIGNMENT.LEFT}
    >
      <div className={cx('field-content')}>Control Placeholder</div>
    </Field>
  </div>
);

export default LeftAlignedLabel;
