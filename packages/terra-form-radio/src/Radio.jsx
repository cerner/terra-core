import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import styles from './Radio.scss';

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

const Radio = ({ name, ...customProps }) => {
  const attributes = Object.assign({}, customProps);
  const FormRadioClassNames = cx([
    'form-radio',
    attributes.className,
  ]);

  return (<div {...attributes} className={FormRadioClassNames} />);
};

Radio.propTypes = propTypes;
Radio.defaultProps = defaultProps;

export default Radio;
