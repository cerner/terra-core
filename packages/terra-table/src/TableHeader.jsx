import React, { PropTypes } from 'react';
import TableHeaderCell from './TableHeaderCell';

const propTypes = {
  /**
   * The children passed to the component
   */
  children: PropTypes.node.isRequired,
  /**
   * A callback function for onClick action
   */
  onClick: PropTypes.func,
};

const defaultProps = {
  onClick: undefined,
};

function cloneChildItems(children, onClick) {
  const newProps = {
    onClick,
  };
  const childrenArray = React.Children.toArray(children);
  if (childrenArray.length > 16) {
    // eslint-disable-next-line no-console
    console.log(`Number of Columns are ${React.Children.count(children)}. This is more than columns limit`);
  }
  // Filtering children to render only 16 columns
  return childrenArray.filter((child, index) => index < 16).map((child) => {
    if (child.type === TableHeaderCell) {
      return React.cloneElement(child, newProps);
    }
    return child;
  });
}

const TableHeader = ({
  children,
  onClick,
  ...customProps
  }) => {
  const cloneChildren = cloneChildItems(children, onClick);
  return (
    <thead {...customProps}>
      <tr>
        {cloneChildren}
      </tr>
    </thead>
  );
};

TableHeader.propTypes = propTypes;
TableHeader.defaultProps = defaultProps;

export default TableHeader;
