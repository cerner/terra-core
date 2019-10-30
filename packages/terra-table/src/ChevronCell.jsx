import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './ChevronCell.module.scss';
import { styleFromWidth } from './TableUtils';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Whether or not the cell should adhere to the tables paddingStyle.
   */
  isPadded: PropTypes.bool,
  /**
   * Whether or not the chevron is visible or a placeholder.
   */
  isVisible: PropTypes.bool,
  /**
   * Function callback for the ref of the cell.
   */
  width: PropTypes.shape({
    static: PropTypes.shape({
      value: PropTypes.number.isRequired,
      unit: PropTypes.string.isRequired,
    }),
    percentage: PropTypes.number,
    scalar: PropTypes.number,
  }),
};

const defaultProps = {
  isPadded: false,
  isVisible: false,
};

const ChevronCell = ({
  isPadded,
  isVisible,
  width,
  ...customProps
}) => (
  <div
    {...customProps}
    style={styleFromWidth(width)} // eslint-disable-line react/forbid-dom-props
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
