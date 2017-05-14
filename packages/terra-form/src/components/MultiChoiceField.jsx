// eslint-disable react/jsx-boolean-value

import React, { PropTypes } from 'react';

import Control from './Control';
import Fieldset from './Fieldset';

const propTypes = {
  /**
   * Choices to populate radio buttosn for
   */
  choices: PropTypes.array,
  /**
   * The property name for the choice object used to set the choice label
   */
  choiceName: PropTypes.string,
  /**
   * The property name for the choice object used to set the choice value
   */
  choiceValue: PropTypes.string,
  /**
   * Error message for when the input is invalid
   */
  error: PropTypes.node,
  /**
   *  Help element to display with the input
   */
  help: PropTypes.node,
  /**
   * Whether the field is inline
   */
  isInline: PropTypes.bool,
  /**
   * Legend of the fieldset
   */
  legend: PropTypes.node,
  /**
   * Name of the input attribute
   */
  name: PropTypes.string,
  /**
   * Function to trigger when user selects one of the radio buttons
   */
  onChange: PropTypes.func,
};

const defaultProps = {
  choices: [],
  choiceName: 'name',
  choiceValue: 'value',
  error: null,
  help: null,
  isInline: false,
  legend: null,
  name: null,
  onChange: () => {},
};

const MultiChoiceField = ({
  choices,
  choiceName,
  choiceValue,
  error,
  help,
  isInline,
  legend,
  name,
  onChange,
  ...customProps
}) => (
  <Fieldset
    error={error}
    legend={legend}
    help={help}
    isInline={isInline}
    {...customProps}
  >
    {
      choices.map(choice =>
        <Control
          key={`${choice[choiceName]}-${choice[choiceValue]}`}
          name={name}
          value={choice[choiceValue]}
          label={choice[choiceName]}
          onChange={onChange}
          type="checkbox"
        />,
      )
    }
  </Fieldset>
);

MultiChoiceField.propTypes = propTypes;
MultiChoiceField.defaultProps = defaultProps;

export default MultiChoiceField;
