import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import 'terra-base/lib/baseStyles';
import styles from './Divider.module.scss';

const propTypes = {
  /**
  * String to be displayed in-line with the divider.
  */
  text: PropTypes.string,
};

const cx = classNames.bind(styles);

const Divider = (props) => {
  const { text, ...customProps } = props;

  const dividerClassNames = cx([
    'divider',
    customProps.className,
  ]);

  return <div {...customProps} className={dividerClassNames} aria-hidden="true" content={text} />;
};

Divider.propTypes = propTypes;
export default Divider;
