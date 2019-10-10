import React from 'react';
import classNames from 'classnames/bind';
import Field, { LABEL_ALIGNMENT } from '../../../Field';
import styles from './FormFieldTestCommon.module.scss';

const cx = classNames.bind(styles);

const LeftAlignedLabelFeildInline = () => (
  <div>
    <Field
      className={cx('form-field')}
      label="Field Label"
      isInline
      required
    >
      <div className={cx('field-content')}>Control Placeholder</div>
    </Field>

    <Field
      className={cx('form-field')}
      label="Field Label"
      isInline
      showOptional
    >
      <div className={cx('field-content')}>Control Placeholder</div>
    </Field>

    <Field
      className={cx('form-field')}
      label="Field Label"
      isInline
      required
      alignLabel={LABEL_ALIGNMENT.LEFT}
    >
      <div className={cx('field-content')}>Control Placeholder</div>
    </Field>
    <br />
    <Field
      className={cx('form-field')}
      label="Field Label"
      isInline
      error="Error Message"
      isInvalid
      required
    >
      <div className={cx('field-content')}>Control Placeholder</div>
    </Field>

    <Field
      className={cx('form-field')}
      label="Field Label"
      isInline
      error="Error Message"
      isInvalid
      showOptional
    >
      <div className={cx('field-content')}>Control Placeholder</div>
    </Field>

    <Field
      className={cx('form-field')}
      label="Field Label"
      isInline
      error="Error Message"
      isInvalid
      required
      alignLabel={LABEL_ALIGNMENT.LEFT}
    >
      <div className={cx('field-content')}>Control Placeholder</div>
    </Field>
  </div>
);

export default LeftAlignedLabelFeildInline;
