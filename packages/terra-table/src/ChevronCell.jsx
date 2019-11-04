import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './ChevronCell.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Whether or not the chevron is visible or a placeholder.
   */
  isVisible: PropTypes.bool,
};

const defaultProps = {
  isVisible: false,
};

const ChevronCell = ({
  isVisible,
  ...customProps
}) => (
  <div
    {...customProps}
    className={customProps.className ? `${cx('cell')} ${customProps.className}` : cx('cell')}
    role="none"
  >
    <div className={cx('container')}>
      <span
        className={cx(
          'chevron',
          { 'is-visible': isVisible },
        )}
      />
    </div>
  </div>
);

ChevronCell.propTypes = propTypes;
ChevronCell.defaultProps = defaultProps;

export default ChevronCell;
