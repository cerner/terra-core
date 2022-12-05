import React, { useState } from 'react';
import Field from 'terra-form-field';
import classNames from 'classnames/bind';
import styles from './FieldExamples.module.scss';

const cx = classNames.bind(styles);

const FieldExamples = () => {
  const [isInvalid, setIsInvalid] = useState(false);

  const toggleIsInvalid = () => {
    setIsInvalid(!isInvalid);
  };

  return (
    <div>
      <Field
        label="Field Label"
        help="This is a standard, non-required field."
        error="Error Message"
        isInvalid={isInvalid}
      >
        <div className={cx('field-content')}>Control Placeholder</div>
      </Field>
      <Field
        label="Field Label"
        help="This is an optional field."
        error="Error Message"
        isInvalid={isInvalid}
        isInline
        showOptional
      >
        <div className={cx('field-content')}>Control Placeholder</div>
      </Field>

      <Field
        label="Field Label"
        help="This is a required field."
        error="Error Message"
        isInvalid={isInvalid}
        isInline
        required
      >
        <div className={cx('field-content')}>Control Placeholder</div>
      </Field>

      <Field
        label="Field Label"
        help="This is a required field, but the required indicator is hidden until the field is in error."
        error="Now the required indicator is showing because the field is in error."
        isInvalid={isInvalid}
        isInline
        required
        hideRequired
      >
        <div className={cx('field-content')}>Control Placeholder</div>
      </Field>

      <p> Accessibility Hooks Example Field Label </p>
      <Field
        label="E-mail Label"
        htmlFor="input_id"
        help="Please enter a valid e-mail address."
        error="The e-mail address entered is invalid."
        isInvalid={isInvalid}
      >
        <input id="input_id" aria-describedby="input_id-error input_id-help" />
      </Field>

      <hr />
      <p>
        If a field is invalid, an error icon will be displayed.
        <button type="button" onClick={toggleIsInvalid}>Toggle Invalid State</button>
      </p>
    </div>
  );
};

export default FieldExamples;
