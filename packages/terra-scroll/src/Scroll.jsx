import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import styles from './Scroll.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The child content to present in the scrollable region.
   */
  children: PropTypes.node,
  /**
   * Function callback for the ref of the scrollable container.
   */
  refCallback: PropTypes.func,
};

const Scroll = ({
  children,
  refCallback,
  ...customProps
}) => {
  const theme = React.useContext(ThemeContext);

  return (
    <div {...customProps} className={cx(['scroll', customProps.className, theme.className])} ref={refCallback}>
      {children}
    </div>
  );
};

Scroll.propTypes = propTypes;

export default Scroll;
