import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import 'terra-base/lib/baseStyles';

import './Select.scss';

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
  defaultValue: PropTypes.string,
};

const defaultProps = {
  onChange: undefined,
  name: null,
  required: false,
  defaultValue: null,
};

const Select = ({
  choices,
  onChange,
  name,
  required,
  defaultValue,
  ...customProps
}) => {
  const additionalSelectFieldProps = Object.assign({}, customProps);

  if (required) {
    additionalSelectFieldProps['aria-required'] = 'true';
  }

  return (
    <select
      {...additionalSelectFieldProps}
      name={name}
      required={required}
      onChange={onChange}
      defaultValue={defaultValue}
      className={classNames('terra-Form-select', additionalSelectFieldProps.className)}
    >
      {choices.map(choice => <option key={choice.toString()} value={choice}>{choice}</option>)}
    </select>
  );
};

Select.propTypes = propTypes;
Select.defaultProps = defaultProps;

export default Select;
