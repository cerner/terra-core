import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  /**
   * A string of text to be displayed first
   */
  text: PropTypes.string,
  /**
   * A string of text to be displayed second
  */
  otherText: PropTypes.string,
};

const defaultProps = {
  text: 'Hi!',
  otherText: 'Bye.',
};

const TestComponent = props => (
  <p>
    {props.text}
,
    {' '}
    {props.otherText}
  </p>
);

TestComponent.propTypes = propTypes;
TestComponent.defaultProps = defaultProps;

export default TestComponent;
