import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import styles from './FormField.scss';

const cx = classNames.bind(styles);

const propTypes = {
 /*
 * Content to be displayed as the name
 */
  name: PropTypes.string,
};

const defaultProps = {
  name: 'default',
};

const FormField = ({ name, ...customProps }) => {
  const attributes = Object.assign({}, customProps);
  const FormFieldClassNames = cx([
    'form-field',
    attributes.className,
  ]);

  return (<div {...attributes} className={FormFieldClassNames} />)
};

FormField.propTypes = propTypes;
FormField.defaultProps = defaultProps;

export default FormField;
