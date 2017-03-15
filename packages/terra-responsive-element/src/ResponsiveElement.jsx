import React, { PropTypes } from 'react';
import classNames from 'classnames';
import './ResponsiveElement.scss';

const propTypes = {
  name: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
};

const defaultProps = {
  name: 'default',
  variant: 'terra-ResponsiveElement--default',
};

const ResponsiveElement = (props) => (
  <div />
);

ResponsiveElement.propTypes = propTypes;
ResponsiveElement.defaultProps = defaultProps;

export default ResponsiveElement;
