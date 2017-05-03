import React, { PropTypes } from 'react';
import 'terra-base/lib/baseStyles';
import TableRow from './TableRow';

const propTypes = {
  /**
   * The children passed to the component
   */
  children: PropTypes.node,
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

function cloneChildItems(children, onClick, onKeyDown) {
  return React.Children.map(children, (child) => {
    const newProps = {};
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
  onClick,
  onKeyDown,
  ...customProps
}) => {
  const cloneChildren = cloneChildItems(children, onClick, onKeyDown);
  return (
    <tbody {...customProps}>
      {cloneChildren}
    </tbody>
  );
};

TableRows.propTypes = propTypes;
TableRows.defaultProps = defaultProps;

export default TableRows;
