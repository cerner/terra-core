import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './CellGrid.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The children passed to the component
   */
  children: PropTypes.node.isRequired,
  /**
   * Indicates the desired divider styles to apply to a cell grid and its children.
   * One of `'none'`, `'vertical'`, `'horizontal'`, `'both'`.
   */
  dividerStyle: PropTypes.oneOf(['none', 'vertical', 'horizontal', 'both']),
  /**
  /**
   * Function callback for the ref of the cell grid.
   */
  refCallback: PropTypes.func,
};

const defaultProps = {
  dividerStyle: 'none',
};

const CellGrid = ({
  children,
  dividerStyle,
  refCallback,
  ...customProps
}) => {
  const cellGridClassNames = cx([
    `divider-${dividerStyle}`,
    'cell-grid',
    customProps.className,
  ]);

  return (
    <div {...customProps} className={cellGridClassNames} ref={refCallback}>
      {children}
    </div>
  );
};

CellGrid.propTypes = propTypes;
CellGrid.defaultProps = defaultProps;

export default CellGrid;
