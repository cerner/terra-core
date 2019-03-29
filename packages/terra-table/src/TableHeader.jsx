import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  /**
   * The children passed to the component
   */
  children: PropTypes.node.isRequired,
};

const TableHeader = ({
  children,
  ...customProps
}) => {
  let childrenArray = React.Children.toArray(children);
  if (childrenArray.length > 16) {
    // eslint-disable-next-line no-console
    console.log(`Number of Columns are ${childrenArray.length}. This is more than columns limit`);
    childrenArray = childrenArray.slice(0, 16);
  }

  return (
    <thead {...customProps}>
      <tr role="rowheader">
        {childrenArray}
      </tr>
    </thead>
  );
};

TableHeader.propTypes = propTypes;

export default TableHeader;
