import React, { useState } from 'react';
import Field from 'terra-form-field';
import classNames from 'classnames/bind';
import styles from './FieldExamples.module.scss';

const cx = classNames.bind(styles);

const FieldExamples = () => {
  const [isInvalid, setIsInvalid] = useState(false);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailInvalid, setEmailInvalid] = useState(false);

  // Function for email validation
  const emailValidation = (e) => {
    e.preventDefault();
    const regExEmail = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    if (!regExEmail.test(email) && email !== '') {
      setEmailInvalid(true);
      setMessage('The e-mail address entered is invalid');
    } else {
      setEmailInvalid(false);
      setMessage('');
    }
  };

  const handleOnChange = (e) => {
    setEmail(e.target.value);
  };

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

      <form onSubmit={emailValidation}>
        <p> Accessibility Hooks Example Field Label </p>
        <Field
          label="E-mail Label"
          htmlFor="input_id"
          help="Please enter a valid e-mail address (abc@example.com)."
          error={message}
          isInvalid={emailInvalid}
        >
          <input type="text" id="input_id" aria-describedby="input_id-error input_id-help" value={email} onChange={handleOnChange} />
        </Field>
        <button type="submit" disabled={!email}>Submit</button>
      </form>
      <hr />
      <p>
        If a field is invalid, an error icon will be displayed.
        <button type="button" onClick={toggleIsInvalid}>Toggle Invalid State</button>
      </p>
    </div>
  );
};

export default FieldExamples;
