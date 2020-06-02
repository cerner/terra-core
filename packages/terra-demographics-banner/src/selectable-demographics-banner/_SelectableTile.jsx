import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SelectableDemographicsBanner.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Child Nodes that are placed within selectable content.
   */
  children: PropTypes.node,
};

const defaultProps = {
  children: undefined,
};

const SelectableTile = ({
  children,
  ...customProps
}) => (
  <div {...customProps} role="button" className={cx('selectable-tile')}>
    {children}
  </div>
);

SelectableTile.propTypes = propTypes;
SelectableTile.defaultProps = defaultProps;
export default SelectableTile;
