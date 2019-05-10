import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './Divider.module.scss';

const propTypes = {
  /**
  * String to be displayed inline with the divider.
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

  if (!text) {
    return <hr {...customProps} className={dividerClassNames} aria-hidden="true" />;
  }
  return (
    <div className={cx(['divider-container'])}>
      <span className={cx(['divider-text'])}>{text}</span>
    </div>
  );
};

Divider.propTypes = propTypes;
export default Divider;
