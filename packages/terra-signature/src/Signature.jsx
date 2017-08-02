import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import 'terra-base/lib/baseStyles';
import './Signature.scss';

const propTypes = {
 /*
 * Content to be displayed as the name
 */
  name: PropTypes.string,
};

const defaultProps = {
  name: 'default',
};

const Signature = ({ name, ...customProps }) => {
  const attributes = Object.assign({}, customProps);
  const SignatureClassNames = classNames([
    'terra-Signature',
    attributes.className,
  ]);

  return (<div {...attributes} className={SignatureClassNames} />)
};

Signature.propTypes = propTypes;
Signature.defaultProps = defaultProps;

export default Signature;
