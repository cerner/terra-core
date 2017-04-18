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
  /**
   * The maximum height for the header in a table
   */
  height: PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'huge']),
};

const defaultProps = {
  onClick: undefined,
};

function cloneChildItems(children, height, onClick) {
  const newProps = {
    height,
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
  height,
  onClick,
  ...customProps
  }) => {
  const cloneChildren = cloneChildItems(children, height, onClick);
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
