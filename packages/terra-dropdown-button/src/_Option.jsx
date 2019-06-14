import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './_Option.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  label: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
  /**
   * @private
   */
  itemSelectedCallback: PropTypes.func.isRequired,
};

const Option = ({ label, callback, itemSelectedCallback }) => {
  return (
    <li>
      <div
        onMouseUp={() => { itemSelectedCallback({ label, callback }); }}
        role="button"
        tabIndex="-1"
        className={cx('option')}
      >
        {label}
      </div>
    </li>
  );
};

Option.propTypes = propTypes;

export default Option;
