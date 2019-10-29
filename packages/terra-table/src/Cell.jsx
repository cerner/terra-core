import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Cell.module.scss';
import TableUtils from './TableUtils';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Content to be displayed for the row cell
   */
  children: PropTypes.node,
  /**
   * Whether or not the cell should adhere to the tables paddingStyle.
   */
  isPadded: PropTypes.bool,
  /**
   * Function callback for the ref of the td.
   */
  refCallback: PropTypes.func,
  /**
   * Function callback for the ref of the td.
   */
  width: PropTypes.shape({
    static: PropTypes.shape({
      value: PropTypes.number,
      unit: PropTypes.string,
    }),
    percentage: PropTypes.number,
    scalar: PropTypes.number,
  }),
};

const defaultProps = {
  children: [],
};

const Cell = ({
  children,
  isPadded,
  refCallback,
  width,
  ...customProps
}) => {
  const cellClassNames = cx([
    'cell',
  ]);

  let content = children;
  if (isPadded) {
    content = (
      <div className={cx('container')}>
        {content}
      </div>
    );
  }

  return (
    <div
      {...customProps}
      style={TableUtils.styleFromWidth(width)} // eslint-disable-line react/forbid-dom-props
      className={`${cellClassNames} ${customProps.className}`}
      ref={refCallback}
      role="gridcell"
    >
      {content}
    </div>
  );
};

Cell.propTypes = propTypes;
Cell.defaultProps = defaultProps;

export default Cell;
