import React, { PropTypes } from 'react';
import './Form.scss';

const propTypes = {
  name: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
};

const defaultProps = {
  name: 'default',
  variant: 'terra-Form--default',
};

const Form = () => <div />;

Form.propTypes = propTypes;
Form.defaultProps = defaultProps;

export default Form;
