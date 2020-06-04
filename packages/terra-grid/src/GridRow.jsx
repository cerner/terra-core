import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import styles from './Grid.module.scss';

const cx = classNamesBind.bind(styles);

const propTypes = {
  /**
   * The component that will be displayed at column level.
   */
  children: PropTypes.node.isRequired,
  /**
   * Custom class name that can be assigned to grid row.
   */
  className: PropTypes.string,
};

const GridRow = ({ className, children, ...customProps }) => {
  const theme = React.useContext(ThemeContext);

  return (
    <div {...customProps} className={classNames(cx('grid', theme.className), className)}>
      {children}
    </div>
  );
};

GridRow.propTypes = propTypes;

export default GridRow;
