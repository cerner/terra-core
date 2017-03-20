import React, { PropTypes } from 'react';
import TableHeaderContent from './TableHeaderContent';

const propTypes = {
  onClick: PropTypes.func,
  height: PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'huge']),
  children: PropTypes.node.isRequired,
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
    console.log(`Number of Columns are ${React.Children.count(children)}. This is more than columns limit`);
  }
  // Filtering children to render only 16 columns
  return childrenArray.filter((child, index) => index < 16).map((child) => {
    if (child.type === TableHeaderContent) {
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
