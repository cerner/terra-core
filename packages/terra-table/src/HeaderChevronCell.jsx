import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './HeaderChevronCell.module.scss';
import { styleFromWidth } from './TableUtils';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Whether or not the cell should adhere to the tables paddingStyle.
   */
  isPadded: PropTypes.bool,
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
};

const HeaderChevronCell = ({
  isPadded,
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
      <div
        className={cx(
          'chevron',
        )}
      />
    </div>
  </div>
);

HeaderChevronCell.propTypes = propTypes;
HeaderChevronCell.defaultProps = defaultProps;

export default HeaderChevronCell;
