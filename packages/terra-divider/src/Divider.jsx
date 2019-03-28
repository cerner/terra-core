import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
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

  const dividerType = !text
    ? <hr {...customProps} className={dividerClassNames} aria-hidden="true" />
    : (
      <div className={cx(['divider-container'])}>
        <span className={cx(['divider-text'])}>{text}</span>
      </div>
    );

  return (
    dividerType
  );
};

Divider.propTypes = propTypes;
export default Divider;
