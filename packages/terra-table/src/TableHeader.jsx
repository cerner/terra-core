import React from 'react';
import PropTypes from 'prop-types';
import 'terra-base/lib/baseStyles';
import classNames from 'classnames/bind';
import styles from './TableHeader.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The children passed to the component
   */
  children: PropTypes.node,
};

const defaultProps = {
  children: [],
};

const TableHeader = ({
  children,
  ...customProps
}) => {
  const contentClassName = cx([
    'header',
    customProps.className,
  ]);

  return (
    <thead {...customProps} className={contentClassName}>
      <tr>
        {children}
      </tr>
    </thead>
  );
};

TableHeader.propTypes = propTypes;
TableHeader.defaultProps = defaultProps;

export default TableHeader;
