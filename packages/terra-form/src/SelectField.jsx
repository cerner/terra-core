import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import 'terra-base/lib/baseStyles';

import './SelectField.scss';

const propTypes = {
  /**
   * List of choices to be selected.
   */
  choices: PropTypes.array.isRequired,

  /**
   * Function to trigger when the user changes the select value. Provide a function to create a controlled input.
   */
  onChange: PropTypes.func,

  /**
   * Name of the select field.
   */
  name: PropTypes.string,

  /**
   * Whether the select is required or not.
   */
  required: PropTypes.bool,

  /**
   * The value to start the select on.
   */
  value: PropTypes.string,
};

const defaultProps = {
  name: null,
  required: false,
  value: null,
};

const SelectField = ({
  choices,
  name,
  required,
  value,
  ...customProps
}) => {
  const additionalSelectFieldProps = Object.assign({}, customProps);

  if (required) {
    additionalSelectFieldProps['aria-required'] = 'true';
  }

  return (
    <select
      name={name}
      required={required}
      {...additionalSelectFieldProps}
      className={classNames('terra-Form-select', additionalSelectFieldProps.className)}
    >
      {choices.map(val => <option selected={value === val} key={val.toString()} value={val}>{val}</option>)}
    </select>
  );
};

SelectField.propTypes = propTypes;
SelectField.defaultProps = defaultProps;

export default SelectField;
