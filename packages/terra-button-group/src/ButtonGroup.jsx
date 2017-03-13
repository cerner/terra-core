import React, { PropTypes } from 'react';
import classNames from 'classnames';
import './ButtonGroup.scss';

const propTypes = {
  name: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
};

const defaultProps = {
  name: 'default',
  variant: 'terra-ButtonGroup--default',
};

const ButtonGroup = (props) => (
  <div />
);

ButtonGroup.propTypes = propTypes;
ButtonGroup.defaultProps = defaultProps;

export default ButtonGroup;
