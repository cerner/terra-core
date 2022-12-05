import React from 'react';

// Returns the children after applying the required scope attribute for table headers

const addScope = (children, scope) => {
  const cloneChildren = [];
  React.Children.forEach(children, (child) => {
    cloneChildren.push(React.cloneElement(child, { scope: child.type.name === 'TableHeaderCell' ? scope : undefined }));
  });
  return cloneChildren;
};

const TableUtils = {
  addScope,
};

export default TableUtils;
