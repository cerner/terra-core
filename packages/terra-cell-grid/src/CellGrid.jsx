import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './CellGrid.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The child Cells to passed to the cell grid.
   */
  children: PropTypes.node.isRequired,
  /**
   * Indicates the desired divider styles to apply to a cell grid and its children.
   * One of `'vertical'`, `'horizontal'`, `'both'`,
   */
  dividerStyle: PropTypes.oneOf(['vertical', 'horizontal', 'both']),
  /**
   * Function callback for the ref of the cell grid.
   */
  refCallback: PropTypes.func,
};

const CellGrid = ({
  children,
  dividerStyle,
  refCallback,
  ...customProps
}) => {
  const divider = dividerStyle ? `divider-${dividerStyle}` : undefined;
  const cellGridClassNames = cx([
    'cell-grid',
    divider,
  ]);

  return (
    <div
      {...customProps}
      className={customProps.className ? `${cellGridClassNames} ${customProps.className}` : cellGridClassNames}
      ref={refCallback}
    >
      {children}
    </div>
  );
};

CellGrid.propTypes = propTypes;

export default CellGrid;
