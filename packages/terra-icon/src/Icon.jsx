import React, { PropTypes } from 'react';
import classNames from 'classnames';
import './Icon.scss';

const propTypes = {
  name: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
};

const defaultProps = {
  name: 'default',
  variant: 'terra-Icon--default',
};

const Icon = (props) => (
  <div />
);

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;

export default Icon;
