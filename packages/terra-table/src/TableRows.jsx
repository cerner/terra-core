import React, { PropTypes } from 'react';
import TableRow from './TableRow';

const propTypes = {
  children: PropTypes.node,
  height: PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'huge']),
  onClick: PropTypes.func,
};

const defaultProps = {
  onClick: undefined,
};

function cloneChildItems(children, height, onClick) {
  return children.map((child) => {
    const newProps = { height };
    if (onClick) {
      newProps.onClick = onClick;
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
  ...customProps
}) => {
  const cloneChildren = cloneChildItems(children, height, onClick);
  return (
    <tbody {...customProps}>
      {cloneChildren}
    </tbody>
  );
};

TableRows.propTypes = propTypes;
TableRows.defaultProps = defaultProps;

export default TableRows;
