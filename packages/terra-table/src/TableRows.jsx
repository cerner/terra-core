import React, { PropTypes } from 'react';
import TableRow from './TableRow';

const propTypes = {
  /**
   * The children passed to the component
   */
  children: PropTypes.node,
  /**
   * The maximum height for all the rows in a table
   */
  height: PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'huge']),
  /**
   * A callback function for onClick action
   */
  onClick: PropTypes.func,
  /**
  * A callback function for onKeyDown action for tab key
  */
  onKeyDown: PropTypes.func,
};

const defaultProps = {
  onClick: undefined,
  onKeyDown: undefined,
};

function cloneChildItems(children, height, onClick, onKeyDown) {
  return children.map((child) => {
    const newProps = { height };
    if (onClick) {
      newProps.onClick = onClick;
    }
    if (onKeyDown) {
      newProps.onKeyDown = onKeyDown;
    }
    if (child.type === TableRow) {
      return React.cloneElement(child, newProps);
    }
    return child;
  });
}

const TableRows = ({
  children,
  height,
  onClick,
  onKeyDown,
  ...customProps
}) => {
  const cloneChildren = cloneChildItems(children, height, onClick, onKeyDown);
  return (
    <tbody {...customProps}>
      {cloneChildren}
    </tbody>
  );
};

TableRows.propTypes = propTypes;
TableRows.defaultProps = defaultProps;

export default TableRows;
