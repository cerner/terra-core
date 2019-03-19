import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import 'terra-base/lib/baseStyles';
import styles from './Divider.module.scss';

const propTypes = {
  text: PropTypes.string,
};

const cx = classNames.bind(styles);

const Divider = ({ ...customProps }) => {
  const { text } = customProps;

  const dividerClassNames = cx([
    'divider',
    'divider-text',
    customProps.className,
  ]);

  return <div {...customProps} className={dividerClassNames} aria-hidden="true" content="Hello There" />;
};

Divider.propTypes = propTypes;
export default Divider;
