import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// import 'terra-base/lib/baseStyles';
import './Alert.scss';

const propTypes = {
 /*
 * Content to be displayed as the name
 */
  name: PropTypes.string,
};

const defaultProps = {
  name: 'default',
};

const Alert = ({ name, ...customProps }) => {
  const attributes = Object.assign({}, customProps);
  const AlertClassNames = classNames([
    'terra-Alert',
    attributes.className,
  ]);

  return (<div {...attributes} className={AlertClassNames} />);
};

Alert.propTypes = propTypes;
Alert.defaultProps = defaultProps;

export default Alert;
