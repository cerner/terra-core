/* eslint-disable jsx-a11y/label-has-for */

import React, { PropTypes } from 'react';

import 'terra-base/lib/baseStyles';

import Fieldset from './Fieldset';

const propTypes = {
  /**
   * Children to pass into the fieldset
   */
  children: PropTypes.node,
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
   * Label of the input
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
  /**
   * Initial Value of the input
   */
  value: PropTypes.string,
};

const defaultProps = {
  children: null,
  choices: [],
  choiceName: 'name',
  choiceValue: 'value',
  error: null,
  help: null,
  isInline: false,
  legend: null,
  name: null,
  onChange: () => {},
  value: undefined,
};

const childContextTypes = {
  radioGroup: PropTypes.any,
};

class RadioGroup extends React.Component {
  getChildContext() {
    return {
      radioGroup: {
        onChange: this.props.onChange,
        name: this.props.name,
      },
    };
  }

  render() {
    const {
      error,
      help,
      legend,
      isInline,
      ...customProps
    } = this.props;

    return (
      <Fieldset
        error={error}
        legend={legend}
        help={help}
        isInline={isInline}
        {...customProps}
      >
        {this.props.children}
      </Fieldset>
    );
  }
}

RadioGroup.propTypes = propTypes;
RadioGroup.defaultProps = defaultProps;
RadioGroup.childContextTypes = childContextTypes;

export default RadioGroup;
